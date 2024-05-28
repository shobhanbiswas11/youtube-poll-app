/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPoll = /* GraphQL */ `
  mutation CreatePoll(
    $input: CreatePollInput!
    $condition: ModelPollConditionInput
  ) {
    createPoll(input: $input, condition: $condition) {
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
export const updatePoll = /* GraphQL */ `
  mutation UpdatePoll(
    $input: UpdatePollInput!
    $condition: ModelPollConditionInput
  ) {
    updatePoll(input: $input, condition: $condition) {
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
export const deletePoll = /* GraphQL */ `
  mutation DeletePoll(
    $input: DeletePollInput!
    $condition: ModelPollConditionInput
  ) {
    deletePoll(input: $input, condition: $condition) {
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
export const createPollResponse = /* GraphQL */ `
  mutation CreatePollResponse(
    $input: CreatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    createPollResponse(input: $input, condition: $condition) {
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
export const updatePollResponse = /* GraphQL */ `
  mutation UpdatePollResponse(
    $input: UpdatePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    updatePollResponse(input: $input, condition: $condition) {
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
export const deletePollResponse = /* GraphQL */ `
  mutation DeletePollResponse(
    $input: DeletePollResponseInput!
    $condition: ModelPollResponseConditionInput
  ) {
    deletePollResponse(input: $input, condition: $condition) {
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
