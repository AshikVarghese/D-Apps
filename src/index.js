import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoralisProvider } from "react-moralis";
const Moralis = require("moralis").default;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl="https://soe7hzz5ltnf.usemoralis.com:2053/server"
      appId="d7oW7vcYFn02lOoE3zRfztW6TzpCgJVccSV1Vh58"
    >
      <App />
    </MoralisProvider>
    <ToastContainer />
  </React.StrictMode>
);
// const startServer = async () => {
//   await Moralis.start({
//     apiKey: "ACNhI6ILFJR7MHZS3NO9E2ehHaMeHIFz7qadHJ3MENeUTQHh7IS60M6lnrDxCCqC",
//   });
// };
// startServer();