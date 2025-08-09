import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  type HTMLFormMethod,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import type { EventData } from "../types/types";

// Define props for the component
interface EventFormProps {
  method: HTMLFormMethod;
  event?: EventData;
}

type ActionData = { message?: string; errors?: Record<string, string> } | null;

function EventForm({ method, event }: EventFormProps) {
  const actionData = useActionData() as ActionData;

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler(): void {
    navigate("..");
  }

  return (
    <Form className={classes.form} method={method}>
      {actionData?.errors && (
        <ul className="error-list">
          {Object.values(actionData.errors).map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event?.image}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event?.date}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={event?.description}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : " Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
