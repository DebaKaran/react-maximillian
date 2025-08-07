import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";

// Define the shape of the event data
type EventData = {
  title: string;
  image: string;
  date: string;
  description: string;
};

// Define props for the component
interface EventFormProps {
  method: string;
  event?: EventData;
}

function EventForm({ method, event }: EventFormProps) {
  const navigate = useNavigate();

  function cancelHandler(): void {
    navigate("..");
  }

  return (
    <form className={classes.form} method={method}>
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
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </form>
  );
}

export default EventForm;
