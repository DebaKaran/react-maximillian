import type { LoaderFunctionArgs } from "react-router-dom";
import { API_BASE_URL } from "../../configs/config";

export async function getEventDetail({
  params,
}: LoaderFunctionArgs): Promise<Event> {
  const id = params.eventId;

  if (!id) {
    throw new Response(
      JSON.stringify({ message: "Event ID is missing in route parameters" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  const response = await fetch(`${API_BASE_URL}/events/${id}`);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch event for eventId: " + id }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  const event: Event = await response.json();
  return event;
}
