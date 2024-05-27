import type { IGraphQLConfig } from "graphql-config"

const config: IGraphQLConfig = {
  schema: "http://localhost:8342/api/ap-southeast-2/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  extensions: {
    codegen: {
      overwrite: true,
      ignoreNoDocuments: true, // for better experience with the watcher
      generates: {
        "src/__generated__/": {
          preset: "client",
          plugins: [],
          // presetConfig: {
          //   gqlTagName: "gql",
          // },
        },
        // "./graphql.schema.json": {
        //   plugins: ["introspection"],
        // },
      },
    },
  },
}

export default config
