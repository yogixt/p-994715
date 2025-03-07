import React from "react";
import { toast } from "sonner";

const ActionButtons: React.FC = () => {
  const handleLogin = () => {
    toast.success("Login functionality will be implemented soon!");
  };

  const handleRegister = () => {
    toast.success("Registration functionality will be implemented soon!");
  };

  return (
    <div className="flex gap-[30px] mt-10 max-sm:flex-col max-sm:gap-[15px] max-sm:w-full max-sm:px-5 max-sm:py-0">
      <button
        onClick={handleLogin}
        className="w-40 text-white text-xl font-bold shadow-[0px_10px_20px_0px_#CBD6FF] cursor-pointer px-5 py-[15px] rounded-[10px] max-sm:w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-colors"
      >
        Login
      </button>
      <button
        onClick={handleRegister}
        className="w-40 text-neutral-950 text-xl font-bold cursor-pointer bg-white border border-gray-200 px-5 py-[15px] rounded-[10px] max-sm:w-full hover:bg-gray-50 transition-colors"
      >
        Register
      </button>
    </div>
  );
};

export default ActionButtons;
