import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Styles from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Styles />
    </BrowserRouter>
  );
}

export default App;
