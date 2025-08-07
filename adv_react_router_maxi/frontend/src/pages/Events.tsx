import EventsList from "../components/EventsList";

import { useLoaderData } from "react-router-dom";
import type { EventsResponse } from "../types/types";

function EventsPage() {
  const { events } = useLoaderData() as EventsResponse;
  return <EventsList events={events} />;
}

export default EventsPage;
