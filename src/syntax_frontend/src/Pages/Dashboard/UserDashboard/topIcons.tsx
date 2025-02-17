import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pricing from '@/assets/images/pricing.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template_icon.svg';
import bookmark from '@/assets/images/bookmark.svg';
import notification from '@/assets/images/notification.svg';

// notification side bar 
import NotificationSideBar from "./notificationsidebar";

const TopIcons: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  const handleNavigation = (path: string) => {
    navigate(path); // Navigate to the given path
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  return (
    <>
      <ul className="hidden md:flex gap-4 items-center">
        <li onClick={() => handleNavigation("/welcome")}>
          <img src={new_cv} alt="new cv" className="w-[3.01rem] aspect-square cursor-pointer" />
        </li>
        <li onClick={() => handleNavigation("/cv-templates")}>
          <img src={template} alt="template" className="w-[3.01rem] aspect-square cursor-pointer" />
        </li>
        <li onClick={() => handleNavigation("/user-dashboard")}>
          <img src={bookmark} alt="saved cv" className="w-[3.01rem] aspect-square cursor-pointer" />
        </li>
        <li onClick={toggleSidebar}>
          <img src={notification} alt="notification" className="w-[3.01rem] aspect-square cursor-pointer" />
        </li>
        <li onClick={() => handleNavigation("/pricing")}>
          <img src={Pricing} alt="pricing" className="w-[3.01rem] aspect-square cursor-pointer" />
        </li>
      </ul>

      {/* Sidebar */}
      {isSidebarOpen && (
        <NotificationSideBar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
      )}
    </>
  );
};

export default TopIcons;
