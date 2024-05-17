import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [transactions,setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(setTransactions)
  }, []);
  // const data = fetch(url).then((obj) => {
  //   obj.json().then((data) => {
  //      data
  //   });
  // });
  async function getTransactions() {
  const url = process.env.REACT_APP_API_URL + "/transactions";
  const response = await fetch(url);
  // console.log(response);
  return await response.json();
  }
  function addNewTransaction(e) {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "/transaction";
    const price = name.split(" ")[0];
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        price,
        name: name.substring(price.length + 1),
        description,
        dateTime,
      }),
    })
      .then((response) => {
        response.json().then((data) => {
          setName("");
          setDateTime("");
          setDescription("");
          // console.log("Result:- ", data);
        });
      })
      .catch((err) => {
        console.log(`ERROR:- ${err}`);
      });
  }
  let balance = 0;
  for (const transaction of transactions) {
    balance += transaction.price;
  }
  const rupee = Math.floor(balance);
  const paise = Math.floor((balance - rupee) * 100) ;
  return (
    <main>
      <h1>
        ₹{rupee}<span>.{paise}</span>
      </h1>
      <form onSubmit={addNewTransaction}>
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
      {(transactions.length > 0) && transactions.map((transaction)=>(
        <div className="transaction">
        <div className="left">
          <div className="name">{transaction.name}</div>
          <div className="description">{transaction.description}</div>
        </div> 
        <div className="right">
          <div className={"price "+ (transaction.price<0 ? 'red' : 'green')}>{transaction.price}</div>
          <div className="dateTime">{transaction.dateTime}</div>
        </div>
      </div>
      ))}
      </div>
    </main>
  );
}

export default App;
