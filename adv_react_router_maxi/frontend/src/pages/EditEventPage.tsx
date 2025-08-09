import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import type { EventData, Event } from "../types/types";

const EditEventPage = () => {
  const { event } = useRouteLoaderData("event-detail") as { event: Event };

  const eventData: EventData = {
    title: event.title,
    image: event.image,
    date: event.date,
    description: event.description,
  };
  return <EventForm event={eventData} method="patch" />;
};

export default EditEventPage;
