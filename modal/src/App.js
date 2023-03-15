import React from "react";
import "./index.scss";

// ! Решение без анимации
/* function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <svg onClick={() => setIsOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
      )}
    </div>
  );
} */

// ! реализация с анимацией
/* function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
        <div className={`overlay animated ${isOpen ? 'show' : null}`} >
          <div className="modal">
            <svg onClick={() => setIsOpen(false)} height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
    </div>
  );
} */

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`overlay animated ${isOpen ? "show" : null}`}>
      <div className="modal">
        <svg
          onClick={() => setIsOpen(false)}
          height="200"
          viewBox="0 0 200 200"
          width="200"
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="https://media.tenor.com/_alpP7QMuDEAAAAC/lena-lena-when.gif" />
      </div>
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {/* {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
export default App;
