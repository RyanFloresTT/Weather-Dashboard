export default function WeatherCard(props) {
  var pubDate = new Date(props.time * 1000).toDateString();
  return (
    <div className="weatherCard">
      <h1>Date: {pubDate}</h1>
      <h3>Temp: {props.temperature}</h3>
    </div>
  );
}
