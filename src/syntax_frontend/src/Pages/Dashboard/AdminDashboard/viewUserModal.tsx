import { FaMinus } from "react-icons/fa";
import admin_cancel_icon from '@/assets/images/admin_cancel_icon.svg';
import copy_icon from '@/assets/images/copy_icon.svg'
import build_icon from '@/assets/images/build_icon.svg'
import plus_icon from '@/assets/images/plus_icon.svg'

interface UserModalProps {
  isModalVisible: boolean;
  isClosing: boolean;
  selectedUser: any;
  onClose: () => void;
  onCopy: (text: string) => void;
}

const UserModal: React.FC<UserModalProps> = ({
  isModalVisible,
  isClosing,
  selectedUser,
  onClose,
  onCopy,
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
        <div className="flex justify-between md:pl-6">
          <h5 className="font-bold text-[1.5rem] leading-[1.89rem]">
            User Details
          </h5>
          <img
            src={admin_cancel_icon}
            alt="cancel icon"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-10 mt-8">
          <div className="relative flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">User ID</label>
            <input
              type="text"
              value={selectedUser?.userId || ""}
              readOnly
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[0.97rem]"
            />
            <img
              src={copy_icon}
              alt="copy icon"
              className="w-[1.5rem] aspect-square absolute right-4 bottom-3 cursor-pointer"
              onClick={() => onCopy(selectedUser?.userId)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">Name</label>
            <input
              type="text"
              value={selectedUser?.name || ""}
              readOnly
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[0.97rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">Email</label>
            <input
              type="email"
              value={selectedUser?.email || ""}
              readOnly
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[0.97rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">Plan</label>
            <input
              type="text"
              value={selectedUser?.plan || ""}
              readOnly
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[0.97rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              Credits Remaining
            </label>
            <div className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[2.88rem] py-[1.9rem] md:h-28 flex items-center justify-center">
              <div className="flex gap-6 items-center justify-center">
                <p className="text-black text-[1.15rem]">
                  {selectedUser?.credits}
                </p>
                <div className="h-7 flex items-center justify-center bg-white rounded-full p-[0.43rem]">
                  <img src={plus_icon} alt="plus icon" />
                </div>
                <span className="h-7 flex items-center justify-center bg-white rounded-full p-[0.43rem]">
                  <FaMinus />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              Templates Created
            </label>
            <input
              type="text"
              value={selectedUser?.templatesCreated || ""}
              readOnly
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px] px-[0.97rem]"
            />
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

export default UserModal;
