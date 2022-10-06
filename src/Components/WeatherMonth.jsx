import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");
const location = "London";

export default function WeatherMonth(props) {
  async function getMonthlyWeatherData() {
    try {
      const response = await axios.get(
        "https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid=0201eea316afb5249f408039ab374053",
        { params: { lat: 35, lon: 139, appid: API_KEY } }
      );
      const weatherMonth = response.data.list;
      var timestamp = new Date(weatherMonth[0].dt);
      var pubDate = new Date(timestamp * 1000);
      console.log(pubDate);
      console.log("API Successfully Called.");
    } catch (error) {
      console.error("API ERROR: " + error);
    }
  }

  useEffect(() => {
    const tempInterval = setInterval(() => {
      getMonthlyWeatherData();
    }, 5000);

    return () => clearInterval(tempInterval);
  }, []);

  return <br></br>;
}
