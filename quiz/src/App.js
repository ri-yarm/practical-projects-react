import React from "react";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} из {questions.length} вопросов</h2>
      <button
        onClick={() => document.location.reload()}
      >Попробовать снова</button>
    </div>
  );
}

function Game({ question, step, onClickVariant }) {
  // прогресс бар
  const percent = Math.round((step / questions.length) * 100);

  const variants = question.variants.map((text, index) => (
    <li onClick={() => onClickVariant(index)} key={text}>
      {text}
    </li>
  ))

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {variants}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    //следующий вопрос
    setStep(step + 1);
    // если ответ верен то плюс один к количеству правильных ответов
    if(index === question.correct) setCorrect(correct + 1)
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result
          correct={correct}
        />
      )}
    </div>
  );
}

export default App;
