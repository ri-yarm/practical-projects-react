const Weather = ({ city, temp, country, sunrise, sunset, error }) => (
  <div className="infoWeath">
      {temp && (
        <>
          <p>
            Местоположение {city} {country}
          </p>
          <p>Температура {temp}*</p>
          <p>Восход в {sunrise}</p>
          <p>Заход в {sunset}</p>
        </>
      )}
      <p className="error">{error}</p>
    </div>
)

export default Weather;
