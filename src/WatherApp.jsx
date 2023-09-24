import React from "react";
import { useState } from "react";

export const WatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f810d9f291ae601481d24c15f48f6dfa";
  const difKelvin = 273.15 

  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const hanleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      console.error("Ocurrio un problema");
    }
  };

  return (
    <div className="container">
      <h1>Aplicaion del Clima</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={hanleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>
        {
            dataClima && (
                <div>
                    <h2>{dataClima.name}</h2>
                    <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin )} ºC</p>
                    <p>Condicion meteorologica: {dataClima.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}  />
                </div>
            )
        }
    </div>
  );
};
