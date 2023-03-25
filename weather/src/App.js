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

  const [city, setCity] = React.useState();
  const [temp, setTemp] = React.useState();
  const [country, setCountry] = React.useState();
  const [sunrise, setSunrise] = React.useState();
  const [sunset, setSunset] = React.useState();
  const [error, setError] = React.useState();

  function toTime(n) {
    const date = new Date(n * 1000);
    const h = date.getHours();
    const m =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return h + ":" + m;
  }

  const getData = (e) => {
    e.preventDefault();

    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTemp(Math.trunc(data.main.temp - 273));
          setCountry(data.sys.country);
          setSunrise(toTime(data.sys.sunrise));
          setSunset(toTime(data.sys.sunset));
          setError(undefined);
        });
    } else {
      setTemp(undefined);
      setCountry(undefined);
      setSunrise(undefined);
      setSunset(undefined);
      setError("введите город");
    }
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info />
            </div>
            <div className="col-sm-7 form">
              <Form getData={getData} input={setCity} />
              <Weather
                city={city}
                temp={temp}
                country={country}
                sunrise={sunrise}
                sunset={sunset}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
