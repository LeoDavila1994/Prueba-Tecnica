import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetail from "../pages/UserDetail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:name" element={<UserDetail />} />
    </Routes>
  );
};

export default Routing;
