function getOptionsWithCount(poll) {
  return poll.options.map((option) => {
    const count = poll.response.items.filter(
      (response) => response.responseId === option.id
    ).length;

    return {
      ...option,
      count,
    };
  });
}

export default function AdminPollDetails({ poll }) {
  return (
    <div className="container max-w-screen-sm mt-20">
      <h1 className="text-2xl mb-6">{poll.name}</h1>
      <div className="space-y-2">
        {getOptionsWithCount(poll).map((option) => (
          <div key={option.id} className="flex items-center justify-between">
            <div className="flex-grow bg-slate-700 p-2 rounded-md">
              {option.value}
            </div>
            <div className="py-2 px-4 rounded-md bg-slate-900 font-bold ml-2">
              {option.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
