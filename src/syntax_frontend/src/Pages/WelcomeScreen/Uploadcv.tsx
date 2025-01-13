import { useState } from "react";
import pdfToText from "react-pdftotext";
import { useDispatch } from "react-redux";
import { setPersonalInformation } from "@/redux/cvDataSlice";
import { parseCvText } from "@/utils/cvParser";
import Loading from "@/components/loader";
import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import { FaPlus } from "react-icons/fa6";
import welcomeHeroBanner from "@/assets/images/welcomeHerobanner.svg";
import backward_arrow from "@/assets/images/backwardsArrow.svg";


const UploadCv: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const dispatch = useDispatch();

   async function extractText(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setIsFileSelected(true); // Enable the upload button
      setFileName(file.name); // Set the file name
      setIsLoading(true); // Start loading
      try {
        const text = await pdfToText(file);
        console.log(text);
        // Parse the extracted text
        const parsedData = parseCvText(text);
      // Dispatch parsed data to Redux
      dispatch(setPersonalInformation(parsedData));
      } catch (error) {
        console.error("Failed to extract text from pdf", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    } else {
      setIsFileSelected(false); // Disable the upload button
      setFileName(null);
      console.error("No file selected");
    }
  }


  return (
    <section>
      <WelcomeHeader leftLabel="Back">
        <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-20">
            <WelcomeDescription
              heading="Upload CV"
              subheading="Drop your file here or browse to upload. We'll analyze it and provide suggestions to improve."
            />
            <div className="flex flex-col gap-5 items-center justify-center">
              <label
                htmlFor="cvInput"
                className="h-[9.375rem] w-[9.375rem] sm:h-[15rem] sm:w-[15rem] flex items-center justify-center py-3 px-[1.26rem] gap-[0.36056rem] border-[5.769px] border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer"
              >
                {isLoading ? (
                  <Loading
                    isLoading={isLoading}
                    className="animate-pulse md:w-[6rem] md:h-[6rem]"
                    altText="Loading your file"
                  />
                ) : (
                  <FaPlus className="w-[6.85094rem] h-[6.85094rem] sm:h-[9.2rem] sm:w-[9.2rem]" />
                )}
              </label>
              <input
                id="cvInput"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
                onChange={extractText}
              />
              <p className="text-[#82859D] text-center text-sm font-normal leading-normal">
                 {fileName ? (
                  <>
                    Uploaded File: <strong>{fileName}</strong>
                  </>
                ) : (
                  "Supported file types: .PDF, .DOCX, .TXT."
                )}
              </p>
            </div>
            <Link
              to={isFileSelected ? "/personal-information" : "#"}
              className={`bg-black py-[0.41rem] px-[1.03rem] rounded-full gap-4 text-white flex items-center justify-center text-[0.9rem] sm:text-[1.3rem] ${
                isFileSelected
                  ? "hover:gap-8 transition-transform duration-300 hover:translate-x-2 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Upload CV
              <div className="bg-white h-[1.9rem] w-[1.9rem] rounded-full flex items-center justify-center">
                <img
                  src={backward_arrow}
                  alt="upload cv"
                  className="rotate-[-128deg]"
                />
              </div>
            </Link>

            <div>
              <img src={welcomeHeroBanner} alt="welcome hero banner" />
            </div>
          </div>
        </div>
      </WelcomeHeader>
    </section>
  );
};

export default UploadCv;
