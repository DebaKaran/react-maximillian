import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { API_BASE_URL } from "../../configs/config";

export async function deleteEventAction({
  params,
  request,
}: ActionFunctionArgs) {
  const id = params.eventId;

  if (!id) {
    throw new Response(
      JSON.stringify({ message: "Event ID is missing in route parameters" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    //method: "DELETE", instead of hard-coding
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: `Could not delete event for eventId: ${id}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  return redirect("/events");
}
