import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import React from "react";
/* import Form from "./components/Form";
import Weather from "./components/Weather"; */

function App() {
  const apiKey = "2c1896c141479df92743579029d34a1a";

  const [city, setCity] = React.useState('')

  const getData = (e) => {
    e.preventDefault();
    setCity(e.target.elements.city.value)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <Info />
      <Form getData={getData} />
      <Weather />
    </>
  );
}

export default App;
