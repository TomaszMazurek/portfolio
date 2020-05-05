import React from "react";
import "antd/dist/antd.css";
import MainLayout from "./containers/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <MainLayout>
          <BaseRouter />
        </MainLayout>
      </Router>
    </div>
  );
}

export default App;
