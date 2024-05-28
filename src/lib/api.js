import * as customQueries from "@/graphql/custom";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";
import { getCurrentUser } from "aws-amplify/auth";
import { client } from "./client";

export async function listPolls() {
  const { userId } = await getCurrentUser();

  const result = await client.graphql({
    query: queries.byUser,
    variables: {
      userId,
    },
  });

  return result.data.byUser.items;
}

export async function createPoll({ name, options }) {
  const { userId } = await getCurrentUser();

  const result = await client.graphql({
    query: mutations.createPoll,
    variables: {
      input: {
        name,
        userId,
        options,
      },
    },
  });

  return result.data.createPoll;
}

export async function getPoll(id) {
  const result = await client.graphql({
    query: customQueries.getPollWithResponse,
    variables: {
      id,
    },
  });

  return result.data.getPoll;
}

export async function createPollResponse({ optionId, pollId }) {
  const { userId } = await getCurrentUser();

  const result = await client.graphql({
    query: mutations.createPollResponse,
    variables: {
      input: {
        responseId: optionId,
        userId,
        pollResponseId: pollId,
      },
    },
  });

  return result.data.createPollResponse;
}
