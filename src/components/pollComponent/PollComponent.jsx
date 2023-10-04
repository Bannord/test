import React from "react";
import "./PollComponent.scss";

import RadioLabel from "../UI/radioLabel/RadioLabel";
import BallWrapper from "../UI/ballWrapper/BallWrapper";

const PollComponent = ({ onTestFinish }) => {
  const questions = [
    {
      id: 1,
      question: "Сколько вам лет?",
      options: [
        { id: "child", label: "Нужны средства для ребёнка младше 10 лет" },
        { id: "under25", label: "Мне меньше 25 лет" },
        { id: "25to35", label: "От 25 до 35 лет" },
        { id: "35to45", label: "От 35 до 45 лет" },
        { id: "over45", label: "Мне больше 45 лет" },
      ],
    },
    {
      id: 2,
      question: "Какой у вас тип кожи?",
      options: [
        { id: "dry", label: "Сухая" },
        { id: "normal", label: "Нормальная" },
        { id: "combination", label: "Комбинированная" },
        { id: "oily", label: "Жирная" },
      ],
    },
    {
      id: 3,
      question: "Беспокоят ли воспаления на лице?",
      options: [
        { id: "yes", label: "Да" },
        { id: "no", label: "Нет" },
        { id: "sometimes", label: "Иногда" },
      ],
    },
  ];

  const [step, setStep] = React.useState(0);

  const [selectedOption, setSelectedOption] = React.useState(null);

  const question = questions[step];

  const handleRadioChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleContinueClick = () => {
    if (selectedOption !== null) {
      if (step === questions.length - 1) {
        onTestFinish();
      } else {
        setStep(step + 1);
        setSelectedOption(null); // Reset selected option for the next question
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handlePrevClick = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="poll_component_wrapper">
      <div className="poll_component_row">
        <BallWrapper />
        <div className="question_wrapper">
          <span className="question_qost">{`Вопрос ${question.id} из ${questions.length}`}</span>
        </div>

        <RadioLabel question={question} onRadioChange={handleRadioChange}/>
        <div className="button_wrapper">
          {step === 0 ? null : (
            <button className="prev" onClick={handlePrevClick}>
              Назад
            </button>
          )}
          <button className="next" onClick={handleContinueClick}>
            Дальше
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollComponent;
