import Today from "./Components/Today.jsx";
import Time from "./Components/Time.jsx";
import Weather from "./Components/Weather.jsx";
import "./reset.css";

export default function App() {
  return (
    <div>
      <Today />
      <Time />
      <Weather />
    </div>
  );
}
