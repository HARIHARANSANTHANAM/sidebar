import "./styles.css";
import Explorer from "./Component/Explorer";
import data from "./data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Sidebar demo</h1>
      <Explorer data={data}></Explorer>
    </div>
  );
}
