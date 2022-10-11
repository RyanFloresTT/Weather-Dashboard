import Temperature from "./Temperature";
import WeatherMonth from "./WeatherMonth.jsx";

export default function Weather(props) {
  return (
    <div>
      <Temperature lat={props.lat} lon={props.lon} location={props.location} />
      <WeatherMonth lat={props.lat} lon={props.lon} location={props.location} />
    </div>
  );
}
