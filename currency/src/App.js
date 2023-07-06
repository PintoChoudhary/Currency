import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
   const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(res => res.json())
            .then(data => {
                var items = []
                for (let item in data.bpi) {
                    items.push(data.bpi[item]);
                }
                setData(items);
            })
    }, [])
  return (
    <div>
            <table className="table  table-striped table-secondary border-dark">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((t , index) => (
                            <tr key= {index}>
                                <td>{t.code}</td>
                                <td>{t.symbol}</td>
                                <td>{t.rate_float}</td>
                                <td>{t.description}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
  );
}

export default App;
