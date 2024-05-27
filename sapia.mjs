const updateHosts = async (hostname, title) => {
  const HOSTS_FILE = "/etc/hosts"
  const HOST_ENTRIES_HEADER = `# ${title} start`
  const HOST_ENTRIES_TAIL = `# ${title} end`
  const HOST_ENTRIES = `${HOST_ENTRIES_HEADER}\n127.0.0.1 ${hostname}\n${HOST_ENTRIES_TAIL}`

  try {
    const result = await $`grep -q ${HOST_ENTRIES_HEADER} ${HOSTS_FILE}`
    if (result.exitCode === 0) {
      console.log(`${HOSTS_FILE} already contains ${hostname} entries. Doing nothing.`)
      return true
    }
  } catch (error) {
    // grep will always throw error if not found
    if (error.exitCode === 1) {
      console.log("Entries to be added to", HOSTS_FILE, ":")
      console.log(HOST_ENTRIES)
      console.log("Adding entries ...")
      await $`sudo sh -c "echo ${HOST_ENTRIES} >> ${HOSTS_FILE}"`
      return false
    } else {
      console.error("An error occurred:", error.message)
      return "error"
    }
  }
}

const setupCertificates = async (rootDomain, subDomain) => {
  console.log(chalk.green(`generate key for ${rootDomain}`))
  await $`mkdir -p ./dev-certs`
  await $`openssl genrsa -des3 -out ./dev-certs/${rootDomain}.key 2048`
  await $`openssl req -x509 -new -nodes -key ./dev-certs/${rootDomain}.key -sha256 -days 825 -out ./dev-certs/${rootDomain}.crt \
-subj "/C=AU/ST=Victoria/L=Melbourne/O=Sapia&Co Pty Ltd
/OU=Development/CN=${rootDomain}"`

  console.log(chalk.green(`generate key for ${subDomain}`))

  await $`openssl genrsa -out ./dev-certs/${subDomain}.key 2048`

  await $`openssl req -new -sha256 -key ./dev-certs/${subDomain}.key \
-subj "/C=AU/ST=Victoria/L=Melbourne/O=Sapia&Co Pty Ltd/OU=Development/CN=${subDomain}" \
-addext "subjectAltName=DNS:${subDomain}" \
-out ./dev-certs/${subDomain}.csr`

  await $`openssl x509 -req -in ./dev-certs/${subDomain}.csr -CA ./dev-certs/${rootDomain}.crt -extensions SAN \
-extfile <(cat /etc/ssl/openssl.cnf \
  <(printf "\n[SAN]\nsubjectAltName=DNS:${subDomain}")) \
-CAkey ./dev-certs/${rootDomain}.key -CAcreateserial -out ./dev-certs/${subDomain}.crt -days 500 -sha256`

  await $`openssl x509 -in ./dev-certs/${subDomain}.crt -text -noout`

  console.log(chalk.green(`add ${rootDomain} to keychain with full trust`))
  await $`sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./dev-certs/${rootDomain}.crt`
}

if (argv._.length > 0) {
  const mode = argv._.pop()
  switch (mode) {
    case "setup:ssl":
      const setupAlready = await updateHosts("schedule.local.sapia.ai", "Schedule Link App")
      if (setupAlready === true) {
        console.log("🖼 SSL Certificates will be skipped")
        break
      }
      console.log("✅ Local domains have been setup successfully")
      await setupCertificates("sapia.local", "schedule.local.sapia.ai")
      console.log("✅ SSL Certificates has been setup successfully")
      break
    default:
      console.log("Invalid mode:", mode)
      break
  }
}
