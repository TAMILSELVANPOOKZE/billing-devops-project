import React, { useEffect, useState } from "react";

function App() {

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("http://98.70.219.226/api/billing")
      .then(res => res.json())
      .then(data => setBills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Billing Application</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {bills.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.item}</td>
              <td>{b.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;