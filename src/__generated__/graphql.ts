/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** value of property */
  propertyValue: { input: any; output: any; }
};

export type AddCustomerDto = {
  displayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
  uniqueName: Scalars['String']['input'];
};

export type AddGroupDto = {
  /** customized id */
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
};

export type AddHierarchyDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
};

export type AddOrganizationDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customers?: InputMaybe<Array<AddSwitchableCustomerDto>>;
  displayName: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
  uniqueName: Scalars['String']['input'];
};

export type AddSwitchableCustomerDto = {
  awsRegion: Scalars['String']['input'];
  customerDisplayName: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  organizationDisplayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  rootHierarchyId: Scalars['String']['input'];
  uniqueName: Scalars['String']['input'];
};

export type AddUserDto = {
  customerId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  mfaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mfaMethod?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
  userType: Scalars['String']['input'];
  /** username is case-sensitive */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AppendSwitchableCustomerDto = {
  awsRegion: Scalars['String']['input'];
  customerDisplayName: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  organizationDisplayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  rootHierarchyId: Scalars['String']['input'];
  uniqueName: Scalars['String']['input'];
};

/** Application's assessment question type */
export enum ApplicationAssessmentQuestionType {
  Ftq = 'FTQ',
  Mcq = 'MCQ'
}

/** Application's assessment status */
export enum ApplicationAssessmentStatus {
  AppsAssessmentCompleted = 'APPS_ASSESSMENT_COMPLETED',
  AppsAssessmentCreated = 'APPS_ASSESSMENT_CREATED',
  AppsAssessmentDroppedOut = 'APPS_ASSESSMENT_DROPPED_OUT',
  AppsAssessmentInprogress = 'APPS_ASSESSMENT_INPROGRESS',
  AppsAssessmentOrderCompleted = 'APPS_ASSESSMENT_ORDER_COMPLETED'
}

export type ApplicationCandidateEntity = {
  __typename?: 'ApplicationCandidateEntity';
  _id: Scalars['ID']['output'];
  location?: Maybe<AppsApplicationCandidateLocation>;
  personalInformation: AppsApplicationPersonalInformation;
};

/** Application's status */
export enum ApplicationStatus {
  AppsApplicationDeclined = 'APPS_APPLICATION_DECLINED',
  AppsApplicationHired = 'APPS_APPLICATION_HIRED',
  AppsApplicationLonglisted = 'APPS_APPLICATION_LONGLISTED',
  AppsApplicationNew = 'APPS_APPLICATION_NEW',
  AppsApplicationOffered = 'APPS_APPLICATION_OFFERED',
  AppsApplicationShortlisted = 'APPS_APPLICATION_SHORTLISTED',
  AppsApplicationWithdrawn = 'APPS_APPLICATION_WITHDRAWN'
}

export type AppsAddApplicationTagsDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags: Array<AppsApplicationTagDto>;
};

export type AppsApplication = {
  __typename?: 'AppsApplication';
  _id: Scalars['ID']['output'];
  applicationLink?: Maybe<Scalars['String']['output']>;
  assessments: Array<AppsApplicationAssessment>;
  atsInfo?: Maybe<AppsAtsInfo>;
  candidate: AppsApplicationCandidate;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalApplicantId: Scalars['String']['output'];
  externalApplicationId: Scalars['String']['output'];
  externalJobRequisitionId?: Maybe<Scalars['String']['output']>;
  externalVacancyId?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isManuallyProgressed: Scalars['Boolean']['output'];
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  shortcode?: Maybe<Scalars['String']['output']>;
  smsConsentInfo?: Maybe<AppsApplicationSmsConsentInfo>;
  stageId?: Maybe<Scalars['String']['output']>;
  status: ApplicationStatus;
  tags?: Maybe<Array<AppsTag>>;
  updatedAt: Scalars['DateTime']['output'];
  vacancyId?: Maybe<Scalars['String']['output']>;
  vacancyName?: Maybe<Scalars['String']['output']>;
};

