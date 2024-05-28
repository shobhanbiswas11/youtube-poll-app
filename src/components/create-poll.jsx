import { createPoll } from "@/lib/api";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generate } from "shortid";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CreatePoll() {
  const [name, setName] = useState("Untitled Poll");
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  function handleAppOption() {
    setOptions((options) => [
      ...options,
      { id: generate(), value: "Untitled Option" },
    ]);
  }

  function handleCreate() {
    setLoading(true);
    createPoll({ name, options })
      .then((poll) => {
        navigate(`/poll/${poll.id}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleOptionChange(e, { id }) {
    setOptions((options) =>
      options.toSpliced(
        options.findIndex((op) => op.id === id),
        1,
        {
          id,
          value: e.target.value,
        }
      )
    );
  }

  return (
    <div className="container max-w-screen-sm mt-20">
      <h1 className="text-2xl mb-12">Create Poll</h1>
      <div className="space-y-8">
        <Input
          placeholder="Poll Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="space-y-2 p-4 border-[1px] rounded-md">
          {options.map((option) => (
            <Input
              key={option.id}
              value={option.value}
              onChange={(e) => handleOptionChange(e, option)}
            />
          ))}
          <Button onClick={handleAppOption}>Add Option</Button>
        </div>

        <Button className="w-full" onClick={handleCreate} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Poll
        </Button>
      </div>
    </div>
  );
}
