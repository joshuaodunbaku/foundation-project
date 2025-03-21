import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const NotifyUpcomingEvent = () => {
  useEffect(() => {
    toast.info(
      "📢 New Event: Support for Parents in Need! Click for details.",
      {
        position: "top-right",
        autoClose: 5000,
        onClick: () =>
          window.open(
            "https://www.eventbrite.com/e/support-for-parents-in-need-tickets-943741465127"
          ),
      }
    );
  }, []);

  return null; // This component only triggers a toast
};

export default NotifyUpcomingEvent;
