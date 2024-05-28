/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePoll = /* GraphQL */ `
  subscription OnCreatePoll($filter: ModelSubscriptionPollFilterInput) {
    onCreatePoll(filter: $filter) {
      id
      name
      userId
      options {
        id
        value
        __typename
      }
      response {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePoll = /* GraphQL */ `
  subscription OnUpdatePoll($filter: ModelSubscriptionPollFilterInput) {
    onUpdatePoll(filter: $filter) {
      id
      name
      userId
      options {
        id
        value
        __typename
      }
      response {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePoll = /* GraphQL */ `
  subscription OnDeletePoll($filter: ModelSubscriptionPollFilterInput) {
    onDeletePoll(filter: $filter) {
      id
      name
      userId
      options {
        id
        value
        __typename
      }
      response {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePollResponse = /* GraphQL */ `
  subscription OnCreatePollResponse(
    $filter: ModelSubscriptionPollResponseFilterInput
  ) {
    onCreatePollResponse(filter: $filter) {
      id
      responseId
      poll {
        id
        name
        userId
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      pollResponseId
      __typename
    }
  }
`;
export const onUpdatePollResponse = /* GraphQL */ `
  subscription OnUpdatePollResponse(
    $filter: ModelSubscriptionPollResponseFilterInput
  ) {
    onUpdatePollResponse(filter: $filter) {
      id
      responseId
      poll {
        id
        name
        userId
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      pollResponseId
      __typename
    }
  }
`;
export const onDeletePollResponse = /* GraphQL */ `
  subscription OnDeletePollResponse(
    $filter: ModelSubscriptionPollResponseFilterInput
  ) {
    onDeletePollResponse(filter: $filter) {
      id
      responseId
      poll {
        id
        name
        userId
        createdAt
        updatedAt
        __typename
      }
      userId
      createdAt
      updatedAt
      pollResponseId
      __typename
    }
  }
`;
