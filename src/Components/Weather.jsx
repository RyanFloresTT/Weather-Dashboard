import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const axios = require("axios");
const location = "London";

export default function Weather() {
  //const [temp, setTemp] = useState(0);

  async function getWeatherData() {
    try {
      const response = await axios.get(
        "https://pro.openweathermap.org/data/2.5/forecast/climate?lat=35&lon=139&appid=0201eea316afb5249f408039ab374053",
        { params: { lat: 35, lon: 139, appid: API_KEY } }
      );
      //const currentTemperature = Math.floor(response.data.main.temp);
      console.log(response);
      //setTemp(currentTemperature);
      console.log("API Called");
    } catch (error) {
      console.error(error);
    }
  }

  var timestamp = 1665284400;
  var pubDate = new Date(timestamp * 1000);
  console.log(pubDate);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      getWeatherData();
    }, 5000);

    return () => clearInterval(tempInterval); //This is important
  }, []);

  return (
    <div className="weather">
      <h1 className="weather-heading">
        It is currently {/* temp */}° in {location}.
      </h1>
    </div>
  );
}
