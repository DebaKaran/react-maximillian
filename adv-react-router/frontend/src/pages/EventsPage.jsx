import React from "react";
import { Link } from "react-router-dom";

const EVENTS_DUMMY = [
  {
    id: "e1",
    title: "Some Event",
  },
  {
    id: "e2",
    title: "Another Event",
  },
];

const EventsPage = () => {
  const renderEvents = (
    <ul>
      {EVENTS_DUMMY.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </ul>
  );
  return <>Event Page {renderEvents}</>;
};

export default EventsPage;
