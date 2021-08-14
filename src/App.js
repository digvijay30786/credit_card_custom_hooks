import "./styles.css";
import Credit from "./creditcard/credit";
import { useState } from "react";
export default function App() {
  const [card, setCard] = useState("");
  return (
    <div className="App">
      <h1>Credit Card</h1>
      <Credit len={4} BoxLen={5} handletext={(value) => setCard(value)} />
      <h3>{card}</h3>
    </div>
  );
}
