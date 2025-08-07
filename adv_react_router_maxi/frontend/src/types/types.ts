// Define the shape of the event data
export interface EventData {
  title: string;
  image: string;
  date: string;
  description: string;
}

export interface Event extends EventData {
  id: string;
}

// Optional: if you want a lightweight version without `description`
export type EventSummary = Pick<Event, "id" | "title" | "image" | "date">;

// Define reusable API response type
export interface EventsResponse {
  events: Event[];
}
