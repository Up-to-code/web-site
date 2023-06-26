/* eslint-disable react/jsx-pascal-case */
import Cointeaner from "../Components/Cointeaner";
import Project_box from "../Components/Project_box";
import Titles from "../Components/Titles";
import Foter from "../Components/Foter";
// eslint-disable-next-line no-unused-vars
import component from "../styles/styles";
import Githp_ from "../Components/Githp_";
import Navbar from "../Components/Navbar";
import Linke_in_navber_ from "../Components/Linke_in_navber_";
// import { useEffect, useState } from "react";
import im from "./../assets/A6.png";
function Projects() {
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
        <Linke_in_navber_ path="/Client">Section clients</Linke_in_navber_>
        <Linke_in_navber_ path="/Company">Section Companys</Linke_in_navber_>
        <Linke_in_navber_ path="/Call_me">Call me</Linke_in_navber_>
      </Navbar>

      <div className="m_t_70"></div>
      <Cointeaner>
        <Titles>
          Projects <div className="point">.</div>
        </Titles>
        <div className="grid_projects">
          {/* {
            Data.map((data)=>{
              return <Project_box kay={data.id} img={data.img_url}/>
            })
          } */}
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} /> 
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} /> 
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} />      
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} /> 
          <Project_box img={im} kay={1} />
          <Project_box img={im} kay={1} />
        </div>
      </Cointeaner>
      <Githp_ />
      <Foter />
    </>
  );
}

export default Projects;
