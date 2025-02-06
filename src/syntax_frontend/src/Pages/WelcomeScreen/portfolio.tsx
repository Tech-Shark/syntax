import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import SidebarLinks from "@/components/SidebarLinks";
import WelcomeInput from "@/components/welcomeInput";
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "@/redux/store";
import {NextButton, BackButton} from "@/components/welcomeNavButtons";
import {useEffect, useState} from "react";
import {updateField, updatePortfolio} from "@/redux/cvDataSlice";
import {useNavigate} from "react-router-dom";
import {icServiceUsers} from "@/Api/userHandlers/userHandlers";
import {toast} from "react-toastify";

const Portfolio: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const portfolio = useSelector((state: RootState) => state.cvData.portfolio);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)


    const [currentProject, setCurrentProject] = useState({
        links: "",
        description: "",
        tech: "",
        role: "",
        impact: "",
        duration: "",
    });

    useEffect(() => {
        if (portfolio) {
            setCurrentProject(portfolio);
        }
    }, [portfolio]);

    const handleInputChange = (key: string, value: string) => {
        setCurrentProject({...currentProject, [key]: value});
    };

    interface BioData {
        linkedin: string[]
        marital_status: string[]
        education: string[]
        nationality: string[]
        email: string[]
        summary: string[]
        contact_number: string[]
        address: string[]
        date_of_birth: string[]
        full_name: string[]
        github: string[]
    }

    interface UserInput {
        bio: BioData;
        plan: string;
    }

    const updateUser = async () => {

        setLoading(true)

        dispatch(updatePortfolio(currentProject));

        return setTimeout(async () => {

            const userData: any = localStorage.getItem('cvData')

            const user = JSON.parse(userData)

            const userBio: BioData[] = [
                {
                    linkedin: [],
                    marital_status: [],
                    education: [JSON.stringify(user.education)],
                    nationality: [`${user.personalInformation.nationality}`],
                    email: [`${user.personalInformation.nationality}`],
                    summary: [],
                    contact_number: [`${user.personalInformation.phoneNumber}`],
                    address: [],
                    date_of_birth: [],
                    full_name: [`${user.personalInformation.firstName} ${user.personalInformation.lastName}`],
                    github: []
                }
            ]

            const userInput = {
                bio: userBio,
                plan: "Free"
            }

            try {
                const updateResponse = await icServiceUsers.updateUser(userInput);

                if ('Ok' in updateResponse) {
                    setLoading(false)
                    toast.success("CV data saved successfully and user profile updated successfully with recent data!");
                    return navigate("/saved-info");
                } else if ('Err' in updateResponse) {
                    setLoading(false)
                    toast.error(updateResponse.Err.message);
                }
            } catch (error) {
                setLoading(false)
                console.error('Error updating profile:', error);
                toast.error("Failed to save CV data");
            }

        }, 3000)

    }

    return (

        <section>
            <WelcomeHeader leftLabel="Back"/>
            <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
                <div className="flex flex-col justify-center items-center gap-[2.62rem]">
                    <WelcomeDescription
                        heading="Show Your Projects & Portfolio"
                        subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions."
                    />
                    <div className="flex justify-start gap-[7rem] w-max">
                        <SidebarLinks/>
                        <form className="flex flex-col gap-7 align-center justify-center p-3">
                            <WelcomeInput
                                label="Link to Project/Portfolio (Optional)"
                                id="PortfolioLink"
                                placeholder="https//"
                                onChange={(e) =>
                                    handleInputChange("links", e.target.value)
                                }
                                value={currentProject.links}
                            />
                            <WelcomeInput
                                label="Project Description:"
                                id="projectDescription"
                                placeholder="I..."
                                onChange={(e) =>
                                    handleInputChange("description", e.target.value)
                                }
                                value={currentProject.description}
                            />
                            <WelcomeInput
                                label="Skills/Technologies Used"
                                id="skils"
                                placeholder="JavaScript"
                                onChange={(e) =>
                                    handleInputChange("tech", e.target.value)
                                }
                                value={currentProject.tech}
                            />
                            <WelcomeInput
                                label="Role in the Project"
                                id="role"
                                placeholder="Lead Developer"
                                onChange={(e) =>
                                    handleInputChange("role", e.target.value)
                                }
                                value={currentProject.role}
                            />
                            <WelcomeInput
                                label="Outcome/Impact"
                                id="outcome"
                                placeholder="Reduced processing time by 30%"
                                onChange={(e) =>
                                    handleInputChange("impact", e.target.value)
                                }
                                value={currentProject.impact}
                            />
                            <WelcomeInput
                                label="Project Duration"
                                id="projectDuration"
                                placeholder="May, 2024 - Oct, 2023"
                                onChange={(e) =>
                                    handleInputChange("duration", e.target.value)
                                }
                                value={currentProject.duration}
                            />
                        </form>
                    </div>
                    <div className="flex gap-4">
                        <BackButton/>
                        <NextButton
                            text={loading ? "Loading..." : "Next"}
                            onClick={updateUser}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
