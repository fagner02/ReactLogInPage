import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import express from "express";
// import { MongoClient } from "mongodb";

// const app = express();
// const uri =
//   "mongodb+srv://fagnerrc12:f4SnmTYP0CcoYHqA@cluster0.mm3cmlq.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// client.connect();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
