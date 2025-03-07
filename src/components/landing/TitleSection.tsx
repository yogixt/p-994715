import React from "react";

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="text-center mb-10 px-5 py-0">
      <h1 className="text-[35px] font-bold bg-clip-text mb-5 max-sm:text-[28px]">
        {title}
      </h1>
      <p className="text-sm text-black max-w-[323px] mx-auto my-0">
        {subtitle}
      </p>
    </section>
  );
};

export default TitleSection;
