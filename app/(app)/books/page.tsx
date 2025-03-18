import Books from "@/components/books/Books";
import BooksHeader from "@/components/books/BooksHeader";

const page = () => {
  return (
    <div className="w-full ">
      <BooksHeader />

      <div className="w-[95%] md:w-[clamp(100px,79.0625vw,30000px)] mx-auto mt-[180px] md:mt-0 ">
        <Books />
      </div>
    </div>
  );
};

export default page;
