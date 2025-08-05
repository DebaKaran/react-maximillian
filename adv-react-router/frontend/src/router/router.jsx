import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import RootLayout from "../pages/Root";
import EventsRoot from "../pages/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: "new", element: <NewEventPage /> },
          {
            path: ":eventId",
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
