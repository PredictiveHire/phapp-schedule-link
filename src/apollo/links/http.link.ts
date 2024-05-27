/**
 * This file setup the connection endpoint to a graphql server
 */
import { HttpLink } from "@apollo/client"

import { getApiPath } from "@/utils/getApiPath"

export const httpLink = new HttpLink({
  uri: () => {
    return getApiPath()
  },
})
