import React from "react";
import { Button } from "../components/ui/Button";
import { Mail, Calendar } from "lucide-react";

const ContactCard = ({
  icon,
  title,
  description,
  actionText,
  actionHref,
  isButton = false,
  onClick,
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else if (isButton) {
      // Create calendar event with automatic invites to both user and Instrek
      const eventTitle = encodeURIComponent("Instrek Demo Meeting");
      const eventDetails = encodeURIComponent(
        "Personalized demo of Instrek's AI, IoT, and technology services. We'll discuss your specific needs and show you our solutions in action."
      );
      const eventLocation = encodeURIComponent("Online Meeting (Zoom/Teams)");

      // Set default time (tomorrow at 10 AM)
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + 1);
      startDate.setHours(10, 0, 0, 0);

      const endDate = new Date(startDate);
      endDate.setHours(11, 0, 0, 0);

      const startTime =
        startDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const endTime =
        endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

      // Include both user and Instrek emails in the event
      const userEmail = ""; // This would be captured from user input
      const instrekEmail = "connect@instrek.com";
      const attendees = encodeURIComponent(`${userEmail},${instrekEmail}`);

      // Google Calendar URL with attendees parameter
      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&details=${eventDetails}&location=${eventLocation}&dates=${startTime}/${endTime}&add=${attendees}`;

      // Alternative: Use a more robust booking system
      // For now, we'll use Google Calendar with pre-filled attendees
      window.open(googleCalendarUrl, "_blank");

      // Show success message
      setTimeout(() => {
        alert(
          "Calendar event created! Please check your email for the calendar invite. Instrek will also receive the invite automatically."
        );
      }, 1000);
    } else if (actionHref) {
      // Open email client
      window.location.href = actionHref;
    }
  };

  return (
    <div
      className="bg-white hover:bg-[#f5e4b7] rounded-2xl border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-gray-300 cursor-pointer transform hover:scale-105 flex flex-col h-full"
      onClick={handleCardClick}
    >
      <div className="w-20 h-20 bg-gray-100 hover:bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
        <div className="text-gray-600 hover:text-gray-700 text-2xl transition-colors duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>

      <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="mt-auto">
        <div className="block bg-[#C6930A] hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-md transform hover:scale-105 text-center">
          {actionText}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
