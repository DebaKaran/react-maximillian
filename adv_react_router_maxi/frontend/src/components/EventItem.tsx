import classes from "./EventItem.module.css";

type Event = {
  id: string;
  title: string;
  image: string;
  date: string;
  description: string;
};

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
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
