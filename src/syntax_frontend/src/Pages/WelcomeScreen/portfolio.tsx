import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addPortfolio, updatePortfolio, removePortfolio } from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import SidebarLinks from "@/components/SidebarLinks";
import WelcomeInput from "@/components/welcomeInput";
import arrow2 from "../../assets/images/arrow2.svg";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";

interface Project {
  id: number;
  link: string;
  description: string;
  skills: string;
  role: string;
  outcome: string;
  duration: string;
}

const Portfolio: React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();
  const portfolioProjects = useSelector((state: RootState) => state.cvData.portfolio);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentProject, setCurrentProject] = useState<Project>({
    id: Date.now(),
    link: "",
    description: "",
    skills: "",
    role: "",
    outcome: "",
    duration: "",
  });

  const handleInputChange = (key: keyof Project, value: string) => {
    setCurrentProject({ ...currentProject, [key]: value });
    setErrors(prev => ({ ...prev, [key]: "" }));
  };

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields: (keyof Project)[] = [
      'description', 'skills', 'role', 'outcome', 'duration'
    ];

    requiredFields.forEach(field => {
      if (!currentProject[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProject = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateFields()) return;

    dispatch(addPortfolio({ ...currentProject, id: Date.now() }));
    setCurrentProject({
      id: Date.now(),
      link: "",
      description: "",
      skills: "",
      role: "",
      outcome: "",
      duration: "",
    });
  };

  const handleEditProject = (id: number) => {
    const projectToEdit = portfolioProjects.find(proj => proj.id === id);
    if (projectToEdit) {
      setCurrentProject(projectToEdit);
      dispatch(removePortfolio(id));
    }
  };

  const handleNextClick = () => {
    return true;
  };


  return (
  <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Show Your Projects & Portfolio"
              subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions." />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form
                onSubmit={handleAddProject}
                className="flex flex-col gap-7 align-center justify-center p-3"
              >
                {[
                  { label: "Link to Project/Portfolio (Optional)", key: "projectLink", placeholder: "https//" },
                  { label: "Project Description:", key: "description", placeholder: "I..." },
                  { label: "Skills/Technologies Used", key: "skills", placeholder: "JavaScript" },
                  { label: "Role in the Project", key: "role", placeholder: "Lead Developer" },
                  { label: "Outcome/Impact", key: "outcome", placeholder: "Reduced processing time by 30%" },
                  { label: "Project Duration", key: "duration", placeholder: "May, 2024 - Oct, 2023" },
                ].map(({ label, key }) => (
                  <div key={key}>
                    <WelcomeInput
                      label={label}
                      id={key}
                      placeholder={label.includes("Optional") ? "https//" : "Enter " + label.toLowerCase()}
                      value={currentProject[key as keyof Project] as string}
                      onChange={(e) => handleInputChange(key as keyof Project, e.target.value)}
                    />
                    {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                  </div>
                ))}

                {/* {errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>} */}

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-max rounded-[1.8rem] py-2 px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] self-center"
                >
                  <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">
                    Add Project
                  </p>
                   <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                    <img src={arrow2} alt="Add Education" />
                  </div>
                </button>
              </form>
            </div>
            {/* Render Added Projects */}
            <div className="mt-10 w-full md:w-[70%] flex flex-col gap-6">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{project.role}</h4>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    <p className="text-sm text-gray-600">Skills: {project.skills}</p>
                    <p className="text-sm text-gray-600">Outcome: {project.outcome}</p>
                    <p className="text-sm text-gray-600">Duration: {project.duration}</p>
                    {project.link && (
                      <p className="text-sm">Link: {project.link}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleEditProject(project.id)}
                    className="text-blue-500 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <BackButton/>
              <NextButton to="/saved-info" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;