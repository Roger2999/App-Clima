import { useState } from "react";
import SearchInput from "../../components/SearchInput/";
import { useWeatherQuery } from "../../hooks/useWeatherQuery";
import "./Home.css";
import { useDebounce } from "../../hooks/useDebounce";
import { difKelvin } from "../../utilites/const";
export const Home = () => {
  const [city, setCity] = useState("");
  const URL_BASE = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY; //API_KEY se define en archivo .env para que no este visible en el codigo fuente, luego se importa de esta manera
  const { debounceValue } = useDebounce(city, 600);
  const { todos, error, isLoading, isError } = useWeatherQuery(
    URL_BASE,
    debounceValue,
    API_KEY
  );

  return (
    <>
      <h1>Aplicacion del clima</h1>
      <SearchInput city={city} setCity={setCity} isLoading={isLoading} />

      {isLoading ? (
        <div
          className="spinner-container"
          style={{ width: "100px", height: "100px", margin: "100px auto" }}
        >
          <span
            style={{ width: "100px", height: "100px" }}
            className="loader"
          ></span>
        </div>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        todos &&
        todos.main && (
          <div className="card1">
            <div className="card-body1">
              <h2>Clima actual:</h2>
              <h5 className="card-title">{todos.name}</h5>
              <p className="card-text">
                Temperatura: {(todos.main.temp - difKelvin).toFixed(2)}°C
                <br />
                Sensación térmica:{" "}
                {(todos.main.feels_like - difKelvin).toFixed(2)}°C
                <br />
                Humedad: {todos.main.humidity}%
                <br />
                País: {todos.sys?.country}
                <br />
                {todos.weather && todos.weather[0] && (
                  <>
                    Estado: {todos.weather[0].description}
                    <br />
                    <img
                      src={`https://openweathermap.org/img/wn/${todos.weather[0].icon}@2x.png`}
                      alt="icono clima"
                    />
                  </>
                )}
              </p>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default Home;
