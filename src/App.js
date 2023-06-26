/* eslint-disable react/jsx-pascal-case */
import {  Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import "./styles/pubilc.css"
import Projects from "./pages/Projects";
import Client from "./pages/Client";
import Call_me from "./pages/Call_me";
import Company from "./pages/Company";
import Post from "./pages/Post";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Company" element={<Company/>}/>
        <Route path="/Call_me" element={<Call_me/>} />
        <Route path="Post/:id" element={<Post/>} />
        <Route path="/*" element={<div className="Error">404</div>} />
      </Routes>
    </>
  );
}

export default App;
