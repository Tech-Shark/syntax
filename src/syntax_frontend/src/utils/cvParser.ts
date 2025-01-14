export function parseCvText(cvText: string) {
  const parsedData: {
    firstName?: string;
    lastName?: string;
    nationality?: string;
    email?: string;
    phoneNumber?: string;
    professionalTitle?: string;
  } = {};

  // Extract email
  const emailMatch = cvText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) parsedData.email = emailMatch[0];

  // Extract phone number
  const phoneMatch = cvText.match(/(\+?\d{1,3}[-.\s]?)?(\d{2,3}[-.\s]?\d{3,4}[-.\s]?\d{4,6})/);
  if (phoneMatch) parsedData.phoneNumber = phoneMatch[0];

  // Extract full name
  const nameRegex = /^([A-Z][a-zA-Z\-']+(?:\s[A-Z][a-zA-Z\-']+)*)/m;
  const nameMatch = cvText.match(nameRegex);
  if (nameMatch) {
    const fullName = nameMatch[1].trim();
    const nameParts = fullName.split(/\s+/);
    parsedData.firstName = nameParts[0];
    parsedData.lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : undefined;
  }

  // Extract nationality
  const nationalityMatch = cvText.match(/\bNationality:\s*([A-Za-z\s]+)/i);
  if (nationalityMatch) {
    parsedData.nationality = nationalityMatch[1].trim();
  }

  // Extract professional title
  const titleMatch = cvText.match(/(?<=—\s)(Frontend Engineer|Full Stack Developer|[A-Za-z\s]+Developer)/);
  if (titleMatch) parsedData.professionalTitle = titleMatch[0];

  return parsedData;
}
