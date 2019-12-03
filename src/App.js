import React from "react";
import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import { Provider } from "react-redux";
import store from "./store";
import Nobel from "./components/layout/Nobel";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
      </div>
      <div className="container">
        <Nobel />
      </div>
    </Provider>
  );
};

export default App;
