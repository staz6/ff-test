import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useAuth } from "../../../infrastructure/context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [userName, setUserName] = useState<string>("");
  
  return (
    <section className="flex bg-gray-50 dark:bg-gray-900 w-full h-screen">
      <div
        className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        style={{ width: "33%" }}
      >
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <div>
              <TextInput
                placeholder="username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <Button type="submit" className="w-44" onClick={()=>{login(userName)}}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
