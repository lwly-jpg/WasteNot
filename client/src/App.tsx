import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recipe/:id" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
