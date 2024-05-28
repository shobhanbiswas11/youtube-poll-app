import { listPolls } from "@/lib/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Home() {
  const [polls, setPolls] = useState([]);
  useEffect(() => {
    listPolls().then((polls) => setPolls(polls));
  }, []);

  return (
    <div className="container max-w-screen-sm mt-20">
      <h1 className="text-2xl mb-12">My Polls</h1>

      <div className="space-y-2 mb-12">
        {polls.map((poll) => (
          <Link
            key={poll.id}
            className="bg-slate-800 rounded-md p-4 cursor-pointer block"
            to={`poll/${poll.id}`}
          >
            {poll.name}
          </Link>
        ))}
      </div>

      <Button asChild className="w-full">
        <Link to="create">Create Poll</Link>
      </Button>
    </div>
  );
}
