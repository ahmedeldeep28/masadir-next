import QuestionCard from "./QuestionCard";

function QuestionsList({ questions }) {
  return (
    <div className="row">
      {questions.map((item) => {
        return (
          <div className="col-md-6 mt-2" key={item._id}>
            <QuestionCard data={item} />
          </div>
        );
      })}
    </div>
  );
}

export default QuestionsList;
