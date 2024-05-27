import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"

import { ENVIRONMENT } from "@/constants"

import { directionalLink } from "./links"

// Type NormalizedCacheObject comes from the InMemoryCache type
let client: ApolloClient<NormalizedCacheObject>

// eslint-disable-next-line @typescript-eslint/require-await
export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  if (client) {
    return client
  }

  const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: directionalLink,
    cache: new InMemoryCache(),
    credentials: "include",
    connectToDevTools: ENVIRONMENT !== "production",
    name: "phapp-schedule-link",
    version: "1.0",
  })

  // update the the global client variable
  client = apolloClient

  return apolloClient
}
