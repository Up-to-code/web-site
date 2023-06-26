/* eslint-disable react/jsx-pascal-case */
import Abuot_me from "../Components/Abuot_me";
import Cointeaner from "../Components/Cointeaner";
import Foter from "../Components/Foter";
import Githp_ from "../Components/Githp_";
import Header from "../Components/Header";
import Linke_in_navber_ from "../Components/Linke_in_navber_";
import My_skiles from "../Components/My_skiles";
import Navbar from "../Components/Navbar";
import Project_box from "../Components/Project_box";
import Titles from "../Components/Titles";
import Top_porject from "../Components/Top_porject";
import img from "../assets/me2.png";
// import { useState, useEffect } from "react";
function Company() {
  // const [Data, setData] = useState([]);
  // const getData = () => {
  //   fetch("http://localhost:2020/all")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setData(data);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <Navbar>
        <Linke_in_navber_ path="/">Home</Linke_in_navber_>
        <Linke_in_navber_ path="/Projects">All projects</Linke_in_navber_>
        <Linke_in_navber_ path="/Client">Section clients</Linke_in_navber_>
        <Linke_in_navber_ path="/Call_me">Call me</Linke_in_navber_>
      </Navbar>
      <div className="mt-70"></div>
      <Header />
      <My_skiles />
      <Top_porject>
        <Titles>
          Top Projects <div className="point">.</div>
        </Titles>
        <div className="grid_projects">
          <Project_box />
          <Project_box />
          <Project_box />
          <Project_box />
        </div>
      </Top_porject>
      <Cointeaner>
        <Abuot_me src={img} />
      </Cointeaner>
      <Githp_ />
      <Foter />
    </>
  );
}

export default Company;
