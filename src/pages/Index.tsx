import React from "react";
import LandingPage from "@/components/landing/LandingPage";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="font-['Poppins']">
        <LandingPage />
      </main>
    </>
  );
};

export default Index;
