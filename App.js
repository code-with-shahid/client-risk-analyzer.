import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [risky, setRisky] = useState([]);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:5000/upload", formData);
    setData(res.data.clients);
    setRisky(res.data.riskyClients);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Risk Analyzer</h1>
      <input type="file" onChange={handleFile} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">Analyze</button>

      <h2 className="mt-6 font-semibold">All Clients</h2>
      <table className="w-full border">
        <thead><tr><th>Name</th><th>Amount</th></tr></thead>
        <tbody>
          {data.map((client, i) => (
            <tr key={i}><td>{client.name}</td><td>{client.amount}</td></tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-6 font-semibold text-red-600">High-Risk Clients</h2>
      <table className="w-full border">
        <thead><tr><th>Name</th><th>Amount</th></tr></thead>
        <tbody>
          {risky.map((client, i) => (
            <tr key={i}><td>{client.name}</td><td>{client.amount}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
