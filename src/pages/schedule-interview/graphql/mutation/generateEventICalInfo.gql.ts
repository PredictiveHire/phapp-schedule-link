import { graphql } from "@/__generated__"

export const LIGenerateEventICalInfo = graphql(`
  mutation LIGenerateEventICalInfo($input: LIGenerateEventICalDto!) {
    LIGenerateEventICalInfo(input: $input) {
      iCalContent
    }
  }
`)
