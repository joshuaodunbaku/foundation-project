import { useState } from "react";
import { FaBell } from "react-icons/fa";

const EventNotifications = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const events = [
    {
      title: "Support for Parents in Need",
      date: "   ",
      link: "https://www.eventbrite.com/e/support-for-parents-in-need-tickets-943741465127",
    },
    { title: "Mental Health Workshop", date: "Next Sunday, 2 PM", link: "#" },
  ];

  return (
    <div className="position-relative">
      <FaBell
        size={30}
        className="text-black"
        onClick={() => setShowDropdown(!showDropdown)}
        style={{ cursor: "pointer" }}
      />
      {showDropdown && (
        <div
          className="dropdown-menu show position-absolute"
          style={{ right: 0 }}
        >
          {events.map((event, index) => (
            <a
              className="dropdown-item"
              href={event.link}
              target="_blank"
              key={index}
            >
              📢 <strong>{event.title}</strong> - {event.date}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventNotifications;
