import { Link } from "react-router-dom";
import type { Event } from "../types/types";
import classes from "./EventItem.module.css";

interface EventItemProps {
  event: Event;
}

function EventItem({ event }: EventItemProps) {
  function startDeleteHandler(): void {
    // ... implement delete logic here
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
