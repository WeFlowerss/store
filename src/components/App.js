import "./App.css";
import React from "react";
import store from "../store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Bucket } from "../pages/Bucket/Bucket.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bucket" element={<Bucket />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
