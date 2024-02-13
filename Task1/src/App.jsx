import React, { useState } from "react";

import "./App.css";

function App(props) {
  let [text, setText] = useState(props.text); //для вывода текста
  const [formattedText, setFormattedText] = useState(""); //для форматирования для заглавных букв
  const [color, setColor] = useState("black"); // для форматирования цвета& по умолчанию - черный
  const [spase, setSpace] = useState(""); //для удаления пробелов

  const handleChange = (e) => {
    setText(e.target.value);
  }; //для вывода текста

  const handleUpperCaseClick = () => {
    setFormattedText(text.toUpperCase());
  }; //перевели слово на заглавные буквы

  const handleColorChangeClick = () => {
    setColor("red");
  }; //покрасили слово в красный

  const handleDeleteSpaces = () => {
    setSpace(text.replaceAll(" ", ""));
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Введите слово"
        value={text}
      />

      <button onClick={handleUpperCaseClick}>
        Вывести текст слова заглавными буквами
      </button>
      <p>Заглавные буквы: {formattedText}</p>

      <button onClick={handleColorChangeClick}>
        Покрасить слово в красный
      </button>
      <p style={{ color: color }}>Красный цвет: {text}</p>

      <button onClick={handleDeleteSpaces}>Удалить пробелы</button>
      <p>Без пробелов: {spase}</p>
    </>
  );
}

export default App;
