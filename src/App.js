import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");

  return (
    <main>
      <h1>
        ₹400 <span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input
            type="text"
            placeholder="+200 for Petrol"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
          />
        </div>
        <div className="description">
          <input
            type="text"
            placeholder={"description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add new Transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-₹40000</div>
            <div className="dateTime">2024-05-17 01:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">it was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price green">+₹4000</div>
            <div className="dateTime">2024-05-17 01:00</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">it was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-₹90000</div>
            <div className="dateTime">2024-05-17 01:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
