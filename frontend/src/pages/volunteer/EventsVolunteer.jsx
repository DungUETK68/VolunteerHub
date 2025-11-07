import Sidebar from "../../components/common/Sidebar";
import EventList from "../../components/events/EventList";
import '../../assets/styles/events.css'

export default function EventsVolunteer() {
  return (
    <div className="EventsVolunteer-container">
      <Sidebar />
      <EventList />
    </div>
  );
}
