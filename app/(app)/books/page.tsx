import Books from "@/components/books/Books";
import BooksHeader from "@/components/books/BooksHeader";

const page = () => {
  return (
    <div className="w-full ">
      <BooksHeader />

      <Books />
    </div>
  );
};

export default page;
