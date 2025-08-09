import { createBrowserRouter, type RouteObject } from "react-router-dom";

import HomePage from "../pages/HomePage";

import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEventPage from "../pages/EditEventPage";
import EventsRoot from "../pages/EventsRoot";
import Events from "../pages/Events";
import RootLayout from "../pages/Root";
import { getEvents } from "../pages/loaders/eventsLoader";
import ErrorPage from "../pages/ErrorPage";
import { getEventDetail } from "../pages/loaders/eventDetailLoader";
import { newEventAction } from "../pages/loaders/newEventAction";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { index: true, element: <Events />, loader: getEvents },
          { path: "new", element: <NewEventPage />, action: newEventAction },
          {
            path: ":eventId",
            loader: getEventDetail,
            id: "event-detail",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
