"use client";
import React, { useState } from "react";

interface IData {
  id: number;
  question: string;
  answer: string;
}
const FAQ: IData[] = [
  { id: 0, question: "nexti sevdinmi?", answer: ' " beli beli elbette " ' },
  {
    id: 1,
    question: "ev tapsirigini yazmisanmi?",
    answer: ' " beli beli elbette " ',
  },
  { id: 2, question: "nexti sevdinmi?", answer: ' " beli beli elbette " ' },
  {
    id: 3,
    question: "ev tapsirigini yazmisanmi?",
    answer: ' " beli beli elbette " ',
  },
];
const Accordion = () => {
  const [showElem, setShowElem] = useState<boolean | number>(false);
  return (
    <div className="container">
      <h2>FAQ</h2>
      {FAQ.map(({ id, question, answer }: IData, index: number) => (
        <div
          className="questionAndAnswer"
          key={id}
          onClick={() => {
            showElem === id ? setShowElem(false) : setShowElem(id);
          }}
        >
          <div className="question">
            <span className="index">
              {index < 9 ? "0" + (index + 1) : index + 1}
            </span>
            {question}
          </div>
          <div className={showElem === id ? "answer" : "hideAnswer"}>
            {showElem === id && answer}
          </div>
          <button>{showElem === id ? "-" : "+"}</button>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
