import AuthLayout from "@/components/authLayout";

const signin: React.FC = () => {


  return (
    <>
      <AuthLayout
        heading="Welcome Back!"
        subheading="Log in securely with your Internet Identity Anchor."
        altText="(Your anchor is a unique number provided by Internet Identity.)"
        showNewUserLink={false}
        nextButtonTo="/signin-internet"
        authLink="/signup"
        authLinkText="Sign Up"
      /> 
    </>
  );
};
export default signin;