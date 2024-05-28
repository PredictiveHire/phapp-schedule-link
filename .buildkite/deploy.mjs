#!/usr/bin/env zx
$.verbose = true

// global variables
const appName = "schedule-link"
const awsRegionShort = "use1"

const deploy = async (stage) => {
  const s3BucketName = `${stage}-${awsRegionShort}-ph-phapp-${appName}-ui-static-assets`
  // Sync the build folder to the S3 bucket
  await $`aws s3 sync build s3://${s3BucketName}/ --delete --cache-control "max-age=86400,public" --profile=infra-${stage}`
  // Invalidate the CloudFront cache
  await $`aws s3 cp s3://${s3BucketName}/index.html s3://${s3BucketName}/index.html --cache-control "max-age=0,no-cache,no-store,must-revalidate" --content-type "text/html" --metadata-directive REPLACE --profile=infra-${stage}`
}

const deployAll = async (stages) => {
  for (const stage of stages) {
    console.log(`Deploying app to S3 for ${stage}...`)
    await deploy(stage)
  }
}

if (argv._.length > 0) {
  const stages = argv._
  await deployAll(stages)
}
