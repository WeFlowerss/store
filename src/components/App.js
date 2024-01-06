import "./App.css";
import React from "react";
import store from "../store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { Bucket } from "../pages/Bucket/Bucket.jsx";
import { Popular } from "../pages/Popular/Popular.jsx";
import { Orders } from "../pages/Orders/Orders.jsx";
import { WishList } from "../pages/WishList/WishList.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/store">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/bucket" element={<Bucket />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
