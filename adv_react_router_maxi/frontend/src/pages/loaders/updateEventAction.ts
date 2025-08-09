import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { API_BASE_URL } from "../../configs/config";

export async function updateEventAction({
  request,
  params,
}: ActionFunctionArgs) {
  const id = params.eventId;
  const formData = await request.formData();
  const updatedEvent = {
    title: formData.get("title"),
    image: formData.get("image"),
    date: formData.get("date"),
    description: formData.get("description"),
  };

  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedEvent),
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not update event." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return redirect(`/events/`);
}
