import { API_BASE_URL } from "../../configs/config";
import type { EventsResponse } from "../../types/types";

export async function getEvents(): Promise<EventsResponse> {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch events..." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const data: EventsResponse = await response.json();

  return data;
}
