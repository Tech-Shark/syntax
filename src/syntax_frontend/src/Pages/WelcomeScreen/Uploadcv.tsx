import { useState } from "react";
import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import { FaPlus } from "react-icons/fa6";
import * as pdfjs from "pdfjs-dist";
import mammoth from "mammoth";
import "@/utils/pdfWorker";
import welcomeHeroBanner from "@/assets/images/welcomeHerobanner.svg";
import backward_arrow from "@/assets/images/backwardsArrow.svg"
 
const UploadCv: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cvLines, setCvLines] = useState<string[]>([]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      setIsLoading(true);
      setSelectedFile(file);

      try {
        if (file.type === "text/plain") {
          const text = await readTextFile(file);
          setCvLines(splitLines(text));
        } else if (file.type === "application/pdf") {
          const text = await extractPdfText(file);
          setCvLines(splitLines(text));
        } else if (
          file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const text = await extractDocxText(file);
          setCvLines(splitLines(text));
        } else {
          alert("Unsupported file type. Please upload .txt, .pdf, or .docx files.");
        }
      } catch (error) {
        console.error("Error reading file:", error);
        alert("An error occurred while reading the file.");
      }

      setIsLoading(false);
    }
  };

  const readTextFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsText(file);
    });
  };

  const extractPdfText = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

    const totalPages = pdf.numPages;
    const pageTexts = [];

    for (let i = 0; i < totalPages; i++) {
      const page = await pdf.getPage(i + 1);
      const content = await page.getTextContent();
      const text = content.items.map((item: any) => item.str).join(" ");
      pageTexts.push(text);
    }

    return pageTexts.join("\n");
  };

  const extractDocxText = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    return result.value;
  };

  const splitLines = (text: string): string[] => {
    return text.split("\n").map((line) => line.trim()).filter((line) => line.length > 0);
  };

  return (
    <section>
      <WelcomeHeader leftLabel="Back" >
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
                <p className="font-medium">Uploading CV...</p>
              ) : (
                <FaPlus className="w-[6.85094rem] h-[6.85094rem] sm:h-[9.2rem] sm:w-[9.2rem]" />
              )}
            </label>
            <input
              id="cvInput"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
            />
            <p className="text-[#82859D] text-center text-sm font-normal leading-normal">
              Supported file types: .PDF, .DOCX, .TXT.
            </p>
            {selectedFile && !isLoading && (
              <p className="text-black text-center text-base font-normal leading-normal">
                {selectedFile.name}
              </p>
            )}
            </div>
            <Link to="/personal-information" className="bg-black py-[0.41rem] px-[1.03rem] rounded-full gap-4 hover:gap-8 transition-transform duration-300 hover:translate-x-2 text-white flex items-center justify-center text-[0.9rem] sm:text-[1.3rem]" > 
              Upload CV
              <div className="bg-white h-[1.9rem] w-[1.9rem] rounded-full flex items-center justify-center"><img src={backward_arrow} alt="upload cv" className="rotate-[-128deg]"/></div>
             </Link>
              
            <div>
              <img src={welcomeHeroBanner} alt="welcome hero banner"/>
            </div>
        </div>
        {/* <div className="p-4">
          {cvLines.length > 0 ? (
            <>
              <h3 className="text-lg font-semibold mb-2">Extracted CV Content:</h3>
              <ul className="list-disc pl-6">
                {cvLines.map((line: string, idx: number) => (
                  <li key={idx} className="text-sm mb-1">
                    {line}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-500"></p>
          )}
        </div> */}
      </div>
      </WelcomeHeader>
    </section>
  );
};

export default UploadCv;
