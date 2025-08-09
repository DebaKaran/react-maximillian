import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import type { Event } from "../types/types";

const EventDetailPage = () => {
  const { event } = useRouteLoaderData("event-detail") as { event: Event };
  return <EventItem event={event} />;
};

export default EventDetailPage;
