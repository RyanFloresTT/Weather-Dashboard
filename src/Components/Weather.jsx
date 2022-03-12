import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");

export default function Weather() {
  const [temp, setTemp] = useState(0);

  async function getWeatherData() {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        { params: { q: "Cathedral City", units: "imperial", appid: API_KEY } }
      );
      const currentTemperature = Math.floor(response.data.main.temp);
      setTemp(currentTemperature);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    setInterval(() => {
      getWeatherData();
    }, 5000);
  });

  return (
    <div className="weather">
      <h1 className="weather-heading">It is currently {temp}°</h1>
    </div>
  );
}
