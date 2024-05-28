import { withAuthenticator } from "@aws-amplify/ui-react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import CreatePoll from "./components/create-poll";
import Home from "./components/home";
import SinglePoll from "./components/single-poll";
import { Button } from "./components/ui/button";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreatePoll />,
  },
  {
    path: "/poll/:id",
    element: <SinglePoll />,
  },
]);

function App({ signOut }) {
  return (
    <div>
      <header className="py-2 bg-slate-900">
        <div className="container max-w-screen-lg flex justify-between items-center">
          <h1 className="font-bold text-lg">Poll App</h1>
          <Button onClick={signOut}>Logout</Button>
        </div>
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default withAuthenticator(App);
