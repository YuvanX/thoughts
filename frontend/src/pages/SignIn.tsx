import ArrowButton from "@/components/Arrow";
import { LoginForm } from "@/components/signin-form";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-10 ml-5">
        <ArrowButton />
      </div>
      <div className="flex flex-grow items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
