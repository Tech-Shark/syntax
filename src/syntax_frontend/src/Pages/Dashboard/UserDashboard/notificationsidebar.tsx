import { useState } from "react";
import notification_close_icon from "@/assets/images/notification_close_icon.svg";
import drop_down from "@/assets/images/drop_down_arrow.svg";
import close from "@/assets/images/close_icon.svg";

interface NotificationSideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Notification {
  id: string;
  title: string;
  description: string;
}

interface Section {
  title: string;
  notifications: Notification[];
  bgColor: string; // Background color for notification content
  closeBgColor: string; // Background color for the close icon
}

const NotificationSideBar: React.FC<NotificationSideBarProps> = ({
  isOpen,
  onClose,
}) => {
  const [sections, setSections] = useState<Section[]>([
    {
      title: "Alerts",
      notifications: [
        {
          id: "1",
          title: "Credits Running Low",
          description:
            "Your credits are running out. Top up now to \n continue using premium features!",
        },
        {
          id: "2",
          title: "Payment Failures",
          description:
            "We couldn’t process your payment. Please \n update your billing information.",
        },
      ],
      bgColor: "bg-[rgba(251,55,72,0.10)]",
      closeBgColor: "bg-[rgba(251,55,72,0.30)]",
    },
    {
      title: "Updates",
      notifications: [
        {
          id: "3",
          title: "New Features Added",
          description: "Check out the new features available \n this month.",
        },
        {
          id: "4",
          title: "ATS Support",
          description: "We now support ATS-friendly resumes. \n Update your resume now!",
        },
      ],
      bgColor: "bg-[rgba(179,178,251,0.10)]",
      closeBgColor: "bg-[rgba(179,178,251,0.30)]",
    },
    {
      title: "Promotions",
      notifications: [
        {
          id: "5",
          title: "Limited Time Offer",
          description: "Upgrade your plan now and save 20%!",
        },
        {
          id: "6",
          title: "Special Promotion",
          description: "Upgrade your plan now and save 80%! Offer ends soon.",
        },
      ],
      bgColor: "bg-[rgba(132,235,180,0.10)]",
      closeBgColor: "bg-[rgba(132,235,180,0.30)]",
    },
  ]);

  const [openSections, setOpenSections] = useState<string[]>(["Alerts"]);

  if (!isOpen) return null;

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="backdrop-filter backdrop-blur-sm bg-black bg-opacity-30 fixed top-0 left-0 w-full h-full z-30">
      <div className="fixed top-0 right-0 w-auto h-full max-h-full bg-[#E1E0F3] text-black shadow-lg z-50 pt-[1.06rem] px-[0.9rem] pb-[1rem] overflow-y-auto">
        {/* Top Part */}
        <div className="flex items-center justify-between">
          <h2 className="text-black text-2xl font-bold leading-normal">
            Notifications
          </h2>
          <img src={notification_close_icon} alt="close" onClick={onClose} />
        </div>

        {/* Notification Tabs */}
        <ul className="flex justify-between items-center mt-[2.9rem] gap-[1.2rem]">
          {sections.map((section) => (
            <li
              key={section.title}
              className={`cursor-pointer pb-2 ${
                openSections.includes(section.title)
                  ? "border-b-2 border-blue-500 font-bold"
                  : ""
              }`}
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
            </li>
          ))}
          <button
            onClick={() =>
              setSections((prev) =>
                prev.map((section) => ({ ...section, notifications: [] }))
              )
            }
            className="flex items-center justify-center px-[0.5rem] py-[0.19rem] bg-[#3D3F4E] text-white rounded-[1.13rem] ml-2"
          >
            Clear All
          </button>
        </ul>

        {/* Notification Sections */}
        <div className="flex flex-col gap-[1.62rem] mt-[2.1rem]">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.title);
            return (
              <section key={section.title} className="flex flex-col gap-[0.95rem]">
                {/* Section Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.title)}
                >
                  <h5 className="text-base font-semibold leading-normal">
                    {section.title}
                  </h5>
                  <img
                    src={drop_down}
                    alt="drop down"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Section Notifications */}
                {isOpen && (
                  <div className="flex flex-col gap-[0.62rem]">
                    {section.notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="relative flex flex-col gap-[0.62rem]"
                      >
                        {/* Close Icon */}
                        <div
                          className={`h-4 w-4 flex justify-center items-center ${section.closeBgColor} rounded-full absolute -left-2 -top-1 cursor-pointer`}
                          onClick={() =>
                            setSections((prevSections) =>
                              prevSections.map((s) =>
                                s.title === section.title
                                  ? {
                                      ...s,
                                      notifications: s.notifications.filter(
                                        (n) => n.id !== notification.id
                                      ),
                                    }
                                  : s
                              )
                            )
                          }
                        >
                          <img src={close} alt="close" />
                        </div>

                        {/* Notification Content */}
                        <div
                          className={`flex flex-col px-[0.63rem] py-[0.44rem] ${section.bgColor} rounded-[0.63rem]`}
                        >
                          <h5 className="font-semibold leading-normal text-base">
                            {notification.title}
                          </h5>
                          <p className="font-normal text-[0.88rem] leading-normal text-left whitespace-pre-line">
                            {notification.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NotificationSideBar;
