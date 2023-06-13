import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => setQuestions(data));
  }, []);
  const updatedQuestions = questions.map((question) => (
    <QuestionItem key={question.id} question={question} onDeleteItem={handleDeleteItem} />
  ));

  function handleDeleteItem(deletedQuestion) {
    setQuestions((prevQuestions) => {
      const afterDeleteQuestions = prevQuestions.filter((question) => question.id !== deletedQuestion.id);
      return afterDeleteQuestions;
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{updatedQuestions}</ul>
    </section>
  );
}

export default QuestionList;