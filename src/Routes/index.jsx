import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import UpdateUser from "../pages/UpdateUser";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/user" element={<CreateUser />} />
        <Route path="/update/user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};
