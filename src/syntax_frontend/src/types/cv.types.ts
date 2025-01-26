export type CvData = {
  id: string;
  templateId: number;
  sections: {
    [key: string]: CvSection;
  };
};

export type CvSection = {
  type: 'text' | 'list' | 'nested' | 'experience' | 'education';
  label: string;
  content: string | string[] | CvSection[] | Experience[] | Education[];
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export type TemplateComponentProps = {
  cvData: CvData;
  onEdit: () => void;
};