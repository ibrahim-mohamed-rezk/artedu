import QuestionsBank from "@/components/questionsBank/QuestionsBank";
import QuestionsBankHeader from "@/components/questionsBank/QuestionsBankHeader";

const page = () => {
  return (
    <div className="w-full">
      <QuestionsBankHeader />
      <div className="container mx-auto">
        <QuestionsBank />
      </div>
    </div>
  );
};

export default page;
