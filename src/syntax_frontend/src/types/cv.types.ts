// Core CV Data Types
interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  website: string;
}

interface EducationEntry {
  level: string;
  school: string;
  period: string;
}

interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
}

interface CvData {
  name: string;
  lastName: string;
  title: string;
  contact: ContactInfo;
  interests: string[];
  education: EducationEntry[];
  profile: string;
  experience: ExperienceEntry[];
}

// Template Type
interface CvTemplate {
  id: number;
  name: string;
  component: React.ComponentType<{ cvData: CvData; onEdit?: () => void }>;
  previewImage?: string;
  defaultData?: Partial<CvData>;
}

// Props for EditCvModal
interface EditCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvData: CvData;
  onSave: (updatedCvData: CvData) => void;
  templateConfig?: TemplateConfig;
}

// Template Configuration Type
interface TemplateConfig {
  sections: TemplateSection[];
}

interface TemplateSection {
  id: string;
  label: string;
  fields: TemplateField[];
  isArray?: boolean;
}

interface TemplateField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'email' | 'url';
  path: string;
  placeholder?: string;
  rows?: number;
}