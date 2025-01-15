import syntax_logo2 from '@/assets/images/syntax_logo2.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template_icon.svg';
import bookmark from '@/assets/images/bookmark.svg';
import notification from '@/assets/images/notification.svg';


const TopIcons: React.FC = () => {

  return (
    <>
     <ul className="hidden md:flex gap-4 items-center ">
        <li>
          <img src={new_cv} alt="new cv" className='w-[3.01rem] aspect-square cursor-pointer ' />
        </li>
        <li>
          <img src={template} alt="template" className='w-[3.01rem] aspect-square cursor-pointer' />
        </li>
        <li>
          <img src={bookmark} alt="saved cv" className='w-[3.01rem] aspect-square cursor-pointer' />
        </li>
        <li>
          <img src={notification} alt="notification" className='w-[3.01rem] aspect-square cursor-pointer' />
        </li>
        <li>
          <img src={syntax_logo2} alt="syntax logo" className='w-[3.01rem] aspect-square cursor-pointer' />
        </li>
      </ul>
    </>
  );
};
export default TopIcons;