/* eslint-disable react/jsx-pascal-case */
import Navbar from "../Components/Navbar";
import Linke_in_navber_ from "../Components/Linke_in_navber_";
import Box_img from "../Components/Box_img";
import img from "./../assets/A6.png";
import Cointeaner from "../Components/Cointeaner";
import Titles from "./../Components/Titles";
import Button from "./../Components/Button";
import Skile from "./../Components/Skile";
// import { useEffect, useState} from "react";
function Post() {

  // const [Data, setData] = useState([]);
  // const getData = () => {
  //   fetch("http://localhost:20210/all/"+1)
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
      <div className="post_c">

     
      <Cointeaner>
        <Box_img src={img} />
        <Titles>YouTube Project</Titles>
        <div className="All_skilees_in_projects">
          <Skile skile="HTML" />
          <Skile skile="CSS3" />
          <Skile skile="Recatjs" />
          <Skile skile="Javascript" />
          <Skile skile="Fierbase" />
        </div>

        <p className="texte_cont" id="ax">
          this is test for page ihink is test for Projects <br /> and you can
          dawonlod this in Githup and tink for wred this Line
          <br />
          this is test for page ihink is test for Projects and you can dawonlod
          this in Githup and tink for wred this Line this is <br /> test for
          page ihink is test for Projects <br /> and you can dawonlod this in
          Githup and tink for wred this Line this is test for page ihink is test
          for Projects and you can dawonlod this <br /> in Githup and tink for
          wred this Line this is test for page ihink is test for Projects and
          you can dawonlod this in Githup and tink for wred this
          <br />
          Line this is test for page ihink is test for Projects and you can
          dawonlod this in Githup and tink for wred this Line this is test for
          page ihink is test for Projects <br /> and you can dawonlod this in
          Githup and tink for wred this Line
        </p>
        
        <div className="flex-gap60">
          <Button>Dom</Button>
          <Button>Go oto Githup</Button>
        </div>
      </Cointeaner> 
      </div>
    </>
  );
}

export default Post;
