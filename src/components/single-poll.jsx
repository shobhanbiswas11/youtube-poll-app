import { createPollResponse, getPoll } from "@/lib/api";
import { getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminPollDetails from "./poll-details/admin";
import PublicPollDetails from "./poll-details/public";
import PublicDonePollDetails from "./poll-details/public-done";

export default function SinglePoll() {
  const [poll, setPoll] = useState(null);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCurrentUser().then((user) => setUserId(user.userId));
  }, []);

  useEffect(() => {
    if (!id) return;
    getPoll(id).then(setPoll);
  }, [id]);

  async function handlePollSubmit(optionId) {
    await createPollResponse({
      optionId,
      pollId: poll.id,
    });
  }

  if (!poll || !userId) return null;

  if (poll.userId === userId) return <AdminPollDetails poll={poll} />;
  if (poll.response.items.find((response) => response.userId === userId))
    return <PublicDonePollDetails />;

  return <PublicPollDetails poll={poll} handlePollSubmit={handlePollSubmit} />;
}
