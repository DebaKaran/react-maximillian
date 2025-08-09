import { redirect, type ActionFunctionArgs } from "react-router-dom";
import type { EventData } from "../../types/types";
import { API_BASE_URL } from "../../configs/config";

export async function newEventAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Extract values — formData.get can be null or File, so coerce to string carefully
  const title = formData.get("title")?.toString() ?? "";
  const image = formData.get("image")?.toString() ?? "";
  const date = formData.get("date")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";

  // Basic validation
  const errors: Record<string, string> = {};
  if (!title.trim()) errors.title = "Title is required.";
  if (!image.trim()) errors.image = "Image url is required.";
  if (!date.trim()) errors.date = "Date is required.";
  if (!description.trim()) errors.description = "Description is required.";

  if (Object.keys(errors).length > 0) {
    // Return a 422-like response with error details; useActionData() reads this
    return { errors };
  }

  const eventData: EventData = { title, image, date, description };

  // Send to backend
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  // === Validation errors from backend:
  if (response.status === 422) {
    const data = await response.json();
    return data; // { message, errors }
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not add new event..." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  // On success, redirect to events list (or event detail)
  return redirect("/events");
}
