interface Props {
  teacherName: string;
  teacherJob: string;
  teacherImage: string;
}

const TeatcheCard = ({ teacherName, teacherJob, teacherImage }: Props) => {
  return (
    <div className="flex flex-col items-center gap-[15px] sm:gap-4 min-w-[120px] sm:min-w-[165px]">
      <img
        className="w-[120px] h-[120px] sm:w-[165px] sm:h-[165px] rounded-full shadow-md border-2 border-[#f1f1f2] object-cover"
        src={teacherImage}
        alt="Teacher"
      />
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-bold font-sst-arabic">
          {teacherName}
        </h3>
        <p className="text-base mt-[10px] sm:text-lg font-normal font-sst-arabic">
          {teacherJob}
        </p>
      </div>
    </div>
  );
};

export default TeatcheCard;
