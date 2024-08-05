/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation LIBookCandidateInterview($input: LIBookCandidateInterviewDto!) {\n    LIBookCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n": types.LiBookCandidateInterviewDocument,
    "\n  mutation LICancelCandidateInterview($input: LICancelCandidateInterviewDto!) {\n    LICancelCandidateInterview(input: $input) {\n      interviewEventId\n      interviewScheduleId\n      interviewUniqueName\n      interviewDisplayName\n      interviewType\n      interviewMode\n      status\n    }\n  }\n": types.LiCancelCandidateInterviewDocument,
    "\n  mutation LIGenerateEventICalInfo($input: LIGenerateEventICalDto!) {\n    LIGenerateEventICalInfo(input: $input) {\n      iCalContent\n    }\n  }\n": types.LiGenerateEventICalInfoDocument,
    "\n  mutation LIRescheduleCandidateInterview($input: LIRescheduleCandidateInterviewDto!) {\n    LIRescheduleCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n": types.LiRescheduleCandidateInterviewDocument,
    "\n  query LIGetBrandingByShortcode($filter: LIGetBrandingByShortcodeDto!) {\n    LIGetBrandingByShortcode(filter: $filter) {\n      logoUrl\n    }\n  }\n": types.LiGetBrandingByShortcodeDocument,
    "\n  query LIGetCandidateScheduleLinkInfoByShortcode($filter: LIGetCandidateScheduleLinkInfoByShortcodeDto!) {\n    LIGetCandidateScheduleLinkInfoByShortcode(filter: $filter) {\n      jobRequisitionName\n      candidateTimezone\n      shortcode\n      candidateScheduleStatus\n      timeslots {\n        _id\n        start\n        end\n        status\n      }\n      interviewSchedule {\n        defaultTimezone\n        interviewUniqueName\n        interviewDisplayName\n        interviewType\n        interviewMode\n        interviewAddress\n        interviewLink\n        interviewEventDuration {\n          type\n          unit\n          value\n        }\n        interviewNotesForCandidate\n        interviewAttachments {\n          fileId\n          mimeType\n          filename\n        }\n        interviewScheduleStatus\n      }\n      interviewEvent {\n        interviewStartsAt\n        interviewEndsAt\n        iCalId\n        interviewStatus\n        timeslotId\n      }\n    }\n  }\n": types.LiGetCandidateScheduleLinkInfoByShortcodeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LIBookCandidateInterview($input: LIBookCandidateInterviewDto!) {\n    LIBookCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n"): (typeof documents)["\n  mutation LIBookCandidateInterview($input: LIBookCandidateInterviewDto!) {\n    LIBookCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LICancelCandidateInterview($input: LICancelCandidateInterviewDto!) {\n    LICancelCandidateInterview(input: $input) {\n      interviewEventId\n      interviewScheduleId\n      interviewUniqueName\n      interviewDisplayName\n      interviewType\n      interviewMode\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation LICancelCandidateInterview($input: LICancelCandidateInterviewDto!) {\n    LICancelCandidateInterview(input: $input) {\n      interviewEventId\n      interviewScheduleId\n      interviewUniqueName\n      interviewDisplayName\n      interviewType\n      interviewMode\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LIGenerateEventICalInfo($input: LIGenerateEventICalDto!) {\n    LIGenerateEventICalInfo(input: $input) {\n      iCalContent\n    }\n  }\n"): (typeof documents)["\n  mutation LIGenerateEventICalInfo($input: LIGenerateEventICalDto!) {\n    LIGenerateEventICalInfo(input: $input) {\n      iCalContent\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LIRescheduleCandidateInterview($input: LIRescheduleCandidateInterviewDto!) {\n    LIRescheduleCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n"): (typeof documents)["\n  mutation LIRescheduleCandidateInterview($input: LIRescheduleCandidateInterviewDto!) {\n    LIRescheduleCandidateInterview(input: $input) {\n      jobRequisitionName\n      interviewType\n      interviewLocation\n      interviewLink\n      timezone\n      interviewStartsAt\n      interviewEndsAt\n      iCalId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LIGetBrandingByShortcode($filter: LIGetBrandingByShortcodeDto!) {\n    LIGetBrandingByShortcode(filter: $filter) {\n      logoUrl\n    }\n  }\n"): (typeof documents)["\n  query LIGetBrandingByShortcode($filter: LIGetBrandingByShortcodeDto!) {\n    LIGetBrandingByShortcode(filter: $filter) {\n      logoUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LIGetCandidateScheduleLinkInfoByShortcode($filter: LIGetCandidateScheduleLinkInfoByShortcodeDto!) {\n    LIGetCandidateScheduleLinkInfoByShortcode(filter: $filter) {\n      jobRequisitionName\n      candidateTimezone\n      shortcode\n      candidateScheduleStatus\n      timeslots {\n        _id\n        start\n        end\n        status\n      }\n      interviewSchedule {\n        defaultTimezone\n        interviewUniqueName\n        interviewDisplayName\n        interviewType\n        interviewMode\n        interviewAddress\n        interviewLink\n        interviewEventDuration {\n          type\n          unit\n          value\n        }\n        interviewNotesForCandidate\n        interviewAttachments {\n          fileId\n          mimeType\n          filename\n        }\n        interviewScheduleStatus\n      }\n      interviewEvent {\n        interviewStartsAt\n        interviewEndsAt\n        iCalId\n        interviewStatus\n        timeslotId\n      }\n    }\n  }\n"): (typeof documents)["\n  query LIGetCandidateScheduleLinkInfoByShortcode($filter: LIGetCandidateScheduleLinkInfoByShortcodeDto!) {\n    LIGetCandidateScheduleLinkInfoByShortcode(filter: $filter) {\n      jobRequisitionName\n      candidateTimezone\n      shortcode\n      candidateScheduleStatus\n      timeslots {\n        _id\n        start\n        end\n        status\n      }\n      interviewSchedule {\n        defaultTimezone\n        interviewUniqueName\n        interviewDisplayName\n        interviewType\n        interviewMode\n        interviewAddress\n        interviewLink\n        interviewEventDuration {\n          type\n          unit\n          value\n        }\n        interviewNotesForCandidate\n        interviewAttachments {\n          fileId\n          mimeType\n          filename\n        }\n        interviewScheduleStatus\n      }\n      interviewEvent {\n        interviewStartsAt\n        interviewEndsAt\n        iCalId\n        interviewStatus\n        timeslotId\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;