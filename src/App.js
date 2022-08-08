import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/Index";
import "../src/reset.css";
import Evaluate from "./pages/Evaluate/Index";
import SignUp from "./pages/SignUp/Index";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Evaluate />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;