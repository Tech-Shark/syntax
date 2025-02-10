export function parseCvText(cvText: string) {
  const parsedData: {
    personalInformation: {
      firstName?: string;
      lastName?: string;
      nationality?: string;
      email?: string;
      phoneNumber?: string;
      professionalTitle?: string;
    };
    workExperience: {
      id: number;
      jobTitle: string;
      companyName: string;
      duration: string;
      responsibilities: string;
    }[];
  } = {
    personalInformation: {},
    workExperience: [],
  };

  // Extract email
  const emailMatch = cvText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) parsedData.personalInformation.email = emailMatch[0];

  // Extract phone number
  const phoneMatch = cvText.match(/(\+?\d{1,3}[-.\s]?)?(\d{2,3}[-.\s]?\d{3,4}[-.\s]?\d{4,6})/);
  if (phoneMatch) parsedData.personalInformation.phoneNumber = phoneMatch[0];

  // Extract full name
  const nameRegex = /^([A-Z][a-zA-Z\-']+(?:\s[A-Z][a-zA-Z\-']+)*)/m;
  const nameMatch = cvText.match(nameRegex);
  if (nameMatch) {
    const fullName = nameMatch[1].trim();
    const nameParts = fullName.split(/\s+/);
    parsedData.personalInformation.firstName = nameParts[0];
    parsedData.personalInformation.lastName =
      nameParts.length > 1 ? nameParts[nameParts.length - 1] : undefined;
  }

  // Extract nationality
  const nationalityMatch = cvText.match(/\bNationality:\s*([A-Za-z\s]+)/i);
  if (nationalityMatch) {
    parsedData.personalInformation.nationality = nationalityMatch[1].trim();
  }

  // Extract professional title
  const titleMatch = cvText.match(/(?<=—\s)(Frontend Engineer|Full Stack Developer|[A-Za-z\s]+Developer)/);
  if (titleMatch) parsedData.personalInformation.professionalTitle = titleMatch[0];

  // Extract work experience
const workExpRegex = /(Job Title|Position|Role):\s*(.+?)\s*(Company Name|Employer|Organization):\s*(.+?)\s*(Duration|Dates|Period):\s*(.+?)\s*(Responsibilities|Duties|Description|task):\s*((?:.|\n)*?)(?=\n\n|$)/gi;

let match;
while ((match = workExpRegex.exec(cvText)) !== null) {
  parsedData.workExperience.push({
    id: Date.now() + Math.random(), // Unique ID for each experience
    jobTitle: match[2].trim(),
    companyName: match[4].trim(),
    duration: match[6].trim(),
    responsibilities: match[8].trim(),
  });
}


  return parsedData;
}
