export function parseCvText(cvText: string) {
  const parsedData: { firstName?: string; lastName?: string; email?: string; phone?: string; professionalTitle?: string } = {};

  // Extract email
  const emailMatch = cvText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) parsedData.email = emailMatch[0];

  // Extract phone number
  const phoneMatch = cvText.match(/(\+?\d{1,3}[-.\s]?)?\d{10,15}/);
  if (phoneMatch) parsedData.phone = phoneMatch[0];

  // Extract name (assumes "Firstname Lastname" format at the start)
  const nameMatch = cvText.match(/(?:\b[A-Z][a-z]*\b\s?)+/);
  if (nameMatch) {
    const nameParts = nameMatch[0].split(" ");
    parsedData.firstName = nameParts[0];
    parsedData.lastName = nameParts[1] || "";
  }

  // Extract professional title
  const titleMatch = cvText.match(/Frontend Engineer|Full Stack Developer|[A-Za-z\s]+Developer/);
  if (titleMatch) parsedData.professionalTitle = titleMatch[0];

  return parsedData;
}
