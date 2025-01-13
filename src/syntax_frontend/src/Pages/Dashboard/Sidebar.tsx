import { useState } from "react";
import { useNavigate } from "react-router-dom";
import syntax_logo from "@/assets/images/syntax_logo.svg";
import syntax_home from "@/assets/images/syntax_home.svg";
import new_cv from "@/assets/images/new_cv.svg";
import template from "@/assets/images/template_icon.svg";
import saved_cv from "@/assets/images/bookmark.svg";
import notification from "@/assets/images/notification.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tooltipItems = [
  {
    src: syntax_logo,
    alt: "Syntax logo",
    label: "Syntax",
    size: "w-[3.34rem] h-[2.97rem]",
    action: null, // No action for logo
  },
  {
    src: syntax_home,
    alt: "Home icon",
    label: "Home",
    size: "w-[2.25rem] aspect-square",
    action: "/", // Path to navigate to
  },
  {
    src: new_cv,
    alt: "New CV icon",
    label: "New CV",
    size: "w-[2.25rem] aspect-square",
    action: "/welcome", // Path to navigate to
  },
  {
    src: template,
    alt: "Template icon",
    label: "Templates",
    size: "w-[2.25rem] aspect-square",
    action: "/cv-templates", // Path to navigate to
  },
  {
    src: saved_cv,
    alt: "Saved CV icon",
    label: "Saved CVs",
    size: "w-[2.25rem] aspect-square",
    action: "/user-dashboard", // Path to navigate to
  },
  {
    src: notification,
    alt: "Notification icon",
    label: "Notification",
    size: "w-[2.25rem] aspect-square",
    action: null, // Custom action for toggling notification sidebar
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleItemClick = (action: string | null) => {
    if (!action) return; // No action defined
    if (action === "toggle-notification") {
      setNotificationOpen((prev) => !prev); // Toggle notification sidebar
    } else {
      navigate(action); // Navigate to the defined path
    }
  };

  return (
    <aside className="bg-[#E1E0F3] w-[8.31rem] h-screen relative">
      <ul className="flex flex-col items-center py-16 gap-8">
        <TooltipProvider>
          {tooltipItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger onClick={() => handleItemClick(item.action)}>
                <img src={item.src} alt={item.alt} className={item.size} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </ul>

      {/* Notification Sidebar */}
      {isNotificationOpen && (
        <div className="absolute top-0 right-0 bg-white w-80 h-screen shadow-lg p-4">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <p>No new notifications</p>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
