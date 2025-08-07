import { API_BASE_URL } from "../../configs/config";
import type { EventsResponse } from "../../types/types";

export async function getEvents(): Promise<EventsResponse> {
  const response = await fetch(`${API_BASE_URL}/events`);
  if (!response.ok) {
    throw new Error("There is no events....");
  }

  const data: EventsResponse = await response.json();

  return data;
}
