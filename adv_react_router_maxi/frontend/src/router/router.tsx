import { createBrowserRouter, type RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage";

import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import EventsRoot from "../pages/EventsRoot";
import Events from "../pages/Events";
import RootLayout from "../pages/Root";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events /> },
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
];

const router = createBrowserRouter(routes);

export default router;
