import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import {NextButton} from "@/components/welcomeNavButtons";
import {useState} from "react";
import {icServiceCV} from "@/Api/cvHandlers/cvHandlers";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/contexts/AuthenticationContext";
import api from "@/Api/apiServiceSettings";


interface CVUserInput {
    cv_template: string;
    cv_text: string;
    job_description: string;
};

interface createJobData {
    jobTitle: string
    jobDescription: string
    template: string
}

const JobDescription: React.FC = () => {
    const { callFunction } = useAuth();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const [jobData, setJobData] = useState<createJobData>({
        jobTitle: "",
        jobDescription: "",
        template: "",
    });

    const handleDataChange =
        (key: keyof typeof jobData) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setJobData((prev: any) => ({...prev, [key]: e.target.value}));
                console.log(jobData);
            };

    const handleCreate = async () => {

        setLoading(true)

        const cvData = localStorage.getItem("cvData");

        const analyseCvData: CVUserInput = {
            cv_template: jobData.template,
            cv_text: cvData ?? "",
            job_description: jobData.jobDescription
        }

        try {
            const analyzeCvData = async (cvData: { cv_template: string; cv_text: string; job_description: string }) => {
                try {
                    const timeoutPromise = new Promise((_, reject) => {
                        setTimeout(() => reject(new Error("Request timed out")), 30000);
                    });

                    const apiPromise = callFunction.analyze_cv(cvData);

                    const response: any = await Promise.race([apiPromise, timeoutPromise]);
                    console.log("CV Analysis Promise: ", response);

                    if ("Ok" in response) {
                        return response.Ok;
                    } else if ("Err" in response) {
                        throw new Error(response.Err.message);
                    }
                    return response;
                } catch (error: any) {
                    console.error("Error in CV analysis:", error);
                    if (error.message === "Request timed out") {
                        throw new Error("CV analysis took too long. Please try again.");
                    }
                    throw error;
                }
            }

            const analysis = await analyzeCvData(analyseCvData)
            console.log("CV Analysis: ", analysis);

            if (analysis) {
                setLoading(false)
                toast.success("Analysed CV data saved successfully");
                localStorage.setItem("analysedCv", JSON.stringify(analysis));
                navigate("/user-dashboard");
            } else if ('Err' in analysis) {
                setLoading(false)
                toast.error(analysis.Err.message);
            }
        } catch (error) {
            setLoading(false)
            console.error('Error updating profile:', error);
            toast.error("Failed to save CV data");
        }
    }

    return (
        <section>
            <WelcomeHeader leftLabel="Back"/>
            <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
                <div className="flex flex-col justify-center items-center gap-[2.62rem]">
                    <WelcomeDescription
                        heading="Add Job Information"
                        subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions."
                    />
                    <form className="flex flex-col gap-7 align-center justify-center p-3">
                        <WelcomeInput
                            label="Job Title"
                            id="jobTitle"
                            placeholder="Software Engineer"
                            onChange={handleDataChange("jobTitle")}
                            value={jobData.jobTitle}
                        />
                        <WelcomeInput
                            label="Job Description"
                            id="jobDescription"
                            placeholder="I...."
                            type="text"
                            isTextArea={true}
                            onChange={handleDataChange("jobDescription")}
                            value={jobData.jobDescription}
                        />
                        <WelcomeInput
                            label="CV Template"
                            id="template"
                            placeholder="default"
                            onChange={handleDataChange("template")}
                            value={jobData.template}
                            disabled={true}
                        />
                    </form>
                    <div className="flex gap-4">
                        <NextButton text={loading ? "Loading" : "Create CV"} onClick={handleCreate}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default JobDescription;
