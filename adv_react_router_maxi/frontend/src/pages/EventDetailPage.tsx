import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import type { Event } from "../types/types";

const EventDetailPage = () => {
  const { event } = useLoaderData() as { event: Event };
  console.log("Event from loader:", event);
  return <EventItem event={event} />;
};

export default EventDetailPage;
