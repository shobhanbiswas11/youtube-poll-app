export const getPollWithResponse = /* GraphQL */ `
  query GetPoll($id: ID!) {
    getPoll(id: $id) {
      id
      userId
      name
      options {
        id
        value
      }
      response {
        items {
          id
          responseId
          userId
        }
      }
    }
  }
`;
