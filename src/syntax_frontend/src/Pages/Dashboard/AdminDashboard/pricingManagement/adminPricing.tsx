import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { updatePrice, updateSuffix, revertPrices } from "@/redux/pricingSlice";
import star_icon from "@/assets/images/star_icon.svg";
import pentagon2_icon from "@/assets/images/pentagon2_icon.svg";
import hexagon_icon from "@/assets/images/hexagon_icon.svg";
import arrow1 from "@/assets/images/arrow1.svg";
import arrow2 from "@/assets/images/arrow2.svg";

const AdminPricing: React.FC = () => {

 const dispatch = useDispatch<AppDispatch>();
  const pricingData = useSelector((state: RootState) => state.pricing);

  const handlePriceChange = (card: keyof typeof pricingData, value: string) => {
    const price = parseFloat(value) || 0;
    dispatch(updatePrice({ card, price }));
  };

  const handleSuffixChange = (card: keyof typeof pricingData, value: string) => {
    dispatch(updateSuffix({ card, suffix: value }));
  };

  const handleSaveChanges = () => {
    alert("Prices and suffixes saved successfully!");
    console.log("Updated pricing data:", pricingData);
  };

  const handleRevertChanges = () => {
    dispatch(revertPrices());
    alert("Prices reverted to default!");
  };

  return (
    <>
      {/* Pricing Cards */}
      <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row-reverse items-center justify-center gap-[5.1rem]">
        {/* Card 1 */}
        <div className="p-4 w-full md:w-[20.4rem] h-auto lg:h-auto shadow-xl rounded-[0.5rem] flex flex-col gap-6 mt-8 group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black">
          <div className="w-full min-h-[7.2rem] bg-black rounded-lg" />
          <div>
            <div className="flex justify-between pr-2 items-center">
              <div className="flex items-center gap-2">
                 <span className="flex gap-0 font-semibold text-[1.5rem] leading-[2.5rem]">
                ₦
                <input
                  type="text"
                  value={pricingData.card1.currentPrice}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handlePriceChange("card1", e.target.value)
                  }
                  className="w-[5.5rem] bg-transparent border-b border-gray-400 focus:outline-none text-center"
                  />
                  /
                <input
                  type="text"
                  value={pricingData.card1.suffix}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSuffixChange("card1", e.target.value)
                  }
                  className="bg-transparent border-b border-gray-400 focus:outline-none ml-2 w-[5.5rem]"
                />
              </span>
              </div>
              <img
                src={star_icon}
                alt="star icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 font-normal text-base leading-normal">
              <li>Pay as you go</li>
              <li>Basic CV templates with ATS compatibility</li>
              <li>Limited AI-powered CV scoring and optimization tips</li>
              <li>Basic token earnings per action (e.g., CV uploads, ATS analysis)</li>
              <li>Access to standard interactive CV suggestions</li>
              <li>Limited country-specific templates</li>
            </ul>
          </div>
        </div>

        {/* Card 2 */}
        <div className="px-4 pt-4 h-auto lg:h-auto shadow-xl w-[20.4rem] rounded-[0.5rem] flex flex-col gap-6 bg-black text-white group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black">
          <div className="w-full min-h-[7.2rem] bg-[#E1E0F3] rounded-lg" />
          <div>
            <div className="flex justify-between pr-2 items-center">
              <div className="flex justify-between items-center">
                <span className="flex gap-0 font-semibold text-[1.5rem] leading-[2.5rem]">
                ₦
                <input
                  type="number"
                  value={pricingData.card2.currentPrice}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handlePriceChange("card2", e.target.value)
                  }
                  className="w-[6rem] bg-transparent border-b border-gray-400 focus:outline-none text-center"
                  />
                  /
                <input
                  type="text"
                  value={pricingData.card2.suffix}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSuffixChange("card2", e.target.value)
                  }
                 className="bg-transparent border-b border-gray-400 focus:outline-none ml-2 w-[5rem]"
                />
              </span>
              </div>
              <img
                src={pentagon2_icon}
                alt="pentagon icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 font-normal text-base leading-normal">
              <li>All Free Plan features, plus:</li>
              <li>Access to advanced CV templates and layout options</li>
              <li>Unlimited AI recommendations and ATS scoring</li>
              <li>Higher token earnings for each interaction</li>
              <li>Full access to drag-and-drop CV builder (desktop-only)</li>
              <li>In-depth country-specific customization</li>
              <li>Priority support and in-app notifications</li>
            </ul>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-4 h-auto lg:h-auto shadow-xl w-[20.4rem] rounded-[0.5rem] bg-[#E1E0F3] text-black flex flex-col gap-8 mt-16 group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black">
          <div className="w-full min-h-[7.2rem] bg-black rounded-lg" />
          <div>
            <div className="flex justify-between items-center">
              <span className="flex gap-0 font-semibold text-[1.5rem] leading-[2.5rem]">
                ₦
                <input
                  type="number"
                  value={pricingData.card3.currentPrice}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handlePriceChange("card3", e.target.value)
                  }
                  className="w-[6rem] bg-transparent border-b border-gray-400 focus:outline-none text-center"
                />
                /
                <input
                  type="text"
                  value={pricingData.card3.suffix}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSuffixChange("card3", e.target.value)
                  }
                  className="bg-transparent border-b border-gray-400 focus:outline-none ml-2 w-[5rem]"
                />
              </span>
              <img
                src={hexagon_icon}
                alt="hexagon icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 pb-0 font-normal text-base leading-normal">
              <li>All Premium Plan features, plus:</li>
              <li>
                Exclusive templates tailored to specific industries (e.g., tech,
                finance, etc.)
              </li>
              <li>Personalized CV feedback from AI for targeted roles</li>
              <li>Enhanced token rewards for maximum earning</li>
              <li>Access to a career resources library and tutorials</li>
              <li>Priority feature updates and new template releases</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center mt-[5.12rem] mb-10">
        <button  onClick={handleSaveChanges} className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl">
          <p className="text-white text-center font-semibold leading-7 text-[0.928rem] lg:text-[1.2rem]">Save Changes</p>
          <img src={arrow1} alt="Upload CV" className="w-[1.92rem] h-[1.92rem]"/>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] hover:gap-8 transition-all duration-300"  onClick={handleRevertChanges}>
          <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Revert back to default</p>
          <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full"><img src={arrow2} alt="Build new cv" /></div>
        </button>
      </div>
    </>
  );
};

export default AdminPricing;
