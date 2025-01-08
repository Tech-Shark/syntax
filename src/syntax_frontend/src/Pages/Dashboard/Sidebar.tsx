import syntax_logo from '@/assets/images/syntax_logo.svg';
import syntax_home from '@/assets/images/syntax_home.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template.svg';
import saved_cv from '@/assets/images/saved_cv.svg';
import notification from '@/assets/images/notification.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tooltipItems = [
  { src: syntax_logo, alt: "Syntax logo", label: "Syntax", size: "w-[3.34rem] h-[2.97rem]" },
  { src: syntax_home, alt: "Home icon", label: "Home", size: "w-[2.25rem] aspect-square" },
  { src: new_cv, alt: "New CV icon", label: "New CV", size: "w-[2.25rem] aspect-square" },
  { src: template, alt: "Template icon", label: "Templates", size: "w-[2.25rem] aspect-square" },
  { src: saved_cv, alt: "Saved CV icon", label: "Saved CVs", size: "w-[2.25rem] aspect-square" },
  { src: notification, alt: "Notification icon", label: "Notification", size: "w-[2.25rem] aspect-square" },
];

function Sidebar() {
  return (
    <aside className='bg-[#E1E0F3] w-[8.31rem] h-screen'>
      <ul className='flex flex-col items-center py-16 gap-8'>
        <TooltipProvider>
          {tooltipItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <img src={item.src} alt={item.alt} className={item.size} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </ul>
    </aside>
  );
}

export default Sidebar;