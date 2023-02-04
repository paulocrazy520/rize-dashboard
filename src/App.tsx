import "./App.css";

import React from "react";

import { KeplrContextProvider } from "./context/KeplrProvider";
import MainRouter from "./routes/MainRouter";

const App: React.FC = () => {
  return (
    <div className="App">
      <KeplrContextProvider>
        <MainRouter />
      </KeplrContextProvider>
    </div>
  );
};

export default App;
