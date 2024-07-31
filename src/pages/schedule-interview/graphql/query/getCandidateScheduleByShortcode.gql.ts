import { graphql } from "@/__generated__"

export const LIGetBrandingByShortcode = graphql(`
  query LIGetBrandingByShortcode($filter: LIGetBrandingByShortcodeDto!) {
    LIGetBrandingByShortcode(filter: $filter) {
      logoUrl
    }
  }
`)
