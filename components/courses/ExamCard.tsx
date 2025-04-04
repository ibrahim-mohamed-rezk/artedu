const PlaceholderModuleCard = () => {
  return (
    <div className="bg-gray-100 rounded-[22px] shadow-sm border border-[#f1f1f2] p-4 w-full opacity-70 cursor-not-allowed">
      <div className="flex flex-row items-center md:items-start gap-4">
        {/* Placeholder square for the image */}
        <div className="w-full md:w-[161px] border border-[#f1f1f2] h-[120px] md:h-[92px] overflow-hidden rounded-[20px] bg-gray-200">
          {/* Empty placeholder - no image */}
        </div>
        <div className="w-full flex flex-col items-end">
          {/* Placeholder rectangle for title */}
          <div className="bg-gray-200 h-4 w-24 rounded-md mb-2 self-end"></div>

          {/* Placeholder rectangle for description */}
          <div className="bg-gray-200 h-6 w-full rounded-md"></div>

          {/* Placeholder for button */}
          <div className="mt-4 bg-gray-300 h-10 rounded-full w-full md:w-32 self-end"></div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderModuleCard;