export type AppsApplicationAssessment = {
  __typename?: 'AppsApplicationAssessment';
  _id: Scalars['ID']['output'];
  activeAt?: Maybe<Scalars['DateTime']['output']>;
  assessmentLink: Scalars['String']['output'];
  assessmentPackageId?: Maybe<Scalars['String']['output']>;
  assessmentPackageVersion?: Maybe<Scalars['Float']['output']>;
  candidateResponses?: Maybe<Array<AppsApplicationAssessmentCandidateResponse>>;
  createdAt: Scalars['DateTime']['output'];
  externalAssessmentId: Scalars['String']['output'];
  externalAssessmentPackageId?: Maybe<Scalars['String']['output']>;
  externalCohortId?: Maybe<Scalars['String']['output']>;
  insightsLink: Scalars['String']['output'];
  isViewed: Scalars['Boolean']['output'];
  predictedAt?: Maybe<Scalars['DateTime']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  results: Array<AppsApplicationAssessmentResult>;
  stageId?: Maybe<Scalars['String']['output']>;
  status: ApplicationAssessmentStatus;
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppsApplicationAssessmentCandidateResponse = {
  __typename?: 'AppsApplicationAssessmentCandidateResponse';
  answerText: Scalars['String']['output'];
  answerValue: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  type: ApplicationAssessmentQuestionType;
};

export type AppsApplicationAssessmentResult = {
  __typename?: 'AppsApplicationAssessmentResult';
  fieldName: Scalars['String']['output'];
  fieldType: Scalars['String']['output'];
  fieldValue: Scalars['JSON']['output'];
};

export type AppsApplicationCandidate = {
  __typename?: 'AppsApplicationCandidate';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  location?: Maybe<AppsApplicationCandidateLocation>;
  personalInformation: AppsApplicationPersonalInformation;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppsApplicationCandidateLocation = {
  __typename?: 'AppsApplicationCandidateLocation';
  address: Scalars['String']['output'];
  coordinate?: Maybe<AppsApplicationCoordinate>;
};

export type AppsApplicationCoordinate = {
  __typename?: 'AppsApplicationCoordinate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type AppsApplicationFilterDto = {
  applicationLocation?: InputMaybe<Array<Scalars['String']['input']>>;
  applicationProgressFilter?: InputMaybe<AppsApplicationProgressFilterDto>;
  applicationStatusList?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtLte?: InputMaybe<Scalars['DateTime']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  updatedAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAtLte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AppsApplicationList = {
  __typename?: 'AppsApplicationList';
  data: Array<AppsApplication>;
  pagination: AppsPaginationResponse;
};

export type AppsApplicationListResultsFilterDto = {
  fieldName: Scalars['String']['input'];
  filterValue: Scalars['Boolean']['input'];
};

export type AppsApplicationListSortDto = {
  fieldName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppsSortFilterDto>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type AppsApplicationPersonalInformation = {
  __typename?: 'AppsApplicationPersonalInformation';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type AppsApplicationProgressFilterDto = {
  isManuallyProgressed: Scalars['Boolean']['input'];
  isProgressed: Scalars['Boolean']['input'];
};

export type AppsApplicationSmsConsentInfo = {
  __typename?: 'AppsApplicationSMSConsentInfo';
  candidateIPAddress?: Maybe<Scalars['String']['output']>;
  isSMSConsented: Scalars['Boolean']['output'];
  smsConsentedAt: Scalars['DateTime']['output'];
};

export type AppsApplicationStatusCount = {
  __typename?: 'AppsApplicationStatusCount';
  statusCount: Array<AppsApplicationStatusCountItem>;
};

export type AppsApplicationStatusCountItem = {
  __typename?: 'AppsApplicationStatusCountItem';
  count: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type AppsApplicationTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AppsArchiveJobRequsitionsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionIds: Array<Scalars['ID']['input']>;
  organizationId: Scalars['String']['input'];
};

export type AppsArchiveVacanciesByExternalVacancyIdsDto = {
  customerId: Scalars['String']['input'];
  externalVacancyIds: Array<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsArchiveVacanciesDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  vacancyIds: Array<Scalars['ID']['input']>;
};

export type AppsArchiveWorkflowsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowIds: Array<Scalars['ID']['input']>;
};

export type AppsAssessmentFilterDto = {
  assessmentStatusList?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtLte?: InputMaybe<Scalars['DateTime']['input']>;
  externalAssessmentPackageId?: InputMaybe<Scalars['String']['input']>;
  mcqFilterList?: InputMaybe<Array<AppsAssessmentMcqFilterDto>>;
  product?: InputMaybe<Scalars['String']['input']>;
  resultList?: InputMaybe<Array<Scalars['String']['input']>>;
  resultsFilter?: InputMaybe<Array<AppsApplicationListResultsFilterDto>>;
  submittedAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  submittedAtLte?: InputMaybe<Scalars['DateTime']['input']>;
  unViewedOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AppsAssessmentMcqFilterDto = {
  answerValues: Array<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
};

export type AppsAssessmentPackage = {
  __typename?: 'AppsAssessmentPackage';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  product: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AppsAssessmentResultFilterDto = {
  externalAssessmentPackageId: Scalars['String']['input'];
  resultList: Array<Scalars['String']['input']>;
};

export type AppsAssessmentStatusFilterDto = {
  assessmentStatus?: InputMaybe<Scalars['String']['input']>;
  externalAssessmentPackageId: Scalars['String']['input'];
};

export type AppsAssessmentSubmittedAtFilterDto = {
  externalAssessmentPackageId: Scalars['String']['input'];
  submittedAtGte: Scalars['DateTime']['input'];
  submittedAtLte: Scalars['DateTime']['input'];
};

export type AppsAssessmentViewedFilterDto = {
  externalAssessmentPackageId: Scalars['String']['input'];
  unViewedOnly: Scalars['Boolean']['input'];
};

export type AppsAtsInfo = {
  __typename?: 'AppsAtsInfo';
  metaData: Scalars['JSON']['output'];
  name: Scalars['String']['output'];
};

export type AppsAtsInfoDto = {
  metaData: Scalars['JSON']['input'];
  name: Scalars['String']['input'];
};

export type AppsBulkIndexResponse = {
  __typename?: 'AppsBulkIndexResponse';
  errors: Array<AppsEsErrorDocument>;
  index: Scalars['String']['output'];
  success: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type AppsBulkSyncJobRequisitionDocumentDbToElasticsearchDbDto = {
  jobRequisitionIds: Array<Scalars['ID']['input']>;
};

export type AppsCandidateFilterDto = {
  candidateId?: InputMaybe<Scalars['String']['input']>;
};

export type AppsCandidatePii = {
  __typename?: 'AppsCandidatePii';
  _id: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type AppsCheckApplicationAssessmentDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsCheckVacancyDto = {
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsCheckWorkflowSetNameDuplicatedByNameDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsCreateActionDto = {
  payload?: InputMaybe<Scalars['JSON']['input']>;
  type: Scalars['String']['input'];
};

export type AppsCreateApplicationAssessmentByExternalApplicationIdDto = {
  assessment: AppsCreateApplicationAssessmentDto;
  candidate: AppsCreateApplicationCandidateDto;
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsCreateApplicationAssessmentDto = {
  _id: Scalars['ID']['input'];
  assessmentLink: Scalars['String']['input'];
  assessmentPackageId: Scalars['String']['input'];
  assessmentPackageVersion: Scalars['Float']['input'];
  externalAssessmentId: Scalars['String']['input'];
  externalAssessmentPackageId: Scalars['String']['input'];
  externalCohortId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type AppsCreateApplicationCandidateDto = {
  _id: Scalars['ID']['input'];
  location?: InputMaybe<AppsCreateApplicationLocationDto>;
  personalInformation: AppsCreateApplicationPersonalInformationDto;
};

export type AppsCreateApplicationCandidatePiiDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type AppsCreateApplicationCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsCreateApplicationCoordinateV2Dto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsCreateApplicationDto = {
  assessment: AppsCreateApplicationAssessmentDto;
  candidate: AppsCreateApplicationCandidateDto;
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  smsConsentInfo?: InputMaybe<AppsCreateApplicationSmsConsentInfoDto>;
};

export type AppsCreateApplicationLocationDto = {
  address: Scalars['String']['input'];
  coordinate: AppsCreateApplicationCoordinateDto;
};

export type AppsCreateApplicationLocationV2Dto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<AppsCreateApplicationCoordinateV2Dto>;
};

export type AppsCreateApplicationPersonalInformationDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type AppsCreateApplicationSmsConsentInfoDto = {
  candidateIPAddress?: InputMaybe<Scalars['String']['input']>;
  isSMSConsented: Scalars['Boolean']['input'];
  smsConsentedAt: Scalars['DateTime']['input'];
};

export type AppsCreateApplicationV2CandidateDto = {
  location?: InputMaybe<AppsCreateApplicationLocationV2Dto>;
  personalInformation: AppsCreateApplicationCandidatePiiDto;
};

export type AppsCreateApplicationV2Dto = {
  atsInfo?: InputMaybe<AppsAtsInfoDto>;
  candidate: AppsCreateApplicationV2CandidateDto;
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsCreateConditionDto = {
  comparisonOperator: Scalars['String']['input'];
  comparisonValue: Scalars['String']['input'];
  onField: Scalars['String']['input'];
  onFieldType: Scalars['String']['input'];
};

export type AppsCreateCustomerSettingDto = {
  customerId: Scalars['ID']['input'];
  hierarchyId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  retentionPeriod: AppsCreateCustomerSettingRetentionPeriodDto;
  tags?: InputMaybe<Array<AppsCreateTagDto>>;
};

export type AppsCreateCustomerSettingRetentionPeriodDto = {
  candidatePiiRetentionPeriod?: InputMaybe<Scalars['Int']['input']>;
  videoRetentionPeriod?: InputMaybe<Scalars['Int']['input']>;
};

export type AppsCreateJobRequisitionCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsCreateJobRequisitionDto = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalJobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  location?: InputMaybe<AppsCreateJobRequisitionLocationDto>;
  managers?: InputMaybe<Array<AppsCreateJobRequisitionManagerDto>>;
  organizationId: Scalars['String']['input'];
  roleFamily?: InputMaybe<AppsCreateJobRequisitionRoleFamilyDto>;
  tags?: InputMaybe<Array<AppsTagDto>>;
  title: Scalars['String']['input'];
  workflowSetId: Scalars['ID']['input'];
};

export type AppsCreateJobRequisitionForVacancyByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  vacancyId: Scalars['String']['input'];
};

export type AppsCreateJobRequisitionLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<AppsCreateJobRequisitionCoordinateDto>;
};

export type AppsCreateJobRequisitionManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AppsCreateJobRequisitionRoleFamilyDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type AppsCreateStageDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  externalAssessmentPackageId?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  triggers?: InputMaybe<Array<AppsCreateTriggerDto>>;
};

export type AppsCreateTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AppsCreateTriggerDto = {
  action: AppsCreateActionDto;
  conditionOperator: Scalars['String']['input'];
  conditions: Array<AppsCreateConditionDto>;
  enabled: Scalars['Boolean']['input'];
};

export type AppsCreateVacancyCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsCreateVacancyDto = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalVacancyId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<AppsCreateVacancyLocationDto>;
  managers?: InputMaybe<Array<AppsCreateVacancyManagerDto>>;
  organizationId: Scalars['String']['input'];
  roleFamily?: InputMaybe<AppsCreateVacancyRoleFamilyDto>;
  tags?: InputMaybe<Array<AppsCreateVacancyTagDto>>;
  title: Scalars['String']['input'];
  workflow: AppsCreateVacancyWorkflowDto;
};

export type AppsCreateVacancyLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<AppsCreateVacancyCoordinateDto>;
};

export type AppsCreateVacancyManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AppsCreateVacancyRoleFamilyDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type AppsCreateVacancyTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AppsCreateVacancyWorkflowAction = {
  payload?: InputMaybe<Scalars['JSON']['input']>;
  type: Scalars['String']['input'];
};

export type AppsCreateVacancyWorkflowCondition = {
  comparisonOperator: Scalars['String']['input'];
  comparisonValue: Scalars['String']['input'];
  onField: Scalars['String']['input'];
  onFieldType: Scalars['String']['input'];
};

export type AppsCreateVacancyWorkflowDto = {
  _id: Scalars['ID']['input'];
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt: Scalars['DateTime']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  stages: Array<AppsCreateVacancyWorkflowStageDto>;
  updatedAt: Scalars['DateTime']['input'];
};

export type AppsCreateVacancyWorkflowStageDto = {
  _id: Scalars['ID']['input'];
  externalAssessmentPackageId: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  triggers: Array<AppsCreateVacancyWorkflowTrigger>;
};

export type AppsCreateVacancyWorkflowTrigger = {
  action: AppsCreateVacancyWorkflowAction;
  conditionOperator: Scalars['String']['input'];
  conditions: Array<AppsCreateVacancyWorkflowCondition>;
  enabled: Scalars['Boolean']['input'];
};

export type AppsCreateWorkflowDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  stages: Array<AppsCreateStageDto>;
};

export type AppsCreateWorkflowOptionDto = {
  displayName: Scalars['String']['input'];
  isDefault: Scalars['Boolean']['input'];
  workflowId: Scalars['ID']['input'];
};

export type AppsCreateWorkflowSetDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<AppsCreateTagDto>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflowOptions: Array<AppsCreateWorkflowOptionDto>;
};

export type AppsCustomerSetting = {
  __typename?: 'AppsCustomerSetting';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  retentionPeriod?: Maybe<AppsRetentionPeriod>;
  smsNotificationSettings?: Maybe<Array<AppsSmsNotificationSetting>>;
  tags?: Maybe<Array<AppsTag>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppsDataExportMetaDataEntity = {
  __typename?: 'AppsDataExportMetaDataEntity';
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  downloadedAt?: Maybe<Scalars['DateTime']['output']>;
  exportParams: AppsDataExportParamsEntity;
};

export type AppsDataExportNotificationEntity = {
  __typename?: 'AppsDataExportNotificationEntity';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  dataExportMetaData?: Maybe<AppsDataExportMetaDataEntity>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type AppsDataExportParamsEntity = {
  __typename?: 'AppsDataExportParamsEntity';
  applicationIds: Array<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  dataExportOption: Scalars['String']['output'];
  exportAllApplications: Scalars['Boolean']['output'];
  exportFormat: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  requestedAt: Scalars['DateTime']['output'];
};

export type AppsDeleteApplicationByIdDto = {
  _id: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsDeleteApplicationDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsDeleteCandidateByIdDto = {
  candidateId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsDeployAssessmentPackageDto = {
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  product: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type AppsEsErrorDocument = {
  __typename?: 'AppsEsErrorDocument';
  error: Scalars['String']['output'];
  id: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type AppsFilterApplicationDto = {
  applicationLocation?: InputMaybe<Array<Scalars['String']['input']>>;
  applicationStatusList?: InputMaybe<Array<Scalars['String']['input']>>;
  assessmentResultFilter?: InputMaybe<AppsAssessmentResultFilterDto>;
  assessmentStatusFilter: AppsAssessmentStatusFilterDto;
  assessmentSubmittedAtFilter?: InputMaybe<AppsAssessmentSubmittedAtFilterDto>;
  assessmentViewedFilter?: InputMaybe<AppsAssessmentViewedFilterDto>;
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  searchText?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterAssessmentPackageDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
};

export type AppsFilterJobRequisitionByOwnDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  searchText?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterJobRequisitionDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  searchText?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterVacancyDto = {
  createdAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtLte?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  hierarchyIdList: Array<Scalars['ID']['input']>;
  hiringManagerEmail?: InputMaybe<Scalars['String']['input']>;
  hiringManagerName?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  recruiterName?: InputMaybe<Scalars['String']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterVacancyV2Dto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  hierarchyIdList: Array<Scalars['ID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterWorkflowDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsFilterWorkflowSetListInput = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
  workflowSetFilter?: InputMaybe<AppsWorkflowSetFilterDto>;
};

export type AppsFilterWorkflowV2Dto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsWorkflowListSortDto>;
  workflowFilter?: InputMaybe<AppsWorkflowFilterDto>;
  workflowStageFilter?: InputMaybe<AppsWorkflowStageFilterDto>;
};

export type AppsGetApplicationByIdDto = {
  applicationId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetApplicationByIdForInternalDto = {
  applicationId: Scalars['String']['input'];
};

export type AppsGetApplicationByShortcodeDto = {
  shortcode: Scalars['String']['input'];
};

export type AppsGetApplicationListByCandidateIdDto = {
  candidateId: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetApplicationListDto = {
  applicationFilter?: InputMaybe<AppsApplicationFilterDto>;
  assessmentFilter?: InputMaybe<AppsAssessmentFilterDto>;
  assessmentFilterList?: InputMaybe<Array<AppsAssessmentFilterDto>>;
  candidateFilter?: InputMaybe<AppsCandidateFilterDto>;
  customerId: Scalars['String']['input'];
  externalJobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  externalVacancyId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsApplicationListSortDto>;
  sortList?: InputMaybe<Array<AppsApplicationListSortDto>>;
  vacancyId?: InputMaybe<Scalars['String']['input']>;
};

export type AppsGetApplicationStatusCountDto = {
  applicationFilter?: InputMaybe<AppsApplicationFilterDto>;
  assessmentFilterList?: InputMaybe<Array<AppsAssessmentFilterDto>>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetApplicationWithExternalApplicationIdDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
};

export type AppsGetApplicationWithExternalApplicationIdV2Dto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetApplicationWithExternalIdsDto = {
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
};

export type AppsGetDefaultWorkflowDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetJobRequisitionByExternalJobRequisitionIdDto = {
  customerId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetJobRequisitionByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetJobRequisitionByShortcodeDto = {
  shortcode: Scalars['String']['input'];
};

export type AppsGetJobRequisitionListByCandidateIdDto = {
  candidateId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetVacancyApplicationStatusCountByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  stageId?: InputMaybe<Scalars['String']['input']>;
  vacancyId: Scalars['String']['input'];
};

export type AppsGetVacancyByExternalVacancyIdDto = {
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetVacancyByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  vacancyId: Scalars['String']['input'];
};

export type AppsGetVacancyListByCandidateIdDto = {
  candidateId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetVacancyListByJobRequisitionIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsGetWorkflowByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowId: Scalars['ID']['input'];
};

export type AppsGetWorkflowSetByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowSetId: Scalars['ID']['input'];
};

export type AppsIndexResponse = {
  __typename?: 'AppsIndexResponse';
  _id: Scalars['String']['output'];
  _index: Scalars['String']['output'];
  result: Scalars['String']['output'];
};

export type AppsJobRequisition = {
  __typename?: 'AppsJobRequisition';
  _id: Scalars['ID']['output'];
  applicationCount: Scalars['Float']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  closeDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  genericJobLink: AppsJobRequisitionGenericJobLink;
  hierarchyId: Scalars['String']['output'];
  location?: Maybe<AppsJobRequisitionLocation>;
  managers: Array<AppsJobRequisitionManager>;
  organizationId: Scalars['String']['output'];
  roleFamily: AppsJobRequisitionRoleFamily;
  shortcode: Scalars['String']['output'];
  tags: Array<AppsJobRequisitionTag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflowSet: AppsWorkflowSet;
};

export type AppsJobRequisitionByApplicationIdDto = {
  applicationId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsJobRequisitionCoordinate = {
  __typename?: 'AppsJobRequisitionCoordinate';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type AppsJobRequisitionGenericJobLink = {
  __typename?: 'AppsJobRequisitionGenericJobLink';
  jobLink: Scalars['String']['output'];
};

export type AppsJobRequisitionList = {
  __typename?: 'AppsJobRequisitionList';
  data: Array<AppsJobRequisition>;
  pagination: AppsPaginationResponse;
};

export type AppsJobRequisitionLocation = {
  __typename?: 'AppsJobRequisitionLocation';
  address: Scalars['String']['output'];
  coordinate?: Maybe<AppsJobRequisitionCoordinate>;
};

export type AppsJobRequisitionManager = {
  __typename?: 'AppsJobRequisitionManager';
  email: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AppsJobRequisitionRoleFamily = {
  __typename?: 'AppsJobRequisitionRoleFamily';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AppsJobRequisitionTag = {
  __typename?: 'AppsJobRequisitionTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AppsMarkApplicationAssessmentIsViewedDto = {
  applicationId: Scalars['String']['input'];
  assessmentId: Scalars['String']['input'];
};

export type AppsMarkApplicationAssessmentIsViewedResult = {
  __typename?: 'AppsMarkApplicationAssessmentIsViewedResult';
  success: Scalars['Boolean']['output'];
};

export type AppsMoveApplicationDto = {
  _ids: Array<Scalars['ID']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isManuallyProgressed?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['String']['input'];
  stageId: Scalars['String']['input'];
};

export type AppsMoveApplicationV2Dto = {
  _ids: Array<Scalars['ID']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isManuallyProgressed?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
};

export type AppsOrderAtsApplicationDto = {
  atsInfo?: InputMaybe<AppsAtsInfoDto>;
  candidate: AppsCreateApplicationV2CandidateDto;
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsOrgIdsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsPaginationResponse = {
  __typename?: 'AppsPaginationResponse';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type AppsPurgeApplicationCandidateDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsRequestDataExportDto = {
  applicationIds: Array<Scalars['ID']['input']>;
  customerId: Scalars['String']['input'];
  dataExportOption: Scalars['String']['input'];
  exportAllApplications: Scalars['Boolean']['input'];
  exportFormat: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  requestedAt: Scalars['String']['input'];
};

export type AppsRequestDataExportResult = {
  __typename?: 'AppsRequestDataExportResult';
  notification?: Maybe<AppsDataExportNotificationEntity>;
  success: Scalars['Boolean']['output'];
};

export type AppsResendApplicationAssessmentLinkDto = {
  _ids: Array<Scalars['ID']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsResendApplicationMiReportDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsRestoreJobRequsitionsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionIds: Array<Scalars['ID']['input']>;
  organizationId: Scalars['String']['input'];
};

export type AppsRestoreVacanciesByExternalVacancyIdsDto = {
  customerId: Scalars['String']['input'];
  externalVacancyIds: Array<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsRestoreVacanciesDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  vacancyIds: Array<Scalars['ID']['input']>;
};

export type AppsRestoreWorkflowsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowIds: Array<Scalars['ID']['input']>;
};

export type AppsRetentionPeriod = {
  __typename?: 'AppsRetentionPeriod';
  candidatePiiRetentionPeriod: Scalars['Int']['output'];
  videoRetentionPeriod: Scalars['Int']['output'];
};

export type AppsSmsNotificationSetting = {
  __typename?: 'AppsSMSNotificationSetting';
  channel: Scalars['String']['output'];
  language: Scalars['String']['output'];
  lastSentAt?: Maybe<Scalars['DateTime']['output']>;
  recipients: Array<Scalars['String']['output']>;
  threshold: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type AppsSearchApplicationDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  searchText?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<AppsSortDto>;
};

export type AppsSendApplicationReminderDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  reminderType: Scalars['String']['input'];
};

export type AppsSendSmsUsageAlertEmailDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  recipients: Array<Scalars['String']['input']>;
};

export type AppsSendSmsUsageReminderEmailDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  recipients: Array<Scalars['String']['input']>;
};

export type AppsSortDto = {
  fieldName: Scalars['String']['input'];
  filter?: InputMaybe<AppsSortFilterDto>;
  order: Scalars['String']['input'];
};

export type AppsSortFilterDto = {
  filterKey: Scalars['String']['input'];
  filterType?: InputMaybe<Scalars['String']['input']>;
  filterValue: Scalars['String']['input'];
};

export type AppsSyncApplicationDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsSyncAssessmentPackageDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsSyncJobRequisitionDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsSyncVacancyDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsSyncWorkflowDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsSyncWorkflowSetDocumentDbToElasticsearchDbByIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsTag = {
  __typename?: 'AppsTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AppsTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AppsUpdateActionDto = {
  payload?: InputMaybe<Scalars['JSON']['input']>;
  type: Scalars['String']['input'];
};

export type AppsUpdateApplicationAssessmentDto = {
  candidateResponses?: InputMaybe<Array<AppsUpdateCandidateResponseDto>>;
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  insightsLink?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  predictedAt?: InputMaybe<Scalars['DateTime']['input']>;
  results?: InputMaybe<Array<AppsUpdateAssessmentResultDto>>;
  status: Scalars['String']['input'];
  submittedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AppsUpdateApplicationAssessmentIsViewedDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isViewed: Scalars['Boolean']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsUpdateApplicationAssessmentResultDto = {
  assessmentStatus: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  insightsLink: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  predictedAt: Scalars['DateTime']['input'];
  results: Array<AppsUpdateAssessmentResultDto>;
  submittedAt: Scalars['DateTime']['input'];
};

export type AppsUpdateApplicationAssessmentReviewSavedDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  results: Array<AppsUpdateAssessmentResultDto>;
};

export type AppsUpdateApplicationCandidateCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsUpdateApplicationCandidateDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<AppsUpdateApplicationCandidateLocationDto>;
  organizationId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateApplicationCandidateLocationDto = {
  address: Scalars['String']['input'];
  coordinate: AppsUpdateApplicationCandidateCoordinateDto;
};

export type AppsUpdateApplicationDefaultAssessmentAssessmentDto = {
  _id: Scalars['ID']['input'];
  assessmentLink: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type AppsUpdateApplicationDefaultAssessmentCandidateDto = {
  _id: Scalars['ID']['input'];
  location?: InputMaybe<AppsUpdateApplicationDefaultAssessmentLocationDto>;
  personalInformation: AppsUpdateApplicationDefaultAssessmentPersonalInformationDto;
};

export type AppsUpdateApplicationDefaultAssessmentCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsUpdateApplicationDefaultAssessmentDto = {
  assessment: AppsUpdateApplicationDefaultAssessmentAssessmentDto;
  candidate: AppsUpdateApplicationDefaultAssessmentCandidateDto;
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsUpdateApplicationDefaultAssessmentLocationDto = {
  address: Scalars['String']['input'];
  coordinate: AppsUpdateApplicationDefaultAssessmentCoordinateDto;
};

export type AppsUpdateApplicationDefaultAssessmentPersonalInformationDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type AppsUpdateApplicationSmsConsentInfoDto = {
  candidateIPAddress?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isSMSConsented: Scalars['Boolean']['input'];
  organizationId: Scalars['String']['input'];
  smsConsentedAt: Scalars['DateTime']['input'];
};

export type AppsUpdateApplicationStageDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  stageId: Scalars['String']['input'];
};

export type AppsUpdateApplicationStatusDto = {
  _ids: Array<Scalars['ID']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type AppsUpdateAppsApplicationCandidateCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsUpdateAppsApplicationCandidateDto = {
  applicationId: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<AppsUpdateAppsApplicationCandidateLocationDto>;
  organizationId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateAppsApplicationCandidateLocationDto = {
  address: Scalars['String']['input'];
  coordinate: AppsUpdateAppsApplicationCandidateCoordinateDto;
};

export type AppsUpdateAssessmentResultDto = {
  fieldName: Scalars['String']['input'];
  fieldType: Scalars['String']['input'];
  fieldValue: Scalars['JSON']['input'];
};

export type AppsUpdateCandidatePiiDto = {
  candidateId: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type AppsUpdateCandidateResponseDto = {
  answerText: Scalars['String']['input'];
  answerValue: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type AppsUpdateConditionDto = {
  comparisonOperator: Scalars['String']['input'];
  comparisonValue: Scalars['String']['input'];
  onField: Scalars['String']['input'];
  onFieldType: Scalars['String']['input'];
};

export type AppsUpdateCustomerSettingDto = {
  customerId: Scalars['ID']['input'];
  hierarchyId: Scalars['ID']['input'];
  organizationId: Scalars['String']['input'];
  retentionPeriod?: InputMaybe<AppsUpdateCustomerSettingRetentionPeriodDto>;
  tags?: InputMaybe<Array<AppsUpdateTagDto>>;
};

export type AppsUpdateCustomerSettingRetentionPeriodDto = {
  candidatePiiRetentionPeriod?: InputMaybe<Scalars['Int']['input']>;
  videoRetentionPeriod?: InputMaybe<Scalars['Int']['input']>;
};

export type AppsUpdateJobRequisitionByExternalJobRequisitionIdDto = {
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  hiringManagers?: InputMaybe<Array<AppsUpdateJobRequisitionHiringManagerDto>>;
  location?: InputMaybe<AppsUpdateJobRequisitionLocationDto>;
  organizationId: Scalars['String']['input'];
  recruiters?: InputMaybe<Array<AppsUpdateJobRequisitionRecruiterDto>>;
  roleFamily?: InputMaybe<AppsUpdateJobRequisitionRoleFamilyDto>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateJobRequisitionByIdDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  hiringManagers?: InputMaybe<Array<AppsUpdateJobRequisitionHiringManagerDto>>;
  location?: InputMaybe<AppsUpdateJobRequisitionLocationDto>;
  organizationId: Scalars['String']['input'];
  recruiters?: InputMaybe<Array<AppsUpdateJobRequisitionRecruiterDto>>;
  roleFamily?: InputMaybe<AppsUpdateJobRequisitionRoleFamilyDto>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateJobRequisitionCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsUpdateJobRequisitionHiringManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type AppsUpdateJobRequisitionLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<AppsUpdateJobRequisitionCoordinateDto>;
};

export type AppsUpdateJobRequisitionRecruiterDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type AppsUpdateJobRequisitionRoleFamilyDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type AppsUpdateSmsNotificationSettingDto = {
  channel: Scalars['String']['input'];
  language: Scalars['String']['input'];
  recipients?: InputMaybe<Array<Scalars['String']['input']>>;
  threshold?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type AppsUpdateSmsNotificationSettingsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  smsNotificationSettings: Array<AppsUpdateSmsNotificationSettingDto>;
};

export type AppsUpdateStageDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  externalAssessmentPackageId?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  triggers?: InputMaybe<Array<AppsUpdateTriggerDto>>;
};

export type AppsUpdateTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AppsUpdateTriggerDto = {
  action: AppsUpdateActionDto;
  conditionOperator: Scalars['String']['input'];
  conditions: Array<AppsUpdateConditionDto>;
  enabled: Scalars['Boolean']['input'];
};

export type AppsUpdateVacancyByExternalVacancyIdDto = {
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  hiringManagers?: InputMaybe<Array<AppsUpdateVacancyHiringManagerDto>>;
  location?: InputMaybe<AppsUpdateVacancyLocationDto>;
  organizationId: Scalars['String']['input'];
  recruiters?: InputMaybe<Array<AppsUpdateVacancyRecruiterDto>>;
  roleFamily?: InputMaybe<AppsUpdateVacancyRoleFamilyDto>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateVacancyByIdDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  hiringManagers?: InputMaybe<Array<AppsUpdateVacancyHiringManagerDto>>;
  location?: InputMaybe<AppsUpdateVacancyLocationDto>;
  organizationId: Scalars['String']['input'];
  recruiters?: InputMaybe<Array<AppsUpdateVacancyRecruiterDto>>;
  roleFamily?: InputMaybe<AppsUpdateVacancyRoleFamilyDto>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateVacancyCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type AppsUpdateVacancyGenericAssessmentLinkByExternalVacancyIdDto = {
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  genericAssessmentLinks: Array<AppsUpdateVacancyGenericAssessmentLinkByExternalVacancyIdGenericAssessmentLinkDto>;
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AppsUpdateVacancyGenericAssessmentLinkByExternalVacancyIdGenericAssessmentLinkDto = {
  assessmentLink: Scalars['String']['input'];
  externalAssessmentPackageId: Scalars['String']['input'];
  stageId: Scalars['String']['input'];
};

export type AppsUpdateVacancyHiringManagerByExternalVacancyIdDto = {
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  managers?: InputMaybe<Array<AppsUpdateVacancyHiringManagerByExternalVacancyIdHiringManagerDto>>;
  organizationId: Scalars['String']['input'];
};

export type AppsUpdateVacancyHiringManagerByExternalVacancyIdHiringManagerDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateVacancyHiringManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type AppsUpdateVacancyLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<AppsUpdateVacancyCoordinateDto>;
};

export type AppsUpdateVacancyRecruiterByExternalVacancyIdDto = {
  customerId: Scalars['String']['input'];
  externalVacancyId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  managers?: InputMaybe<Array<AppsUpdateVacancyRecruiterByExternalVacancyIdRecruiterDto>>;
  organizationId: Scalars['String']['input'];
};

export type AppsUpdateVacancyRecruiterByExternalVacancyIdRecruiterDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type AppsUpdateVacancyRecruiterDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type AppsUpdateVacancyRoleFamilyDto = {
  _id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type AppsUpdateWorkflowDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  stages?: InputMaybe<Array<AppsUpdateStageDto>>;
};

export type AppsUpdateWorkflowOptionDto = {
  displayName: Scalars['String']['input'];
  isDefault: Scalars['Boolean']['input'];
  workflowId: Scalars['ID']['input'];
};

export type AppsUpdateWorkflowSetDto = {
  _id: Scalars['ID']['input'];
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<AppsUpdateTagDto>>;
  workflowOptions?: InputMaybe<Array<AppsUpdateWorkflowOptionDto>>;
};

export type AppsVacancy = {
  __typename?: 'AppsVacancy';
  _id: Scalars['ID']['output'];
  applicationCount: Scalars['Float']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  closeDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  externalVacancyId: Scalars['String']['output'];
  genericAssessmentLinks: Array<AppsVacancyGenericAssessmentLink>;
  hierarchyId: Scalars['String']['output'];
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  location?: Maybe<AppsVacancyLocation>;
  managers: Array<AppsVacancyManager>;
  organizationId: Scalars['String']['output'];
  roleFamily: AppsVacancyRoleFamily;
  tags: Array<AppsVacancyTag>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  workflow: AppsWorkflow;
};

export type AppsVacancyApplicationStatusCount = {
  __typename?: 'AppsVacancyApplicationStatusCount';
  statusCount: Array<AppsVacancyApplicationStatusCountItem>;
};

export type AppsVacancyApplicationStatusCountItem = {
  __typename?: 'AppsVacancyApplicationStatusCountItem';
  count: Scalars['Float']['output'];
  status: Scalars['String']['output'];
};

export type AppsVacancyCoordinate = {
  __typename?: 'AppsVacancyCoordinate';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type AppsVacancyGenericAssessmentLink = {
  __typename?: 'AppsVacancyGenericAssessmentLink';
  assessmentLink: Scalars['String']['output'];
  assessmentPackageName: Scalars['String']['output'];
  externalAssessmentPackageId: Scalars['String']['output'];
  stageId: Scalars['String']['output'];
};

export type AppsVacancyList = {
  __typename?: 'AppsVacancyList';
  data: Array<AppsVacancy>;
  pagination: AppsPaginationResponse;
};

export type AppsVacancyLocation = {
  __typename?: 'AppsVacancyLocation';
  address: Scalars['String']['output'];
  coordinate?: Maybe<AppsVacancyCoordinate>;
};

export type AppsVacancyManager = {
  __typename?: 'AppsVacancyManager';
  email: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AppsVacancyRoleFamily = {
  __typename?: 'AppsVacancyRoleFamily';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AppsVacancyTag = {
  __typename?: 'AppsVacancyTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AppsWorkflow = {
  __typename?: 'AppsWorkflow';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  defaultLanguage?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  stages: Array<AppsWorkflowStage>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AppsWorkflowAction = {
  __typename?: 'AppsWorkflowAction';
  payload?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
};

export type AppsWorkflowCondition = {
  __typename?: 'AppsWorkflowCondition';
  comparisonOperator: Scalars['String']['output'];
  comparisonValue: Scalars['String']['output'];
  onField: Scalars['String']['output'];
  onFieldType: Scalars['String']['output'];
};

export type AppsWorkflowFilterDto = {
  createdAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtLte?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stageCount?: InputMaybe<Scalars['Float']['input']>;
  updatedAtGte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAtLte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AppsWorkflowList = {
  __typename?: 'AppsWorkflowList';
  data: Array<AppsWorkflow>;
  pagination: AppsPaginationResponse;
};

export type AppsWorkflowListSortDto = {
  fieldName?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<AppsSortFilterDto>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type AppsWorkflowSet = {
  __typename?: 'AppsWorkflowSet';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  tags?: Maybe<Array<AppsTag>>;
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Float']['output'];
  workflowOptions: Array<AppsWorkflowSetOptions>;
  workflows: Array<AppsWorkflow>;
};

export type AppsWorkflowSetFilterDto = {
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameKeyword?: InputMaybe<Scalars['String']['input']>;
};

export type AppsWorkflowSetList = {
  __typename?: 'AppsWorkflowSetList';
  data: Array<AppsWorkflowSet>;
  pagination: AppsPaginationResponse;
};

export type AppsWorkflowSetOptions = {
  __typename?: 'AppsWorkflowSetOptions';
  displayName: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  workflowId: Scalars['String']['output'];
};

export type AppsWorkflowStage = {
  __typename?: 'AppsWorkflowStage';
  _id: Scalars['ID']['output'];
  assessmentPackageName: Scalars['String']['output'];
  externalAssessmentPackageId: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  product: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  triggers: Array<AppsWorkflowTrigger>;
};

export type AppsWorkflowStageFilterDto = {
  externalAssessmentPackageId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type AppsWorkflowTrigger = {
  __typename?: 'AppsWorkflowTrigger';
  action: AppsWorkflowAction;
  conditionOperator: Scalars['String']['output'];
  conditions: Array<AppsWorkflowCondition>;
  enabled: Scalars['Boolean']['output'];
};

export type ArchiveCustomerDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type ArchiveGroupDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type ArchiveOrganizationDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type Assessment = {
  __typename?: 'Assessment';
  assessmentId: Scalars['String']['output'];
};

export type AtsApplicationInputDto = {
  atsApplicationInput: AtsApplicationInputRequest;
};

export type AtsApplicationInputRequest = {
  atsInfo: AtsInfo;
  candidateInfo: CandidateInfo;
  cohortInfo: CohortInfo;
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  predictorMasterId: Scalars['String']['input'];
};

export type AtsCreateTenantDto = {
  atsName: Scalars['String']['input'];
  credential?: InputMaybe<Scalars['JSON']['input']>;
  customerId: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  externalTenantId: Scalars['String']['input'];
  extra?: InputMaybe<Scalars['JSON']['input']>;
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsDeleteTenantByIdDto = {
  _id: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsDeleteTenantsByIdsDto = {
  _ids: Array<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsGetAtsTemplateByAtsNameDto = {
  atsName: Scalars['String']['input'];
};

export type AtsGetAtsTemplateByIdDto = {
  _id: Scalars['String']['input'];
};

export type AtsGetRequestByIdDto = {
  _id: Scalars['String']['input'];
};

export type AtsGetRequestListDto = {
  atsName?: InputMaybe<Scalars['String']['input']>;
  createdAtEndTime?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtSort?: InputMaybe<Scalars['Float']['input']>;
  createdAtStartTime?: InputMaybe<Scalars['DateTime']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  externalTenantId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  requestType?: InputMaybe<Scalars['String']['input']>;
  retryable?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAtSort?: InputMaybe<Scalars['Float']['input']>;
};

export type AtsGetTenantByCustomerDto = {
  atsName: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsGetTenantByIdDto = {
  _id: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsGetTenantsByAtsNameDto = {
  atsName: Scalars['String']['input'];
};

export type AtsGetTenantsByCustomerDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type AtsInfo = {
  metaData: MetaData;
  name: Scalars['String']['input'];
};

export type AtsPaginationEntity = {
  __typename?: 'AtsPaginationEntity';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type AtsRequestEntity = {
  __typename?: 'AtsRequestEntity';
  _id: Scalars['String']['output'];
  atsName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalTenantId: Scalars['String']['output'];
  extra?: Maybe<Scalars['JSON']['output']>;
  masterId: Scalars['String']['output'];
  payload: Scalars['String']['output'];
  requestCount: Scalars['String']['output'];
  requestType: Scalars['String']['output'];
  responses: Array<AtsRequestResponse>;
  retryCount: Scalars['String']['output'];
  retryable: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  tags: Array<AtsRequestTag>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AtsRequestListEntity = {
  __typename?: 'AtsRequestListEntity';
  data: Array<AtsRequestEntity>;
  pagination: AtsPaginationEntity;
};

export type AtsRequestResponse = {
  __typename?: 'AtsRequestResponse';
  data: Scalars['String']['output'];
  status: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
};

export type AtsRequestTag = {
  __typename?: 'AtsRequestTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AtsTemplateEntity = {
  __typename?: 'AtsTemplateEntity';
  _id: Scalars['String']['output'];
  atsName: Scalars['String']['output'];
  atsTemplateItems: Array<AtsTemplateItem>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AtsTemplateItem = {
  __typename?: 'AtsTemplateItem';
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  isReadOnly: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  uiComponent: Scalars['String']['output'];
  valueType: Scalars['String']['output'];
};

export type AtsTenantEntity = {
  __typename?: 'AtsTenantEntity';
  _id: Scalars['String']['output'];
  atsName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  credential?: Maybe<Scalars['JSON']['output']>;
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  externalTenantId: Scalars['String']['output'];
  extra?: Maybe<Scalars['JSON']['output']>;
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AtsUpdateTenantDto = {
  atsName: Scalars['String']['input'];
  credential?: InputMaybe<Scalars['JSON']['input']>;
  customerId: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  externalTenantId: Scalars['String']['input'];
  extra?: InputMaybe<Scalars['JSON']['input']>;
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type Auth = {
  __typename?: 'Auth';
  defaultAwsRegion?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Float']['output']>;
  isDeviceRemembered?: Maybe<Scalars['Boolean']['output']>;
  isPasswordResetSuccess?: Maybe<Scalars['Boolean']['output']>;
  isResendCodeSuccess?: Maybe<Scalars['Boolean']['output']>;
  isUnlockUserSuccess?: Maybe<Scalars['Boolean']['output']>;
  isVerifyEmailSuccess?: Maybe<Scalars['Boolean']['output']>;
  me?: Maybe<Me>;
  mfa?: Maybe<Scalars['Boolean']['output']>;
  minutesForRememberDevice?: Maybe<Scalars['Float']['output']>;
  ssoLoginUrl?: Maybe<Scalars['String']['output']>;
  tokenCheckResult?: Maybe<TokenCheckResult>;
};

export type AuthCheckPolicyDto = {
  /** e.g {"prn:edge:eu-west-1:66c8554a-a5cc-4e71-96ad-83c09b779c4a:62470bee60d86d0e25a077b8:62470bee60d86d7fd2a077bf:*:*": [ "edge:access", "ti:access" ]} */
  todos: Scalars['JSON']['input'];
};

export type AuthEmailLoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthForgetPasswordDto = {
  email: Scalars['String']['input'];
};

export type AuthGetResetPasswordLinkDto = {
  email: Scalars['String']['input'];
};

export type AuthGetUserRegionDto = {
  email: Scalars['String']['input'];
};

export type AuthLoginEntity = {
  __typename?: 'AuthLoginEntity';
  defaultAwsRegion?: Maybe<Scalars['String']['output']>;
  /** Access Token Expiration Date */
  expiresAt?: Maybe<Scalars['Float']['output']>;
  isDeviceRemembered?: Maybe<Scalars['Boolean']['output']>;
  isPasswordResetSuccess?: Maybe<Scalars['Boolean']['output']>;
  isResendCodeSuccess?: Maybe<Scalars['Boolean']['output']>;
  isUnlockUserSuccess?: Maybe<Scalars['Boolean']['output']>;
  isVerifyEmailSuccess?: Maybe<Scalars['Boolean']['output']>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  me?: Maybe<AuthMeEntity>;
  mfa?: Maybe<Scalars['Boolean']['output']>;
  minutesForRememberDevice?: Maybe<Scalars['Float']['output']>;
  ssoLoginUrl?: Maybe<Scalars['String']['output']>;
  tokenCheckResult?: Maybe<AuthTokenCheckResultEntity>;
};

export type AuthMfaLoginDto = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isRememberDevice?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthMeEntity = {
  __typename?: 'AuthMeEntity';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  customers: Array<AuthOrgCustomerEntity>;
  defaultCustomer: AuthOrgCustomerEntity;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groupIds: Array<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userType: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AuthOrgCustomerEntity = {
  __typename?: 'AuthOrgCustomerEntity';
  awsRegion: Scalars['String']['output'];
  customerDisplayName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  organizationDisplayName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  rootHierarchyId: Scalars['String']['output'];
};

export type AuthPolicyResult = {
  __typename?: 'AuthPolicyResult';
  policyResult: Scalars['JSON']['output'];
};

export type AuthRes = {
  __typename?: 'AuthRes';
  token: Scalars['String']['output'];
};

export type AuthResendMfaCodeDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResetPasswordDto = {
  password: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};

export type AuthResetPasswordLinkResultEntity = {
  __typename?: 'AuthResetPasswordLinkResultEntity';
  resetPasswordLink: Scalars['String']['output'];
};

export type AuthTokenCheckResultEntity = {
  __typename?: 'AuthTokenCheckResultEntity';
  isAccessTokenExpired: Scalars['Boolean']['output'];
  isRefreshTokenExpired: Scalars['Boolean']['output'];
};

export type AuthUnlockUserDto = {
  id: Scalars['String']['input'];
};

export type CandidateInfo = {
  location?: InputMaybe<Location>;
  personalInformation: PersonalInformation;
};

export type CheckNotificationEmailTemplateTypeEnableDto = {
  customerId: Scalars['String']['input'];
  emailTemplateType: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type CohortInfo = {
  customerId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  managers: Array<Manager>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Collector = {
  __typename?: 'Collector';
  _id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  definition: Definition;
  description?: Maybe<Scalars['String']['output']>;
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  version: Scalars['Float']['output'];
};

export type CollectorCommon = {
  __typename?: 'CollectorCommon';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  tags: Array<CollectorTag>;
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Float']['output'];
};

export type CollectorEdgeV2 = {
  __typename?: 'CollectorEdgeV2';
  _id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  definition: Definition;
  description?: Maybe<Scalars['String']['output']>;
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  version: Scalars['Float']['output'];
};

export type CollectorEdgeV3 = {
  __typename?: 'CollectorEdgeV3';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  definition: DefinitionV3;
  description: Scalars['String']['output'];
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  tags: Array<CollectorTag>;
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Float']['output'];
};

export type CollectorEdgeWithProduct = {
  __typename?: 'CollectorEdgeWithProduct';
  _id?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  definition: Definition;
  description?: Maybe<Scalars['String']['output']>;
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  version: Scalars['Float']['output'];
};

export type CollectorTag = {
  __typename?: 'CollectorTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CommonAddPolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  statements: Array<CommonAddPolicyStatementDto>;
};

export type CommonAddPolicyStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type CommonCandidateAssessment = {
  __typename?: 'CommonCandidateAssessment';
  assessmentId: Scalars['String']['output'];
};

export type CommonCandidateAtsApplicationInputDto = {
  atsInfo: CommonCandidateAtsInfoDto;
  candidateInfo: CommonCandidateInfoDto;
  cohortInfo: CommonCandidateCohortInfoDto;
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  predictorMasterId: Scalars['String']['input'];
};

export type CommonCandidateAtsApplicationInputRequestDto = {
  atsApplicationInput: CommonCandidateAtsApplicationInputDto;
};

export type CommonCandidateAtsInfoDto = {
  metaData: CommonCandidateMetaDataDto;
  name: Scalars['String']['input'];
};

export type CommonCandidateCohortInfoDto = {
  customerId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  managers: Array<CommonCandidateManagerDto>;
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CommonCandidateEdgeCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type CommonCandidateInfoDto = {
  location?: InputMaybe<CommonCandidateLocationDto>;
  personalInformation: CommonCandidatePersonalInformationDto;
};

export type CommonCandidateLocationDto = {
  address: Scalars['String']['input'];
  coordinate: CommonCandidateEdgeCoordinateDto;
};

export type CommonCandidateManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CommonCandidateMetaDataDto = {
  invitedBy: Scalars['String']['input'];
  workflowId: Scalars['String']['input'];
};

export type CommonCandidatePersonalInformationDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type CommonCheckPolicyIdentity = {
  groupIds: Array<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type CommonFilterUpdatePolicyDto = {
  policyId: Scalars['String']['input'];
};

export type CommonGetPermissionTabStateDto = {
  groupId: Scalars['String']['input'];
};

export type CommonGetPublicTiInformationDto = {
  applicationId: Scalars['String']['input'];
};

export type CommonPermissionTabFormEntity = {
  __typename?: 'CommonPermissionTabFormEntity';
  advanced: Array<CommonPolicyRuleStateEntity>;
  basic: CommonPolicyRuleStateEntity;
};

export type CommonPermissionTabStateDto = {
  advanced?: InputMaybe<Array<CommonPolicyRuleStateDto>>;
  basic: CommonPolicyRuleStateDto;
};

export type CommonPermissionTabStateEntity = {
  __typename?: 'CommonPermissionTabStateEntity';
  ROLE_ACTION_STATE_MAPPINGS: Scalars['JSON']['output'];
  ROLE_TEMPLATE_OPTIONS: Scalars['JSON']['output'];
  SECTION_ACTIONS_MAPPINGS: Scalars['JSON']['output'];
  formState: CommonPermissionTabFormEntity;
};

export type CommonPermissionsConfigEntity = {
  __typename?: 'CommonPermissionsConfigEntity';
  config: Scalars['JSON']['output'];
};

export type CommonPolicyAuthorizeDto = {
  identity: CommonCheckPolicyIdentity;
  todos: Scalars['JSON']['input'];
};

export type CommonPolicyEntity = {
  __typename?: 'CommonPolicyEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  statements: Array<CommonPolicyStatementEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommonPolicyResult = {
  __typename?: 'CommonPolicyResult';
  policyResult: Scalars['JSON']['output'];
};

export type CommonPolicyRuleCustomerStateDto = {
  awsRegion?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyIds: Array<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type CommonPolicyRuleCustomerStateEntity = {
  __typename?: 'CommonPolicyRuleCustomerStateEntity';
  awsRegion?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  hierarchyIds: Array<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
};

export type CommonPolicyRuleStateDto = {
  actions: Array<Scalars['String']['input']>;
  customers: Array<CommonPolicyRuleCustomerStateDto>;
};

export type CommonPolicyRuleStateEntity = {
  __typename?: 'CommonPolicyRuleStateEntity';
  actions: Array<Scalars['String']['output']>;
  customers: Array<CommonPolicyRuleCustomerStateEntity>;
};

export type CommonPolicyStatementEntity = {
  __typename?: 'CommonPolicyStatementEntity';
  actions: Array<Scalars['String']['output']>;
  effect: Scalars['String']['output'];
  resources: Array<Scalars['String']['output']>;
};

export type CommonPublicTiApplicationAssessmentEntity = {
  __typename?: 'CommonPublicTIApplicationAssessmentEntity';
  _id: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type CommonPublicTiApplicationEntity = {
  __typename?: 'CommonPublicTIApplicationEntity';
  _id: Scalars['String']['output'];
  assessments: Array<CommonPublicTiApplicationAssessmentEntity>;
  customerId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  isCandidatePurged: Scalars['Boolean']['output'];
  organizationId: Scalars['String']['output'];
  stageId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type CommonPublicTiCustomerInfoEntity = {
  __typename?: 'CommonPublicTICustomerInfoEntity';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CommonPublicTiInformationEntity = {
  __typename?: 'CommonPublicTIInformationEntity';
  application: CommonPublicTiApplicationEntity;
  customerInfo: CommonPublicTiCustomerInfoEntity;
  workflows: Array<CommonPublicTiWorkflowEntity>;
};

export type CommonPublicTiWorkflowEntity = {
  __typename?: 'CommonPublicTIWorkflowEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  defaultLanguage?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  stages: Array<CommonPublicTiWorkflowStage>;
  updatedAt: Scalars['String']['output'];
};

export type CommonPublicTiWorkflowStage = {
  __typename?: 'CommonPublicTIWorkflowStage';
  _id: Scalars['String']['output'];
  assessmentPackageName?: Maybe<Scalars['String']['output']>;
  externalAssessmentPackageId: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  product: Scalars['String']['output'];
  provider: Scalars['String']['output'];
};

export type CommonTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CommonUpdatePermissionTabPoliciesDto = {
  groupId: Scalars['String']['input'];
  permissionTabState: CommonPermissionTabStateDto;
};

export type CommonUpdatePolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  statements?: InputMaybe<Array<CommonUpdatePolicyStatementDto>>;
  tags?: InputMaybe<Array<CommonTagDto>>;
};

export type CommonUpdatePolicyStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type Content = {
  __typename?: 'Content';
  types: Array<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type CreateSmsCreditsDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  awsRegion: Scalars['String']['output'];
  customerDisplayName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  organizationDisplayName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  rootHierarchyId: Scalars['String']['output'];
};

export type CustomerEdgeV3 = {
  __typename?: 'CustomerEdgeV3';
  awsRegion: Scalars['String']['output'];
  customerDisplayName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  rootHierarchyId: Scalars['String']['output'];
};

export type CustomerEntity = {
  __typename?: 'CustomerEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  awsRegion: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  tags?: Maybe<Array<TagEntity>>;
  uniqueName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Definition = {
  __typename?: 'Definition';
  dialogFlow: Scalars['JSON']['output'];
  nonPiiPreamble?: Maybe<Scalars['JSON']['output']>;
  postamble: Scalars['JSON']['output'];
  preamble: Scalars['JSON']['output'];
};

export type DefinitionV3 = {
  __typename?: 'DefinitionV3';
  dialogFlow: Scalars['JSON']['output'];
  nonPiiPreamble: Scalars['JSON']['output'];
  postamble: Scalars['JSON']['output'];
  preamble: Scalars['JSON']['output'];
};

export type EdgeAddPolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  statements: Array<EdgeAddPolicyStatementDto>;
};

export type EdgeAddPolicyStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type EdgeCheckPolicyIdentity = {
  groupIds: Array<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type EdgeFilterUpdatePolicyDto = {
  policyId: Scalars['String']['input'];
};

export type EdgeGetUserRequestDto = {
  email: Scalars['String']['input'];
};

export type EdgePolicyAuthorizeDto = {
  identity: EdgeCheckPolicyIdentity;
  todos: Scalars['JSON']['input'];
};

export type EdgePolicyEntity = {
  __typename?: 'EDGEPolicyEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  statements: Array<EdgePolicyStatementEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type EdgePolicyResult = {
  __typename?: 'EDGEPolicyResult';
  policyResult: Scalars['JSON']['output'];
};

export type EdgePolicyStatementEntity = {
  __typename?: 'EDGEPolicyStatementEntity';
  actions: Array<Scalars['String']['output']>;
  effect: Scalars['String']['output'];
  resources: Array<Scalars['String']['output']>;
};

export type EdgeTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type EdgeUpdatePolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  statements?: InputMaybe<Array<EdgeUpdatePolicyStatementDto>>;
  tags?: InputMaybe<Array<EdgeTagDto>>;
};

export type EdgeUpdatePolicyStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type EdgeBffCustomer = {
  __typename?: 'EdgeBffCustomer';
  awsRegion: Scalars['String']['output'];
  customerDisplayName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  organizationDisplayName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  rootHierarchyId: Scalars['String']['output'];
};

export type EdgeCoordinate = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type ExistUserDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type FiAddAssessmentFromCacheRes = {
  __typename?: 'FIAddAssessmentFromCacheRes';
  assessmentId: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FiAddBrandingInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  font?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<FiTagInput>>;
  theme?: InputMaybe<Array<FiThemePropertyInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FiAddCandidateFromCacheRes = {
  __typename?: 'FIAddCandidateFromCacheRes';
  candidateId: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FiAddCohortDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  externalId: Scalars['String']['input'];
  genericAssessmentLink?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  isAts: Scalars['Boolean']['input'];
  jobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<FiCohortLocationDto>;
  managers?: InputMaybe<Array<FiCohortManagerDto>>;
  organizationId: Scalars['String']['input'];
  ownerUserId?: InputMaybe<Scalars['String']['input']>;
  predictorId: Scalars['String']['input'];
  predictorMasterId: Scalars['String']['input'];
  predictorVersion: Scalars['Float']['input'];
  roleFamily: FiRoleFamilyInput;
  scoreLevels: Array<FiScoreLevelInput>;
  tags?: InputMaybe<Array<FiTagInput>>;
  title: Scalars['String']['input'];
};

export type FiAgentMessageData = FiButtonGroupQuestion | FiHint | FiQuestion;

export type FiAgentMessageDataInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  contents: Array<FiQuestionContentInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<FiAgentMessageDataOptionInput>>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  roleFamily?: InputMaybe<FiRoleFamilyInput>;
  rules?: InputMaybe<Array<FiQuestionRuleInput>>;
  tags?: InputMaybe<Array<FiTagInput>>;
  traits?: InputMaybe<Array<FiTraitInput>>;
  types: Array<Scalars['String']['input']>;
  usageWhitelist?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['Float']['input']>;
};

export type FiAgentMessageDataOptionInput = {
  id: Scalars['String']['input'];
  style?: InputMaybe<FiStyleInput>;
  text: Scalars['String']['input'];
  triggers?: InputMaybe<Array<FiTriggerInput>>;
  value: Scalars['String']['input'];
};

export type FiAnswer = {
  __typename?: 'FIAnswer';
  _id: Scalars['String']['output'];
  extra?: Maybe<Array<FiAnswerExtraInfo>>;
  question: FiAnswerQuestion;
  text: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FiAnswerExtraInfo = {
  __typename?: 'FIAnswerExtraInfo';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['JSON']['output'];
};

export type FiAnswerExtraInfoInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type FiAnswerQuestion = FiButtonGroupQuestion | FiQuestion;

export type FiAnswerQuestionInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  contents: Array<FiQuestionContentInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<FiAnswerQuestionOptionInput>>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  roleFamily?: InputMaybe<FiRoleFamilyInput>;
  rules?: InputMaybe<Array<FiQuestionRuleInput>>;
  tags?: InputMaybe<Array<FiTagInput>>;
  traits?: InputMaybe<Array<FiTraitInput>>;
  types: Array<Scalars['String']['input']>;
  usageWhitelist?: InputMaybe<Array<Scalars['String']['input']>>;
  version?: InputMaybe<Scalars['Float']['input']>;
};

export type FiAnswerQuestionOptionInput = {
  id: Scalars['String']['input'];
  style?: InputMaybe<FiStyleInput>;
  text: Scalars['String']['input'];
  triggers?: InputMaybe<Array<FiTriggerInput>>;
  value: Scalars['String']['input'];
};

export type FiArchiveCohortsByExternalIdDto = {
  customerId: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiAssessment = {
  __typename?: 'FIAssessment';
  _id: Scalars['String']['output'];
  assessmentContent?: Maybe<FiAssessmentContent>;
  assessmentLink: Scalars['String']['output'];
  atsInfo?: Maybe<FiAtsInfo>;
  backupReview?: Maybe<FiAssessmentBackupReview>;
  baseAssessmentId?: Maybe<Scalars['String']['output']>;
  candidateIPAddress?: Maybe<Scalars['String']['output']>;
  candidateId: Scalars['String']['output'];
  chatLogs?: Maybe<Array<FiMessage>>;
  cohortId: Scalars['String']['output'];
  consentedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  customerSatisfaction?: Maybe<FiCustomerSatisfaction>;
  externalApplicantId?: Maybe<Scalars['String']['output']>;
  externalApplicationId?: Maybe<Scalars['String']['output']>;
  externalAssessmentId?: Maybe<Scalars['String']['output']>;
  externalCohortId?: Maybe<Scalars['String']['output']>;
  flags?: Maybe<FiAssessmentFlag>;
  hierarchyId: Scalars['String']['output'];
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  isSMSConsented?: Maybe<Scalars['Boolean']['output']>;
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  language: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  personalityInsights?: Maybe<FiAssessmentPersonalityInsight>;
  predictedAt?: Maybe<Scalars['DateTime']['output']>;
  predictorId: Scalars['String']['output'];
  predictorMasterId: Scalars['String']['output'];
  predictorVersion: Scalars['Float']['output'];
  product: Scalars['String']['output'];
  purgedAt?: Maybe<Scalars['DateTime']['output']>;
  results?: Maybe<Array<FiAssessmentPredictionResult>>;
  reuse?: Maybe<Scalars['Boolean']['output']>;
  reusedDraftAssessmentId?: Maybe<Scalars['String']['output']>;
  review?: Maybe<FiAssessmentReview>;
  sessionId: Scalars['String']['output'];
  smsConsentedAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  submittedAt?: Maybe<Scalars['DateTime']['output']>;
  tags?: Maybe<Array<FiTag>>;
  timeTaken?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  videosDeletedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FiAssessmentAgcTestInput = {
  aggregatedResult: FiAssessmentFlagAgcTestAggregatedResultInput;
  questionBasedResult: Array<FiAssessmentFlagAgcTestQuestionBasedResultInput>;
};

export type FiAssessmentBackupReview = {
  __typename?: 'FIAssessmentBackupReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  details: Array<FiAssessmentReviewDetail>;
  rating?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FiAssessmentContent = {
  __typename?: 'FIAssessmentContent';
  dialogFlow: Array<FiAgentMessageData>;
};

export type FiAssessmentContentInput = {
  dialogFlow: Array<FiAgentMessageDataInput>;
};

export type FiAssessmentFlag = {
  __typename?: 'FIAssessmentFlag';
  agcTest?: Maybe<FiAssessmentFlagAgcTest>;
  garbageType: Scalars['Float']['output'];
  isDummyPrediction?: Maybe<Scalars['Float']['output']>;
  isLowQualityText: Scalars['Float']['output'];
  lengthTest: FiAssessmentFlagLengthTest;
  nonSourceLanguageTest?: Maybe<FiAssessmentFlagNonSourceLanguageTest>;
  outlierTest?: Maybe<FiAssessmentFlagOutlierTest>;
  plagiarismTest: FiAssessmentFlagPlagiarismTest;
  profanityTest: FiAssessmentFlagProfanityTest;
  textQualityFilter: FiAssessmentFlagTextQualityFilter;
};

export type FiAssessmentFlagAgcTest = {
  __typename?: 'FIAssessmentFlagAgcTest';
  aggregatedResult: FiAssessmentFlagAgcTestAggregatedResult;
  questionBasedResult: Array<FiAssessmentFlagAgcTestQuestionBasedResult>;
};

export type FiAssessmentFlagAgcTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagAgcTestAggregatedResult';
  agcModelThreshold: Scalars['Float']['output'];
  agcModelVersion: Scalars['String']['output'];
  aggregatedResultThreshold?: Maybe<Scalars['Float']['output']>;
  percentageOfAgcAnswer: Scalars['Float']['output'];
  result: Scalars['Boolean']['output'];
};

export type FiAssessmentFlagAgcTestAggregatedResultInput = {
  agcModelThreshold: Scalars['Float']['input'];
  agcModelVersion: Scalars['String']['input'];
  aggregatedResultThreshold?: InputMaybe<Scalars['Float']['input']>;
  percentageOfAgcAnswer: Scalars['Float']['input'];
  result: Scalars['Boolean']['input'];
};

export type FiAssessmentFlagAgcTestQuestionBasedResult = {
  __typename?: 'FIAssessmentFlagAgcTestQuestionBasedResult';
  agcCode: Scalars['Float']['output'];
  isAgc: Scalars['Boolean']['output'];
  originalScore: Scalars['Float']['output'];
  perturbedScore: Scalars['Float']['output'];
  questionId: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type FiAssessmentFlagAgcTestQuestionBasedResultInput = {
  agcCode: Scalars['Float']['input'];
  isAgc: Scalars['Boolean']['input'];
  originalScore: Scalars['Float']['input'];
  perturbedScore: Scalars['Float']['input'];
  questionId: Scalars['String']['input'];
  score: Scalars['Float']['input'];
};

export type FiAssessmentFlagInput = {
  agcTest?: InputMaybe<FiAssessmentAgcTestInput>;
  garbageType: Scalars['Float']['input'];
  isDummyPrediction: Scalars['Float']['input'];
  isLowQualityText: Scalars['Float']['input'];
  lengthTest: FiAssessmentFlagLengthTestInput;
  nonSourceLanguageTest?: InputMaybe<FiAssessmentFlagNonSourceLanguageTestInput>;
  outlierTest?: InputMaybe<FiAssessmentFlagOutlierTestInput>;
  plagiarismTest: FiAssessmentFlagPlagiarismTestInput;
  profanityTest: FiAssessmentFlagProfanityTestInput;
  textQualityFilter: FiAssessmentFlagTextQualityFilterInput;
};

export type FiAssessmentFlagLengthTest = {
  __typename?: 'FIAssessmentFlagLengthTest';
  aggregatedResult: FiAssessmentFlagLengthTestAggregatedResult;
};

export type FiAssessmentFlagLengthTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagLengthTestAggregatedResult';
  responseLength: Scalars['Float']['output'];
  result: Scalars['Float']['output'];
  resultInText: Scalars['String']['output'];
  threshold: Scalars['Float']['output'];
};

export type FiAssessmentFlagLengthTestAggregatedResultInput = {
  responseLength: Scalars['Float']['input'];
  result: Scalars['Float']['input'];
  resultInText: Scalars['String']['input'];
  threshold: Scalars['Float']['input'];
};

export type FiAssessmentFlagLengthTestInput = {
  aggregatedResult: FiAssessmentFlagLengthTestAggregatedResultInput;
};

export type FiAssessmentFlagNonSourceLanguageTest = {
  __typename?: 'FIAssessmentFlagNonSourceLanguageTest';
  aggregatedResult: FiAssessmentFlagNonSourceLanguageTestAggregatedResult;
  metadata?: Maybe<Array<FiAssessmentFlagNonSourceLanguageTestMetadata>>;
  questionBasedResult: Array<FiAssessmentFlagNonSourceLanguageTestQuestionBasedResult>;
};

export type FiAssessmentFlagNonSourceLanguageTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagNonSourceLanguageTestAggregatedResult';
  result: Scalars['Boolean']['output'];
  score: Scalars['Float']['output'];
  threshold: Scalars['Float']['output'];
};

export type FiAssessmentFlagNonSourceLanguageTestAggregatedResultInput = {
  result: Scalars['Boolean']['input'];
  score: Scalars['Float']['input'];
  threshold: Scalars['Float']['input'];
};

export type FiAssessmentFlagNonSourceLanguageTestInput = {
  aggregatedResult: FiAssessmentFlagNonSourceLanguageTestAggregatedResultInput;
  metadata?: InputMaybe<Array<FiAssessmentFlagNonSourceLanguageTestMetadataInput>>;
  questionBasedResult: Array<FiAssessmentFlagNonSourceLanguageTestQuestionBasedResultInput>;
};

export type FiAssessmentFlagNonSourceLanguageTestMetadata = {
  __typename?: 'FIAssessmentFlagNonSourceLanguageTestMetadata';
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FiAssessmentFlagNonSourceLanguageTestMetadataInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  value: Scalars['JSON']['input'];
};

export type FiAssessmentFlagNonSourceLanguageTestQuestionBasedResult = {
  __typename?: 'FIAssessmentFlagNonSourceLanguageTestQuestionBasedResult';
  predictedLanguage: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  result: Scalars['Boolean']['output'];
  sourceLanguage: Scalars['String']['output'];
};

export type FiAssessmentFlagNonSourceLanguageTestQuestionBasedResultInput = {
  predictedLanguage: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  result: Scalars['Boolean']['input'];
  sourceLanguage: Scalars['String']['input'];
};

export type FiAssessmentFlagOutlierTest = {
  __typename?: 'FIAssessmentFlagOutlierTest';
  aggregatedResult: FiAssessmentFlagOutlierTestAggregatedResult;
  questionBasedResult: Array<FiAssessmentFlagOutlierTestQuestionBasedResult>;
};

export type FiAssessmentFlagOutlierTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagOutlierTestAggregatedResult';
  atLeastOneResponseOutlier: Scalars['Boolean']['output'];
  result: Scalars['Float']['output'];
  thresholdUsed: Scalars['Float']['output'];
};

export type FiAssessmentFlagOutlierTestAggregatedResultInput = {
  atLeastOneResponseOutlier: Scalars['Boolean']['input'];
  result: Scalars['Float']['input'];
  thresholdUsed: Scalars['Float']['input'];
};

export type FiAssessmentFlagOutlierTestInput = {
  aggregatedResult: FiAssessmentFlagOutlierTestAggregatedResultInput;
  questionBasedResult: Array<FiAssessmentFlagOutlierTestQuestionBasedResultInput>;
};

export type FiAssessmentFlagOutlierTestQuestionBasedResult = {
  __typename?: 'FIAssessmentFlagOutlierTestQuestionBasedResult';
  isOutlier: Scalars['Boolean']['output'];
  outlierScore: Scalars['Float']['output'];
  questionId: Scalars['String']['output'];
  result: Scalars['Float']['output'];
};

export type FiAssessmentFlagOutlierTestQuestionBasedResultInput = {
  isOutlier: Scalars['Boolean']['input'];
  outlierScore: Scalars['Float']['input'];
  questionId: Scalars['String']['input'];
  result: Scalars['Float']['input'];
};

export type FiAssessmentFlagPlagiarismTest = {
  __typename?: 'FIAssessmentFlagPlagiarismTest';
  aggregatedResult: FiAssessmentFlagPlagiarismTestAggregatedResult;
  questionBasedResult: Array<FiAssessmentFlagPlagiarismTestQuestionBasedResult>;
};

export type FiAssessmentFlagPlagiarismTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagPlagiarismTestAggregatedResult';
  maxJaccardSimilarity: Scalars['Float']['output'];
  positiveFTQCount: Scalars['Float']['output'];
  result: Scalars['Float']['output'];
  resultFactoredInSelfPlagiarism: Scalars['Float']['output'];
  resultInText: Scalars['String']['output'];
};

export type FiAssessmentFlagPlagiarismTestAggregatedResultInput = {
  maxJaccardSimilarity: Scalars['Float']['input'];
  positiveFTQCount: Scalars['Float']['input'];
  result: Scalars['Float']['input'];
  resultFactoredInSelfPlagiarism: Scalars['Float']['input'];
  resultInText: Scalars['String']['input'];
};

export type FiAssessmentFlagPlagiarismTestInput = {
  aggregatedResult: FiAssessmentFlagPlagiarismTestAggregatedResultInput;
  questionBasedResult: Array<FiAssessmentFlagPlagiarismTestQuestionBasedResultInput>;
};

export type FiAssessmentFlagPlagiarismTestQuestionBasedResult = {
  __typename?: 'FIAssessmentFlagPlagiarismTestQuestionBasedResult';
  atLeastOneMatchNotSelfPlagiarism: Scalars['Boolean']['output'];
  matches: Array<FiAssessmentFlagPlagiarismTestQuestionBasedResultMatch>;
  questionId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  typeFactoredInSelfPlagiarism: Scalars['String']['output'];
};

export type FiAssessmentFlagPlagiarismTestQuestionBasedResultInput = {
  atLeastOneMatchNotSelfPlagiarism: Scalars['Boolean']['input'];
  matches: Array<FiAssessmentFlagPlagiarismTestQuestionBasedResultMatchInput>;
  questionId: Scalars['String']['input'];
  type: Scalars['String']['input'];
  typeFactoredInSelfPlagiarism: Scalars['String']['input'];
};

export type FiAssessmentFlagPlagiarismTestQuestionBasedResultMatch = {
  __typename?: 'FIAssessmentFlagPlagiarismTestQuestionBasedResultMatch';
  answer: Scalars['String']['output'];
  answerId: Scalars['String']['output'];
  answerIndex: Scalars['String']['output'];
  candidateId: Scalars['String']['output'];
  cohortId: Scalars['String']['output'];
  consentedAt: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  eUUID: Scalars['String']['output'];
  externalCohortId: Scalars['String']['output'];
  fnUUID: Scalars['String']['output'];
  jaccardSimilarity: Scalars['Float']['output'];
  lnUUID: Scalars['String']['output'];
  pnUUID: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  region: Scalars['String']['output'];
  selfPlagiarism: Scalars['Boolean']['output'];
  source: Scalars['String']['output'];
  uniqueId: Scalars['String']['output'];
  uniqueIdType: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type FiAssessmentFlagPlagiarismTestQuestionBasedResultMatchInput = {
  answer: Scalars['String']['input'];
  answerId: Scalars['String']['input'];
  answerIndex: Scalars['String']['input'];
  candidateId: Scalars['String']['input'];
  cohortId: Scalars['String']['input'];
  consentedAt: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  eUUID: Scalars['String']['input'];
  externalCohortId: Scalars['String']['input'];
  fnUUID: Scalars['String']['input'];
  jaccardSimilarity: Scalars['Float']['input'];
  lnUUID: Scalars['String']['input'];
  pnUUID: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
  region: Scalars['String']['input'];
  selfPlagiarism: Scalars['Boolean']['input'];
  source: Scalars['String']['input'];
  uniqueId: Scalars['String']['input'];
  uniqueIdType: Scalars['String']['input'];
  updatedAt: Scalars['String']['input'];
};

export type FiAssessmentFlagProfanityTest = {
  __typename?: 'FIAssessmentFlagProfanityTest';
  aggregatedResult: FiAssessmentFlagProfanityTestAggregatedResult;
  questionBasedResult: Array<FiAssessmentFlagProfanityTestQuestionBasedResult>;
};

export type FiAssessmentFlagProfanityTestAggregatedResult = {
  __typename?: 'FIAssessmentFlagProfanityTestAggregatedResult';
  result: Scalars['Float']['output'];
};

export type FiAssessmentFlagProfanityTestAggregatedResultInput = {
  result: Scalars['Float']['input'];
};

export type FiAssessmentFlagProfanityTestInput = {
  aggregatedResult: FiAssessmentFlagProfanityTestAggregatedResultInput;
  questionBasedResult: Array<FiAssessmentFlagProfanityTestQuestionBasedResultInput>;
};

export type FiAssessmentFlagProfanityTestQuestionBasedResult = {
  __typename?: 'FIAssessmentFlagProfanityTestQuestionBasedResult';
  questionId: Scalars['String']['output'];
  result: Scalars['Float']['output'];
};

export type FiAssessmentFlagProfanityTestQuestionBasedResultInput = {
  questionId: Scalars['String']['input'];
  result: Scalars['Float']['input'];
};

export type FiAssessmentFlagTextQualityFilter = {
  __typename?: 'FIAssessmentFlagTextQualityFilter';
  tqfFilterThreshold: Scalars['Float']['output'];
  tqfGrammarErrors: Scalars['Float']['output'];
  tqfGrammarErrorsPerWord: Scalars['Float']['output'];
  tqfInfoLength: Scalars['Float']['output'];
  tqfInfoLengthPerQuestion: Scalars['Float']['output'];
  tqfNumOfFtq: Scalars['Float']['output'];
  tqfPenaltyValue: Scalars['Float']['output'];
  tqfRuleName: Scalars['String']['output'];
  tqfSentCount: Scalars['Float']['output'];
  tqfUppercasePerWord: Scalars['Float']['output'];
};

export type FiAssessmentFlagTextQualityFilterInput = {
  tqfFilterThreshold: Scalars['Float']['input'];
  tqfGrammarErrors: Scalars['Float']['input'];
  tqfGrammarErrorsPerWord: Scalars['Float']['input'];
  tqfInfoLength: Scalars['Float']['input'];
  tqfInfoLengthPerQuestion: Scalars['Float']['input'];
  tqfNumOfFtq: Scalars['Float']['input'];
  tqfPenaltyValue: Scalars['Float']['input'];
  tqfRuleName: Scalars['String']['input'];
  tqfSentCount: Scalars['Float']['input'];
  tqfUppercasePerWord: Scalars['Float']['input'];
};

export type FiAssessmentInfoForReuseEntity = {
  __typename?: 'FIAssessmentInfoForReuseEntity';
  _id: Scalars['String']['output'];
  product: Scalars['String']['output'];
  reuse?: Maybe<Scalars['Boolean']['output']>;
  status: Scalars['String']['output'];
};

export type FiAssessmentInput = {
  assessmentContent?: InputMaybe<FiAssessmentContentInput>;
  atsInfo?: InputMaybe<FiAtsInfoInput>;
  baseAssessmentId?: InputMaybe<Scalars['String']['input']>;
  candidateId: Scalars['String']['input'];
  chatLogs?: InputMaybe<Array<FiAssessmentMessageInput>>;
  cohortId: Scalars['String']['input'];
  consentedAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  customerSatisfaction?: InputMaybe<FiCustomerSatisfactionInput>;
  externalApplicantId?: InputMaybe<Scalars['String']['input']>;
  externalApplicationId?: InputMaybe<Scalars['String']['input']>;
  externalAssessmentId?: InputMaybe<Scalars['String']['input']>;
  externalCohortId?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<FiAssessmentFlagInput>;
  hierarchyId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  personalityInsights?: InputMaybe<FiAssessmentPersonalityInsightInput>;
  predictorId: Scalars['String']['input'];
  predictorMasterId: Scalars['String']['input'];
  predictorVersion: Scalars['Float']['input'];
  product: Scalars['String']['input'];
  results?: InputMaybe<Array<FiAssessmentPredictionResultInput>>;
  reuse?: InputMaybe<Scalars['Boolean']['input']>;
  reusedDraftAssessmentId?: InputMaybe<Scalars['String']['input']>;
  sessionId: Scalars['String']['input'];
  status: Scalars['String']['input'];
  submittedAt?: InputMaybe<Scalars['DateTime']['input']>;
  tags?: InputMaybe<Array<FiTagInput>>;
  timeTaken?: InputMaybe<Scalars['Float']['input']>;
};

export type FiAssessmentMessageInput = {
  data: FiMessageDataInput;
  id: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  sender: Scalars['String']['input'];
  time: Scalars['DateTime']['input'];
  timeTaken?: InputMaybe<Scalars['Float']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type FiAssessmentPersonalityGeneratorFlag = {
  __typename?: 'FIAssessmentPersonalityGeneratorFlag';
  type: Scalars['String']['output'];
};

export type FiAssessmentPersonalityGeneratorFlagInput = {
  type: Scalars['String']['input'];
};

export type FiAssessmentPersonalityInsight = {
  __typename?: 'FIAssessmentPersonalityInsight';
  coachingTips: FiAssessmentPersonalityInsightCoachingTip;
  generatorFlags: FiAssessmentPersonalityGeneratorFlag;
  traitTexts: Array<FiAssessmentPersonalityInsightTraitText>;
};

export type FiAssessmentPersonalityInsightCoachingTip = {
  __typename?: 'FIAssessmentPersonalityInsightCoachingTip';
  highest: FiAssessmentPersonalityInsightCoachingTipHighest;
};

export type FiAssessmentPersonalityInsightCoachingTipHighest = {
  __typename?: 'FIAssessmentPersonalityInsightCoachingTipHighest';
  actions: Array<FiAssessmentPersonalityInsightCoachingTipHighestAction>;
  reflections: Array<FiAssessmentPersonalityInsightCoachingTipHighestReflection>;
};

export type FiAssessmentPersonalityInsightCoachingTipHighestAction = {
  __typename?: 'FIAssessmentPersonalityInsightCoachingTipHighestAction';
  value: Scalars['String']['output'];
};

export type FiAssessmentPersonalityInsightCoachingTipHighestActionInput = {
  value: Scalars['String']['input'];
};

export type FiAssessmentPersonalityInsightCoachingTipHighestInput = {
  actions: Array<FiAssessmentPersonalityInsightCoachingTipHighestActionInput>;
  reflections: Array<FiAssessmentPersonalityInsightCoachingTipHighestReflectionInput>;
};

export type FiAssessmentPersonalityInsightCoachingTipHighestReflection = {
  __typename?: 'FIAssessmentPersonalityInsightCoachingTipHighestReflection';
  value: Scalars['String']['output'];
};

export type FiAssessmentPersonalityInsightCoachingTipHighestReflectionInput = {
  value: Scalars['String']['input'];
};

export type FiAssessmentPersonalityInsightCoachingTipInput = {
  highest: FiAssessmentPersonalityInsightCoachingTipHighestInput;
};

export type FiAssessmentPersonalityInsightInput = {
  coachingTips: FiAssessmentPersonalityInsightCoachingTipInput;
  generatorFlags: FiAssessmentPersonalityGeneratorFlagInput;
  traitTexts: Array<FiAssessmentPersonalityInsightTraitTextInput>;
};

export type FiAssessmentPersonalityInsightTraitText = {
  __typename?: 'FIAssessmentPersonalityInsightTraitText';
  insightTextSecondPerson: Scalars['String']['output'];
  insightTextThirdPerson: Scalars['String']['output'];
  trait: Scalars['String']['output'];
  traitBasedOn: Scalars['String']['output'];
  traitValue: Scalars['Float']['output'];
};

export type FiAssessmentPersonalityInsightTraitTextInput = {
  insightTextSecondPerson: Scalars['String']['input'];
  insightTextThirdPerson: Scalars['String']['input'];
  trait: Scalars['String']['input'];
  traitBasedOn: Scalars['String']['input'];
  traitValue: Scalars['Float']['input'];
};

export type FiAssessmentPredictionResult = {
  __typename?: 'FIAssessmentPredictionResult';
  kpiModelId: Scalars['String']['output'];
  kpiModelMasterId: Scalars['String']['output'];
  model: Scalars['String']['output'];
  modelEndpoint: Scalars['String']['output'];
  modelInsight: FiAssessmentPredictionResultModelInsight;
  modelPrediction: FiAssessmentPredictionResultModelPrediction;
  predictionScore: Scalars['Float']['output'];
  predictionScorePercentage: Scalars['Float']['output'];
  recommendation: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultInput = {
  kpiModelId: Scalars['String']['input'];
  kpiModelMasterId: Scalars['String']['input'];
  model: Scalars['String']['input'];
  modelEndpoint: Scalars['String']['input'];
  modelInsight: FiAssessmentPredictionResultModelInsightInput;
  modelPrediction: FiAssessmentPredictionResultModelPredictionInput;
  predictionScore: Scalars['Float']['input'];
  predictionScorePercentage: Scalars['Float']['input'];
  recommendation: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelInsight = {
  __typename?: 'FIAssessmentPredictionResultModelInsight';
  communicationSkills: FiAssessmentPredictionResultModelInsightCommunicationSkill;
  personalityTraits: Array<FiAssessmentPredictionResultModelInsightPersonalityTrait>;
  predictionScore: FiAssessmentPredictionResultModelInsightPredictionScore;
  suggestedInterviewQuestions: Array<FiAssessmentPredictionResultModelInsightSuggestedInterviewQuestion>;
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkill = {
  __typename?: 'FIAssessmentPredictionResultModelInsightCommunicationSkill';
  flags: FiAssessmentPredictionResultModelInsightCommunicationSkillFlag;
  scores: Array<FiAssessmentPredictionResultModelInsightCommunicationSkillScore>;
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillFlag = {
  __typename?: 'FIAssessmentPredictionResultModelInsightCommunicationSkillFlag';
  alertText: Scalars['String']['output'];
  jobFamilyPercentileOfLanguageFluencyScore: Scalars['Float']['output'];
  jobFamilyPercentileOfVerbalReasoningScore: Scalars['Float']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillFlagInput = {
  alertText: Scalars['String']['input'];
  jobFamilyPercentileOfLanguageFluencyScore: Scalars['Float']['input'];
  jobFamilyPercentileOfVerbalReasoningScore: Scalars['Float']['input'];
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillInput = {
  flags: FiAssessmentPredictionResultModelInsightCommunicationSkillFlagInput;
  scores: Array<FiAssessmentPredictionResultModelInsightCommunicationSkillScoreInput>;
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillScore = {
  __typename?: 'FIAssessmentPredictionResultModelInsightCommunicationSkillScore';
  globalPercentile?: Maybe<Scalars['Float']['output']>;
  jobFamilyPercentile: Scalars['Float']['output'];
  likelihood: Array<FiAssessmentPredictionResultModelInsightCommunicationSkillScoreLikelihood>;
  traitBase: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillScoreInput = {
  globalPercentile?: InputMaybe<Scalars['Float']['input']>;
  jobFamilyPercentile: Scalars['Float']['input'];
  likelihood: Array<FiAssessmentPredictionResultModelInsightCommunicationSkillScoreLikelihoodInput>;
  traitBase: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillScoreLikelihood = {
  __typename?: 'FIAssessmentPredictionResultModelInsightCommunicationSkillScoreLikelihood';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiAssessmentPredictionResultModelInsightCommunicationSkillScoreLikelihoodInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiAssessmentPredictionResultModelInsightInput = {
  communicationSkills: FiAssessmentPredictionResultModelInsightCommunicationSkillInput;
  personalityTraits: Array<FiAssessmentPredictionResultModelInsightPersonalityTraitInput>;
  predictionScore: FiAssessmentPredictionResultModelInsightPredictionScoreInput;
  suggestedInterviewQuestions: Array<FiAssessmentPredictionResultModelInsightSuggestedInterviewQuestionInput>;
};

export type FiAssessmentPredictionResultModelInsightPersonalityTrait = {
  __typename?: 'FIAssessmentPredictionResultModelInsightPersonalityTrait';
  globalPercentile?: Maybe<Scalars['Float']['output']>;
  jobFamilyPercentile: Scalars['Float']['output'];
  likelihood: Array<FiAssessmentPredictionResultModelInsightPersonalityTraitLikelihood>;
  traitBase: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultModelInsightPersonalityTraitInput = {
  globalPercentile?: InputMaybe<Scalars['Float']['input']>;
  jobFamilyPercentile: Scalars['Float']['input'];
  likelihood: Array<FiAssessmentPredictionResultModelInsightPersonalityTraitLikelihoodInput>;
  traitBase: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelInsightPersonalityTraitLikelihood = {
  __typename?: 'FIAssessmentPredictionResultModelInsightPersonalityTraitLikelihood';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiAssessmentPredictionResultModelInsightPersonalityTraitLikelihoodInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiAssessmentPredictionResultModelInsightPredictionScore = {
  __typename?: 'FIAssessmentPredictionResultModelInsightPredictionScore';
  jobFamilyPercentile: Scalars['Float']['output'];
};

export type FiAssessmentPredictionResultModelInsightPredictionScoreInput = {
  jobFamilyPercentile: Scalars['Float']['input'];
};

export type FiAssessmentPredictionResultModelInsightSuggestedInterviewQuestion = {
  __typename?: 'FIAssessmentPredictionResultModelInsightSuggestedInterviewQuestion';
  index: Scalars['String']['output'];
  questionBasedOn: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultModelInsightSuggestedInterviewQuestionInput = {
  index: Scalars['String']['input'];
  questionBasedOn: Scalars['String']['input'];
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelPrediction = {
  __typename?: 'FIAssessmentPredictionResultModelPrediction';
  features: Array<FiAssessmentPredictionResultModelPredictionFeature>;
  personalityTraits: Array<FiAssessmentPredictionResultModelPredictionPersonalityTrait>;
  scores: Array<FiAssessmentPredictionResultModelPredictionScore>;
};

export type FiAssessmentPredictionResultModelPredictionFeature = {
  __typename?: 'FIAssessmentPredictionResultModelPredictionFeature';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
  version: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultModelPredictionFeatureInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
  version: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelPredictionInput = {
  features: Array<FiAssessmentPredictionResultModelPredictionFeatureInput>;
  personalityTraits: Array<FiAssessmentPredictionResultModelPredictionPersonalityTraitInput>;
  scores: Array<FiAssessmentPredictionResultModelPredictionScoreInput>;
};

export type FiAssessmentPredictionResultModelPredictionPersonalityTrait = {
  __typename?: 'FIAssessmentPredictionResultModelPredictionPersonalityTrait';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
  version: Scalars['String']['output'];
};

export type FiAssessmentPredictionResultModelPredictionPersonalityTraitInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
  version: Scalars['String']['input'];
};

export type FiAssessmentPredictionResultModelPredictionScore = {
  __typename?: 'FIAssessmentPredictionResultModelPredictionScore';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiAssessmentPredictionResultModelPredictionScoreInput = {
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiAssessmentQuestionReview = {
  __typename?: 'FIAssessmentQuestionReview';
  answerId: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
};

export type FiAssessmentReview = {
  __typename?: 'FIAssessmentReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  details: Array<FiAssessmentReviewDetail>;
  questionReviews?: Maybe<Array<FiAssessmentQuestionReview>>;
  rating?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FiAssessmentReviewDetail = {
  __typename?: 'FIAssessmentReviewDetail';
  answerId: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  questionId: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
};

export type FiAtsCandidateInput = {
  location?: InputMaybe<FiLocationInput>;
  personalInformation: FiAtsPersonalInformationInput;
};

export type FiAtsInfo = {
  __typename?: 'FIAtsInfo';
  metaData?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
};

export type FiAtsInfoInput = {
  metaData?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type FiAtsPersonalInformationInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type FiBranding = {
  __typename?: 'FIBranding';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  font?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  tags?: Maybe<Array<FiTag>>;
  theme: Array<FiThemeProperty>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FiButtonGroupOption = {
  __typename?: 'FIButtonGroupOption';
  id: Scalars['String']['output'];
  style: FiStyle;
  text: Scalars['String']['output'];
  triggers: Array<FiTrigger>;
  value: Scalars['String']['output'];
};

export type FiButtonGroupQuestion = {
  __typename?: 'FIButtonGroupQuestion';
  _id: Scalars['String']['output'];
  contents: Array<FiQuestionContent>;
  language?: Maybe<Scalars['String']['output']>;
  masterId?: Maybe<Scalars['String']['output']>;
  options: Array<FiButtonGroupOption>;
  parentId?: Maybe<Scalars['String']['output']>;
  roleFamily?: Maybe<FiRoleFamily>;
  rules?: Maybe<Array<FiQuestionRule>>;
  tags?: Maybe<Array<FiTag>>;
  traits?: Maybe<Array<FiTrait>>;
  types: Array<Scalars['String']['output']>;
  usageWhitelist?: Maybe<Array<Scalars['String']['output']>>;
  version?: Maybe<Scalars['Float']['output']>;
};

export type FiCandidate = {
  __typename?: 'FICandidate';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  location?: Maybe<FiLocation>;
  locationByIP?: Maybe<FiLocation>;
  personalInformation: FiPersonalInformation;
  updatedAt: Scalars['DateTime']['output'];
  uuidInfo?: Maybe<FiuuidInfo>;
};

export type FiCandidateDynamo = {
  __typename?: 'FICandidateDynamo';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  location?: Maybe<FiLocation>;
  locationByIP?: Maybe<FiLocation>;
  personalInformation?: Maybe<FiPersonalInformation>;
  updatedAt: Scalars['String']['output'];
};

export type FiCandidatePoolSize = {
  __typename?: 'FICandidatePoolSize';
  poolSize: Scalars['Float']['output'];
};

export type FiCandidateRanking = {
  __typename?: 'FICandidateRanking';
  ranking: Scalars['Float']['output'];
};

export type FiCandidateResponse = {
  __typename?: 'FICandidateResponse';
  answerId: Scalars['String']['output'];
  answerText: Scalars['String']['output'];
  answerValue: Scalars['String']['output'];
  masterId?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<FiCandidateResponseOption>>;
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type FiCandidateResponseOption = FiButtonGroupOption | FiQuestionOption;

export type FiCohortCoordinate = {
  __typename?: 'FICohortCoordinate';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type FiCohortCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type FiCohortEntity = {
  __typename?: 'FICohortEntity';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  closeDate?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  externalId: Scalars['String']['output'];
  genericAssessmentLink?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isAts: Scalars['Boolean']['output'];
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  location?: Maybe<FiCohortLocation>;
  managers?: Maybe<Array<FiManager>>;
  organizationId: Scalars['String']['output'];
  ownerUserId?: Maybe<Scalars['String']['output']>;
  predictorId: Scalars['String']['output'];
  predictorMasterId: Scalars['String']['output'];
  predictorVersion: Scalars['Float']['output'];
  roleFamily: FiRoleFamily;
  scoreLevels: Array<FiScoreLevel>;
  tags?: Maybe<Array<FiTag>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FiCohortLocation = {
  __typename?: 'FICohortLocation';
  address: Scalars['String']['output'];
  coordinate?: Maybe<FiCohortCoordinate>;
};

export type FiCohortLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<FiCohortCoordinateDto>;
};

export type FiCohortManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FiCollector = {
  __typename?: 'FICollector';
  definition: FiDefinition;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  tags?: Maybe<Array<FiTag>>;
};

export type FiCollectorInput = {
  definition: FiDefinitionInput;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  tags?: InputMaybe<Array<FiTagInput>>;
};

export type FiCoordinate = {
  __typename?: 'FICoordinate';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type FiCoordinateInput = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type FiCreateAtsAssessmentInput = {
  atsInfo: FiAtsInfoInput;
  candidateInfo: FiAtsCandidateInput;
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiCustomerSatisfaction = {
  __typename?: 'FICustomerSatisfaction';
  comments?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
};

export type FiCustomerSatisfactionInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
};

export type FiDefinition = {
  __typename?: 'FIDefinition';
  dialogFlow: Scalars['JSON']['output'];
  nonPiiPreamble: Scalars['JSON']['output'];
  postamble: Scalars['JSON']['output'];
  preamble: Scalars['JSON']['output'];
};

export type FiDefinitionInput = {
  dialogFlow: Scalars['JSON']['input'];
  nonPiiPreamble: Scalars['JSON']['input'];
  postamble: Scalars['JSON']['input'];
  preamble: Scalars['JSON']['input'];
};

export type FiDeleteAssessmentInputDto = {
  assessmentId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiDeleteAssessmentVideosDto = {
  assessmentId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiDisplayInTiFtqQuestion = {
  __typename?: 'FIDisplayInTIFtqQuestion';
  _id: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type FiDisplayInTiMcqQuestion = {
  __typename?: 'FIDisplayInTIMcqQuestion';
  _id: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  options: Array<FiQuestionOption>;
  text: Scalars['String']['output'];
};

export type FiDisplayInTiQuestions = {
  __typename?: 'FIDisplayInTIQuestions';
  ftqQuestions: Array<FiDisplayInTiFtqQuestion>;
  mcqQuestions: Array<FiDisplayInTiMcqQuestion>;
};

export type FiEditBrandingInput = {
  font?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<FiTagInput>>;
  theme?: InputMaybe<Array<FiThemePropertyInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FiFilterUpdateCandidateInfoDto = {
  candidateId: Scalars['String']['input'];
};

export type FiFilterUpdateCohortsByExternalIdDto = {
  customerId: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiGetAssessmentByIdsInput = {
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiGetAssessmentInfoListForReuseDto = {
  baseAssessmentId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiGetCohortByIdsDto = {
  customerId: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  predictorMasterId: Scalars['String']['input'];
};

export type FiGetCohortsByJobRequisitionIdDto = {
  customerId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
};

export type FiGetDisplayInTiQuestionsByPredictorMasterIdInput = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  masterId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Float']['input']>;
};

export type FiGetTiReviewDto = {
  assessmentId: Scalars['String']['input'];
  reviewerId: Scalars['String']['input'];
  reviewerRole: Scalars['String']['input'];
};

export type FiHint = {
  __typename?: 'FIHint';
  _id: Scalars['String']['output'];
  contents: Array<FiQuestionContent>;
  tags?: Maybe<Array<FiTag>>;
  types: Array<Scalars['String']['output']>;
};

export type FikpiModelInput = {
  _id: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionMap?: InputMaybe<Scalars['JSON']['input']>;
  kpi: Scalars['String']['input'];
  masterId: Scalars['String']['input'];
  modelArtifacts?: InputMaybe<Scalars['JSON']['input']>;
  predictEndpoint: Scalars['String']['input'];
  predictEndpointPayload?: InputMaybe<Scalars['JSON']['input']>;
  roleFamily: FiRoleFamilyInput;
  scoreLevels: Array<FiScoreLevelInput>;
  tags?: InputMaybe<Array<FiTagInput>>;
  type: Scalars['String']['input'];
  version: Scalars['Float']['input'];
};

export type FiKpiModel = {
  __typename?: 'FIKpiModel';
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionMap?: Maybe<Scalars['JSON']['output']>;
  kpi: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  modelArtifacts?: Maybe<Scalars['JSON']['output']>;
  predictEndpoint: Scalars['String']['output'];
  predictEndpointPayload?: Maybe<Scalars['JSON']['output']>;
  roleFamily?: Maybe<FiRoleFamily>;
  scoreLevels: Array<FiScoreLevel>;
  tags?: Maybe<Array<FiTag>>;
  type: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type FiLocation = {
  __typename?: 'FILocation';
  address: Scalars['String']['output'];
  coordinate: FiCoordinate;
};

export type FiLocationInput = {
  address: Scalars['String']['input'];
  coordinate: FiCoordinateInput;
};

export type FiManager = {
  __typename?: 'FIManager';
  email?: Maybe<Scalars['String']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FiMarkAssessmentDroppedOutDto = {
  assessmentId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiMessage = {
  __typename?: 'FIMessage';
  data: FiMessageData;
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  sender: Scalars['String']['output'];
  time?: Maybe<Scalars['DateTime']['output']>;
  timeTaken?: Maybe<Scalars['Float']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type FiMessageData = FiAnswer | FiButtonGroupQuestion | FiHint | FiQuestion;

export type FiMessageDataInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  contents?: InputMaybe<Array<FiQuestionContentInput>>;
  extra?: InputMaybe<Array<FiAnswerExtraInfoInput>>;
  language?: InputMaybe<Scalars['String']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<FiMessageDataOptionInput>>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<FiAnswerQuestionInput>;
  roleFamily?: InputMaybe<FiRoleFamilyInput>;
  rules?: InputMaybe<Array<FiQuestionRuleInput>>;
  tags?: InputMaybe<Array<FiTagInput>>;
  text?: InputMaybe<Scalars['String']['input']>;
  traits?: InputMaybe<Array<FiTraitInput>>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  usageWhitelist?: InputMaybe<Array<Scalars['String']['input']>>;
  value?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['Float']['input']>;
};

export type FiMessageDataOptionInput = {
  id: Scalars['String']['input'];
  style?: InputMaybe<FiStyleInput>;
  text: Scalars['String']['input'];
  triggers?: InputMaybe<Array<FiTriggerInput>>;
  value: Scalars['String']['input'];
};

export type FiMessageDynamo = {
  __typename?: 'FIMessageDynamo';
  data: FiMessageDynamoData;
  id: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  sender: Scalars['String']['output'];
  time?: Maybe<Scalars['String']['output']>;
  timeTaken?: Maybe<Scalars['Float']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type FiMessageDynamoData = FiAnswer | FiButtonGroupQuestion | FiHint | FiQuestion;

export type FiMessageNode = {
  __typename?: 'FIMessageNode';
  children?: Maybe<FiMessageNode>;
  id: Scalars['String']['output'];
  rules?: Maybe<FiMessageNodeRule>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type FiMessageNodeRule = {
  __typename?: 'FIMessageNodeRule';
  name: Scalars['String']['output'];
  pickCount?: Maybe<Scalars['Float']['output']>;
  pickType?: Maybe<Scalars['String']['output']>;
  probabilities?: Maybe<Array<Scalars['Float']['output']>>;
  stage: Scalars['String']['output'];
};

export type FiPersonalInformation = {
  __typename?: 'FIPersonalInformation';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type FiPredictor = {
  __typename?: 'FIPredictor';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  collector: FiCollector;
  collectorTemplateId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isLatest: Scalars['Boolean']['output'];
  kpiModels: Array<FiKpiModel>;
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  product: Scalars['String']['output'];
  tags?: Maybe<Array<FiTag>>;
  title: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type FiPredictorInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  collector: FiCollectorInput;
  collectorTemplateId?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isLatest: Scalars['Boolean']['input'];
  kpiModels: Array<FikpiModelInput>;
  language: Scalars['String']['input'];
  masterId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  product: Scalars['String']['input'];
  tags?: InputMaybe<Array<FiTagInput>>;
  title: Scalars['String']['input'];
  version: Scalars['Float']['input'];
};

export type FiPurgeCandidateInfoDto = {
  candidateId: Scalars['String']['input'];
};

export type FiQuestion = {
  __typename?: 'FIQuestion';
  _id: Scalars['String']['output'];
  contents: Array<FiQuestionContent>;
  language?: Maybe<Scalars['String']['output']>;
  masterId?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<FiQuestionOption>>;
  parentId?: Maybe<Scalars['String']['output']>;
  roleFamily?: Maybe<FiRoleFamily>;
  rules?: Maybe<Array<FiQuestionRule>>;
  tags?: Maybe<Array<FiTag>>;
  traits?: Maybe<Array<FiTrait>>;
  types: Array<Scalars['String']['output']>;
  usageWhitelist?: Maybe<Array<Scalars['String']['output']>>;
  version?: Maybe<Scalars['Float']['output']>;
};

export type FiQuestionContent = {
  __typename?: 'FIQuestionContent';
  types: Array<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type FiQuestionContentInput = {
  types: Array<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type FiQuestionOption = {
  __typename?: 'FIQuestionOption';
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FiQuestionRule = {
  __typename?: 'FIQuestionRule';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiQuestionRuleInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiRecommendationStatus = {
  __typename?: 'FIRecommendationStatus';
  status: Scalars['String']['output'];
};

export type FiRemoveReviewsOfUsersDto = {
  assessmentId: Scalars['String']['input'];
  reviewerIds: Array<Scalars['String']['input']>;
};

export type FiRemoveReviewsOfUsersResult = {
  __typename?: 'FIRemoveReviewsOfUsersResult';
  success: Scalars['Boolean']['output'];
};

export type FiRestoreCohortsByExternalIdDto = {
  customerId: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiReuseAssessmentResults = {
  __typename?: 'FIReuseAssessmentResults';
  baseAssessmentId: Scalars['String']['output'];
  reuseAssessmentId: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type FiReuseAssessmentResultsDto = {
  baseAssessmentId: Scalars['String']['input'];
  reuseAssessmentId: Scalars['String']['input'];
};

export type FiReviewer = {
  __typename?: 'FIReviewer';
  customerId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  lastSubmittedAt: Scalars['DateTime']['output'];
  organizationId: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type FiRoleFamily = {
  __typename?: 'FIRoleFamily';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<FiTag>>;
  traitIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type FiRoleFamilyInput = {
  _id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tags?: InputMaybe<Array<FiTagInput>>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FiSaveDraftReviewDto = {
  answerId: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type FiSaveDraftReviewResult = {
  __typename?: 'FISaveDraftReviewResult';
  success: Scalars['Boolean']['output'];
};

export type FiSaveDraftReviewsDto = {
  assessmentId: Scalars['String']['input'];
  draftReviews: Array<FiSaveDraftReviewDto>;
};

export type FiScoreLevel = {
  __typename?: 'FIScoreLevel';
  kpi: Scalars['String']['output'];
  thresholds: Array<FiThreshold>;
};

export type FiScoreLevelInput = {
  kpi: Scalars['String']['input'];
  thresholds: Array<FiThresholdInput>;
};

export type FiStyle = {
  __typename?: 'FIStyle';
  buttonType: Scalars['String']['output'];
};

export type FiStyleInput = {
  buttonType: Scalars['String']['input'];
};

export type FiSubmitReviewDto = {
  answerId: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  questionText: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};

export type FiSubmitReviewResult = {
  __typename?: 'FISubmitReviewResult';
  success: Scalars['Boolean']['output'];
};

export type FiSubmitReviewsDto = {
  assessmentId: Scalars['String']['input'];
  reviews: Array<FiSubmitReviewDto>;
};

export type FitiAssessmentReview = {
  __typename?: 'FITIAssessmentReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  rating: Scalars['Float']['output'];
  reviewerEmail: Scalars['String']['output'];
  reviewerId: Scalars['String']['output'];
  reviewerName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FitiDraftReview = {
  __typename?: 'FITIDraftReview';
  answerId: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
};

export type FitiQuestionReview = {
  __typename?: 'FITIQuestionReview';
  answerId: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<FitiAssessmentReview>;
};

export type FitiReview = {
  __typename?: 'FITIReview';
  questionDraftReviews?: Maybe<Array<FitiDraftReview>>;
  questionReviews?: Maybe<Array<FitiQuestionReview>>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type FitiReviewSummary = {
  __typename?: 'FITIReviewSummary';
  comment?: Maybe<Scalars['String']['output']>;
  rating: Scalars['Float']['output'];
  reviewers: Array<FiReviewer>;
};

export type FiTag = {
  __typename?: 'FITag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FiTagInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type FiThemeElement = {
  __typename?: 'FIThemeElement';
  backgroundColor: Scalars['String']['output'];
  fontColor: Scalars['String']['output'];
  linkColor?: Maybe<Scalars['String']['output']>;
};

export type FiThemeElementInput = {
  backgroundColor: Scalars['String']['input'];
  fontColor: Scalars['String']['input'];
  linkColor?: InputMaybe<Scalars['String']['input']>;
};

export type FiThemeProperty = {
  __typename?: 'FIThemeProperty';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: FiThemeElement;
};

export type FiThemePropertyInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  value: FiThemeElementInput;
};

export type FiThreshold = {
  __typename?: 'FIThreshold';
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FiThresholdInput = {
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type FiTrait = {
  __typename?: 'FITrait';
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<FiTag>>;
};

export type FiTraitInput = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<FiTagInput>>;
};

export type FiTrigger = {
  __typename?: 'FITrigger';
  action: Scalars['String']['output'];
};

export type FiTriggerInput = {
  action: Scalars['String']['input'];
};

export type FiuuidInfo = {
  __typename?: 'FIUUIDInfo';
  eUUID?: Maybe<Scalars['String']['output']>;
  fnUUID?: Maybe<Scalars['String']['output']>;
  lnUUID?: Maybe<Scalars['String']['output']>;
  pnUUID?: Maybe<Scalars['String']['output']>;
};

export type FiUpdateCandidateInfoDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  location?: InputMaybe<FiLocationInput>;
  phoneNumber: Scalars['String']['input'];
};

export type FiUpdateCohortCoordinateDto = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type FiUpdateCohortLocationDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<FiUpdateCohortCoordinateDto>;
};

export type FiUpdateCohortManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FiUpdateCohortRoleFamilyDto = {
  _id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  tags?: InputMaybe<Array<FiTagInput>>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FiUpdateCohortsByExternalIdDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<FiUpdateCohortLocationDto>;
  managers?: InputMaybe<Array<FiUpdateCohortManagerDto>>;
  roleFamily?: InputMaybe<FiUpdateCohortRoleFamilyDto>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FiUpdateExternalApplicantIdInput = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  newExternalApplicantId: Scalars['String']['input'];
  oldExternalApplicantId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type FiUpdateExternalApplicantIdRes = {
  __typename?: 'FIUpdateExternalApplicantIdRes';
  success: Scalars['Boolean']['output'];
  updatedAssessmentIds: Array<Scalars['String']['output']>;
};

export type FilterArchiveUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FilterArchiveUsersDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['ID']['input']>;
};

export type FilterDeleteUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FilterGetGroupDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type FilterGetGroupsDto = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  hierarchyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<SortGroupsDto>;
};

export type FilterGetHierarchyDto = {
  _id: Scalars['String']['input'];
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  childrenShape?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  includeChildren?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRestoreUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FilterRestoreUsersDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['ID']['input']>;
};

export type FilterUpdateGroupDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateHierarchyDto = {
  _id: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateOrganizationDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUpdateUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomersDto = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['String']['input'];
};

export type GetNotificationDto = {
  customerId: Scalars['String']['input'];
};

export type GetNotificationV2Dto = {
  customerId: Scalars['String']['input'];
  templateType: Scalars['String']['input'];
};

export type GetOrganizationDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerActiveOnly?: InputMaybe<Scalars['Boolean']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type GetOrganizationsDto = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<OrgSortOrganizationsDto>;
};

export type GetSmsCreditsByCustomerIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type GetSmsCreditsPurchaseHistoryListDto = {
  customerId: Scalars['String']['input'];
};

export type GetUserDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetUsersDto = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  hierarchyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Number of items per page. */
  limit?: InputMaybe<Scalars['Float']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** search text for firstName, lastName and email */
  searchText?: InputMaybe<Scalars['String']['input']>;
  /** Number of pages to skip. */
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<SortUsersDto>;
  userTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GroupAddUsersDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['String']['input']>;
};

export type GroupEntity = {
  __typename?: 'GroupEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  description: Scalars['String']['output'];
  hierarchy: OrgHierarchyEntity;
  hierarchyId: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  policy?: Maybe<PolicyEntity>;
  tags: Array<TagEntity>;
  updatedAt: Scalars['DateTime']['output'];
  usersCount: Scalars['Float']['output'];
};

export type GroupRemoveUsersDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['String']['input']>;
};

export type IdpAddCustomerDto = {
  _id: Scalars['String']['input'];
  archivedAt?: InputMaybe<Scalars['String']['input']>;
  awsRegion: Scalars['String']['input'];
  createdAt: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
  uniqueName: Scalars['String']['input'];
  updatedAt: Scalars['String']['input'];
};

export type IdpAddDeviceDto = {
  ipAddress: Scalars['String']['input'];
  userAgent: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type IdpAddSsoConfigDto = {
  accountName: Scalars['String']['input'];
  allowUnencryptedAssertion?: InputMaybe<Scalars['Boolean']['input']>;
  /** firstName, lastName, email are mandatory, username is optional */
  attributeClaimKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledCustomerIdAsUsernamePrefix?: InputMaybe<Scalars['Boolean']['input']>;
  forceAuthn?: InputMaybe<Scalars['Boolean']['input']>;
  /** sso user default group ids */
  groupIds: Array<Scalars['String']['input']>;
  /** sso user default hierarchyId: customer root hierarchyId */
  hierarchyId: Scalars['String']['input'];
  loginUrl: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  publicCertificates: Scalars['String']['input'];
  region: Scalars['String']['input'];
  shouldSignGetRequest?: InputMaybe<Scalars['Boolean']['input']>;
  userProvisionMode?: InputMaybe<Scalars['String']['input']>;
};

export type IdpAuthSsoLoginDto = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
  redirect?: InputMaybe<Scalars['String']['input']>;
};

export type IdpCustomerEntity = {
  __typename?: 'IDPCustomerEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  awsRegion: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  tags: Array<TagEntity>;
  uniqueName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IdpDeleteCustomerDto = {
  customerId: Scalars['String']['input'];
};

export type IdpDeviceEntity = {
  __typename?: 'IDPDeviceEntity';
  createdAt: Scalars['DateTime']['output'];
  deviceToken: Scalars['String']['output'];
  expiredAt: Scalars['DateTime']['output'];
  ipAddress: Scalars['String']['output'];
  minutesToRememberDevice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userAgent: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type IdpFilterDeleteSsoConfigDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpFilterGetCustomerDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type IdpFilterGetCustomersDto = {
  organizationId: Scalars['String']['input'];
};

export type IdpFilterGetDeviceDto = {
  deviceToken: Scalars['String']['input'];
};

export type IdpFilterGetDevicesDto = {
  userId: Scalars['String']['input'];
};

export type IdpFilterGetSsoConfigDto = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpFilterResetDevicesDto = {
  userId: Scalars['String']['input'];
};

export type IdpFilterUpdateSsoConfigDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpGetHierarchyTreeDto = {
  customerId: Scalars['String']['input'];
};

export type IdpHierarchyNode = {
  __typename?: 'IDPHierarchyNode';
  children: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IdpHierarchyTreeEntity = {
  __typename?: 'IDPHierarchyTreeEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  rootHierarchy: IdpHierarchyNode;
  updatedAt: Scalars['DateTime']['output'];
};

export type IdpNestAddPolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  statements: Array<IdpNestAddStatementDto>;
  tags?: InputMaybe<Array<IdpNestTagDto>>;
};

export type IdpNestAddSsoConfigDto = {
  accountName: Scalars['String']['input'];
  allowUnencryptedAssertion?: InputMaybe<Scalars['Boolean']['input']>;
  /** firstName, lastName, email are mandatory, username is optional */
  attributeClaimKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledCustomerIdAsUsernamePrefix?: InputMaybe<Scalars['Boolean']['input']>;
  forceAuthn?: InputMaybe<Scalars['Boolean']['input']>;
  /** sso user default group ids */
  groupIds: Array<Scalars['String']['input']>;
  /** sso user default hierarchyId: customer root hierarchyId */
  hierarchyId: Scalars['String']['input'];
  loginUrl: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  publicCertificates: Scalars['String']['input'];
  region: Scalars['String']['input'];
  shouldSignGetRequest?: InputMaybe<Scalars['Boolean']['input']>;
  userProvisionMode?: InputMaybe<Scalars['String']['input']>;
};

export type IdpNestAddStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type IdpNestFilterDeleteSsoConfigDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpNestFilterGetPoliciesDto = {
  /** If true, will remove null objects from list */
  compact?: InputMaybe<Scalars['Boolean']['input']>;
  /** The group id or the policy id */
  ids: Array<Scalars['String']['input']>;
};

export type IdpNestFilterGetPolicyDto = {
  /** The group id or the policy id */
  id: Scalars['String']['input'];
};

export type IdpNestFilterGetSsoConfigDto = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpNestFilterUpdateSsoConfigDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpNestPolicyEntity = {
  __typename?: 'IDPNestPolicyEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  statements: Array<IdpNestStatementEntity>;
  tags: Array<IdpNestTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type IdpNestRecoverPolicyDto = {
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  statements: Array<IdpNestRecoverStatementDto>;
  tags?: InputMaybe<Array<IdpNestTagDto>>;
  updatedAt: Scalars['DateTime']['input'];
};

export type IdpNestRecoverStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type IdpNestSsoEntity = {
  __typename?: 'IDPNestSSOEntity';
  accountName?: Maybe<Scalars['String']['output']>;
  allowUnencryptedAssertion?: Maybe<Scalars['Boolean']['output']>;
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  attributeClaimKeys?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  enableSapia: Scalars['Boolean']['output'];
  enabled: Scalars['Boolean']['output'];
  enabledCustomerIdAsUsernamePrefix?: Maybe<Scalars['Boolean']['output']>;
  forceAuthn?: Maybe<Scalars['Boolean']['output']>;
  groupIds: Array<Scalars['String']['output']>;
  hierarchyId?: Maybe<Scalars['String']['output']>;
  initialized: Scalars['Boolean']['output'];
  loginUrl?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  publicCertificates?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  sapiaEntityId: Scalars['String']['output'];
  sapiaSAMLAudience: Scalars['String']['output'];
  shouldSignGetRequest?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userProvisionMode?: Maybe<Scalars['String']['output']>;
};

export type IdpNestSearchSsoConfigsDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpNestStatementEntity = {
  __typename?: 'IDPNestStatementEntity';
  actions: Array<Scalars['String']['output']>;
  effect: Scalars['String']['output'];
  resources: Array<Scalars['String']['output']>;
};

export type IdpNestTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type IdpNestTagEntity = {
  __typename?: 'IDPNestTagEntity';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type IdpNestUpdatePolicyDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  statements?: InputMaybe<Array<IdpNestUpdateStatementDto>>;
  tags?: InputMaybe<Array<IdpNestTagDto>>;
};

export type IdpNestUpdateSsoConfigDto = {
  allowUnencryptedAssertion?: InputMaybe<Scalars['Boolean']['input']>;
  attributeClaimKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledCustomerIdAsUsernamePrefix?: InputMaybe<Scalars['Boolean']['input']>;
  forceAuthn?: InputMaybe<Scalars['Boolean']['input']>;
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  loginUrl?: InputMaybe<Scalars['String']['input']>;
  publicCertificates?: InputMaybe<Scalars['String']['input']>;
  shouldSignGetRequest?: InputMaybe<Scalars['Boolean']['input']>;
  userProvisionMode?: InputMaybe<Scalars['String']['input']>;
};

export type IdpNestUpdateStatementDto = {
  actions: Array<Scalars['String']['input']>;
  effect: Scalars['String']['input'];
  resources: Array<Scalars['String']['input']>;
};

export type IdpssoConfigEntity = {
  __typename?: 'IDPSSOConfigEntity';
  accountName?: Maybe<Scalars['String']['output']>;
  allowUnencryptedAssertion?: Maybe<Scalars['Boolean']['output']>;
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  attributeClaimKeys?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  enableSapia: Scalars['Boolean']['output'];
  enabled: Scalars['Boolean']['output'];
  enabledCustomerIdAsUsernamePrefix?: Maybe<Scalars['Boolean']['output']>;
  forceAuthn?: Maybe<Scalars['Boolean']['output']>;
  groupIds: Array<Scalars['String']['output']>;
  hierarchyId?: Maybe<Scalars['String']['output']>;
  initialized: Scalars['Boolean']['output'];
  loginUrl?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  publicCertificates?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  sapiaEntityId: Scalars['String']['output'];
  sapiaSAMLAudience: Scalars['String']['output'];
  shouldSignGetRequest?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userProvisionMode?: Maybe<Scalars['String']['output']>;
};

export type IdpSearchSsoConfigsDto = {
  customerId: Scalars['String']['input'];
  enableSapia?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IdpUpdateSsoConfigDto = {
  allowUnencryptedAssertion?: InputMaybe<Scalars['Boolean']['input']>;
  attributeClaimKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledCustomerIdAsUsernamePrefix?: InputMaybe<Scalars['Boolean']['input']>;
  forceAuthn?: InputMaybe<Scalars['Boolean']['input']>;
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  loginUrl?: InputMaybe<Scalars['String']['input']>;
  publicCertificates?: InputMaybe<Scalars['String']['input']>;
  shouldSignGetRequest?: InputMaybe<Scalars['Boolean']['input']>;
  userProvisionMode?: InputMaybe<Scalars['String']['input']>;
};

export type KpiModel = {
  __typename?: 'KPIModel';
  _id: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionMap?: Maybe<Scalars['JSON']['output']>;
  isLatest: Scalars['Boolean']['output'];
  kpi: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  modelArtifacts?: Maybe<Scalars['JSON']['output']>;
  predictEndpoint: Scalars['String']['output'];
  predictEndpointPayload?: Maybe<Scalars['JSON']['output']>;
  roleFamily?: Maybe<RoleFamily>;
  roleFamilyId?: Maybe<Scalars['String']['output']>;
  scoreLevels: Array<ScoreLevel>;
  tags?: Maybe<Array<Tag>>;
  type: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type LiApplicationEntity = {
  __typename?: 'LIApplicationEntity';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  candidateId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalApplicantId: Scalars['String']['output'];
  externalApplicationId: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  shortcode?: Maybe<Scalars['String']['output']>;
  /** APPS_APPLICATION_NEW || APPS_APPLICATION_LONGLISTED || APPS_APPLICATION_SHORTLISTED || APPS_APPLICATION_INTERVIEW || APPS_APPLICATION_DECLINED || APPS_APPLICATION_OFFERED || APPS_APPLICATION_HIRED || APPS_APPLICATION_WITHDRAWN */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type LiBookCandidateInterviewDto = {
  candidateTimezone?: InputMaybe<Scalars['String']['input']>;
  shortcode: Scalars['String']['input'];
  /** The id of timeslot */
  timeslotId: Scalars['String']['input'];
};

export type LiBookedCandidateInterviewEntity = {
  __typename?: 'LIBookedCandidateInterviewEntity';
  iCalId: Scalars['String']['output'];
  interviewEndsAt: Scalars['DateTime']['output'];
  interviewLink?: Maybe<Scalars['String']['output']>;
  interviewLocation?: Maybe<Scalars['String']['output']>;
  interviewStartsAt: Scalars['DateTime']['output'];
  interviewType: Scalars['String']['output'];
  jobRequisitionName: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
};

export type LiCancelCandidateInterviewDto = {
  shortcode: Scalars['String']['input'];
};

export type LiCancelledCandidateInterviewEntity = {
  __typename?: 'LICancelledCandidateInterviewEntity';
  interviewDisplayName: Scalars['String']['output'];
  interviewEventId: Scalars['String']['output'];
  interviewMode: Scalars['String']['output'];
  interviewScheduleId: Scalars['String']['output'];
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type LiCandidateScheduleEntity = {
  __typename?: 'LICandidateScheduleEntity';
  applicationId?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  candidateId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewEventId?: Maybe<Scalars['String']['output']>;
  interviewScheduleId: Scalars['String']['output'];
  interviewStage: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  shortcode: Scalars['String']['output'];
  /** PENDING || CONFIRMED */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LiCandidateScheduleLinkBrandingEntity = {
  __typename?: 'LICandidateScheduleLinkBrandingEntity';
  logoUrl?: Maybe<Scalars['String']['output']>;
};

export type LiCandidateScheduleLinkInfoEntity = {
  __typename?: 'LICandidateScheduleLinkInfoEntity';
  /** PENDING || CONFIRMED */
  candidateScheduleStatus: Scalars['String']['output'];
  candidateTimezone: Scalars['String']['output'];
  interviewEvent?: Maybe<LiCandidateScheduleLinkInfoInterviewEventEntity>;
  interviewSchedule: LiCandidateScheduleLinkInfoInterviewScheduleEntity;
  jobRequisitionName: Scalars['String']['output'];
  shortcode: Scalars['String']['output'];
  timeslots: Array<LiCandidateScheduleLinkInfoTimeslotEntity>;
};

export type LiCandidateScheduleLinkInfoInterviewEventEntity = {
  __typename?: 'LICandidateScheduleLinkInfoInterviewEventEntity';
  iCalId?: Maybe<Scalars['String']['output']>;
  interviewEndsAt?: Maybe<Scalars['DateTime']['output']>;
  interviewStartsAt?: Maybe<Scalars['DateTime']['output']>;
  interviewStatus?: Maybe<Scalars['String']['output']>;
};

export type LiCandidateScheduleLinkInfoInterviewScheduleEntity = {
  __typename?: 'LICandidateScheduleLinkInfoInterviewScheduleEntity';
  defaultTimezone: Scalars['String']['output'];
  interviewAddress?: Maybe<Scalars['String']['output']>;
  interviewAttachments: Array<LiInterviewAttachmentEntity>;
  interviewDisplayName: Scalars['String']['output'];
  interviewEventDuration: LiInterviewEventDurationEntity;
  interviewLink?: Maybe<Scalars['String']['output']>;
  /** IN_PERSON || ONLINE || PHONE */
  interviewMode: Scalars['String']['output'];
  interviewNotesForCandidate: Scalars['String']['output'];
  /** NOT_SCHEDULED || PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  interviewScheduleStatus: Scalars['String']['output'];
  /** INDIVIDUAL || GROUP */
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
};

export type LiCandidateScheduleLinkInfoTimeslotEntity = {
  __typename?: 'LICandidateScheduleLinkInfoTimeslotEntity';
  _id: Scalars['String']['output'];
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
};

export type LiCoordinateEntity = {
  __typename?: 'LICoordinateEntity';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type LiCopyInterviewScheduleAttachmentsToOfficialS3BucketDto = {
  interviewScheduleId: Scalars['String']['input'];
};

export type LiCreateCandidateScheduleDto = {
  applicationId: Scalars['String']['input'];
  interviewScheduleId: Scalars['String']['input'];
};

export type LiCreateInterviewScheduleApplicationDto = {
  applicationId: Scalars['String']['input'];
};

export type LiCreateInterviewScheduleDto = {
  applications: Array<LiCreateInterviewScheduleApplicationDto>;
  customerId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  interviewAddress?: InputMaybe<Scalars['String']['input']>;
  interviewAttachments?: InputMaybe<Array<LiCreateInterviewScheduleFileDto>>;
  interviewDefaultTimezone: Scalars['String']['input'];
  interviewEventDuration: LiCreateInterviewScheduleEventDurationDto;
  interviewLink?: InputMaybe<Scalars['String']['input']>;
  interviewMode: Scalars['String']['input'];
  interviewName: Scalars['String']['input'];
  interviewStage?: InputMaybe<Scalars['String']['input']>;
  interviewers: Array<LiCreateInterviewScheduleInterviewerDto>;
  jobRequisitionId: Scalars['String']['input'];
  notesForCandidates?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  scheduler: LiCreateInterviewScheduleSchedulerDto;
  timeslots: Array<LiCreateInterviewScheduleTimeslotDto>;
};

export type LiCreateInterviewScheduleEventDurationDto = {
  type: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type LiCreateInterviewScheduleFileDto = {
  fileId: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
};

export type LiCreateInterviewScheduleInterviewerDto = {
  email: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type LiCreateInterviewScheduleSchedulerDto = {
  schedulerId: Scalars['String']['input'];
  /** The timezone of interview scheduler, by default equal to interviewDefaultTimezone */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type LiCreateInterviewScheduleTaskCandidateEntity = {
  __typename?: 'LICreateInterviewScheduleTaskCandidateEntity';
  applicationId: Scalars['String']['output'];
};

export type LiCreateInterviewScheduleTaskEntity = {
  __typename?: 'LICreateInterviewScheduleTaskEntity';
  applications: Array<LiCreateInterviewScheduleTaskCandidateEntity>;
  interviewers: Array<LiCreateInterviewScheduleTaskInterviewerEntity>;
  timeslots: Array<LiCreateInterviewScheduleTaskTimeslotEntity>;
};

export type LiCreateInterviewScheduleTaskInterviewerEntity = {
  __typename?: 'LICreateInterviewScheduleTaskInterviewerEntity';
  email: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type LiCreateInterviewScheduleTaskTimeslotEntity = {
  __typename?: 'LICreateInterviewScheduleTaskTimeslotEntity';
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
};

export type LiCreateInterviewScheduleTimeslotDto = {
  /** End time of the timeslot in UTC ISO 8601 format (e.g. 2024-05-13T03:30:00.000Z) */
  end: Scalars['String']['input'];
  /** Start time of the timeslot in UTC ISO 8601 format (e.g. 2024-05-13T02:30:00.000Z) */
  start: Scalars['String']['input'];
};

export type LiCreateInterviewerScheduleDto = {
  email: Scalars['String']['input'];
  interviewScheduleId: Scalars['String']['input'];
};

export type LiCreateJobRequisitionDto = {
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  managers: Array<LiCreateJobRequisitionManagerDto>;
  numberOfConfirmedCandidates?: InputMaybe<Scalars['Float']['input']>;
  numberOfPendingCandidates?: InputMaybe<Scalars['Float']['input']>;
  numberOfUnscheduledCandidates?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  shortcode: Scalars['String']['input'];
  tags?: InputMaybe<Array<LiTagDto>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LiCreateJobRequisitionManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  /** HIRING_MANAGER || RECRUITER */
  type: Scalars['String']['input'];
};

export type LiCreateSchedulerDto = {
  schedulerId: Scalars['String']['input'];
  schedulerTimezone: Scalars['String']['input'];
};

export type LiCreateTimeslotDto = {
  interviewScheduleId: Scalars['String']['input'];
  /** The start time of the timeslot in UTC ISO8601 format. e.g. 2024-05-13T02:30:00.000Z */
  start: Scalars['String']['input'];
};

export type LiGenerateEventICalDto = {
  iCalId: Scalars['String']['input'];
};

export type LiGenerateS3PreSignedDownloadUrlDto = {
  /** the customerId of the interview schedule */
  customerId: Scalars['String']['input'];
  fileId: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
};

export type LiGenerateS3PreSignedUploadUrlDto = {
  /** the customerId of the interview schedule */
  customerId: Scalars['String']['input'];
  fileId: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  mimeType: Scalars['String']['input'];
};

export type LiGenerateTimeslotsDto = {
  duration: Scalars['Float']['input'];
  timezone: Scalars['String']['input'];
  userPrompt: Scalars['String']['input'];
};

export type LiGeneratedEventICalEntity = {
  __typename?: 'LIGeneratedEventICalEntity';
  iCalContent: Scalars['String']['output'];
};

/** Get application detail by organizationId and applicationId or externalApplicationId, you must input one of [applicationId, externalApplicationId] */
export type LiGetApplicationDetailDto = {
  applicationId?: InputMaybe<Scalars['String']['input']>;
  externalApplicationId?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};

/** Get branding by shortcode */
export type LiGetBrandingByShortcodeDto = {
  shortcode: Scalars['String']['input'];
};

/** Get candidate schedule link info by shortcode */
export type LiGetCandidateScheduleLinkInfoByShortcodeDto = {
  shortcode: Scalars['String']['input'];
};

export type LiGetHiringManagersByJobRequisitionIdDto = {
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type LiGetInterviewScheduleCardBasicInfoListV2WithoutPaginationDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type LiGetInterviewScheduleCardBasicInfoListWithoutPaginationDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  /** PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  status: Scalars['String']['input'];
};

export type LiGetInterviewScheduleCardCandidatesWithoutPaginationDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  /** UNSCHEDULED || PENDING || CONFIRMED */
  status: Scalars['String']['input'];
};

export type LiGetInterviewScheduleCardDetailDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

/** Get interviewSchedule detail by organizationId and interviewScheduleId or interviewUniqueName, you must input one of [interviewScheduleId, interviewUniqueName] */
export type LiGetInterviewScheduleDetailDto = {
  interviewScheduleId?: InputMaybe<Scalars['String']['input']>;
  interviewUniqueName?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};

/** Get job requisition detail by organizationId, jobRequisitionId or externalJobRequisitionId, you must input one of [externalJobRequisitionId, jobRequisitionId] */
export type LiGetJobRequisitionDetailDto = {
  externalJobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  jobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};

export type LiGetJobRequisitionsWithPaginationDto = {
  /** Number of items per page. */
  limit?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  /** search text for job requisition title and external id */
  searchText?: InputMaybe<Scalars['String']['input']>;
  /** Number of pages to skip. */
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Array<LiSortJobRequisitionsDto>>;
};

export type LiGetJobRequisitionsWithoutPaginationDto = {
  organizationId: Scalars['String']['input'];
};

export type LiInterviewAttachmentEntity = {
  __typename?: 'LIInterviewAttachmentEntity';
  fileId: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
};

export type LiInterviewEventDurationEntity = {
  __typename?: 'LIInterviewEventDurationEntity';
  /** CUSTOM || STANDARD */
  type: Scalars['String']['output'];
  /** MINUTES */
  unit: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type LiInterviewScheduleCardBasicInfoCandidateEntity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoCandidateEntity';
  /** the id of candidate */
  _id: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  interviewEndTime?: Maybe<Scalars['DateTime']['output']>;
  interviewStartTime?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  shortcode?: Maybe<Scalars['String']['output']>;
  /** PENDING || COMPLETED */
  status?: Maybe<Scalars['String']['output']>;
};

export type LiInterviewScheduleCardBasicInfoCandidateV2Entity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoCandidateV2Entity';
  /** the id of candidate */
  _id: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  interviewEndTime?: Maybe<Scalars['DateTime']['output']>;
  interviewStartTime?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  shortcode?: Maybe<Scalars['String']['output']>;
  /** PENDING || COMPLETED || CANCELLED */
  status?: Maybe<Scalars['String']['output']>;
};

export type LiInterviewScheduleCardBasicInfoEntity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoEntity';
  /** the id of interview schedule */
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  bookedCandidates: Array<LiInterviewScheduleCardBasicInfoCandidateEntity>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  /** Timezone in IANA format: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  defaultTimezone: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewAddress?: Maybe<Scalars['String']['output']>;
  interviewDisplayName: Scalars['String']['output'];
  interviewLink?: Maybe<Scalars['String']['output']>;
  /** IN_PERSON || ONLINE || PHONE */
  interviewMode: Scalars['String']['output'];
  /** INDIVIDUAL || GROUP */
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
  interviewers: Array<LiInterviewScheduleCardBasicInfoInterviewerEntity>;
  jobRequisitionId: Scalars['String']['output'];
  notBookedCandidates: Array<LiInterviewScheduleCardBasicInfoCandidateEntity>;
  /** INITIALIZED || COMPLETED */
  objectStatus: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  schedulerId: Scalars['String']['output'];
  /** NOT_SCHEDULED || PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type LiInterviewScheduleCardBasicInfoInterviewerEntity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoInterviewerEntity';
  /** the id of interviewer */
  _id?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type LiInterviewScheduleCardBasicInfoInterviewerV2Entity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoInterviewerV2Entity';
  /** the id of interviewer */
  _id?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type LiInterviewScheduleCardBasicInfoV2Entity = {
  __typename?: 'LIInterviewScheduleCardBasicInfoV2Entity';
  /** the id of interview schedule */
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  candidates: Array<LiInterviewScheduleCardBasicInfoCandidateV2Entity>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  /** Timezone in IANA format: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  defaultTimezone: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewAddress?: Maybe<Scalars['String']['output']>;
  interviewDisplayName: Scalars['String']['output'];
  interviewLink?: Maybe<Scalars['String']['output']>;
  /** IN_PERSON || ONLINE || PHONE */
  interviewMode: Scalars['String']['output'];
  /** 1 || 2 || 3 || 4 || 5 */
  interviewStage: Scalars['String']['output'];
  /** INDIVIDUAL || GROUP */
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
  interviewers: Array<LiInterviewScheduleCardBasicInfoInterviewerV2Entity>;
  jobRequisitionId: Scalars['String']['output'];
  /** INITIALIZED || COMPLETED */
  objectStatus: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  schedulerId: Scalars['String']['output'];
  /** NOT_SCHEDULED || PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type LiInterviewScheduleCardCandidateEntity = {
  __typename?: 'LIInterviewScheduleCardCandidateEntity';
  _id: Scalars['ID']['output'];
  applicationId: Scalars['String']['output'];
  location?: Maybe<LiLocationEntity>;
  personalInformation: LiPersonalInformationEntity;
  scheduledInterviewTime?: Maybe<Scalars['DateTime']['output']>;
};

export type LiInterviewScheduleCardDetailCandidateEntity = {
  __typename?: 'LIInterviewScheduleCardDetailCandidateEntity';
  /** the id of candidate */
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type LiInterviewScheduleCardDetailEntity = {
  __typename?: 'LIInterviewScheduleCardDetailEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  candidates: Array<LiInterviewScheduleCardDetailCandidateEntity>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  /** Timezone in IANA format: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  defaultTimezone: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewAddress?: Maybe<Scalars['String']['output']>;
  interviewAttachmentsForCandidate: Array<LiInterviewAttachmentEntity>;
  interviewAttachmentsForInterviewer: Array<LiInterviewAttachmentEntity>;
  interviewDisplayName: Scalars['String']['output'];
  interviewEventDuration: LiInterviewEventDurationEntity;
  interviewLink?: Maybe<Scalars['String']['output']>;
  /** IN_PERSON || ONLINE || PHONE */
  interviewMode: Scalars['String']['output'];
  interviewNotesForCandidate: Scalars['String']['output'];
  interviewNotesForInterviewer: Scalars['String']['output'];
  /** INDIVIDUAL || GROUP */
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
  interviewers: Array<LiInterviewScheduleCardDetailInterviewerEntity>;
  jobRequisitionId: Scalars['String']['output'];
  /** INITIALIZED || COMPLETED */
  objectStatus: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  /** NOT_SCHEDULED || PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  timeslots: Array<LiInterviewScheduleCardDetailTimeslotEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type LiInterviewScheduleCardDetailInterviewerEntity = {
  __typename?: 'LIInterviewScheduleCardDetailInterviewerEntity';
  /** the id of interviewer */
  _id?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type LiInterviewScheduleCardDetailTimeslotEntity = {
  __typename?: 'LIInterviewScheduleCardDetailTimeslotEntity';
  _id?: Maybe<Scalars['String']['output']>;
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
  status?: Maybe<Scalars['String']['output']>;
};

export type LiInterviewScheduleEntity = {
  __typename?: 'LIInterviewScheduleEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createInterviewScheduleTaskPayload: LiCreateInterviewScheduleTaskEntity;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  /** Timezone in IANA format: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  defaultTimezone: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewAddress?: Maybe<Scalars['String']['output']>;
  interviewAttachments: Array<LiInterviewAttachmentEntity>;
  interviewDisplayName: Scalars['String']['output'];
  interviewEventDuration: LiInterviewEventDurationEntity;
  interviewLink?: Maybe<Scalars['String']['output']>;
  /** IN_PERSON || ONLINE || PHONE */
  interviewMode: Scalars['String']['output'];
  interviewNotesForCandidate: Scalars['String']['output'];
  interviewStage: Scalars['String']['output'];
  /** INDIVIDUAL || GROUP */
  interviewType: Scalars['String']['output'];
  interviewUniqueName: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  /** INITIALIZED || COMPLETED */
  objectStatus: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  schedulerId: Scalars['String']['output'];
  /** NOT_SCHEDULED || PENDING_CANDIDATES_CONFIRMATION || PENDING_INTERVIEWERS_CONFIRMATION || CONFIRMED */
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
  voteDeadline?: Maybe<Scalars['DateTime']['output']>;
};

export type LiInterviewerScheduleEntity = {
  __typename?: 'LIInterviewerScheduleEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewScheduleId: Scalars['String']['output'];
  interviewerId: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LiJobRequisitionEntity = {
  __typename?: 'LIJobRequisitionEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  externalJobRequisitionId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  hiringManagers: Array<LiManagerEntity>;
  numberOfConfirmedCandidates: Scalars['Float']['output'];
  numberOfPendingCandidates: Scalars['Float']['output'];
  numberOfUnscheduledCandidates: Scalars['Float']['output'];
  organizationId: Scalars['String']['output'];
  recruiters: Array<LiManagerEntity>;
  shortcode: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LiJobRequisitionPaginatedListEntity = {
  __typename?: 'LIJobRequisitionPaginatedListEntity';
  data: Array<LiJobRequisitionEntity>;
  pagination: LiPaginationEntity;
};

export type LiLocationEntity = {
  __typename?: 'LILocationEntity';
  address: Scalars['String']['output'];
  coordinate?: Maybe<LiCoordinateEntity>;
};

export type LiManagerEntity = {
  __typename?: 'LIManagerEntity';
  email: Scalars['String']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  /** HIRING_MANAGER || RECRUITER */
  type: Scalars['String']['output'];
};

export type LiMarkInterviewScheduleObjectStatusAsCompletedDto = {
  interviewScheduleId: Scalars['String']['input'];
};

export type LiPaginationEntity = {
  __typename?: 'LIPaginationEntity';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type LiPersonalInformationEntity = {
  __typename?: 'LIPersonalInformationEntity';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
};

export type LiPublishCreateCandidateScheduleCmdEventsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiPublishCreateInterviewerScheduleCmdEventsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiPublishCreateTimeslotCmdEventsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiPublishSendCandidateInterviewInvitationCmdEventsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiRecalculateInterviewScheduleStatusDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  interviewScheduleId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiRecalculateJobRequisitionStatusDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  jobRequisitionId: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type LiRescheduleCandidateInterviewDto = {
  candidateTimezone?: InputMaybe<Scalars['String']['input']>;
  shortcode: Scalars['String']['input'];
  /** The id if timeslot */
  timeslotId: Scalars['String']['input'];
};

export type LiRescheduledCandidateInterviewEntity = {
  __typename?: 'LIRescheduledCandidateInterviewEntity';
  iCalId: Scalars['String']['output'];
  interviewEndsAt: Scalars['DateTime']['output'];
  interviewLink?: Maybe<Scalars['String']['output']>;
  interviewLocation?: Maybe<Scalars['String']['output']>;
  interviewStartsAt: Scalars['DateTime']['output'];
  interviewType: Scalars['String']['output'];
  jobRequisitionName: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
};

export type Lis3PreSignedDownloadUrlEntity = {
  __typename?: 'LIS3PreSignedDownloadUrlEntity';
  preSignedDownloadUrl: Scalars['String']['output'];
};

export type Lis3PreSignedUploadUrlEntity = {
  __typename?: 'LIS3PreSignedUploadUrlEntity';
  preSignedUploadUrl: Scalars['String']['output'];
};

export type LiSchedulerEntity = {
  __typename?: 'LISchedulerEntity';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LiSortJobRequisitionsDto = {
  /** support title, createdAt, numberOfUnscheduledCandidates, numberOfPendingCandidates,numberOfConfirmedInterviews */
  fieldName: Scalars['String']['input'];
  /** asc or desc */
  order: Scalars['String']['input'];
};

export type LiSyncApplicationAndCandidateFromAppsDto = {
  _id: Scalars['String']['input'];
  candidate: LiSyncApplicationCandidateFromAppsDto;
  createdAt: Scalars['DateTime']['input'];
  customerId: Scalars['String']['input'];
  externalApplicantId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalJobRequisitionId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  shortcode: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
};

export type LiSyncApplicationCandidateFromAppsDto = {
  _id: Scalars['String']['input'];
  createdAt: Scalars['DateTime']['input'];
  location?: InputMaybe<LiSyncApplicationCandidateLocationFromAppsDto>;
  personalInformation: LiSyncApplicationCandidatePersonalInformationFromAppsDto;
  updatedAt: Scalars['DateTime']['input'];
};

export type LiSyncApplicationCandidateLocationCoordinateFromAppsDto = {
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type LiSyncApplicationCandidateLocationFromAppsDto = {
  address: Scalars['String']['input'];
  coordinate?: InputMaybe<LiSyncApplicationCandidateLocationCoordinateFromAppsDto>;
};

export type LiSyncApplicationCandidatePersonalInformationFromAppsDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type LiTagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type LiTagEntity = {
  __typename?: 'LITagEntity';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type LiTimeslotEntity = {
  __typename?: 'LITimeslotEntity';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  availableSeats: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  end: Scalars['DateTime']['output'];
  hierarchyId: Scalars['String']['output'];
  interviewScheduleId: Scalars['String']['output'];
  maxSeats: Scalars['Float']['output'];
  organizationId: Scalars['String']['output'];
  selectedSeats: Scalars['Float']['output'];
  start: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  tags: Array<LiTagEntity>;
  updatedAt: Scalars['DateTime']['output'];
  voteCount: Scalars['Float']['output'];
};

export type LiTimeslotResultEntity = {
  __typename?: 'LITimeslotResultEntity';
  end: Scalars['DateTime']['output'];
  start: Scalars['DateTime']['output'];
  timezone: Scalars['String']['output'];
};

export type LiUpdateJobRequisitionDto = {
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  externalJobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  jobRequisitionId?: InputMaybe<Scalars['String']['input']>;
  managers?: InputMaybe<Array<LiUpdateJobRequisitionManagerDto>>;
  organizationId: Scalars['String']['input'];
  shortcode?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<LiTagDto>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LiUpdateJobRequisitionManagerDto = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  /** HIRING_MANAGER || RECRUITER */
  type: Scalars['String']['input'];
};

export type Location = {
  address: Scalars['String']['input'];
  coordinate: EdgeCoordinate;
};

export type Manager = {
  email: Scalars['String']['input'];
  externalId: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type Me = {
  __typename?: 'Me';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  customers: Array<Customer>;
  defaultCustomer: Customer;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groupIds: Array<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userType: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type MetaData = {
  invitedBy: Scalars['String']['input'];
  workflowId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AppsAddApplicationTags: AppsApplication;
  AppsArchiveJobRequisitions: Array<AppsJobRequisition>;
  AppsArchiveVacancies: Array<AppsVacancy>;
  AppsArchiveVacanciesByExternalVacancyIds: Array<AppsVacancy>;
  AppsArchiveWorkflowSet: Array<AppsWorkflowSet>;
  AppsArchiveWorkflows: Array<AppsWorkflow>;
  AppsBulkSyncJobRequisitionDocumentDbToElasticsearchDb: AppsBulkIndexResponse;
  AppsCreateApplication: AppsApplication;
  AppsCreateApplicationAssessmentByExternalApplicationId: AppsApplication;
  AppsCreateApplicationV2: AppsApplication;
  AppsCreateCustomerSetting: AppsCustomerSetting;
  AppsCreateJobRequisition: AppsJobRequisition;
  AppsCreateJobRequisitionForVacancyById: AppsJobRequisition;
  AppsCreateVacancy: AppsVacancy;
  AppsCreateWorkflow: AppsWorkflow;
  AppsCreateWorkflowSet: AppsWorkflowSet;
  AppsDeleteApplicationByExternalIds: AppsApplication;
  AppsDeleteApplicationById: AppsApplication;
  AppsDeleteCandidateById?: Maybe<Array<AppsApplication>>;
  AppsDeployAssessmentPackage: AppsAssessmentPackage;
  AppsMarkApplicationAssessmentIsViewed: AppsMarkApplicationAssessmentIsViewedResult;
  AppsMoveApplication: Array<AppsApplication>;
  AppsMoveApplicationV2: Array<AppsApplication>;
  AppsOrderAtsApplication: AppsApplication;
  AppsPurgeApplicationCandidate: ApplicationCandidateEntity;
  AppsRequestDataExport: AppsRequestDataExportResult;
  AppsResendApplicationAssessmentLink: Array<AppsApplication>;
  AppsResendApplicationMiReport: AppsApplication;
  AppsRestoreJobRequisitions: Array<AppsJobRequisition>;
  AppsRestoreVacancies: Array<AppsVacancy>;
  AppsRestoreVacanciesByExternalVacancyIds: Array<AppsVacancy>;
  AppsRestoreWorkflowSet: Array<AppsWorkflowSet>;
  AppsRestoreWorkflows: Array<AppsWorkflow>;
  AppsSendApplicationReminder: AppsApplication;
  AppsSendSMSUsageAlertEmail?: Maybe<Scalars['Boolean']['output']>;
  AppsSendSMSUsageReminderEmail?: Maybe<Scalars['Boolean']['output']>;
  AppsSyncApplicationDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsSyncAssessmentPackageDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsSyncJobRequisitionDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsSyncVacancyDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsSyncWorkflowDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsSyncWorkflowSetDocumentDbToElasticsearchDbById: AppsIndexResponse;
  AppsUpdateApplicationAssessment: AppsApplication;
  AppsUpdateApplicationAssessmentIsViewed: AppsApplication;
  AppsUpdateApplicationAssessmentResult: AppsApplication;
  AppsUpdateApplicationAssessmentReviewSaved: AppsApplication;
  AppsUpdateApplicationCandidate: AppsApplication;
  AppsUpdateApplicationDefaultAssessment: AppsApplication;
  AppsUpdateApplicationSMSConsentInfo: AppsApplication;
  AppsUpdateApplicationStage?: Maybe<AppsApplication>;
  AppsUpdateApplicationStatus: Array<AppsApplication>;
  AppsUpdateAppsApplicationCandidate: ApplicationCandidateEntity;
  AppsUpdateCandidatePii: AppsCandidatePii;
  AppsUpdateCustomerSetting: AppsCustomerSetting;
  AppsUpdateJobRequisitionByExternalJobRequisitionId?: Maybe<AppsJobRequisition>;
  AppsUpdateJobRequisitionById?: Maybe<AppsJobRequisition>;
  AppsUpdateSMSNotificationSettings: AppsCustomerSetting;
  AppsUpdateVacancyByExternalVacancyId?: Maybe<AppsVacancy>;
  AppsUpdateVacancyById?: Maybe<AppsVacancy>;
  AppsUpdateVacancyGenericAssessmentLinkByExternalVacancyId: AppsVacancy;
  AppsUpdateVacancyHiringManagerByExternalVacancyId: AppsVacancy;
  AppsUpdateVacancyRecruiterByExternalVacancyId: AppsVacancy;
  AppsUpdateWorkflow: AppsWorkflow;
  AppsUpdateWorkflowSet: AppsWorkflowSet;
  AtsCreateTenant?: Maybe<AtsTenantEntity>;
  AtsDeleteTenantById?: Maybe<AtsTenantEntity>;
  AtsDeleteTenantsByIds?: Maybe<Array<AtsTenantEntity>>;
  AtsUpdateTenant?: Maybe<AtsTenantEntity>;
  AuthEmailLogin: AuthLoginEntity;
  AuthForgetPassword: AuthLoginEntity;
  AuthLogout: AuthLoginEntity;
  AuthMfaLogin: AuthLoginEntity;
  AuthResendMfaCode: AuthLoginEntity;
  AuthResetPassword: AuthLoginEntity;
  AuthUnlockUser: AuthLoginEntity;
  CommonCreatePolicy: CommonPolicyEntity;
  CommonInviteCandidate: CommonCandidateAssessment;
  CommonUpdatePermissionTabPolicies: CommonPermissionTabFormEntity;
  CommonUpdatePolicy: CommonPolicyEntity;
  CommonUpdatePolicyV2: CommonPolicyEntity;
  EDGECreatePolicy: EdgePolicyEntity;
  EDGEEmailLogin: Auth;
  EDGEForgetPassword: Auth;
  EDGEInviteCandidate: Assessment;
  EDGELogout: Scalars['Boolean']['output'];
  EDGEMfaLogin: Auth;
  EDGEResendCode: Auth;
  EDGEResetPassword: Auth;
  EDGEUnlockUser: Auth;
  EDGEUpdatePolicy: EdgePolicyEntity;
  EDGEUpdatePolicyV2: EdgePolicyEntity;
  FIAddAssessment: FiAssessment;
  FIAddAssessmentFromCache: FiAddAssessmentFromCacheRes;
  FIAddAssessmentPredictionResult: FiAssessment;
  FIAddBranding: FiBranding;
  FIAddCandidateFromCache: FiAddCandidateFromCacheRes;
  FIAddCohort: FiCohortEntity;
  FIAddPredictor: FiPredictor;
  FIArchiveCohortsByExternalId: Array<FiCohortEntity>;
  FICreateAtsAssessment: FiAssessment;
  FIDeleteAssessment?: Maybe<FiAssessment>;
  FIDeleteAssessmentVideos?: Maybe<FiAssessment>;
  FIDeleteCandidateById: FiCandidate;
  FIDeleteCandidateDynamo: FiCandidateDynamo;
  FIDeleteCohort?: Maybe<FiCohortEntity>;
  FIEditBranding?: Maybe<FiBranding>;
  FIMarkAssessmentDroppedOut: FiAssessment;
  FIPurgeCandidateInfo: FiCandidate;
  FIRemoveReviewsOfUsers?: Maybe<FiRemoveReviewsOfUsersResult>;
  FIRestoreCohortsByExternalId: Array<FiCohortEntity>;
  FIReuseAssessmentResults: FiReuseAssessmentResults;
  FISaveDraftReviews: FiSaveDraftReviewResult;
  FISubmitReviews: FiSubmitReviewResult;
  FIUpdateAssessmentReview: FiAssessmentReview;
  FIUpdateCandidateInfo: FiCandidate;
  FIUpdateCohortsByExternalId: Array<FiCohortEntity>;
  FIUpdateExternalApplicantId: FiUpdateExternalApplicantIdRes;
  IDPCreateDevice: IdpDeviceEntity;
  IDPCreateOrReplaceCustomer: IdpCustomerEntity;
  IDPCreateSSOConfig: IdpssoConfigEntity;
  IDPDeleteCustomer: Scalars['String']['output'];
  IDPDeleteSSOConfig?: Maybe<IdpssoConfigEntity>;
  IDPNestAddPolicy: IdpNestPolicyEntity;
  IDPNestAddSSOConfig: IdpNestSsoEntity;
  /** idempotent archive, will return policy id */
  IDPNestArchivePolicy: Scalars['String']['output'];
  /** idempotent delete, will return policy id */
  IDPNestDeletePolicy: Scalars['String']['output'];
  IDPNestDeleteSSOConfig?: Maybe<IdpNestSsoEntity>;
  /** The compensate operation of delete a policy */
  IDPNestRecoverPolicy: IdpNestPolicyEntity;
  /** idempotent archive, will return policy id */
  IDPNestRestorePolicy: Scalars['String']['output'];
  IDPNestUpdatePolicy: IdpNestPolicyEntity;
  IDPNestUpdateSSOConfig: IdpNestSsoEntity;
  IDPResetDevices: Scalars['Float']['output'];
  /** Update customer by replacing it with a new one. */
  IDPUpdateCustomer: IdpCustomerEntity;
  IDPUpdateSSOConfig: IdpssoConfigEntity;
  /** Confirm Candidate Interview Schedule Booking */
  LIBookCandidateInterview: LiBookedCandidateInterviewEntity;
  /** Cancel Candidate Booked Interview */
  LICancelCandidateInterview: LiCancelledCandidateInterviewEntity;
  /** copy attachments from temporary s3 bucket to official s3 bucket, will return interview schedule id */
  LICopyInterviewScheduleAttachmentsToOfficialS3Bucket: Scalars['String']['output'];
  LICreateCandidateSchedule: LiCandidateScheduleEntity;
  /** Create interview schedule */
  LICreateInterviewSchedule: LiInterviewScheduleEntity;
  /** Create Interviewer Schedule and associated interviewer entity */
  LICreateInterviewerSchedule: LiInterviewerScheduleEntity;
  LICreateJobRequisition: LiJobRequisitionEntity;
  LICreateScheduler: LiSchedulerEntity;
  LICreateTimeslot: LiTimeslotEntity;
  LIGenerateEventICalInfo: LiGeneratedEventICalEntity;
  /** Generate S3 pre-signed URL for downloading file */
  LIGenerateS3PreSignedDownloadUrl: Lis3PreSignedDownloadUrlEntity;
  /** Generate S3 pre-signed URL for uploading file */
  LIGenerateS3PreSignedUploadUrl: Lis3PreSignedUploadUrlEntity;
  LIMarkInterviewScheduleObjectStatusAsCompleted: LiInterviewScheduleEntity;
  /** Publish LI_CREATE_CANDIDATE_SCHEDULE_CMD for all candidates associated with the interview schedule. Returns the interview schedule ID if successful. */
  LIPublishCreateCandidateScheduleCmdEvents: Scalars['String']['output'];
  /** Publish LI_CREATE_INTERVIEWER_SCHEDULE_CMD for all interviewers associated with the interview schedule. Returns the interview schedule ID if successful. */
  LIPublishCreateInterviewerScheduleCmdEvents: Scalars['String']['output'];
  /** Publish LI_CREATE_TIMESLOT_CMD for all timeslots associated with the interview schedule. Returns the interview schedule ID if successful. */
  LIPublishCreateTimeslotCmdEvents: Scalars['String']['output'];
  /** Publish LI_CANDIDATE_INTERVIEW_SEND_INVITATION_CMD for all candidates associated with the interview schedule. Returns the interview schedule ID if successful. */
  LIPublishSendCandidateInterviewInvitationCmdEvents: Scalars['String']['output'];
  /** recalculate interview schedule status by interview schedule id,       this one should be called only from orchestrator to utilize the retry mechanism.       if success, it will return interview schedule id,       if failed it will throw sapia exception */
  LIRecalculateInterviewScheduleStatus?: Maybe<Scalars['String']['output']>;
  /** recalculate job requisition status by job requisition id,       this one should be called only from orchestrator to utilize the retry mechanism.       if success, it will return job requisition id,       if failed it will throw sapia exception */
  LIRecalculateJobRequisitionStatus?: Maybe<Scalars['String']['output']>;
  /** Update Candidate Interview Schedule Booking */
  LIRescheduleCandidateInterview: LiRescheduledCandidateInterviewEntity;
  /** Sync a single application with candidate from APPS service to LI service. Application will be returned. */
  LISyncApplicationAndCandidateFromApps: LiApplicationEntity;
  /** Update job requisition by organizationId and jobRequisitionId or externalJobRequisitionId or shortcode. For managers field, it replaces the entire managers list with the passed in managers. For tags field, it appends the new tags to the existing tags. For other fields, it updates the existing fields. */
  LIUpdateJobRequisition: LiJobRequisitionEntity;
  NotifCancelDataExportRequest?: Maybe<NotifNotificationEntity>;
  NotifCreateDataExportNotification: NotifNotificationEntity;
  NotifCreateEmailDomain: NotifCreateEmailDomainEntity;
  NotifCreateNotificationTemplate: NotifNotificationTemplateWithSetting;
  NotifDeleteNotificationSettings?: Maybe<Scalars['String']['output']>;
  NotifDownloadDataExportFile?: Maybe<NotifDownloadDataExportFileEntity>;
  /** Create a default template by copy the DEFAULT notification settings, if already have one, will do nothing. */
  NotifInitializeNotificationSettings: NotificationSettingsEntity;
  NotifInitializeSMSCredits: NotifSmsCreditsEntity;
  NotifPurchaseSMSCreditsByCustomerId: NotifSmsCreditsPurchaseHistoryEntity;
  NotifUpdateDataExportNotificationStatus?: Maybe<NotifNotificationEntity>;
  NotifUpdateEmailDomainSetting: NotifEmailDomainSettingEntity;
  NotifUpdateNotificationSettings: NotificationSettingsEntity;
  NotifUpdateNotificationSettingsV2: NotificationSettingsEntity;
  NotifUpdateSuccessDataExportNotification?: Maybe<NotifNotificationEntity>;
  ORGAppendCustomerToOrganization: OrganizationEntity;
  ORGArchiveCustomer: CustomerEntity;
  ORGArchiveGroup: GroupEntity;
  ORGArchiveGroups: Array<Scalars['String']['output']>;
  ORGArchiveHierarchy: Scalars['String']['output'];
  ORGArchiveOrganization: OrganizationEntity;
  ORGArchiveUser: UserEntity;
  ORGArchiveUsers: Array<Scalars['String']['output']>;
  ORGCreateAPIUser: UserEntity;
  ORGCreateAPIUserWithoutSpecialCharacters: UserEntity;
  /** @deprecated Use ORGCreateCustomerV2 instead */
  ORGCreateCustomer: CustomerEntity;
  /** create customer with customer Id */
  ORGCreateCustomerV2: CustomerEntity;
  ORGCreateEndUser: UserEntity;
  ORGCreateGroup: GroupEntity;
  ORGCreateHierarchies: Array<OrgHierarchyEntity>;
  ORGCreateHierarchy: OrgHierarchyEntity;
  ORGCreateOrganization: OrganizationEntity;
  ORGCreateSSOUser: UserEntity;
  /** @deprecated Use createEndUser, createSSOUser, createApiUser */
  ORGCreateUser: UserEntity;
  ORGDeleteCustomer?: Maybe<Scalars['String']['output']>;
  ORGDeleteGroup?: Maybe<GroupEntity>;
  /** The resolver to delete a hierarchy */
  ORGDeleteHierarchy?: Maybe<Scalars['String']['output']>;
  ORGDeleteOrganization?: Maybe<OrganizationEntity>;
  ORGDeleteUser?: Maybe<Scalars['String']['output']>;
  /** Update customer uniquename to default format or expected format from dto */
  ORGFormatCustomerUniqueName: CustomerEntity;
  ORGGroupAddUsers: Array<Scalars['String']['output']>;
  ORGGroupRemoveUsers: Array<Scalars['String']['output']>;
  ORGInitGroupPolicy: Scalars['String']['output'];
  ORGInitGroupPolicyV2: Scalars['String']['output'];
  /** Used to update organizationId, customerId, hierarchyId and username */
  ORGMigrateUser: UserEntity;
  ORGRemoveCustomerFromOrganization: OrganizationEntity;
  ORGRestoreCustomer: CustomerEntity;
  ORGRestoreGroup: GroupEntity;
  ORGRestoreGroups: Array<Scalars['String']['output']>;
  ORGRestoreHierarchy: Scalars['String']['output'];
  ORGRestoreOrganization: OrganizationEntity;
  ORGRestoreUser: UserEntity;
  ORGRestoreUsers: Array<Scalars['String']['output']>;
  /** sync customer info to global storage */
  ORGSyncCustomerToGlobal: Scalars['String']['output'];
  ORGSyncHierarchyTree: Scalars['String']['output'];
  ORGUpdateCustomer: CustomerEntity;
  ORGUpdateGroup: GroupEntity;
  ORGUpdateHierarchies: OrgUpdateHierarchiesEntity;
  ORGUpdateHierarchy?: Maybe<OrgHierarchyEntity>;
  ORGUpdateOrganization: OrganizationEntity;
  /** Used to update End User or SSO user */
  ORGUpdateUser: UserEntity;
  ORGUsersAppendToGroup?: Maybe<Array<Scalars['String']['output']>>;
  ORGUsersRemoveFromGroup?: Maybe<Array<Scalars['String']['output']>>;
  QBAddCollector: CollectorEdgeV2;
  QBAddCollectorEdgeV3: CollectorEdgeV3;
  QBAddKpiModel: KpiModel;
  QBAddPredictor: PredictorWithProduct;
  QBAddQuestion: Question;
  QBAddRoleFamily: RoleFamily;
  QBAddTrait: Trait;
  QBArchiveQuestionById: Question;
  QBArchiveQuestionByMasterId: QbArchiveQuestionsResponse;
  QBDuplicateCollector: CollectorCommon;
  QBDuplicateQuestion: Question;
  QBEditCollector: CollectorEdgeV2;
  QBEditCollectorEdgeV3: CollectorEdgeV3;
  QBEditPredictor: PredictorWithProduct;
  QBEditQuestion: Question;
  QBEditRoleFamily: RoleFamily;
  QBEditTrait: Trait;
  QBNewPredictorDeployment: QbPredictorDeployment;
  QBNewPredictorDeploymentEdgeV3: QbPredictorDeployment;
  TIDownload: TiDownload;
  TIMarkAssessmentIsViewed: TiMarkAssessmentIsViewed;
  login: AuthRes;
};


export type MutationAppsAddApplicationTagsArgs = {
  addApplicationTagsInput: AppsAddApplicationTagsDto;
};


export type MutationAppsArchiveJobRequisitionsArgs = {
  archiveJobRequisitionsInput: AppsArchiveJobRequsitionsDto;
};


export type MutationAppsArchiveVacanciesArgs = {
  archiveVacanciesInput: AppsArchiveVacanciesDto;
};


export type MutationAppsArchiveVacanciesByExternalVacancyIdsArgs = {
  archiveVacanciesByExternalVacancyIdsInput: AppsArchiveVacanciesByExternalVacancyIdsDto;
};


export type MutationAppsArchiveWorkflowSetArgs = {
  archiveWorkflowSetInput: ArchiveWorkflowSetInput;
};


export type MutationAppsArchiveWorkflowsArgs = {
  archiveWorkflowsInput: AppsArchiveWorkflowsDto;
};


export type MutationAppsBulkSyncJobRequisitionDocumentDbToElasticsearchDbArgs = {
  bulkSyncJobRequisitionDocumentDbToElasticsearchDbInput: AppsBulkSyncJobRequisitionDocumentDbToElasticsearchDbDto;
};


export type MutationAppsCreateApplicationArgs = {
  createApplicationInput: AppsCreateApplicationDto;
};


export type MutationAppsCreateApplicationAssessmentByExternalApplicationIdArgs = {
  createApplicationAssessmentByExternalApplicationIdInput: AppsCreateApplicationAssessmentByExternalApplicationIdDto;
};


export type MutationAppsCreateApplicationV2Args = {
  createApplicationV2Input: AppsCreateApplicationV2Dto;
};


export type MutationAppsCreateCustomerSettingArgs = {
  createCustomerSettingInput: AppsCreateCustomerSettingDto;
};


export type MutationAppsCreateJobRequisitionArgs = {
  createJobRequisitionInput: AppsCreateJobRequisitionDto;
};


export type MutationAppsCreateJobRequisitionForVacancyByIdArgs = {
  createJobRequisitionForVacancyByIdInput: AppsCreateJobRequisitionForVacancyByIdDto;
};


export type MutationAppsCreateVacancyArgs = {
  createVacancyInput: AppsCreateVacancyDto;
};


export type MutationAppsCreateWorkflowArgs = {
  createWorkflowInput: AppsCreateWorkflowDto;
};


export type MutationAppsCreateWorkflowSetArgs = {
  createWorkflowSetInput: AppsCreateWorkflowSetDto;
};


export type MutationAppsDeleteApplicationByExternalIdsArgs = {
  deleteApplicationByExternalIdsInput: AppsDeleteApplicationDto;
};


export type MutationAppsDeleteApplicationByIdArgs = {
  deleteApplicationByIdInput: AppsDeleteApplicationByIdDto;
};


export type MutationAppsDeleteCandidateByIdArgs = {
  deleteCandidateByIdInput: AppsDeleteCandidateByIdDto;
};


export type MutationAppsDeployAssessmentPackageArgs = {
  deployAssessmentPackageInput: AppsDeployAssessmentPackageDto;
};


export type MutationAppsMarkApplicationAssessmentIsViewedArgs = {
  markApplicationAssessmentIsViewedInput: AppsMarkApplicationAssessmentIsViewedDto;
};


export type MutationAppsMoveApplicationArgs = {
  moveApplicationInput: AppsMoveApplicationDto;
};


export type MutationAppsMoveApplicationV2Args = {
  moveApplicationV2Input: AppsMoveApplicationV2Dto;
};


export type MutationAppsOrderAtsApplicationArgs = {
  orderAtsApplicationInput: AppsOrderAtsApplicationDto;
};


export type MutationAppsPurgeApplicationCandidateArgs = {
  purgeApplicationCandidateInput: AppsPurgeApplicationCandidateDto;
};


export type MutationAppsRequestDataExportArgs = {
  requestDataExportInput: AppsRequestDataExportDto;
};


export type MutationAppsResendApplicationAssessmentLinkArgs = {
  resendApplicationAssessmentLinkInput: AppsResendApplicationAssessmentLinkDto;
};


export type MutationAppsResendApplicationMiReportArgs = {
  resendApplicationMiReportInput: AppsResendApplicationMiReportDto;
};


export type MutationAppsRestoreJobRequisitionsArgs = {
  restoreJobRequisitionsInput: AppsRestoreJobRequsitionsDto;
};


export type MutationAppsRestoreVacanciesArgs = {
  restoreVacanciesInput: AppsRestoreVacanciesDto;
};


export type MutationAppsRestoreVacanciesByExternalVacancyIdsArgs = {
  restoreVacanciesByExternalVacancyIdsInput: AppsRestoreVacanciesByExternalVacancyIdsDto;
};


export type MutationAppsRestoreWorkflowSetArgs = {
  restoreWorkflowSetInput: RestoreWorkflowSetInput;
};


export type MutationAppsRestoreWorkflowsArgs = {
  restoreWorkflowsInput: AppsRestoreWorkflowsDto;
};


export type MutationAppsSendApplicationReminderArgs = {
  sendApplicationReminderInput: AppsSendApplicationReminderDto;
};


export type MutationAppsSendSmsUsageAlertEmailArgs = {
  sendSMSUsageAlertEmailInput: AppsSendSmsUsageAlertEmailDto;
};


export type MutationAppsSendSmsUsageReminderEmailArgs = {
  sendSMSUsageReminderEmailInput: AppsSendSmsUsageReminderEmailDto;
};


export type MutationAppsSyncApplicationDocumentDbToElasticsearchDbByIdArgs = {
  syncApplicationDocumentDbToElasticsearchDbByIdInput: AppsSyncApplicationDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsSyncAssessmentPackageDocumentDbToElasticsearchDbByIdArgs = {
  syncAssessmentPackageDocumentDbToElasticsearchDbByIdInput: AppsSyncAssessmentPackageDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsSyncJobRequisitionDocumentDbToElasticsearchDbByIdArgs = {
  syncJobRequisitionDocumentDbToElasticsearchDbByIdInput: AppsSyncJobRequisitionDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsSyncVacancyDocumentDbToElasticsearchDbByIdArgs = {
  syncVacancyDocumentDbToElasticsearchDbByIdInput: AppsSyncVacancyDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsSyncWorkflowDocumentDbToElasticsearchDbByIdArgs = {
  syncWorkflowDocumentDbToElasticsearchDbByIdInput: AppsSyncWorkflowDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsSyncWorkflowSetDocumentDbToElasticsearchDbByIdArgs = {
  syncWorkflowSetDocumentDbToElasticsearchDbByIdInput: AppsSyncWorkflowSetDocumentDbToElasticsearchDbByIdDto;
};


export type MutationAppsUpdateApplicationAssessmentArgs = {
  updateApplicationAssessmentInput: AppsUpdateApplicationAssessmentDto;
};


export type MutationAppsUpdateApplicationAssessmentIsViewedArgs = {
  updateApplicationAssessmentIsViewedInput: AppsUpdateApplicationAssessmentIsViewedDto;
};


export type MutationAppsUpdateApplicationAssessmentResultArgs = {
  updateApplicationAssessmentResultInput: AppsUpdateApplicationAssessmentResultDto;
};


export type MutationAppsUpdateApplicationAssessmentReviewSavedArgs = {
  updateApplicationAssessmentReviewSavedInput: AppsUpdateApplicationAssessmentReviewSavedDto;
};


export type MutationAppsUpdateApplicationCandidateArgs = {
  updateApplicationCandidateInput: AppsUpdateApplicationCandidateDto;
};


export type MutationAppsUpdateApplicationDefaultAssessmentArgs = {
  updateApplicationDefaultAssessmentInput: AppsUpdateApplicationDefaultAssessmentDto;
};


export type MutationAppsUpdateApplicationSmsConsentInfoArgs = {
  updateApplicationSMSConsentInfoInput: AppsUpdateApplicationSmsConsentInfoDto;
};


export type MutationAppsUpdateApplicationStageArgs = {
  updateApplicationStageInput: AppsUpdateApplicationStageDto;
};


export type MutationAppsUpdateApplicationStatusArgs = {
  updateApplicationStatusInput: AppsUpdateApplicationStatusDto;
};


export type MutationAppsUpdateAppsApplicationCandidateArgs = {
  updateAppsApplicationCandidateInput: AppsUpdateAppsApplicationCandidateDto;
};


export type MutationAppsUpdateCandidatePiiArgs = {
  updateCandidatePiiInput: AppsUpdateCandidatePiiDto;
};


export type MutationAppsUpdateCustomerSettingArgs = {
  updateCustomerSettingInput: AppsUpdateCustomerSettingDto;
};


export type MutationAppsUpdateJobRequisitionByExternalJobRequisitionIdArgs = {
  updateJobRequisitionByExternalJobRequisitionIdInput: AppsUpdateJobRequisitionByExternalJobRequisitionIdDto;
};


export type MutationAppsUpdateJobRequisitionByIdArgs = {
  updateJobRequisitionByIdInput: AppsUpdateJobRequisitionByIdDto;
};


export type MutationAppsUpdateSmsNotificationSettingsArgs = {
  updateSMSNotificationSettingsInput: AppsUpdateSmsNotificationSettingsDto;
};


export type MutationAppsUpdateVacancyByExternalVacancyIdArgs = {
  updateVacancyByExternalVacancyIdInput: AppsUpdateVacancyByExternalVacancyIdDto;
};


export type MutationAppsUpdateVacancyByIdArgs = {
  updateVacancyByIdInput: AppsUpdateVacancyByIdDto;
};


export type MutationAppsUpdateVacancyGenericAssessmentLinkByExternalVacancyIdArgs = {
  updateVacancyGenericAssessmentLinkByExternalVacancyIdInput: AppsUpdateVacancyGenericAssessmentLinkByExternalVacancyIdDto;
};


export type MutationAppsUpdateVacancyHiringManagerByExternalVacancyIdArgs = {
  updateVacancyHiringManagerByExternalVacancyIdInput: AppsUpdateVacancyHiringManagerByExternalVacancyIdDto;
};


export type MutationAppsUpdateVacancyRecruiterByExternalVacancyIdArgs = {
  updateVacancyRecruiterByExternalVacancyIdInput: AppsUpdateVacancyRecruiterByExternalVacancyIdDto;
};


export type MutationAppsUpdateWorkflowArgs = {
  updateWorkflowInput: AppsUpdateWorkflowDto;
};


export type MutationAppsUpdateWorkflowSetArgs = {
  updateWorkflowSetInput: AppsUpdateWorkflowSetDto;
};


export type MutationAtsCreateTenantArgs = {
  createTenantInput: AtsCreateTenantDto;
};


export type MutationAtsDeleteTenantByIdArgs = {
  deleteTenantByIdInput: AtsDeleteTenantByIdDto;
};


export type MutationAtsDeleteTenantsByIdsArgs = {
  deleteTenantsByIdsInput: AtsDeleteTenantsByIdsDto;
};


export type MutationAtsUpdateTenantArgs = {
  updateTenantInput: AtsUpdateTenantDto;
};


export type MutationAuthEmailLoginArgs = {
  AuthEmailLoginDto: AuthEmailLoginDto;
};


export type MutationAuthForgetPasswordArgs = {
  AuthForgetPasswordDto: AuthForgetPasswordDto;
};


export type MutationAuthMfaLoginArgs = {
  AuthMFALoginDto: AuthMfaLoginDto;
};


export type MutationAuthResendMfaCodeArgs = {
  AuthResendMfaCodeDto: AuthResendMfaCodeDto;
};


export type MutationAuthResetPasswordArgs = {
  AuthResetPasswordDto: AuthResetPasswordDto;
};


export type MutationAuthUnlockUserArgs = {
  AuthUnlockUserDto: AuthUnlockUserDto;
};


export type MutationCommonCreatePolicyArgs = {
  addPolicyDto: CommonAddPolicyDto;
};


export type MutationCommonInviteCandidateArgs = {
  atsApplicationInputRequest: CommonCandidateAtsApplicationInputRequestDto;
};


export type MutationCommonUpdatePermissionTabPoliciesArgs = {
  update: CommonUpdatePermissionTabPoliciesDto;
};


export type MutationCommonUpdatePolicyArgs = {
  addPolicyDto: CommonAddPolicyDto;
};


export type MutationCommonUpdatePolicyV2Args = {
  filter: CommonFilterUpdatePolicyDto;
  update: CommonUpdatePolicyDto;
};


export type MutationEdgeCreatePolicyArgs = {
  addPolicyDto: EdgeAddPolicyDto;
};


export type MutationEdgeEmailLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationEdgeForgetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationEdgeInviteCandidateArgs = {
  atsApplicationInput: AtsApplicationInputDto;
};


export type MutationEdgeMfaLoginArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isRememberDevice?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationEdgeResendCodeArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationEdgeResetPasswordArgs = {
  password: Scalars['String']['input'];
  resetToken: Scalars['String']['input'];
};


export type MutationEdgeUnlockUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationEdgeUpdatePolicyArgs = {
  addPolicyDto: EdgeAddPolicyDto;
};


export type MutationEdgeUpdatePolicyV2Args = {
  filter: EdgeFilterUpdatePolicyDto;
  update: EdgeUpdatePolicyDto;
};


export type MutationFiAddAssessmentArgs = {
  input: FiAssessmentInput;
};


export type MutationFiAddAssessmentFromCacheArgs = {
  assessmentId: Scalars['String']['input'];
  event: Scalars['String']['input'];
};


export type MutationFiAddAssessmentPredictionResultArgs = {
  assessmentId: Scalars['String']['input'];
  flags: FiAssessmentFlagInput;
  personality: FiAssessmentPersonalityInsightInput;
  predictionResult: Array<FiAssessmentPredictionResultInput>;
};


export type MutationFiAddBrandingArgs = {
  input: FiAddBrandingInput;
};


export type MutationFiAddCandidateFromCacheArgs = {
  candidateId: Scalars['String']['input'];
  event: Scalars['String']['input'];
};


export type MutationFiAddCohortArgs = {
  cohort: FiAddCohortDto;
};


export type MutationFiAddPredictorArgs = {
  input: FiPredictorInput;
};


export type MutationFiArchiveCohortsByExternalIdArgs = {
  archiveCohortsByExternalIdDto: FiArchiveCohortsByExternalIdDto;
};


export type MutationFiCreateAtsAssessmentArgs = {
  createAtsAssessmentInput: FiCreateAtsAssessmentInput;
};


export type MutationFiDeleteAssessmentArgs = {
  deleteAssessmentInput: FiDeleteAssessmentInputDto;
};


export type MutationFiDeleteAssessmentVideosArgs = {
  deleteAssessmentVideosInput: FiDeleteAssessmentVideosDto;
};


export type MutationFiDeleteCandidateByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationFiDeleteCandidateDynamoArgs = {
  id: Scalars['String']['input'];
};


export type MutationFiDeleteCohortArgs = {
  id: Scalars['String']['input'];
};


export type MutationFiEditBrandingArgs = {
  customerId: Scalars['String']['input'];
  input: FiEditBrandingInput;
};


export type MutationFiMarkAssessmentDroppedOutArgs = {
  markAssessmentDroppedOutInput: FiMarkAssessmentDroppedOutDto;
};


export type MutationFiPurgeCandidateInfoArgs = {
  input: FiPurgeCandidateInfoDto;
};


export type MutationFiRemoveReviewsOfUsersArgs = {
  removeReviewsOfUsersInput: FiRemoveReviewsOfUsersDto;
};


export type MutationFiRestoreCohortsByExternalIdArgs = {
  restoreCohortsByExternalIdDto: FiRestoreCohortsByExternalIdDto;
};


export type MutationFiReuseAssessmentResultsArgs = {
  input: FiReuseAssessmentResultsDto;
};


export type MutationFiSaveDraftReviewsArgs = {
  saveDraftReviewsInput: FiSaveDraftReviewsDto;
};


export type MutationFiSubmitReviewsArgs = {
  submitReviewsInput: FiSubmitReviewsDto;
};


export type MutationFiUpdateAssessmentReviewArgs = {
  update: UpdateAssessmentReviewDto;
};


export type MutationFiUpdateCandidateInfoArgs = {
  filter: FiFilterUpdateCandidateInfoDto;
  update: FiUpdateCandidateInfoDto;
};


export type MutationFiUpdateCohortsByExternalIdArgs = {
  filter: FiFilterUpdateCohortsByExternalIdDto;
  update: FiUpdateCohortsByExternalIdDto;
};


export type MutationFiUpdateExternalApplicantIdArgs = {
  input: FiUpdateExternalApplicantIdInput;
};


export type MutationIdpCreateDeviceArgs = {
  deviceInfo: IdpAddDeviceDto;
};


export type MutationIdpCreateOrReplaceCustomerArgs = {
  customer: IdpAddCustomerDto;
};


export type MutationIdpCreateSsoConfigArgs = {
  ssoConfig: IdpAddSsoConfigDto;
};


export type MutationIdpDeleteCustomerArgs = {
  filter: IdpDeleteCustomerDto;
};


export type MutationIdpDeleteSsoConfigArgs = {
  filter: IdpFilterDeleteSsoConfigDto;
};


export type MutationIdpNestAddPolicyArgs = {
  policy: IdpNestAddPolicyDto;
};


export type MutationIdpNestAddSsoConfigArgs = {
  ssoConfig: IdpNestAddSsoConfigDto;
};


export type MutationIdpNestArchivePolicyArgs = {
  filter: IdpNestFilterGetPolicyDto;
};


export type MutationIdpNestDeletePolicyArgs = {
  filter: IdpNestFilterGetPolicyDto;
};


export type MutationIdpNestDeleteSsoConfigArgs = {
  filter: IdpNestFilterDeleteSsoConfigDto;
};


export type MutationIdpNestRecoverPolicyArgs = {
  policy: IdpNestRecoverPolicyDto;
};


export type MutationIdpNestRestorePolicyArgs = {
  filter: IdpNestFilterGetPolicyDto;
};


export type MutationIdpNestUpdatePolicyArgs = {
  filter: IdpNestFilterGetPolicyDto;
  update: IdpNestUpdatePolicyDto;
};


export type MutationIdpNestUpdateSsoConfigArgs = {
  filter: IdpNestFilterUpdateSsoConfigDto;
  update: IdpNestUpdateSsoConfigDto;
};


export type MutationIdpResetDevicesArgs = {
  filter: IdpFilterResetDevicesDto;
};


export type MutationIdpUpdateCustomerArgs = {
  filter: IdpAddCustomerDto;
};


export type MutationIdpUpdateSsoConfigArgs = {
  filter: IdpFilterUpdateSsoConfigDto;
  update: IdpUpdateSsoConfigDto;
};


export type MutationLiBookCandidateInterviewArgs = {
  input: LiBookCandidateInterviewDto;
};


export type MutationLiCancelCandidateInterviewArgs = {
  input: LiCancelCandidateInterviewDto;
};


export type MutationLiCopyInterviewScheduleAttachmentsToOfficialS3BucketArgs = {
  filter: LiCopyInterviewScheduleAttachmentsToOfficialS3BucketDto;
};


export type MutationLiCreateCandidateScheduleArgs = {
  input: LiCreateCandidateScheduleDto;
};


export type MutationLiCreateInterviewScheduleArgs = {
  input: LiCreateInterviewScheduleDto;
};


export type MutationLiCreateInterviewerScheduleArgs = {
  input: LiCreateInterviewerScheduleDto;
};


export type MutationLiCreateJobRequisitionArgs = {
  input: LiCreateJobRequisitionDto;
};


export type MutationLiCreateSchedulerArgs = {
  input: LiCreateSchedulerDto;
};


export type MutationLiCreateTimeslotArgs = {
  input: LiCreateTimeslotDto;
};


export type MutationLiGenerateEventICalInfoArgs = {
  input: LiGenerateEventICalDto;
};


export type MutationLiGenerateS3PreSignedDownloadUrlArgs = {
  input: LiGenerateS3PreSignedDownloadUrlDto;
};


export type MutationLiGenerateS3PreSignedUploadUrlArgs = {
  input: LiGenerateS3PreSignedUploadUrlDto;
};


export type MutationLiMarkInterviewScheduleObjectStatusAsCompletedArgs = {
  input: LiMarkInterviewScheduleObjectStatusAsCompletedDto;
};


export type MutationLiPublishCreateCandidateScheduleCmdEventsArgs = {
  input: LiPublishCreateCandidateScheduleCmdEventsDto;
};


export type MutationLiPublishCreateInterviewerScheduleCmdEventsArgs = {
  input: LiPublishCreateInterviewerScheduleCmdEventsDto;
};


export type MutationLiPublishCreateTimeslotCmdEventsArgs = {
  input: LiPublishCreateTimeslotCmdEventsDto;
};


export type MutationLiPublishSendCandidateInterviewInvitationCmdEventsArgs = {
  input: LiPublishSendCandidateInterviewInvitationCmdEventsDto;
};


export type MutationLiRecalculateInterviewScheduleStatusArgs = {
  filter: LiRecalculateInterviewScheduleStatusDto;
};


export type MutationLiRecalculateJobRequisitionStatusArgs = {
  filter: LiRecalculateJobRequisitionStatusDto;
};


export type MutationLiRescheduleCandidateInterviewArgs = {
  input: LiRescheduleCandidateInterviewDto;
};


export type MutationLiSyncApplicationAndCandidateFromAppsArgs = {
  input: LiSyncApplicationAndCandidateFromAppsDto;
};


export type MutationLiUpdateJobRequisitionArgs = {
  input: LiUpdateJobRequisitionDto;
};


export type MutationNotifCancelDataExportRequestArgs = {
  input: NotifCancelDataExportRequestDto;
};


export type MutationNotifCreateDataExportNotificationArgs = {
  createDataExportNotificationInput: NotifCreateDataExportNotificationDto;
};


export type MutationNotifCreateEmailDomainArgs = {
  createEmailDomainInput: NotifCreateEmailDomainDto;
};


export type MutationNotifCreateNotificationTemplateArgs = {
  createNotificationTemplateInput: NotifCreateNotificationTemplateWithSettingDto;
};


export type MutationNotifDeleteNotificationSettingsArgs = {
  filter: NotifDeleteNotificationSettingsDto;
};


export type MutationNotifDownloadDataExportFileArgs = {
  downloadDataExportFileInput: NotifDownloadDataExportFileDto;
};


export type MutationNotifInitializeNotificationSettingsArgs = {
  filter: NotifInitializeNotificationSettingsDto;
};


export type MutationNotifInitializeSmsCreditsArgs = {
  filter: CreateSmsCreditsDto;
};


export type MutationNotifPurchaseSmsCreditsByCustomerIdArgs = {
  update: PurchaseSmsCreditsByCustomerIdDto;
};


export type MutationNotifUpdateDataExportNotificationStatusArgs = {
  input: NotifUpdateDataExportNotificationStatusDto;
};


export type MutationNotifUpdateEmailDomainSettingArgs = {
  updateEmailDomainSettingInput: NotifUpdateEmailDomainSettingDto;
};


export type MutationNotifUpdateNotificationSettingsArgs = {
  update: UpdateNotificationDto;
};


export type MutationNotifUpdateNotificationSettingsV2Args = {
  update: UpdateNotificationV2Dto;
};


export type MutationNotifUpdateSuccessDataExportNotificationArgs = {
  input: NotifUpdateSuccessDataExportNotificationDto;
};


export type MutationOrgAppendCustomerToOrganizationArgs = {
  customer: AppendSwitchableCustomerDto;
  filter: FilterUpdateOrganizationDto;
};


export type MutationOrgArchiveCustomerArgs = {
  customer: ArchiveCustomerDto;
};


export type MutationOrgArchiveGroupArgs = {
  filter: ArchiveGroupDto;
};


export type MutationOrgArchiveGroupsArgs = {
  filter: OrgArchiveGroupsDto;
};


export type MutationOrgArchiveHierarchyArgs = {
  filter: OrgArchiveHierarchyDto;
};


export type MutationOrgArchiveOrganizationArgs = {
  organization: ArchiveOrganizationDto;
};


export type MutationOrgArchiveUserArgs = {
  filter: FilterArchiveUserDto;
};


export type MutationOrgArchiveUsersArgs = {
  filter: FilterArchiveUsersDto;
};


export type MutationOrgCreateApiUserArgs = {
  user: OrgCreateApiUserDto;
};


export type MutationOrgCreateApiUserWithoutSpecialCharactersArgs = {
  user: OrgCreateApiUserWithoutSpecialCharactersDto;
};


export type MutationOrgCreateCustomerArgs = {
  customer: AddCustomerDto;
};


export type MutationOrgCreateCustomerV2Args = {
  customer: OrgCreateCustomerDto;
};


export type MutationOrgCreateEndUserArgs = {
  user: OrgCreateEndUserDto;
};


export type MutationOrgCreateGroupArgs = {
  Group: AddGroupDto;
};


export type MutationOrgCreateHierarchiesArgs = {
  hierarchies: OrgAddHierarchiesDto;
};


export type MutationOrgCreateHierarchyArgs = {
  hierarchy: AddHierarchyDto;
};


export type MutationOrgCreateOrganizationArgs = {
  organization: AddOrganizationDto;
};


export type MutationOrgCreateSsoUserArgs = {
  user: OrgCreateSsoUserDto;
};


export type MutationOrgCreateUserArgs = {
  user: AddUserDto;
};


export type MutationOrgDeleteCustomerArgs = {
  customer: OrgDeleteCustomerDto;
};


export type MutationOrgDeleteGroupArgs = {
  filter: OrgDeleteGroupDto;
};


export type MutationOrgDeleteHierarchyArgs = {
  filter: OrgDeleteHierarchyDto;
};


export type MutationOrgDeleteOrganizationArgs = {
  organization: GetOrganizationDto;
};


export type MutationOrgDeleteUserArgs = {
  filter: FilterDeleteUserDto;
};


export type MutationOrgFormatCustomerUniqueNameArgs = {
  filter: OrgFilterFormatCustomerUniqueNameDto;
  update: OrgFormatCustomerUniqueNameDto;
};


export type MutationOrgGroupAddUsersArgs = {
  param: GroupAddUsersDto;
};


export type MutationOrgGroupRemoveUsersArgs = {
  param: GroupRemoveUsersDto;
};


export type MutationOrgInitGroupPolicyArgs = {
  filter: FilterGetGroupDto;
};


export type MutationOrgInitGroupPolicyV2Args = {
  filter: FilterGetGroupDto;
};


export type MutationOrgMigrateUserArgs = {
  filter: FilterUpdateUserDto;
  update: OrgMigrateUserDto;
};


export type MutationOrgRemoveCustomerFromOrganizationArgs = {
  customer: RemoveSwitchableCustomerDto;
  filter: FilterUpdateOrganizationDto;
};


export type MutationOrgRestoreCustomerArgs = {
  customer: RestoreCustomerDto;
};


export type MutationOrgRestoreGroupArgs = {
  filter: RestoreGroupDto;
};


export type MutationOrgRestoreGroupsArgs = {
  filter: OrgRestoreGroupsDto;
};


export type MutationOrgRestoreHierarchyArgs = {
  filter: RestoreHierarchyDto;
};


export type MutationOrgRestoreOrganizationArgs = {
  organization: RestoreOrganizationDto;
};


export type MutationOrgRestoreUserArgs = {
  filter: FilterRestoreUserDto;
};


export type MutationOrgRestoreUsersArgs = {
  filter: FilterRestoreUsersDto;
};


export type MutationOrgSyncCustomerToGlobalArgs = {
  filter: OrgSyncCustomerToGlobalDto;
};


export type MutationOrgSyncHierarchyTreeArgs = {
  filter: SyncHierarchyTreeDto;
};


export type MutationOrgUpdateCustomerArgs = {
  filter: GetCustomerDto;
  update: OrgUpdateCustomerDto;
};


export type MutationOrgUpdateGroupArgs = {
  filter: FilterUpdateGroupDto;
  update: UpdateGroupDto;
};


export type MutationOrgUpdateHierarchiesArgs = {
  hierarchies: OrgDiffHierarchiesDto;
};


export type MutationOrgUpdateHierarchyArgs = {
  filter: FilterUpdateHierarchyDto;
  update: OrgUpdateHierarchyDto;
};


export type MutationOrgUpdateOrganizationArgs = {
  filter: FilterUpdateOrganizationDto;
  update: UpdateOrganizationDto;
};


export type MutationOrgUpdateUserArgs = {
  filter: FilterUpdateUserDto;
  update: UpdateUserDto;
};


export type MutationOrgUsersAppendToGroupArgs = {
  param: OrgUsersAppendToGroupDto;
};


export type MutationOrgUsersRemoveFromGroupArgs = {
  param: OrgUsersRemoveFromGroupDto;
};


export type MutationQbAddCollectorArgs = {
  input: QbAddCollectorInput;
};


export type MutationQbAddCollectorEdgeV3Args = {
  input: QbAddCollectorEdgeV3Input;
};


export type MutationQbAddKpiModelArgs = {
  input: QbAddKpiModelInput;
};


export type MutationQbAddPredictorArgs = {
  input: QbAddPredictorInput;
};


export type MutationQbAddQuestionArgs = {
  input: QbAddQuestionInput;
};


export type MutationQbAddRoleFamilyArgs = {
  input: QbAddRoleFamilyInput;
};


export type MutationQbAddTraitArgs = {
  input: QbAddTraitInput;
};


export type MutationQbArchiveQuestionByIdArgs = {
  questionId: Scalars['String']['input'];
};


export type MutationQbArchiveQuestionByMasterIdArgs = {
  masterId: Scalars['String']['input'];
};


export type MutationQbDuplicateCollectorArgs = {
  collectorId: Scalars['String']['input'];
};


export type MutationQbDuplicateQuestionArgs = {
  masterId: Scalars['String']['input'];
  newMasterId: Scalars['String']['input'];
};


export type MutationQbEditCollectorArgs = {
  collectorId: Scalars['String']['input'];
  input: QbEditCollectorInput;
};


export type MutationQbEditCollectorEdgeV3Args = {
  collectorId: Scalars['String']['input'];
  input: QbEditCollectorEdgeV3Input;
};


export type MutationQbEditPredictorArgs = {
  input: QbEditPredictorInput;
  predictorId: Scalars['String']['input'];
};


export type MutationQbEditQuestionArgs = {
  input: QbEditQuestionInput;
  questionId: Scalars['String']['input'];
};


export type MutationQbEditRoleFamilyArgs = {
  id: Scalars['String']['input'];
  update: QbUpdateRoleFamilyInput;
};


export type MutationQbEditTraitArgs = {
  id: Scalars['String']['input'];
  update: QbUpdateTraitInput;
};


export type MutationQbNewPredictorDeploymentArgs = {
  input: QbNewPredictorDeploymentInput;
};


export type MutationQbNewPredictorDeploymentEdgeV3Args = {
  input: QbNewPredictorDeploymentEdgeV3Input;
};


export type MutationTiDownloadArgs = {
  assessmentId: Scalars['String']['input'];
  tiUrl: Scalars['String']['input'];
};


export type MutationTiMarkAssessmentIsViewedArgs = {
  markAssessmentIsViewedDto: TiMarkAssessmentIsViewedDto;
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  region: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type NotifCancelDataExportRequestDto = {
  notificationId: Scalars['String']['input'];
};

export type NotifCreateDataExportNotificationDto = {
  applicationIds: Array<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  dataExportFilePath: Scalars['String']['input'];
  dataExportOption: Scalars['String']['input'];
  exportAllApplications: Scalars['Boolean']['input'];
  exportFormat: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  jobRequisitionId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  requestedAt: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type NotifCreateEmailDomainDto = {
  customerId: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  emailAddress: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type NotifCreateEmailDomainEntity = {
  __typename?: 'NotifCreateEmailDomainEntity';
  emailDomainSetting?: Maybe<NotifEmailDomainSettingEntity>;
  sesEmailIdentity?: Maybe<NotifCreateSesEmailIdentityEntity>;
};

export type NotifCreateNotificationTemplateWithSettingDto = {
  customerId: Scalars['String']['input'];
  emailCss?: InputMaybe<Scalars['String']['input']>;
  emailHtml?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  language: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  provider: Scalars['String']['input'];
  smsBody?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  templateTagName: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userEmail: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  versionDescription?: InputMaybe<Scalars['String']['input']>;
};

export type NotifCreateSesEmailIdentityEntity = {
  __typename?: 'NotifCreateSESEmailIdentityEntity';
  dkimAttributes?: Maybe<NotifSesDkimAttributes>;
  identityType?: Maybe<Scalars['String']['output']>;
  verifiedForSendingStatus?: Maybe<Scalars['Boolean']['output']>;
};

export type NotifDataExportMetaDataEntity = {
  __typename?: 'NotifDataExportMetaDataEntity';
  cancelledAt?: Maybe<Scalars['DateTime']['output']>;
  downloadedAt?: Maybe<Scalars['DateTime']['output']>;
  exportParams: NotifDataExportParamsEntity;
};

export type NotifDataExportParamsEntity = {
  __typename?: 'NotifDataExportParamsEntity';
  applicationIds: Array<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  dataExportOption: Scalars['String']['output'];
  exportAllApplications: Scalars['Boolean']['output'];
  exportFormat: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  jobRequisitionId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  requestedAt: Scalars['DateTime']['output'];
};

export type NotifDateRange = {
  gte: Scalars['String']['input'];
  lte: Scalars['String']['input'];
};

export type NotifDeleteNotificationSettingsDto = {
  customerId: Scalars['String']['input'];
};

export type NotifDownloadDataExportFileDto = {
  notificationId: Scalars['String']['input'];
};

export type NotifDownloadDataExportFileEntity = {
  __typename?: 'NotifDownloadDataExportFileEntity';
  url: Scalars['String']['output'];
};

export type NotifEmailDomainSettingEntity = {
  __typename?: 'NotifEmailDomainSettingEntity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  emailIdentity: Scalars['String']['output'];
  isCustomizedEmailDomainEnabled: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotifEmailEventEntity = {
  __typename?: 'NotifEmailEventEntity';
  customerId: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  mailMessageId: Scalars['String']['output'];
  mailRecipient: Scalars['String']['output'];
  mailSender: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  templateId: Scalars['String']['output'];
  templateType?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};

export type NotifEmailEventList = {
  __typename?: 'NotifEmailEventList';
  data: Array<NotifEmailEventEntity>;
  pagination: NotifPaginationResponse;
};

export type NotifGetEmailDomainDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type NotifGetEmailDomainEntity = {
  __typename?: 'NotifGetEmailDomainEntity';
  emailDomainSetting?: Maybe<NotifEmailDomainSettingEntity>;
  sesEmailIdentity?: Maybe<NotifGetSesEmailIdentityEntity>;
};

export type NotifGetEmailDomainSettingDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
};

export type NotifGetEmailEventByMailMessageIdDto = {
  customerId: Scalars['String']['input'];
  mailMessageId: Scalars['String']['input'];
};

export type NotifGetEmailEventsByCustomerIdDto = {
  customerId: Scalars['String']['input'];
  dateRange?: InputMaybe<NotifDateRange>;
  eventType?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  mailRecipient?: InputMaybe<Scalars['String']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<SortDto>;
  templateTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NotifGetLatestEmailEventByAssessmentIdDto = {
  assessmentId: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  templateTypes: Array<Scalars['String']['input']>;
};

export type NotifGetSesEmailIdentityEntity = {
  __typename?: 'NotifGetSESEmailIdentityEntity';
  configurationSetName?: Maybe<Scalars['String']['output']>;
  dkimAttributes?: Maybe<NotifSesDkimAttributes>;
  feedbackForwardingStatus?: Maybe<Scalars['Boolean']['output']>;
  identityType?: Maybe<Scalars['String']['output']>;
  mailFromAttributes?: Maybe<NotifSesMailFromAttributes>;
  policies?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<NotifSesGetEmailIdentityTag>>;
  verificationInfo?: Maybe<NotifSesVerificationInfo>;
  verificationStatus?: Maybe<Scalars['String']['output']>;
  verifiedForSendingStatus?: Maybe<Scalars['Boolean']['output']>;
};

export type NotifGetSmsEventListDto = {
  customerId: Scalars['String']['input'];
  dateRange?: InputMaybe<NotifDateRange>;
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  messageStatus?: InputMaybe<Array<Scalars['String']['input']>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<SortDto>;
  templateTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NotifGetUserNotificationListDto = {
  limitEq?: InputMaybe<Scalars['Float']['input']>;
  skipEq?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<SortDto>;
  userId: Scalars['String']['input'];
};

export type NotifGetUserNotificationListEntity = {
  __typename?: 'NotifGetUserNotificationListEntity';
  notifications: Array<NotifNotificationEntity>;
  pagination: NotifPaginationResponse;
};

/** initialize a default notification settings for one customer */
export type NotifInitializeNotificationSettingsDto = {
  customerId: Scalars['String']['input'];
};

export type NotifNotificationEntity = {
  __typename?: 'NotifNotificationEntity';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  dataExportMetaData?: Maybe<NotifDataExportMetaDataEntity>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type NotifNotificationTemplate = {
  __typename?: 'NotifNotificationTemplate';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  emailCss?: Maybe<Scalars['String']['output']>;
  emailHtml?: Maybe<Scalars['String']['output']>;
  exportedEmailHtml?: Maybe<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isLatest: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  lastUpdatedBy: NotifNotificationTemplateLastUpdatedBy;
  masterId: Scalars['ID']['output'];
  organizationId: Scalars['String']['output'];
  provider: Scalars['String']['output'];
  smsBody?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  tags?: Maybe<Array<NotifTag>>;
  templateArn: Scalars['String']['output'];
  templateSettingId: Scalars['ID']['output'];
  templateTagName: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  version: Scalars['Float']['output'];
  versionDescription?: Maybe<Scalars['String']['output']>;
};

export type NotifNotificationTemplateLastUpdatedBy = {
  __typename?: 'NotifNotificationTemplateLastUpdatedBy';
  userEmail: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type NotifNotificationTemplateSetting = {
  __typename?: 'NotifNotificationTemplateSetting';
  _id: Scalars['ID']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  emailEnabled: Scalars['Boolean']['output'];
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  smsEnabled: Scalars['Boolean']['output'];
  templateTagName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type NotifNotificationTemplateWithSetting = {
  __typename?: 'NotifNotificationTemplateWithSetting';
  template: NotifNotificationTemplate;
  templateSetting: NotifNotificationTemplateSetting;
};

export type NotifPaginationResponse = {
  __typename?: 'NotifPaginationResponse';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type NotifSesDkimAttributes = {
  __typename?: 'NotifSESDkimAttributes';
  currentSigningKeyLength?: Maybe<Scalars['String']['output']>;
  lastKeyGenerationTimestamp?: Maybe<Scalars['DateTime']['output']>;
  nextSigningKeyLength?: Maybe<Scalars['String']['output']>;
  signingAttributesOrigin?: Maybe<Scalars['String']['output']>;
  signingEnabled?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<Scalars['String']['output']>>;
};

export type NotifSesGetEmailIdentitySoaRecord = {
  __typename?: 'NotifSESGetEmailIdentitySOARecord';
  adminEmail: Scalars['String']['output'];
  primaryNameServer: Scalars['String']['output'];
  serialNumber: Scalars['Float']['output'];
};

export type NotifSesGetEmailIdentityTag = {
  __typename?: 'NotifSESGetEmailIdentityTag';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type NotifSesMailFromAttributes = {
  __typename?: 'NotifSESMailFromAttributes';
  behaviorOnMxFailure?: Maybe<Scalars['String']['output']>;
  mailFromDomain?: Maybe<Scalars['String']['output']>;
  mailFromDomainStatus?: Maybe<Scalars['String']['output']>;
};

export type NotifSesVerificationInfo = {
  __typename?: 'NotifSESVerificationInfo';
  errorType?: Maybe<Scalars['String']['output']>;
  lastCheckedTimestamp?: Maybe<Scalars['DateTime']['output']>;
  lastSuccessTimestamp?: Maybe<Scalars['DateTime']['output']>;
  sOARecord?: Maybe<NotifSesGetEmailIdentitySoaRecord>;
};

export type NotifSmsCreditsEntity = {
  __typename?: 'NotifSMSCreditsEntity';
  credits: Scalars['Float']['output'];
  customerId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  totalCredits: Scalars['Float']['output'];
};

export type NotifSmsCreditsPurchaseHistoryEntity = {
  __typename?: 'NotifSMSCreditsPurchaseHistoryEntity';
  customerId: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  purchaseAmount: Scalars['Float']['output'];
  purchaseUserEmail: Scalars['String']['output'];
  purchaseUserId: Scalars['String']['output'];
  purchasedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NotifSmsCreditsPurchaseHistoryList = {
  __typename?: 'NotifSMSCreditsPurchaseHistoryList';
  data: Array<NotifSmsCreditsPurchaseHistoryEntity>;
};

export type NotifSmsEventEntity = {
  __typename?: 'NotifSMSEventEntity';
  carrierName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isFinal: Scalars['Boolean']['output'];
  isoCountryCode: Scalars['String']['output'];
  masterId: Scalars['String']['output'];
  smsDestinationPhoneNumber: Scalars['String']['output'];
  smsMessageId: Scalars['String']['output'];
  smsMessageStatus: Scalars['String']['output'];
  smsMessageStatusDescription: Scalars['String']['output'];
  smsOriginationPhoneNumber: Scalars['String']['output'];
  templateId: Scalars['String']['output'];
  templateType?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['String']['output'];
  totalMessageParts: Scalars['Float']['output'];
};

export type NotifSmsEventList = {
  __typename?: 'NotifSMSEventList';
  data: Array<NotifSmsEventEntity>;
  pagination: NotifPaginationResponse;
};

export type NotifTag = {
  __typename?: 'NotifTag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type NotifUpdateDataExportNotificationStatusDto = {
  notificationId: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};

export type NotifUpdateEmailDomainSettingDto = {
  customerId: Scalars['String']['input'];
  displayName?: InputMaybe<Scalars['String']['input']>;
  hierarchyId: Scalars['String']['input'];
  isCustomizedEmailDomainEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['String']['input'];
};

export type NotifUpdateSuccessDataExportNotificationDto = {
  dataExportFilePath: Scalars['String']['input'];
  notificationId: Scalars['String']['input'];
};

export type NotificationSettingItemEntity = {
  __typename?: 'NotificationSettingItemEntity';
  enabled: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  template: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type NotificationSettingsEntity = {
  __typename?: 'NotificationSettingsEntity';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerId: Scalars['String']['output'];
  isGlobalSmsEnabled?: Maybe<Scalars['Boolean']['output']>;
  isSapiaCustomer: Scalars['Boolean']['output'];
  settings: Array<NotificationSettingItemEntity>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrgCreateApiUserDto = {
  customerId: Scalars['String']['input'];
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
};

export type OrgCreateApiUserWithoutSpecialCharactersDto = {
  customerId: Scalars['String']['input'];
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  /** password will be taken as API Secret, more than 50 characters without special ones */
  password?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  /** username will be taken as API key, more than 25 characters without special ones */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type OrgCreateEndUserDto = {
  customerId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mfaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mfaMethod?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  /** email is case-insensitive */
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  /** username is case-sensitive */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type OrgCreateSsoUserDto = {
  customerId: Scalars['String']['input'];
  /** email is case-insensitive */
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  /** username is case-sensitive */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type OrgDeleteGroupDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgDeleteHierarchyDto = {
  /** The unique ID of hierarchy */
  _id: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgFilterFormatCustomerUniqueNameDto = {
  customerId: Scalars['String']['input'];
};

export type OrgFormatCustomerUniqueNameDto = {
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type OrgGetCustomersDto = {
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  organizationId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<OrgSortCustomersDto>;
};

export type OrgGetHierarchyDto = {
  customerId: Scalars['String']['input'];
};

export type OrgSortCustomersDto = {
  fieldName: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type OrgSortOrganizationsDto = {
  fieldName: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type OrgSyncCustomerToGlobalDto = {
  customerId: Scalars['String']['input'];
};

export type OrgUsersAppendToGroupDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['String']['input']>;
};

export type OrgUsersRemoveFromGroupDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  userIds: Array<Scalars['String']['input']>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OrgAddHierarchiesBaseDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  parentId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
};

export type OrgAddHierarchiesDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchies: Array<OrgAddHierarchiesBaseDto>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgArchiveGroupsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgArchiveHierarchyDto = {
  _id: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgCreateCustomerDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagDto>>;
  uniqueName: Scalars['String']['input'];
};

export type OrgCustomerList = {
  __typename?: 'OrgCustomerList';
  data: Array<CustomerEntity>;
  pagination: OrgPaginationEntity;
};

export type OrgDeleteCustomerDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  activeOnly?: InputMaybe<Scalars['Boolean']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type OrgDiffHierarchiesDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchies: Array<OrgDiffHierarchyDto>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgDiffHierarchiesEntity = {
  __typename?: 'OrgDiffHierarchiesEntity';
  toBeArchived?: Maybe<Array<OrgDiffHierarchyEntity>>;
  toBeCreated?: Maybe<Array<OrgDiffHierarchyEntity>>;
  toBeUpdated?: Maybe<Array<OrgDiffHierarchyEntity>>;
};

export type OrgDiffHierarchyDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  archivedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrgDiffHierarchyEntity = {
  __typename?: 'OrgDiffHierarchyEntity';
  _id: Scalars['ID']['output'];
  customerId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<TagEntity>>;
};

export type OrgExistUserDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  /** username is case-sensitive unless it's an email */
  username: Scalars['String']['input'];
};

export type OrgGroupList = {
  __typename?: 'OrgGroupList';
  data: Array<GroupEntity>;
  pagination: OrgPaginationEntity;
};

export type OrgHierarchyEntity = {
  __typename?: 'OrgHierarchyEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  children?: Maybe<Scalars['JSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  tags: Array<TagEntity>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrgMigrateUserDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** This will override the existing groupIds */
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type OrgPaginationEntity = {
  __typename?: 'OrgPaginationEntity';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItems: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type OrgRestoreGroupsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  groupIds: Array<Scalars['ID']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrgUpdateCustomerDto = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
};

export type OrgUpdateHierarchiesEntity = {
  __typename?: 'OrgUpdateHierarchiesEntity';
  archived?: Maybe<Array<OrgHierarchyEntity>>;
  created?: Maybe<Array<OrgHierarchyEntity>>;
  updated?: Maybe<Array<OrgHierarchyEntity>>;
};

export type OrgUpdateHierarchyDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
};

export type OrgUserList = {
  __typename?: 'OrgUserList';
  data: Array<UserEntity>;
  pagination: OrgPaginationEntity;
};

export type Organization = {
  __typename?: 'Organization';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  customers: Array<CustomerEdgeV3>;
  displayName: Scalars['String']['output'];
  uniqueName: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type OrganizationEntity = {
  __typename?: 'OrganizationEntity';
  _id: Scalars['ID']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customers: Array<SwitchableCustomer>;
  displayName: Scalars['String']['output'];
  tags: Array<TagEntity>;
  uniqueName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalItem: Scalars['Float']['output'];
  totalPage: Scalars['Float']['output'];
};

export type PersonalInformation = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
};

export type PolicyEntity = {
  __typename?: 'PolicyEntity';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  statements: Array<StatementEntity>;
  tags?: Maybe<Array<TagEntity>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type Predictor = {
  __typename?: 'Predictor';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  collector: Collector;
  collectorTemplateId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isLatest: Scalars['Boolean']['output'];
  kpiModels: Array<KpiModel>;
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type PredictorWithProduct = {
  __typename?: 'PredictorWithProduct';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  collector: CollectorEdgeWithProduct;
  collectorTemplateId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  isLatest: Scalars['Boolean']['output'];
  kpiModels: Array<KpiModel>;
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  product?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export type PurchaseSmsCreditsByCustomerIdDto = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  purchaseAmount: Scalars['Float']['input'];
  purchaseUserEmail: Scalars['String']['input'];
  purchaseUserId: Scalars['String']['input'];
};

export type QbAddCollectorEdgeV3Input = {
  definition: QbDefinitionEdgeV3Input;
  description: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type QbAddCollectorInput = {
  definition: QbDefinitionInput;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type QbAddKpiModelInput = {
  description: Scalars['String']['input'];
  descriptionMap: QbKpiModelDescriptionMap;
  kpi: Scalars['String']['input'];
  masterId: Scalars['String']['input'];
  modelArtifacts: QbKpiModelModelArtifacts;
  predictEndpoint: Scalars['String']['input'];
  predictEndpointPayload: QbKpiModelPredictEndpointPayload;
  roleFamilyId: Scalars['String']['input'];
  scoreLevels: Array<QbKpiModelScoreLevel>;
  type: Scalars['String']['input'];
  version: Scalars['Float']['input'];
};

export type QbAddPredictorInput = {
  collectorId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  edgeVersion: Scalars['String']['input'];
  kpiModelId: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  masterId: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
  thresholds: QbKpiModelThreshold;
  title: Scalars['String']['input'];
};

export type QbAddQuestionInput = {
  contents: Array<QbQuestionContentInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  masterId?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<QbQuestionOptionInput>>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  roleFamilyId?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Array<QbQuestionRuleInput>>;
  tags?: InputMaybe<Array<TagInput>>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
  types: Array<Scalars['String']['input']>;
  usageWhitelist: Array<Scalars['String']['input']>;
};

export type QbAddRoleFamilyInput = {
  name: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagInput>>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QbAddTraitInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type QbArchiveQuestionsResponse = {
  __typename?: 'QBArchiveQuestionsResponse';
  n: Scalars['Float']['output'];
  nModified: Scalars['Float']['output'];
  ok: Scalars['Float']['output'];
};

export type QbAuth = {
  __typename?: 'QBAuth';
  defaultAwsRegion?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Float']['output']>;
  isDeviceRemembered?: Maybe<Scalars['Boolean']['output']>;
  isPasswordResetSuccess?: Maybe<Scalars['Boolean']['output']>;
  isResendCodeSuccess?: Maybe<Scalars['Boolean']['output']>;
  isUnlockUserSuccess?: Maybe<Scalars['Boolean']['output']>;
  isVerifyEmailSuccess?: Maybe<Scalars['Boolean']['output']>;
  me?: Maybe<QbMe>;
  mfa?: Maybe<Scalars['Boolean']['output']>;
  minutesForRememberDevice?: Maybe<Scalars['Float']['output']>;
  ssoLoginUrl?: Maybe<Scalars['String']['output']>;
  tokenCheckResult?: Maybe<TokenCheckResult>;
};

export type QbCollectorsCommonResponse = {
  __typename?: 'QBCollectorsCommonResponse';
  data: Array<CollectorCommon>;
  pagination: PaginationResponse;
};

export type QbCustomer = {
  __typename?: 'QBCustomer';
  _id: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  customerName: Scalars['String']['output'];
  region: Scalars['String']['output'];
};

export type QbDefinitionEdgeV3Input = {
  dialogFlow: Scalars['JSON']['input'];
  nonPiiPreamble: Scalars['JSON']['input'];
  postamble: Scalars['JSON']['input'];
  preamble: Scalars['JSON']['input'];
};

export type QbDefinitionInput = {
  dialogFlow: Scalars['JSON']['input'];
  postamble: Scalars['JSON']['input'];
  preamble: Scalars['JSON']['input'];
};

export type QbEditCollectorEdgeV3Input = {
  definition?: InputMaybe<QbDefinitionEdgeV3Input>;
  description: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
};

export type QbEditCollectorInput = {
  definition?: InputMaybe<QbDefinitionInput>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
};

export type QbEditPredictorInput = {
  collectorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  kpiModelId?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
  thresholds?: InputMaybe<QbKpiModelThreshold>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type QbEditQuestionInput = {
  contents: Array<QbQuestionContentInput>;
  language?: InputMaybe<Scalars['String']['input']>;
  masterId: Scalars['String']['input'];
  options?: InputMaybe<Array<QbQuestionOptionInput>>;
  roleFamilyId?: InputMaybe<Scalars['String']['input']>;
  rules?: InputMaybe<Array<QbQuestionRuleInput>>;
  tags?: InputMaybe<Array<TagInput>>;
  traitIds: Array<Scalars['String']['input']>;
  types: Array<Scalars['String']['input']>;
  usageWhitelist?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QbKpiModelDescriptionMap = {
  Rec: Scalars['String']['input'];
  Res: Scalars['String']['input'];
};

export type QbKpiModelModelArtifacts = {
  hexaco_agreeableness_general?: InputMaybe<Scalars['String']['input']>;
  hexaco_conscientiousness_general?: InputMaybe<Scalars['String']['input']>;
  hexaco_emotionality_general?: InputMaybe<Scalars['String']['input']>;
  hexaco_extraversion_general?: InputMaybe<Scalars['String']['input']>;
  hexaco_humility_general?: InputMaybe<Scalars['String']['input']>;
  hexaco_openness_general?: InputMaybe<Scalars['String']['input']>;
  language_fluency_score?: InputMaybe<Scalars['String']['input']>;
  trait_accountability?: InputMaybe<Scalars['String']['input']>;
  trait_adaptable?: InputMaybe<Scalars['String']['input']>;
  trait_confidence?: InputMaybe<Scalars['String']['input']>;
  trait_critical_thinking?: InputMaybe<Scalars['String']['input']>;
  trait_drive?: InputMaybe<Scalars['String']['input']>;
  trait_energising?: InputMaybe<Scalars['String']['input']>;
  trait_maturity?: InputMaybe<Scalars['String']['input']>;
  trait_resourceful?: InputMaybe<Scalars['String']['input']>;
  trait_self_aware?: InputMaybe<Scalars['String']['input']>;
  trait_team_player?: InputMaybe<Scalars['String']['input']>;
  verbal_reasoning_score?: InputMaybe<Scalars['String']['input']>;
};

export type QbKpiModelPredictEndpointPayload = {
  apply_harmonic?: InputMaybe<Scalars['Boolean']['input']>;
  apply_sigmoid?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QbKpiModelScoreLevel = {
  kpi: Scalars['String']['input'];
  thresholds: Array<QbKpiModelSingleThreshold>;
};

export type QbKpiModelSingleThreshold = {
  text: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type QbKpiModelThreshold = {
  high: Scalars['Float']['input'];
  low: Scalars['Float']['input'];
  medium: Scalars['Float']['input'];
  veryLow: Scalars['Float']['input'];
};

export type QbKpiModelsResponse = {
  __typename?: 'QBKpiModelsResponse';
  data: Array<KpiModel>;
  pagination: PaginationResponse;
};

export type QbMe = {
  __typename?: 'QBMe';
  _id: Scalars['String']['output'];
  archivedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId: Scalars['String']['output'];
  customers: Array<EdgeBffCustomer>;
  defaultCustomer: EdgeBffCustomer;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groupIds: Array<Scalars['String']['output']>;
  hierarchyId: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userType: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type QbNewPredictorDeploymentEdgeV3Input = {
  customerId: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  environment: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  predictorId: Scalars['String']['input'];
  product?: InputMaybe<Scalars['String']['input']>;
  region: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagInput>>;
};

export type QbNewPredictorDeploymentInput = {
  customerId: Scalars['String']['input'];
  customerName: Scalars['String']['input'];
  environment: Scalars['String']['input'];
  predictorId: Scalars['String']['input'];
  region: Scalars['String']['input'];
  tags?: InputMaybe<Array<TagInput>>;
};

export type QbPredictorDeployment = {
  __typename?: 'QBPredictorDeployment';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  environment: Scalars['String']['output'];
  isLatest: Scalars['Boolean']['output'];
  predictor?: Maybe<Predictor>;
  predictorId: Scalars['String']['output'];
  predictorMasterId: Scalars['String']['output'];
  region: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  version: Scalars['Float']['output'];
};

export type QbPredictorDeploymentsResponse = {
  __typename?: 'QBPredictorDeploymentsResponse';
  data: Array<QbPredictorDeployment>;
  pagination: PaginationResponse;
};

export type QbPredictorsResponse = {
  __typename?: 'QBPredictorsResponse';
  data: Array<PredictorWithProduct>;
  pagination: PaginationResponse;
};

export type QbQuestionContentInput = {
  types: Array<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type QbQuestionOptionInput = {
  id: Scalars['String']['input'];
  text: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type QbQuestionRuleInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type QbQuestionsResponse = {
  __typename?: 'QBQuestionsResponse';
  data: Array<Question>;
  pagination: PaginationResponse;
};

export type QbRoleFamilyResponse = {
  __typename?: 'QBRoleFamilyResponse';
  data: Array<RoleFamily>;
  pagination: PaginationResponse;
};

export type QbTrait = {
  __typename?: 'QBTrait';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<Trait>;
  parentId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QbTraitsResponse = {
  __typename?: 'QBTraitsResponse';
  data: Array<QbTrait>;
  pagination: PaginationResponse;
};

export type QbUpdateRoleFamilyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QbUpdateTraitInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
};

export type Query = {
  __typename?: 'Query';
  AppsCheckApplicationAssessment: Scalars['Boolean']['output'];
  AppsCheckVacancyByExternalVacancyId: Scalars['Boolean']['output'];
  AppsCheckWorkflowSetNameDuplicatedByName: Scalars['Boolean']['output'];
  AppsGetApplicationById?: Maybe<AppsApplication>;
  AppsGetApplicationByIdForInternal?: Maybe<AppsApplication>;
  AppsGetApplicationByShortcode?: Maybe<AppsApplication>;
  AppsGetApplicationList: AppsApplicationList;
  AppsGetApplicationListByCandidateId: Array<AppsApplication>;
  AppsGetApplicationListV2: AppsApplicationList;
  AppsGetApplicationStatusCount: AppsApplicationStatusCount;
  AppsGetApplicationWithExternalApplicationId: AppsApplication;
  AppsGetApplicationWithExternalApplicationIdV2?: Maybe<AppsApplication>;
  AppsGetApplicationWithExternalIds: AppsApplication;
  AppsGetAssessmentPackageList: Array<AppsAssessmentPackage>;
  AppsGetCustomerSetting?: Maybe<AppsCustomerSetting>;
  AppsGetDefaultWorkflow: AppsWorkflow;
  AppsGetJobRequisitionByApplicationId: AppsJobRequisition;
  AppsGetJobRequisitionByExternalJobRequisitionId: AppsJobRequisition;
  AppsGetJobRequisitionById: AppsJobRequisition;
  AppsGetJobRequisitionByShortcode: AppsJobRequisition;
  AppsGetJobRequisitionList: AppsJobRequisitionList;
  AppsGetJobRequisitionListByCandidateId: Array<AppsJobRequisition>;
  AppsGetJobRequisitionListByOwn: AppsJobRequisitionList;
  AppsGetVacancyApplicationStatusCount: AppsVacancyApplicationStatusCount;
  AppsGetVacancyByExternalVacancyId: AppsVacancy;
  AppsGetVacancyById: AppsVacancy;
  AppsGetVacancyList: AppsVacancyList;
  AppsGetVacancyListByCandidateId: Array<AppsVacancy>;
  AppsGetVacancyListByJobRequisitionId: Array<AppsVacancy>;
  AppsGetVacancyListV2: AppsVacancyList;
  AppsGetWorkflowById: AppsWorkflow;
  AppsGetWorkflowList: AppsWorkflowList;
  AppsGetWorkflowListV2?: Maybe<AppsWorkflowList>;
  AppsGetWorkflowSetById: AppsWorkflowSet;
  AppsGetWorkflowSetList: AppsWorkflowSetList;
  AppsSearchApplications: AppsApplicationList;
  AppsSearchApplicationsByOwn: AppsApplicationList;
  AtsGetAtsTemplateByAtsName?: Maybe<AtsTemplateEntity>;
  AtsGetAtsTemplateById?: Maybe<AtsTemplateEntity>;
  AtsGetAtsTemplates?: Maybe<Array<AtsTemplateEntity>>;
  AtsGetRequestById?: Maybe<AtsRequestEntity>;
  AtsGetRequestList?: Maybe<AtsRequestListEntity>;
  AtsGetTenantByCustomer?: Maybe<AtsTenantEntity>;
  AtsGetTenantById?: Maybe<AtsTenantEntity>;
  AtsGetTenantsByAtsName?: Maybe<Array<AtsTenantEntity>>;
  AtsGetTenantsByCustomer?: Maybe<Array<AtsTenantEntity>>;
  AuthCheckPolicyInFullMode: AuthPolicyResult;
  AuthCheckPolicyInSimpleMode: Scalars['Boolean']['output'];
  AuthCheckToken: AuthLoginEntity;
  AuthGetResetPasswordLink: AuthResetPasswordLinkResultEntity;
  AuthGetUserRegion: AuthLoginEntity;
  AuthMe: AuthLoginEntity;
  AuthRefreshToken: AuthLoginEntity;
  CommonCheckPolicy: CommonPolicyResult;
  CommonGetPermissionTabState: CommonPermissionTabStateEntity;
  CommonGetPermissionsConfig: CommonPermissionsConfigEntity;
  CommonGetPolicy: CommonPolicyEntity;
  CommonGetPublicTIInformation?: Maybe<CommonPublicTiInformationEntity>;
  EDGECheckPolicy: EdgePolicyResult;
  EDGECheckTokenExpiration: Auth;
  EDGEGetPolicy: EdgePolicyEntity;
  EDGEGetUserRegion: Auth;
  EDGEMe: Auth;
  EDGERefreshToken: Auth;
  EDGESSOLogin: Auth;
  FIGetAssessment?: Maybe<FiAssessment>;
  FIGetAssessmentByIds?: Maybe<FiAssessment>;
  FIGetAssessmentInfoListForReuse: Array<FiAssessmentInfoForReuseEntity>;
  FIGetBranding?: Maybe<FiBranding>;
  FIGetCandidate?: Maybe<FiCandidate>;
  FIGetCandidateRanking: FiCandidateRanking;
  FIGetCandidateResponses: Array<FiCandidateResponse>;
  FIGetCandidatesPoolSize: FiCandidatePoolSize;
  FIGetCohort?: Maybe<FiCohortEntity>;
  FIGetCohortByIds?: Maybe<FiCohortEntity>;
  FIGetCohortsByJobRequisitionId: Array<FiCohortEntity>;
  FIGetDisplayInTIQuestionsByPredictorMasterId: FiDisplayInTiQuestions;
  FIGetPredictorByMasterId?: Maybe<FiPredictor>;
  FIGetRecommendationStatus: FiRecommendationStatus;
  FIGetTIReview?: Maybe<FitiReview>;
  FIGetTIReviewSummary?: Maybe<FitiReviewSummary>;
  IDPAuthSSOLogin: Scalars['String']['output'];
  IDPGetCustomer?: Maybe<IdpCustomerEntity>;
  IDPGetCustomers?: Maybe<Array<IdpCustomerEntity>>;
  IDPGetDevice?: Maybe<IdpDeviceEntity>;
  IDPGetDevices?: Maybe<Array<IdpDeviceEntity>>;
  IDPGetHierarchyTree?: Maybe<IdpHierarchyTreeEntity>;
  IDPGetSSOConfig?: Maybe<IdpssoConfigEntity>;
  /** get active policies by ids */
  IDPNestGetPolicies: Array<Maybe<IdpNestPolicyEntity>>;
  /** get active policy by id */
  IDPNestGetPolicy?: Maybe<IdpNestPolicyEntity>;
  /** @deprecated In development stage */
  IDPNestGetSSOConfig?: Maybe<IdpNestSsoEntity>;
  /** @deprecated In development stage */
  IDPNestSearchSSOConfigs?: Maybe<Array<Scalars['String']['output']>>;
  IDPSSOThrowError?: Maybe<Scalars['String']['output']>;
  IDPSearchSSOConfigs?: Maybe<Array<Scalars['String']['output']>>;
  /** Generate time slots from user prompt */
  LIGenerateTimeslotsFromPrompt: Array<LiTimeslotResultEntity>;
  /** Get application detail by organizationId and applicationId or externalApplicationId */
  LIGetApplicationDetail?: Maybe<LiApplicationEntity>;
  /** Get branding by shortcode */
  LIGetBrandingByShortcode?: Maybe<LiCandidateScheduleLinkBrandingEntity>;
  /** Get candidate schedule link info by shortcode */
  LIGetCandidateScheduleLinkInfoByShortcode?: Maybe<LiCandidateScheduleLinkInfoEntity>;
  /** Get a list of hiring manager from a single job requisition by jobRequisitionId */
  LIGetHiringManagersByJobRequisitionId: Array<LiManagerEntity>;
  /** Get Interview Schedule Card Basic Info List without pagination V2 */
  LIGetInterviewScheduleCardBasicInfoListV2WithoutPagination: Array<LiInterviewScheduleCardBasicInfoV2Entity>;
  /** Get Interview Schedule Card Basic Info List without pagination */
  LIGetInterviewScheduleCardBasicInfoListWithoutPagination: Array<LiInterviewScheduleCardBasicInfoEntity>;
  /** Get all candidates without pagination for the interview schedule card, application and job requisition must exist. */
  LIGetInterviewScheduleCardCandidatesWithoutPagination: Array<LiInterviewScheduleCardCandidateEntity>;
  LIGetInterviewScheduleCardDetail: LiInterviewScheduleCardDetailEntity;
  /** Get interview schedule detail by organizationId and interviewScheduleId or interviewUniqueName */
  LIGetInterviewScheduleDetail?: Maybe<LiInterviewScheduleEntity>;
  /** Get job requisition detail by organizationId, jobRequisitionId or externalJobRequisitionId */
  LIGetJobRequisitionDetail?: Maybe<LiJobRequisitionEntity>;
  /** Get all job requisitions with pagination by orgId */
  LIGetJobRequisitionsWithPagination: LiJobRequisitionPaginatedListEntity;
  /**
   * Get all job requisitions without pagination by orgId
   * @deprecated Use getJobRequisitionsWithPagination instead
   */
  LIGetJobRequisitionsWithoutPagination: Array<LiJobRequisitionEntity>;
  NotifCheckNotificationTemplateIsEnabled: Scalars['Boolean']['output'];
  NotifGetEmailDomain?: Maybe<NotifGetEmailDomainEntity>;
  NotifGetEmailDomainSetting?: Maybe<NotifEmailDomainSettingEntity>;
  NotifGetEmailEventByMailMessageId: Array<NotifEmailEventEntity>;
  NotifGetEmailEventsByCustomerId: NotifEmailEventList;
  NotifGetLatestEmailEventByAssessmentId: Array<NotifEmailEventEntity>;
  NotifGetNotificationById?: Maybe<NotifNotificationEntity>;
  NotifGetNotificationSettings?: Maybe<NotificationSettingsEntity>;
  NotifGetNotificationSettingsV2?: Maybe<NotificationSettingsEntity>;
  NotifGetSMSCreditsByCustomerId?: Maybe<NotifSmsCreditsEntity>;
  NotifGetSMSCreditsPurchaseHistoryList?: Maybe<NotifSmsCreditsPurchaseHistoryList>;
  NotifGetSMSEventList: NotifSmsEventList;
  NotifGetUserNotificationList: NotifGetUserNotificationListEntity;
  ORGDiffHierarchies: OrgDiffHierarchiesEntity;
  ORGExistUser: Scalars['Boolean']['output'];
  ORGExistUserByUsername: Scalars['Boolean']['output'];
  ORGGetCustomer?: Maybe<CustomerEntity>;
  /** The paginated version of get all customers */
  ORGGetCustomerList: OrgCustomerList;
  /** @deprecated Use the ORGetCustomerList instead */
  ORGGetCustomers: Array<CustomerEntity>;
  /** @deprecated use ORGGetOneGroup instead */
  ORGGetGroup?: Maybe<GroupEntity>;
  ORGGetGroups: OrgGroupList;
  ORGGetHierarchy?: Maybe<OrgHierarchyEntity>;
  ORGGetOrganization?: Maybe<OrganizationEntity>;
  ORGGetOrganizationGlobalCustomers?: Maybe<Array<SwitchableCustomer>>;
  ORGGetOrganizations?: Maybe<Array<OrganizationEntity>>;
  ORGGetRootHierarchy?: Maybe<OrgHierarchyEntity>;
  ORGGetUser?: Maybe<UserEntity>;
  ORGGetUsers: OrgUserList;
  QBGetCollector: CollectorEdgeV2;
  QBGetCollectorEdgeV3: CollectorEdgeV3;
  QBGetCollectors: QbCollectorsCommonResponse;
  QBGetCollectorsByMasterId: Array<CollectorCommon>;
  QBGetCustomers: Array<QbCustomer>;
  QBGetKpiModels: QbKpiModelsResponse;
  QBGetMe: QbMe;
  QBGetOrganizations: Array<Organization>;
  QBGetPredictor: PredictorWithProduct;
  QBGetPredictorDeployments: QbPredictorDeploymentsResponse;
  QBGetPredictors: QbPredictorsResponse;
  QBGetQuestion: Question;
  QBGetQuestions: QbQuestionsResponse;
  QBGetRoleFamilies: QbRoleFamilyResponse;
  QBGetRoleFamily: RoleFamily;
  QBGetTrait: Trait;
  QBGetTraits: QbTraitsResponse;
  QBGetTraitsByIds: Array<Trait>;
  QBRefreshToken: QbAuth;
  TIAuthCheck: TiAuthCheckRes;
  TIFITalentInsight: TifiTalentInsight;
  TIInformation: TiInformation;
  TILogout: Scalars['Boolean']['output'];
  TIMe?: Maybe<TiAuth>;
  TIRefreshToken: TiAuthCheckRes;
  TISITalentInsight: TisiTalentInsight;
  dummyQueryForTesting: Scalars['Boolean']['output'];
};


export type QueryAppsCheckApplicationAssessmentArgs = {
  checkApplicationAssessmentInput: AppsCheckApplicationAssessmentDto;
};


export type QueryAppsCheckVacancyByExternalVacancyIdArgs = {
  checkVacancyByExternalVacancyIdInput: AppsCheckVacancyDto;
};


export type QueryAppsCheckWorkflowSetNameDuplicatedByNameArgs = {
  checkWorkflowSetNameDuplicatedByNameInput: AppsCheckWorkflowSetNameDuplicatedByNameDto;
};


export type QueryAppsGetApplicationByIdArgs = {
  getApplicationByIdInput: AppsGetApplicationByIdDto;
};


export type QueryAppsGetApplicationByIdForInternalArgs = {
  getApplicationByIdForInternalInput: AppsGetApplicationByIdForInternalDto;
};


export type QueryAppsGetApplicationByShortcodeArgs = {
  getApplicationByShortcodeInput: AppsGetApplicationByShortcodeDto;
};


export type QueryAppsGetApplicationListArgs = {
  filterApplicationInput: AppsFilterApplicationDto;
};


export type QueryAppsGetApplicationListByCandidateIdArgs = {
  getApplicationListByCandidateIdInput: AppsGetApplicationListByCandidateIdDto;
};


export type QueryAppsGetApplicationListV2Args = {
  getApplicationListInput: AppsGetApplicationListDto;
};


export type QueryAppsGetApplicationStatusCountArgs = {
  getApplicationStatusCountInput: AppsGetApplicationStatusCountDto;
};


export type QueryAppsGetApplicationWithExternalApplicationIdArgs = {
  getApplicationWithExternalApplicationIdInput: AppsGetApplicationWithExternalApplicationIdDto;
};


export type QueryAppsGetApplicationWithExternalApplicationIdV2Args = {
  getApplicationWithExternalApplicationIdInput: AppsGetApplicationWithExternalApplicationIdV2Dto;
};


export type QueryAppsGetApplicationWithExternalIdsArgs = {
  getApplicationWithExternalIdsInput: AppsGetApplicationWithExternalIdsDto;
};


export type QueryAppsGetAssessmentPackageListArgs = {
  filterAssessmentPackageInput: AppsFilterAssessmentPackageDto;
};


export type QueryAppsGetCustomerSettingArgs = {
  getCustomerSettingByInput: AppsOrgIdsDto;
};


export type QueryAppsGetDefaultWorkflowArgs = {
  getDefaultWorkflowInput: AppsGetDefaultWorkflowDto;
};


export type QueryAppsGetJobRequisitionByApplicationIdArgs = {
  getJobRequisitionByApplicationIdInput: AppsJobRequisitionByApplicationIdDto;
};


export type QueryAppsGetJobRequisitionByExternalJobRequisitionIdArgs = {
  getJobRequisitionByExternalJobRequisitionIdInput: AppsGetJobRequisitionByExternalJobRequisitionIdDto;
};


export type QueryAppsGetJobRequisitionByIdArgs = {
  getJobRequisitionByIdInput: AppsGetJobRequisitionByIdDto;
};


export type QueryAppsGetJobRequisitionByShortcodeArgs = {
  getJobRequisitionByShortcodeInput: AppsGetJobRequisitionByShortcodeDto;
};


export type QueryAppsGetJobRequisitionListArgs = {
  filterJobRequisitionInput: AppsFilterJobRequisitionDto;
};


export type QueryAppsGetJobRequisitionListByCandidateIdArgs = {
  getJobRequisitionListByCandidateIdInput: AppsGetJobRequisitionListByCandidateIdDto;
};


export type QueryAppsGetJobRequisitionListByOwnArgs = {
  filterJobRequisitionByOwnInput: AppsFilterJobRequisitionByOwnDto;
};


export type QueryAppsGetVacancyApplicationStatusCountArgs = {
  getVacancyApplicationStatusCountByIdInput: AppsGetVacancyApplicationStatusCountByIdDto;
};


export type QueryAppsGetVacancyByExternalVacancyIdArgs = {
  getVacancyByExternalVacancyIdInput: AppsGetVacancyByExternalVacancyIdDto;
};


export type QueryAppsGetVacancyByIdArgs = {
  getVacancyByIdInput: AppsGetVacancyByIdDto;
};


export type QueryAppsGetVacancyListArgs = {
  filterVacancyInput: AppsFilterVacancyDto;
};


export type QueryAppsGetVacancyListByCandidateIdArgs = {
  getVacancyListByCandidateIdInput: AppsGetVacancyListByCandidateIdDto;
};


export type QueryAppsGetVacancyListByJobRequisitionIdArgs = {
  getVacancyListByJobRequisitionIdInput: AppsGetVacancyListByJobRequisitionIdDto;
};


export type QueryAppsGetVacancyListV2Args = {
  filterVacancyInput: AppsFilterVacancyV2Dto;
};


export type QueryAppsGetWorkflowByIdArgs = {
  getWorkflowByIdInput: AppsGetWorkflowByIdDto;
};


export type QueryAppsGetWorkflowListArgs = {
  filterWorkflowInput: AppsFilterWorkflowDto;
};


export type QueryAppsGetWorkflowListV2Args = {
  filterWorkflowInput: AppsFilterWorkflowV2Dto;
};


export type QueryAppsGetWorkflowSetByIdArgs = {
  getWorkflowSetByIdInput: AppsGetWorkflowSetByIdDto;
};


export type QueryAppsGetWorkflowSetListArgs = {
  getWorkflowSetListInput: AppsFilterWorkflowSetListInput;
};


export type QueryAppsSearchApplicationsArgs = {
  searchApplicationInput: AppsSearchApplicationDto;
};


export type QueryAppsSearchApplicationsByOwnArgs = {
  searchApplicationInput: AppsSearchApplicationDto;
};


export type QueryAtsGetAtsTemplateByAtsNameArgs = {
  getAtsTemplateByAtsNameInput: AtsGetAtsTemplateByAtsNameDto;
};


export type QueryAtsGetAtsTemplateByIdArgs = {
  getAtsTemplateByIdInput: AtsGetAtsTemplateByIdDto;
};


export type QueryAtsGetRequestByIdArgs = {
  getRequestByIdInput: AtsGetRequestByIdDto;
};


export type QueryAtsGetRequestListArgs = {
  getRequestListInput: AtsGetRequestListDto;
};


export type QueryAtsGetTenantByCustomerArgs = {
  getTenantByCustomerInput: AtsGetTenantByCustomerDto;
};


export type QueryAtsGetTenantByIdArgs = {
  getTenantByIdInput: AtsGetTenantByIdDto;
};


export type QueryAtsGetTenantsByAtsNameArgs = {
  getTenantsByAtsNameInput: AtsGetTenantsByAtsNameDto;
};


export type QueryAtsGetTenantsByCustomerArgs = {
  getTenantsByCustomerInput: AtsGetTenantsByCustomerDto;
};


export type QueryAuthCheckPolicyInFullModeArgs = {
  checkPolicyDto: AuthCheckPolicyDto;
};


export type QueryAuthCheckPolicyInSimpleModeArgs = {
  checkPolicyDto: AuthCheckPolicyDto;
};


export type QueryAuthGetResetPasswordLinkArgs = {
  authGetResetPasswordLinkInput: AuthGetResetPasswordLinkDto;
};


export type QueryAuthGetUserRegionArgs = {
  AuthGetUserRegionDto: AuthGetUserRegionDto;
};


export type QueryCommonCheckPolicyArgs = {
  policy: CommonPolicyAuthorizeDto;
};


export type QueryCommonGetPermissionTabStateArgs = {
  filter: CommonGetPermissionTabStateDto;
};


export type QueryCommonGetPolicyArgs = {
  policyId: Scalars['String']['input'];
};


export type QueryCommonGetPublicTiInformationArgs = {
  input: CommonGetPublicTiInformationDto;
};


export type QueryEdgeCheckPolicyArgs = {
  policy: EdgePolicyAuthorizeDto;
};


export type QueryEdgeGetPolicyArgs = {
  policyId: Scalars['String']['input'];
};


export type QueryEdgeGetUserRegionArgs = {
  region: EdgeGetUserRequestDto;
};


export type QueryEdgessoLoginArgs = {
  email: Scalars['String']['input'];
  redirect: Scalars['String']['input'];
};


export type QueryFiGetAssessmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryFiGetAssessmentByIdsArgs = {
  filter: FiGetAssessmentByIdsInput;
};


export type QueryFiGetAssessmentInfoListForReuseArgs = {
  getAssessmentInfoListForReuseDto: FiGetAssessmentInfoListForReuseDto;
};


export type QueryFiGetBrandingArgs = {
  customerId: Scalars['String']['input'];
};


export type QueryFiGetCandidateArgs = {
  id: Scalars['String']['input'];
};


export type QueryFiGetCandidateRankingArgs = {
  comparedFieldName: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryFiGetCandidateResponsesArgs = {
  id: Scalars['String']['input'];
  withSensitive?: Scalars['Boolean']['input'];
};


export type QueryFiGetCandidatesPoolSizeArgs = {
  comparedFieldName: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryFiGetCohortArgs = {
  id: Scalars['String']['input'];
};


export type QueryFiGetCohortByIdsArgs = {
  filter: FiGetCohortByIdsDto;
};


export type QueryFiGetCohortsByJobRequisitionIdArgs = {
  getCohortsByJobRequisitionIdInput: FiGetCohortsByJobRequisitionIdDto;
};


export type QueryFiGetDisplayInTiQuestionsByPredictorMasterIdArgs = {
  getDisplayInTIQuestionsByPredictorMasterIdInput: FiGetDisplayInTiQuestionsByPredictorMasterIdInput;
};


export type QueryFiGetPredictorByMasterIdArgs = {
  customerId: Scalars['String']['input'];
  masterId: Scalars['String']['input'];
  version?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryFiGetRecommendationStatusArgs = {
  id: Scalars['String']['input'];
};


export type QueryFiGetTiReviewArgs = {
  getTIReviewInput: FiGetTiReviewDto;
};


export type QueryFiGetTiReviewSummaryArgs = {
  id: Scalars['String']['input'];
};


export type QueryIdpAuthSsoLoginArgs = {
  ssoLoginDto: IdpAuthSsoLoginDto;
};


export type QueryIdpGetCustomerArgs = {
  filter: IdpFilterGetCustomerDto;
};


export type QueryIdpGetCustomersArgs = {
  filter: IdpFilterGetCustomersDto;
};


export type QueryIdpGetDeviceArgs = {
  filter: IdpFilterGetDeviceDto;
};


export type QueryIdpGetDevicesArgs = {
  filter: IdpFilterGetDevicesDto;
};


export type QueryIdpGetHierarchyTreeArgs = {
  filter: IdpGetHierarchyTreeDto;
};


export type QueryIdpGetSsoConfigArgs = {
  filter: IdpFilterGetSsoConfigDto;
};


export type QueryIdpNestGetPoliciesArgs = {
  filter: IdpNestFilterGetPoliciesDto;
};


export type QueryIdpNestGetPolicyArgs = {
  filter: IdpNestFilterGetPolicyDto;
};


export type QueryIdpNestGetSsoConfigArgs = {
  filter: IdpNestFilterGetSsoConfigDto;
};


export type QueryIdpNestSearchSsoConfigsArgs = {
  filter: IdpNestSearchSsoConfigsDto;
};


export type QueryIdpSearchSsoConfigsArgs = {
  filter: IdpSearchSsoConfigsDto;
};


export type QueryLiGenerateTimeslotsFromPromptArgs = {
  generateTimeslotsInput: LiGenerateTimeslotsDto;
};


export type QueryLiGetApplicationDetailArgs = {
  filter: LiGetApplicationDetailDto;
};


export type QueryLiGetBrandingByShortcodeArgs = {
  filter: LiGetBrandingByShortcodeDto;
};


export type QueryLiGetCandidateScheduleLinkInfoByShortcodeArgs = {
  filter: LiGetCandidateScheduleLinkInfoByShortcodeDto;
};


export type QueryLiGetHiringManagersByJobRequisitionIdArgs = {
  filter: LiGetHiringManagersByJobRequisitionIdDto;
};


export type QueryLiGetInterviewScheduleCardBasicInfoListV2WithoutPaginationArgs = {
  filter: LiGetInterviewScheduleCardBasicInfoListV2WithoutPaginationDto;
};


export type QueryLiGetInterviewScheduleCardBasicInfoListWithoutPaginationArgs = {
  filter: LiGetInterviewScheduleCardBasicInfoListWithoutPaginationDto;
};


export type QueryLiGetInterviewScheduleCardCandidatesWithoutPaginationArgs = {
  filter: LiGetInterviewScheduleCardCandidatesWithoutPaginationDto;
};


export type QueryLiGetInterviewScheduleCardDetailArgs = {
  filter: LiGetInterviewScheduleCardDetailDto;
};


export type QueryLiGetInterviewScheduleDetailArgs = {
  filter: LiGetInterviewScheduleDetailDto;
};


export type QueryLiGetJobRequisitionDetailArgs = {
  filter: LiGetJobRequisitionDetailDto;
};


export type QueryLiGetJobRequisitionsWithPaginationArgs = {
  filter: LiGetJobRequisitionsWithPaginationDto;
};


export type QueryLiGetJobRequisitionsWithoutPaginationArgs = {
  filter: LiGetJobRequisitionsWithoutPaginationDto;
};


export type QueryNotifCheckNotificationTemplateIsEnabledArgs = {
  filter: CheckNotificationEmailTemplateTypeEnableDto;
};


export type QueryNotifGetEmailDomainArgs = {
  getEmailDomainInput: NotifGetEmailDomainDto;
};


export type QueryNotifGetEmailDomainSettingArgs = {
  getEmailDomainSettingInput: NotifGetEmailDomainSettingDto;
};


export type QueryNotifGetEmailEventByMailMessageIdArgs = {
  getEmailEventByMailMessageIdInput: NotifGetEmailEventByMailMessageIdDto;
};


export type QueryNotifGetEmailEventsByCustomerIdArgs = {
  getEmailEventsByCustomerIdInput: NotifGetEmailEventsByCustomerIdDto;
};


export type QueryNotifGetLatestEmailEventByAssessmentIdArgs = {
  getLatestEmailEventByAssessmentIdInput: NotifGetLatestEmailEventByAssessmentIdDto;
};


export type QueryNotifGetNotificationByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryNotifGetNotificationSettingsArgs = {
  notification: GetNotificationDto;
};


export type QueryNotifGetNotificationSettingsV2Args = {
  notification: GetNotificationV2Dto;
};


export type QueryNotifGetSmsCreditsByCustomerIdArgs = {
  filter: GetSmsCreditsByCustomerIdDto;
};


export type QueryNotifGetSmsCreditsPurchaseHistoryListArgs = {
  filter: GetSmsCreditsPurchaseHistoryListDto;
};


export type QueryNotifGetSmsEventListArgs = {
  getSMSEventListInput: NotifGetSmsEventListDto;
};


export type QueryNotifGetUserNotificationListArgs = {
  filter: NotifGetUserNotificationListDto;
};


export type QueryOrgDiffHierarchiesArgs = {
  hierarchies: OrgDiffHierarchiesDto;
};


export type QueryOrgExistUserArgs = {
  filter: ExistUserDto;
};


export type QueryOrgExistUserByUsernameArgs = {
  filter: OrgExistUserDto;
};


export type QueryOrgGetCustomerArgs = {
  filter: GetCustomerDto;
};


export type QueryOrgGetCustomerListArgs = {
  filter: OrgGetCustomersDto;
};


export type QueryOrgGetCustomersArgs = {
  filter: GetCustomersDto;
};


export type QueryOrgGetGroupArgs = {
  filter: FilterGetGroupDto;
};


export type QueryOrgGetGroupsArgs = {
  filter: FilterGetGroupsDto;
};


export type QueryOrgGetHierarchyArgs = {
  filter: FilterGetHierarchyDto;
};


export type QueryOrgGetOrganizationArgs = {
  organization: GetOrganizationDto;
};


export type QueryOrgGetOrganizationGlobalCustomersArgs = {
  organization: GetOrganizationDto;
};


export type QueryOrgGetOrganizationsArgs = {
  filter: GetOrganizationsDto;
};


export type QueryOrgGetRootHierarchyArgs = {
  filter: OrgGetHierarchyDto;
};


export type QueryOrgGetUserArgs = {
  filter: GetUserDto;
};


export type QueryOrgGetUsersArgs = {
  filter: GetUsersDto;
};


export type QueryQbGetCollectorArgs = {
  id: Scalars['String']['input'];
};


export type QueryQbGetCollectorEdgeV3Args = {
  id: Scalars['String']['input'];
};


export type QueryQbGetCollectorsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  edgeVersion?: InputMaybe<Scalars['String']['input']>;
  isLatest?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetCollectorsByMasterIdArgs = {
  masterId: Scalars['String']['input'];
};


export type QueryQbGetCustomersArgs = {
  env: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetKpiModelsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetOrganizationsArgs = {
  env: Scalars['String']['input'];
};


export type QueryQbGetPredictorArgs = {
  id: Scalars['String']['input'];
};


export type QueryQbGetPredictorDeploymentsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  edgeVersion?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetPredictorsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  edgeVersion?: InputMaybe<Scalars['String']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetQuestionArgs = {
  id: Scalars['String']['input'];
};


export type QueryQbGetQuestionsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  isLatest?: InputMaybe<Scalars['Boolean']['input']>;
  languages?: InputMaybe<Array<Scalars['String']['input']>>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  roleFamilyId?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  traitIds?: InputMaybe<Array<Scalars['String']['input']>>;
  types?: InputMaybe<Array<Scalars['String']['input']>>;
  usageWhitelist?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryQbGetRoleFamiliesArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  withTraits?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQbGetRoleFamilyArgs = {
  id: Scalars['String']['input'];
  withTraits?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQbGetTraitArgs = {
  id: Scalars['String']['input'];
};


export type QueryQbGetTraitsArgs = {
  currentPage?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  parentTraitIds?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQbGetTraitsByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryTifiTalentInsightArgs = {
  id: Scalars['String']['input'];
};


export type QueryTiInformationArgs = {
  id: Scalars['String']['input'];
};


export type QueryTisiTalentInsightArgs = {
  id: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  _id: Scalars['String']['output'];
  contents: Array<Content>;
  isLatest: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  masterId: Scalars['String']['output'];
  options?: Maybe<Array<Option>>;
  parentId?: Maybe<Scalars['String']['output']>;
  parentMasterId?: Maybe<Scalars['String']['output']>;
  productList?: Maybe<Array<Scalars['String']['output']>>;
  roleFamily?: Maybe<RoleFamily>;
  roleFamilyId?: Maybe<Scalars['String']['output']>;
  rules?: Maybe<Array<RuleProperty>>;
  tags?: Maybe<Array<Tag>>;
  traitIds?: Maybe<Array<Scalars['String']['output']>>;
  traits?: Maybe<Array<Trait>>;
  types: Array<Scalars['String']['output']>;
  usageWhitelist?: Maybe<Array<Scalars['String']['output']>>;
  version: Scalars['Float']['output'];
};

export type RemoveSwitchableCustomerDto = {
  customerId: Scalars['String']['input'];
};

export type RestoreCustomerDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type RestoreGroupDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type RestoreHierarchyDto = {
  _id: Scalars['String']['input'];
  customerId?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type RestoreOrganizationDto = {
  _id?: InputMaybe<Scalars['String']['input']>;
  uniqueName?: InputMaybe<Scalars['String']['input']>;
};

export type RoleFamily = {
  __typename?: 'RoleFamily';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  traitIds?: Maybe<Array<Scalars['String']['output']>>;
  traits?: Maybe<Array<Trait>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RuleProperty = {
  __typename?: 'RuleProperty';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['propertyValue']['output'];
};

export type ScoreLevel = {
  __typename?: 'ScoreLevel';
  kpi: Scalars['String']['output'];
  thresholds: Array<Threshold>;
};

export type SortDto = {
  fieldName: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type SortGroupsDto = {
  fieldName: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type SortUsersDto = {
  fieldName: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type StatementEntity = {
  __typename?: 'StatementEntity';
  actions: Array<Scalars['String']['output']>;
  effect: Scalars['String']['output'];
  resources: Array<Scalars['String']['output']>;
};

export type SwitchableCustomer = {
  __typename?: 'SwitchableCustomer';
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  awsRegion: Scalars['String']['output'];
  customerDisplayName: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  organizationDisplayName?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  rootHierarchyId: Scalars['String']['output'];
  uniqueName: Scalars['String']['output'];
};

export type SyncHierarchyTreeDto = {
  customerId: Scalars['String']['input'];
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type TiAppsApplication = {
  __typename?: 'TIAppsApplication';
  _id: Scalars['String']['output'];
  assessments: Array<TiAppsAssessment>;
  externalJobRequisitionId?: Maybe<Scalars['String']['output']>;
  externalVacancyId?: Maybe<Scalars['String']['output']>;
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type TiAppsAssessment = {
  __typename?: 'TIAppsAssessment';
  _id: Scalars['String']['output'];
  externalAssessmentPackageId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type TiAssessmentReview = {
  __typename?: 'TIAssessmentReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  reviewerEmail: Scalars['String']['output'];
  reviewerId: Scalars['String']['output'];
  reviewerName: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TiAuth = {
  __typename?: 'TIAuth';
  defaultAwsRegion?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Float']['output']>;
  isPasswordResetSuccess?: Maybe<Scalars['Boolean']['output']>;
  isResendCodeSuccess?: Maybe<Scalars['Boolean']['output']>;
  isVerifyEmailSuccess?: Maybe<Scalars['Boolean']['output']>;
  me?: Maybe<Me>;
  mfa?: Maybe<Scalars['Boolean']['output']>;
  ssoLoginUrl?: Maybe<Scalars['String']['output']>;
  tokenCheckResult?: Maybe<TokenCheckResult>;
};

export type TiAuthCheckRes = {
  __typename?: 'TIAuthCheckRes';
  accessTokenInfo: TiTokenInfo;
  refreshTokenInfo: TiTokenInfo;
};

export type TiCandidatePii = {
  __typename?: 'TICandidatePii';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type TiCandidateResponseFlag = {
  __typename?: 'TICandidateResponseFlag';
  flagged: Scalars['Boolean']['output'];
  questionIds: Array<Scalars['String']['output']>;
};

export type TiCandidateResponseFlags = {
  __typename?: 'TICandidateResponseFlags';
  agc?: Maybe<TiCandidateResponseFlag>;
  plagiarism: TiCandidateResponseFlag;
  profanity: TiCandidateResponseFlag;
};

export type TiCandidateResponses = {
  __typename?: 'TICandidateResponses';
  ftqResponseFlags?: Maybe<TiCandidateResponseFlags>;
  ftqResponses?: Maybe<Array<TiFtqResponse>>;
  mcqResponses?: Maybe<Array<TiMcqResponse>>;
  videoResponses?: Maybe<Array<TiVideoResponse>>;
};

export type TiCommunicationSkillFlag = {
  __typename?: 'TICommunicationSkillFlag';
  alertText: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
};

export type TiCommunicationSkills = {
  __typename?: 'TICommunicationSkills';
  scores: Array<TiScore>;
};

export type TiDownload = {
  __typename?: 'TIDownload';
  success: Scalars['Boolean']['output'];
};

export type TiDraftReview = {
  __typename?: 'TIDraftReview';
  answerId: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
};

export type TifiTalentInsight = {
  __typename?: 'TIFITalentInsight';
  agcDetectionFlagThreshold: Scalars['Float']['output'];
  assessmentId: Scalars['String']['output'];
  assessmentSubmittedAt: Scalars['String']['output'];
  candidateId: Scalars['String']['output'];
  candidatePii: TiCandidatePii;
  candidateResponses: TiCandidateResponses;
  cohortId: Scalars['String']['output'];
  cohortTitle: Scalars['String']['output'];
  communicationSkillFlag?: Maybe<TiCommunicationSkillFlag>;
  communicationSkills?: Maybe<TiCommunicationSkills>;
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  externalApplicantId: Scalars['String']['output'];
  externalApplicationId: Scalars['String']['output'];
  externalAssessmentId: Scalars['String']['output'];
  externalCohortId: Scalars['String']['output'];
  haveTraitGlobalPercentiles: Scalars['Boolean']['output'];
  hierarchyId: Scalars['String']['output'];
  isAuthorised?: Maybe<Scalars['Boolean']['output']>;
  isGarbage: Scalars['Boolean']['output'];
  isNonSourceLanguage: Scalars['Boolean']['output'];
  isShortLengthTest: Scalars['Boolean']['output'];
  meta: TiMeta;
  organizationId: Scalars['String']['output'];
  personalSnapshot: TiPersonalitySnapshot;
  personalityFeatures: Array<TiPersonalityFeature>;
  personalityTraits: Array<TiPersonalityTrait>;
  predictionScore: TiPredictionScore;
  predictorMasterId: Scalars['String']['output'];
  recommendation: Scalars['String']['output'];
  recommendationStatus: Scalars['String']['output'];
  sectionVisibilityFlags: TiSectionVisibilityConfig;
  suggestedInterviewQuestions: Array<TiSuggestedInterviewQuestion>;
};

export type TiFtqResponse = {
  __typename?: 'TIFtqResponse';
  answerText: Scalars['String']['output'];
  answerValue: Scalars['String']['output'];
  masterId?: Maybe<Scalars['String']['output']>;
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type TiInformation = {
  __typename?: 'TIInformation';
  appsApplication: TiAppsApplication;
  assessmentProduct: Scalars['String']['output'];
  assessmentStatus: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  isAuthenticated: Scalars['Boolean']['output'];
  isAuthorised: Scalars['Boolean']['output'];
  isCandidatePurged: Scalars['Boolean']['output'];
  vacancy?: Maybe<TiVacancy>;
  vacancyWorkflow?: Maybe<TiVacancyWorkflow>;
};

export type TiLikelihood = {
  __typename?: 'TILikelihood';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type TiMarkAssessmentIsViewed = {
  __typename?: 'TIMarkAssessmentIsViewed';
  success: Scalars['Boolean']['output'];
};

export type TiMarkAssessmentIsViewedDto = {
  customerId: Scalars['String']['input'];
  externalApplicationId: Scalars['String']['input'];
  externalAssessmentId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  isViewed: Scalars['Boolean']['input'];
  organizationId: Scalars['String']['input'];
};

export type TiMcqResponse = {
  __typename?: 'TIMcqResponse';
  answerText: Scalars['String']['output'];
  answerValue: Scalars['String']['output'];
  masterId?: Maybe<Scalars['String']['output']>;
  options: Array<TiOption>;
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type TiMeta = {
  __typename?: 'TIMeta';
  configPath: Scalars['String']['output'];
};

export type TiOption = {
  __typename?: 'TIOption';
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TiPersonalityFeature = {
  __typename?: 'TIPersonalityFeature';
  feature: Scalars['String']['output'];
  globalPercentile?: Maybe<Scalars['Float']['output']>;
  jobFamilyPercentile: Scalars['Float']['output'];
  likelihood: Array<TiLikelihood>;
};

export type TiPersonalityInsightTraitText = {
  __typename?: 'TIPersonalityInsightTraitText';
  insightText: Scalars['String']['output'];
  trait: Scalars['String']['output'];
  traitBasedOn: Scalars['String']['output'];
};

export type TiPersonalitySnapshot = {
  __typename?: 'TIPersonalitySnapshot';
  considerations: Array<TiPersonalityInsightTraitText>;
  highlights: Array<TiPersonalityInsightTraitText>;
};

export type TiPersonalityTrait = {
  __typename?: 'TIPersonalityTrait';
  displayedTraitName: Scalars['String']['output'];
  globalPercentile?: Maybe<Scalars['Float']['output']>;
  index: Scalars['Float']['output'];
  jobFamilyPercentile: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  recommendation: Scalars['String']['output'];
  traitsBasedOn: Array<Scalars['String']['output']>;
};

export type TiPredictionScore = {
  __typename?: 'TIPredictionScore';
  candidatePool: Scalars['Float']['output'];
  candidatePoolSize: Scalars['Float']['output'];
  jobFamilyPercentile: Scalars['Float']['output'];
  predictionScorePercentage: Scalars['Float']['output'];
  ranking: Scalars['Float']['output'];
};

export type TiQuestionReview = {
  __typename?: 'TIQuestionReview';
  answerId: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews?: Maybe<Array<TiAssessmentReview>>;
};

export type TiReview = {
  __typename?: 'TIReview';
  questionDraftReviews?: Maybe<Array<TiDraftReview>>;
  questionReviews?: Maybe<Array<TiQuestionReview>>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type TisiTalentInsight = {
  __typename?: 'TISITalentInsight';
  isAuthenticated?: Maybe<Scalars['Boolean']['output']>;
  isAuthorised?: Maybe<Scalars['Boolean']['output']>;
  tiTalentInsightData?: Maybe<TisiTalentInsightData>;
  userRole?: Maybe<Scalars['String']['output']>;
};

export type TisiTalentInsightData = {
  __typename?: 'TISITalentInsightData';
  assessmentId: Scalars['String']['output'];
  assessmentSubmittedAt: Scalars['String']['output'];
  candidateId: Scalars['String']['output'];
  candidatePii: TiCandidatePii;
  candidateResponses: TiCandidateResponses;
  cohortId: Scalars['String']['output'];
  cohortTitle: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  customerName: Scalars['String']['output'];
  externalApplicantId: Scalars['String']['output'];
  externalApplicationId: Scalars['String']['output'];
  externalAssessmentId: Scalars['String']['output'];
  externalCohortId: Scalars['String']['output'];
  hierarchyId: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  predictorMasterId: Scalars['String']['output'];
  tiReview?: Maybe<TiReview>;
  videosDeletedAt?: Maybe<Scalars['String']['output']>;
};

export type TiScore = {
  __typename?: 'TIScore';
  displayedTraitName: Scalars['String']['output'];
  globalPercentile?: Maybe<Scalars['Float']['output']>;
  jobFamilyPercentile: Scalars['Float']['output'];
  recommendation: Scalars['String']['output'];
  traitBasedOn: Scalars['String']['output'];
};

export type TiSectionExpansion = {
  __typename?: 'TISectionExpansion';
  firstInterview: Scalars['Boolean']['output'];
  recommendedInterviewQuestions: Scalars['Boolean']['output'];
};

export type TiSectionVisibilityConfig = {
  __typename?: 'TISectionVisibilityConfig';
  sectionExpansion: TiSectionExpansion;
  visibility: TiVisibility;
};

export type TiSuggestedInterviewQuestion = {
  __typename?: 'TISuggestedInterviewQuestion';
  index: Scalars['Float']['output'];
  questionBasedOn: Scalars['String']['output'];
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
};

export type TiTokenInfo = {
  __typename?: 'TITokenInfo';
  expiredAt?: Maybe<Scalars['Float']['output']>;
  valid?: Maybe<Scalars['Boolean']['output']>;
};

export type TiVacancy = {
  __typename?: 'TIVacancy';
  _id: Scalars['String']['output'];
  customerId: Scalars['String']['output'];
  jobRequisitionId?: Maybe<Scalars['String']['output']>;
  managers: Array<TiVacancyManager>;
  title: Scalars['String']['output'];
  workflow: TiVacancyWorkflow;
};

export type TiVacancyManager = {
  __typename?: 'TIVacancyManager';
  email: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TiVacancyWorkflow = {
  __typename?: 'TIVacancyWorkflow';
  _id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  stages: Array<TiWorkflowStages>;
};

export type TiVideoResponse = {
  __typename?: 'TIVideoResponse';
  answerId: Scalars['String']['output'];
  answerText: Scalars['String']['output'];
  answerValue: Scalars['String']['output'];
  masterId?: Maybe<Scalars['String']['output']>;
  questionId: Scalars['String']['output'];
  questionText: Scalars['String']['output'];
  types: Array<Scalars['String']['output']>;
};

export type TiVisibility = {
  __typename?: 'TIVisibility';
  communicationSkills: Scalars['Boolean']['output'];
  firstInterview: Scalars['Boolean']['output'];
  personalityRead: Scalars['Boolean']['output'];
  recommendedInterviewQuestions: Scalars['Boolean']['output'];
  scoreAndRanking: Scalars['Boolean']['output'];
  traits: Scalars['Boolean']['output'];
};

export type TiWorkflowStages = {
  __typename?: 'TIWorkflowStages';
  _id: Scalars['String']['output'];
  externalAssessmentPackageId: Scalars['String']['output'];
  name: Scalars['String']['output'];
  product: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TagDto = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TagEntity = {
  __typename?: 'TagEntity';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TagInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Threshold = {
  __typename?: 'Threshold';
  text: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type TokenCheckResult = {
  __typename?: 'TokenCheckResult';
  isAccessTokenExpired: Scalars['Boolean']['output'];
  isRefreshTokenExpired: Scalars['Boolean']['output'];
};

export type Trait = {
  __typename?: 'Trait';
  _id: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateAssessmentReviewDto = {
  answerId: Scalars['String']['input'];
  assessmentId: Scalars['String']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  questionId: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateGroupDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
};

export type UpdateNotificationDto = {
  customerId: Scalars['String']['input'];
  isSapiaCustomer: Scalars['Boolean']['input'];
  settings: Array<UpdateNotificationSettingItemDto>;
};

export type UpdateNotificationSettingItemDto = {
  enabled: Scalars['Boolean']['input'];
  language: Scalars['String']['input'];
  name: Scalars['String']['input'];
  template: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateNotificationV2Dto = {
  customerId: Scalars['String']['input'];
  isGlobalSmsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isSapiaCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  settings: Array<UpdateNotificationSettingItemDto>;
  templateType: Scalars['String']['input'];
};

export type UpdateOrganizationDto = {
  customers?: InputMaybe<Array<UpdateSwitchableCustomerDto>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
};

export type UpdateSwitchableCustomerDto = {
  awsRegion: Scalars['String']['input'];
  customerDisplayName: Scalars['String']['input'];
  customerId: Scalars['String']['input'];
  organizationDisplayName: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  rootHierarchyId: Scalars['String']['input'];
  uniqueName: Scalars['String']['input'];
};

export type UpdateUserDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** This will override the existing groupIds */
  groupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  hierarchyId?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mfaEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<TagDto>>;
  userType?: InputMaybe<Scalars['String']['input']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  _id: Scalars['ID']['output'];
  apiKey?: Maybe<Scalars['String']['output']>;
  apiSecret?: Maybe<Scalars['String']['output']>;
  archivedAt?: Maybe<Scalars['DateTime']['output']>;
  awsRegion: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customer: CustomerEntity;
  customerId: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  group: Array<Maybe<GroupEntity>>;
  groupIds: Array<Scalars['String']['output']>;
  hierarchy: OrgHierarchyEntity;
  hierarchyId: Scalars['String']['output'];
  lastActive?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastPasswordUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  lockedAt?: Maybe<Scalars['DateTime']['output']>;
  mfaEnabled: Scalars['Boolean']['output'];
  mfaMethod: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  organization: OrganizationEntity;
  organizationId: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  tags: Array<TagEntity>;
  updatedAt: Scalars['DateTime']['output'];
  userType: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type ArchiveWorkflowSetInput = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowSetIds: Array<Scalars['ID']['input']>;
};

export type RestoreWorkflowSetInput = {
  customerId: Scalars['String']['input'];
  hierarchyId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  workflowSetIds: Array<Scalars['ID']['input']>;
};

export type LiBookCandidateInterviewMutationVariables = Exact<{
  input: LiBookCandidateInterviewDto;
}>;


export type LiBookCandidateInterviewMutation = { __typename?: 'Mutation', LIBookCandidateInterview: { __typename?: 'LIBookedCandidateInterviewEntity', jobRequisitionName: string, interviewType: string, interviewLocation?: string | null, interviewLink?: string | null, timezone: string, interviewStartsAt: any, interviewEndsAt: any, iCalId: string } };

export type LiCancelCandidateInterviewMutationVariables = Exact<{
  input: LiCancelCandidateInterviewDto;
}>;


export type LiCancelCandidateInterviewMutation = { __typename?: 'Mutation', LICancelCandidateInterview: { __typename?: 'LICancelledCandidateInterviewEntity', interviewEventId: string, interviewScheduleId: string, interviewUniqueName: string, interviewDisplayName: string, interviewType: string, interviewMode: string, status: string } };

export type LiGenerateEventICalInfoMutationVariables = Exact<{
  input: LiGenerateEventICalDto;
}>;


export type LiGenerateEventICalInfoMutation = { __typename?: 'Mutation', LIGenerateEventICalInfo: { __typename?: 'LIGeneratedEventICalEntity', iCalContent: string } };

export type LiGetBrandingByShortcodeQueryVariables = Exact<{
  filter: LiGetBrandingByShortcodeDto;
}>;


export type LiGetBrandingByShortcodeQuery = { __typename?: 'Query', LIGetBrandingByShortcode?: { __typename?: 'LICandidateScheduleLinkBrandingEntity', logoUrl?: string | null } | null };

export type LiGetCandidateScheduleLinkInfoByShortcodeQueryVariables = Exact<{
  filter: LiGetCandidateScheduleLinkInfoByShortcodeDto;
}>;


export type LiGetCandidateScheduleLinkInfoByShortcodeQuery = { __typename?: 'Query', LIGetCandidateScheduleLinkInfoByShortcode?: { __typename?: 'LICandidateScheduleLinkInfoEntity', jobRequisitionName: string, candidateTimezone: string, shortcode: string, candidateScheduleStatus: string, timeslots: Array<{ __typename?: 'LICandidateScheduleLinkInfoTimeslotEntity', _id: string, start: any, end: any, status: string }>, interviewSchedule: { __typename?: 'LICandidateScheduleLinkInfoInterviewScheduleEntity', defaultTimezone: string, interviewUniqueName: string, interviewDisplayName: string, interviewType: string, interviewMode: string, interviewAddress?: string | null, interviewLink?: string | null, interviewNotesForCandidate: string, interviewScheduleStatus: string, interviewEventDuration: { __typename?: 'LIInterviewEventDurationEntity', type: string, unit: string, value: number }, interviewAttachments: Array<{ __typename?: 'LIInterviewAttachmentEntity', fileId: string, mimeType: string, filename: string }> }, interviewEvent?: { __typename?: 'LICandidateScheduleLinkInfoInterviewEventEntity', interviewStartsAt?: any | null, interviewEndsAt?: any | null, iCalId?: string | null, interviewStatus?: string | null } | null } | null };


export const LiBookCandidateInterviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LIBookCandidateInterview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LIBookCandidateInterviewDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LIBookCandidateInterview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobRequisitionName"}},{"kind":"Field","name":{"kind":"Name","value":"interviewType"}},{"kind":"Field","name":{"kind":"Name","value":"interviewLocation"}},{"kind":"Field","name":{"kind":"Name","value":"interviewLink"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"interviewStartsAt"}},{"kind":"Field","name":{"kind":"Name","value":"interviewEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"iCalId"}}]}}]}}]} as unknown as DocumentNode<LiBookCandidateInterviewMutation, LiBookCandidateInterviewMutationVariables>;
export const LiCancelCandidateInterviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LICancelCandidateInterview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LICancelCandidateInterviewDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LICancelCandidateInterview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviewEventId"}},{"kind":"Field","name":{"kind":"Name","value":"interviewScheduleId"}},{"kind":"Field","name":{"kind":"Name","value":"interviewUniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"interviewDisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"interviewType"}},{"kind":"Field","name":{"kind":"Name","value":"interviewMode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<LiCancelCandidateInterviewMutation, LiCancelCandidateInterviewMutationVariables>;
export const LiGenerateEventICalInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LIGenerateEventICalInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LIGenerateEventICalDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LIGenerateEventICalInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iCalContent"}}]}}]}}]} as unknown as DocumentNode<LiGenerateEventICalInfoMutation, LiGenerateEventICalInfoMutationVariables>;
export const LiGetBrandingByShortcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LIGetBrandingByShortcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LIGetBrandingByShortcodeDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LIGetBrandingByShortcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]}}]} as unknown as DocumentNode<LiGetBrandingByShortcodeQuery, LiGetBrandingByShortcodeQueryVariables>;
export const LiGetCandidateScheduleLinkInfoByShortcodeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LIGetCandidateScheduleLinkInfoByShortcode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LIGetCandidateScheduleLinkInfoByShortcodeDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LIGetCandidateScheduleLinkInfoByShortcode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobRequisitionName"}},{"kind":"Field","name":{"kind":"Name","value":"candidateTimezone"}},{"kind":"Field","name":{"kind":"Name","value":"shortcode"}},{"kind":"Field","name":{"kind":"Name","value":"candidateScheduleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"timeslots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewSchedule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"defaultTimezone"}},{"kind":"Field","name":{"kind":"Name","value":"interviewUniqueName"}},{"kind":"Field","name":{"kind":"Name","value":"interviewDisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"interviewType"}},{"kind":"Field","name":{"kind":"Name","value":"interviewMode"}},{"kind":"Field","name":{"kind":"Name","value":"interviewAddress"}},{"kind":"Field","name":{"kind":"Name","value":"interviewLink"}},{"kind":"Field","name":{"kind":"Name","value":"interviewEventDuration"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewNotesForCandidate"}},{"kind":"Field","name":{"kind":"Name","value":"interviewAttachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileId"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewScheduleStatus"}}]}},{"kind":"Field","name":{"kind":"Name","value":"interviewEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviewStartsAt"}},{"kind":"Field","name":{"kind":"Name","value":"interviewEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"iCalId"}},{"kind":"Field","name":{"kind":"Name","value":"interviewStatus"}}]}}]}}]}}]} as unknown as DocumentNode<LiGetCandidateScheduleLinkInfoByShortcodeQuery, LiGetCandidateScheduleLinkInfoByShortcodeQueryVariables>;