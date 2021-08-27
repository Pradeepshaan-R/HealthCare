import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Index from "./Components/Index";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" component={Index} />
    </div>
  );
}

export default App;
