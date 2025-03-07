import React from "react";

const BackgroundCircles: React.FC = () => {
  return (
    <>
      <div className="absolute top-[-340px] left-[142px] w-[635px] h-[635px]">
        <svg
          width="248"
          height="295"
          viewBox="0 0 248 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="317.5"
            cy="-22.5"
            r="317.5"
            fill="#FFA360"
            fillOpacity="0.1"
          ></circle>
        </svg>
      </div>
      <div className="absolute top-[-224px] left-[57px] w-[496px] h-[496px]">
        <svg
          width="333"
          height="272"
          viewBox="0 0 333 272"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle
            cx="248"
            cy="24"
            r="246.5"
            stroke="#FFA360"
            strokeOpacity="0.08"
            strokeWidth="3"
          ></circle>
        </svg>
      </div>
      <div className="absolute w-[372px] h-[372px] rotate-[27.089deg] bottom-[-120px] left-[-323px] border-2 border-solid border-[rgba(255,163,96,0.22)]" />
      <div className="absolute w-[372px] h-[372px] bottom-[-120px] left-[-265px] border-2 border-solid border-[rgba(255,163,96,0.22)]" />
    </>
  );
};

export default BackgroundCircles;
