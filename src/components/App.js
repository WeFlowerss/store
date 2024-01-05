import "./App.css";
import React from "react";
import store from "../store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Bucket } from "../pages/Bucket/Bucket.jsx";
import { WishList } from "../pages/WishList/WishList.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/store">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
