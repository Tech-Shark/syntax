import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { PaystackButton } from "react-paystack";
import star_icon from "../../assets/images/star_icon.svg";
import pentagon2_icon from "../../assets/images/pentagon2_icon.svg";
import hexagon_icon from "../../assets/images/hexagon_icon.svg";


const PricingComponent = () => {
  const pricingData = useSelector((state: RootState) => state.pricing);
  console.log(pricingData)
  const publicKey = "pk_test_3918084b8c7ab0d3ab7c5c1c3edeaab1c592a723";
  const [selectedPlan, setSelectedPlan] = useState({
    amount: pricingData.card1.currentPrice,
    label: "Pay As You Go",
  });
  const [activeCard, setActiveCard] = useState<string | null>(null); // Tracks the currently active card

  const handleSelectPlan = (amount: number, label: string, card: string) => {
    setSelectedPlan({ amount, label });
    setActiveCard(card); // Set the active card on selection
  };

  const paystackConfig = {
    email: "gbenmoese788@gmail.com",
    amount: selectedPlan.amount * 100,
    publicKey,
    currency: "NGN", // Nigerian Naira
    reference: `${Math.floor(Math.random() * 1000000000 + 1)}`,
  };

  const onSuccess = (reference: any) => {
    console.log("Payment successful, reference:", reference);
    alert(`Payment for ${selectedPlan.label} was successful!`);
  };

  const onClose = () => {
    console.log("Payment closed");
  };


  return (
    <>
      <div className="mt-8 lg:mt-16 flex flex-col lg:flex-row-reverse items-center justify-center gap-[5.1rem] mb-10">
        {/* Card 1 */}
        <div
          className={`p-4 w-full md:w-2/3 lg:w-[20.4rem] h-auto lg:h-auto shadow-xl rounded-[0.5rem] flex flex-col gap-6 mt-8 group cursor-pointer 
          ${
            selectedPlan.label === "Pay As You Go"
              ? "shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] border-2 border-black"
              : "hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black"
          }`}
          onClick={() => handleSelectPlan(pricingData.card1.currentPrice, "Pay As You Go", "card1")}
        >
          <div className="w-full min-h-[7.2rem] bg-black rounded-lg" />
          <div>
            <div className="flex justify-between pr-2">
              <h5 className="font-semibold text-[1.8rem] md:text-[1.9rem] leading-[2.5rem]">
                ₦{pricingData.card1.currentPrice}/{pricingData.card1.suffix}
              </h5>
              <img
                src={star_icon}
                alt="star icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 font-normal text-[1.1rem] lg:text-base leading-normal">
              <li>Pay as you go</li>
              <li>Basic CV templates with ATS compatibility</li>
              <li>Limited AI-powered CV scoring and optimization tips</li>
              <li>Basic token earnings per action (e.g., CV uploads, ATS analysis)</li>
              <li>Access to standard interactive CV suggestions</li>
              <li>Limited country-specific templates</li>
            </ul>
          </div>
          {activeCard === "card1" && (
            <div className="flex items-center justify-center mt-2">
              <PaystackButton
                {...paystackConfig}
                className="bg-black text-white px-6 py-2 rounded-md cursor-pointer"
                text={`Pay for ${selectedPlan.label}`}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          )}
        </div>

        {/* Card 2 (PREMIUM) */}
        <div
          className={`px-4 pt-4 h-auto lg:h-auto shadow-xl w-full md:w-2/3 lg:w-[20.4rem] rounded-[0.5rem] flex flex-col gap-6 bg-black text-white group cursor-pointer pb-4
          ${
            selectedPlan.label === "Premium Monthly"
              ? "shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] border-2 border-black"
              : "hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black"
          }`}
          onClick={() => handleSelectPlan(pricingData.card2.currentPrice, "Premium Monthly", "card2")}
        >
          <div className="w-full min-h-[7.2rem] bg-[#E1E0F3] rounded-lg" />
          <div>
            <div className="flex justify-between pr-2">
              <h5 className="font-semibold text-[1.9rem] leading-[2.5rem]">
               ₦{pricingData.card2.currentPrice}/{pricingData.card2.suffix}
              </h5>
              <img
                src={pentagon2_icon}
                alt="pentagon icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 font-normal lg:text-base text-[1.1rem] leading-normal">
              <li>All Free Plan features, plus:</li>
              <li>Access to advanced CV templates and layout options</li>
              <li>Unlimited AI recommendations and ATS scoring</li>
              <li>Higher token earnings for each interaction</li>
              <li>Full access to drag-and-drop CV builder (desktop-only)</li>
              <li>In-depth country-specific customization</li>
              <li>Priority support and in-app notifications</li>
            </ul>
          </div>
          {activeCard === "card2" && (
            <div className="flex items-center justify-center mt-4">
              <PaystackButton
                {...paystackConfig}
                className="bg-white text-black px-6 py-2 rounded-md cursor-pointer"
                text={`Pay for ${selectedPlan.label}`}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          )}
        </div>

        {/* Card 3 */}
        <div
          className={`p-4 h-auto lg:h-auto shadow-xl w-full md:w-2/3 lg:w-[20.4rem] rounded-[0.5rem] bg-[#E1E0F3] text-black flex flex-col gap-8 mt-6 lg-mt-16 group cursor-pointer 
          ${
            selectedPlan.label === "Premium Annual"
              ? "shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] border-2 border-black"
              : "hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black"
          }`}
          onClick={() => handleSelectPlan(pricingData.card3.currentPrice, "Premium Annual", "card3")}
        >
          <div className="w-full min-h-[7.2rem] bg-black rounded-lg" />
          <div>
            <div className="flex justify-between pr-2">
              <h5 className="font-semibold text-[1.8rem] leading-[2.5rem]">
                ₦{pricingData.card3.currentPrice}/{pricingData.card3.suffix}
              </h5>
              <img
                src={hexagon_icon}
                alt="hexagon icon"
                className="group-hover:rotate-180 transition-all ease-in-out duration-300"
              />
            </div>
            <ul className="list-disc p-8 pb-0 font-normal text-[1.1rem] lg:text-base leading-normal">
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
          {activeCard === "card3" && (
            <div className="flex items-center justify-center mt-4">
              <PaystackButton
                {...paystackConfig}
                className="bg-black text-white px-6 py-2 rounded-md cursor-pointer"
                text={`Pay for ${selectedPlan.label}`}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
