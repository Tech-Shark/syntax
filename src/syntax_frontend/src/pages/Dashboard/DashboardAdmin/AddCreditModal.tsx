import admin_cancel_icon from "../../../assets/images/admin_cancel_icon.svg";
import build_icon from "../../../assets/images/build_icon.svg";
import copy_icon from "../../../assets/images/copy_icon.svg";

interface IAddCreditModalProp {
  setIsClosing: (data: boolean) => void;
  setIsModalVisible: (data: boolean) => void;
  isClosing: boolean;
}

const AddCreditModal = ({
  setIsClosing,
  setIsModalVisible,
  isClosing,
}: IAddCreditModalProp) => {
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsModalVisible(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background Blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`lg:w-[46.44rem] bg-white rounded-[5px] py-[1.25rem] pb-8 px-[2.5rem] border-[3px] border-black flex flex-col z-50 transform transition-transform duration-300 ease-in-out ${
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
            onClick={handleClose}
          />
        </div>
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-10 mt-8">
          <div className="relative flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              User ID
            </label>
            <input
              type="text"
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
            />
            <img
              src={copy_icon}
              alt="copy icon"
              className="w-[1.5rem] aspect-square absolute right-4 bottom-3"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              John Doe
            </label>
            <input
              type="text"
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              Email
            </label>
            <input
              type="email"
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              Plan
            </label>
            <input
              type="text"
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
            />
          </div>
          <div className="flex flex-col gap-2 h-[6.63rem] bg-[#E1E0F3] rounded-[7.75px]"></div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-[1rem] leading-[1.73rem]">
              Templates Created
            </label>
            <input
              type="text"
              className="bg-[#E1E0F3] h-[2.91rem] rounded-[7.75px]"
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

export default AddCreditModal;
