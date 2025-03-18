"use client";

const ProfileHeader = ({ title }: { title: string }) => {
  return (
    <div className="w-full relative">
      <svg
        className="w-full h-auto"
        viewBox="0 0 1810 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H1810V158.628C1810 158.628 1259.67 174.973 906.885 175C552.628 175.027 0 158.628 0 158.628V0Z"
          fill="#E55604"
          fillOpacity="0.2"
        />
      </svg>

      {/* buttons */}
      <div className="absolute top-[10%] md:top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[2.76px] rounded-[20.69px] flex flex-col sm:flex-row items-center gap-[2.76px]">
        <div className="w-full sm:w-auto px-[22.07px] py-[16.55px]rounded-[17.93px] flex justify-center items-center">
          <div className="text-center text-nowrap text-[#26577C] text-lg sm:text-xl font-medium font-sst-arabic tracking-tight">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
