import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import HeroImage from "./HeroImage";
import TitleSection from "./TitleSection";
import ActionButtons from "./ActionButtons";

const LandingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="relative w-full max-w-[390px] h-[844px] overflow-hidden bg-white rounded-[50px] max-md:max-w-full max-md:h-auto max-md:rounded-[30px] max-sm:rounded-[20px] shadow-lg">
        <BackgroundCircles />
        <div className="flex flex-col items-center p-6">
          <HeroImage
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a295193d3ac913ad413c69bc2fcbb5693ccb3db9"
            altText="Travel illustration"
          />
          <TitleSection
            title="Discover Your Dream Trips here"
            subtitle="Where Journeys Begin, Adventures Unfold, and Memories Last Forever."
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
