import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <div>EventDetailPage</div>
      <p>Event ID: {params.eventId}</p>
    </>
  );
};

export default EventDetailPage;
