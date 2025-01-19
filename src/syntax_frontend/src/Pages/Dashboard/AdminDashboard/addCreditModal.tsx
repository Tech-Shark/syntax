import { FaMinus } from "react-icons/fa";
import admin_cancel_icon from '@/assets/images/admin_cancel_icon.svg';
// import copy_icon from '@/assets/images/copy_icon.svg'
import build_icon from '@/assets/images/build_icon.svg'
import plus_icon from '@/assets/images/plus_icon.svg'
import light_filter_icon from '@/assets/images/light_filter_icon.svg';


interface UserModalProps {
  isModalVisible: boolean;
  isClosing: boolean;
  selectedUser: any;
  onClose: () => void;
  onCopy: (text: string) => void;
}

const AddCreditModal: React.FC<UserModalProps> = ({
  isModalVisible,
  isClosing,
  selectedUser,
  onClose,
}) => {
  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`lg:w-[46.44rem] bg-white rounded-[5px] py-[1.25rem] pb-8 px-[2.5rem] border-[3px] border-black flex flex-col z-50 transform transition-transform duration-500 ease-in-out ${
          isClosing ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <div className="flex justify-between">
          <h5 className="font-bold text-[1.5rem] leading-[1.89rem]">
            Distribute Credits Across Accounts
          </h5>
          <img
            src={admin_cancel_icon}
            alt="cancel icon"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="flex items-center justify-center gap-1 bg-[#1C1D24] text-white w-[8.19rem] mt-[1.88rem] h-10">
          <h5 className="text-center text-[0.94rem] font-semibold leading-normal">All Users</h5>
          <img src={light_filter_icon} alt="light filter icon" />
        </div>
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-10 mt-8 ">
        </div>

        <div className="bg-[#E1E0F3] py-[1.61rem] flex items-center justify-center w-2/3 self-center mt-12 flex-col gap-[1.1rem]">
          <div className="flex flex-col gap-[0.66rem]">
            <h5 className="text-[1.48rem] font-bold leading-[1.8rem]">Credits to Add</h5>
          <p className="text-base font-normal leading-[1.2rem]">Enter the number of credits</p>
          </div>
          <div className="flex gap-14 ">
             <p className="text-black text-[2.37rem] font-bold leading-[2.8rem]">
              {selectedUser?.credits}
            </p>
          <div className="flex gap-[1.27rem]">
            <div className="h-[2.4rem] flex items-center justify-center bg-white rounded-full p-[0.6rem]">
              <img src={plus_icon} alt="plus icon" />
            </div>
            <span className="h-[2.4rem] flex items-center justify-center bg-white rounded-full p-[0.6rem]">
              <FaMinus />
            </span>
          </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]">
            <h5 className="text-white font-semibold text-[0.93rem] leading-[1.73rem]">
              Done
            </h5>
            <img
              src={build_icon}
              alt="build icon"
              className="w-[3.11rem] h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCreditModal;
