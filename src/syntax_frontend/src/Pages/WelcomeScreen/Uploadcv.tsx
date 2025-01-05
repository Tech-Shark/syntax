import React, { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import { FaPlus } from "react-icons/fa6";
import * as pdfjs from "pdfjs-dist";
import mammoth from "mammoth";
import "@/utils/pdfWorker";

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
      <WelcomeHeader leftLabel="Back" />
      <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
        <div className="flex flex-col justify-center items-center gap-5">
          <WelcomeDescription
            heading="Upload CV"
            subheading="Drop your file here or browse to upload. We'll analyze it and provide suggestions to improve."
          />
          <div className="flex flex-col gap-5 items-center justify-center">
            <label
              htmlFor="cvInput"
              className="h-[9.375rem] w-[9.375rem] flex items-center justify-center py-3 px-[1.26rem] gap-[0.36056rem] border-[5.769px] border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer"
            >
              {isLoading ? (
                <p className="font-medium">Uploading CV...</p>
              ) : (
                <FaPlus className="w-[6.85094rem] h-[6.85094rem]" />
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
        </div>
        <div className="p-4">
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
            <p className="text-gray-500">No content to display yet. Upload a file to view its content.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UploadCv;
