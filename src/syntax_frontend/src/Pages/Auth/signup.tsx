import AuthLayout from "@/components/authLayout";

const Signup: React.FC = () => {


  return (
    <>
      <AuthLayout
      heading="Start Your Journey!"
      subheading="Start Your Journey with Internet Identity."
      altText="(Your anchor is a unique number provided by Internet Identity.)"
      nextButtonTo="/signin-internet"
      /> 
    </>
  );
};
export default Signup;