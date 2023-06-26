/* eslint-disable react/jsx-pascal-case */
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import My_skiles from "../Components/My_skiles";
import Top_porject from "../Components/Top_porject";
import Project_box from "../Components/Project_box";
import Titles from "../Components/Titles";
import Foter from "../Components/Foter";
import Githp_ from "../Components/Githp_";
import Cointeaner from "../Components/Cointeaner";
import Abuot_me from "../Components/Abuot_me";
import img from "../assets/me2.png";
// eslint-disable-next-line no-unused-vars
import component from "../styles/styles";
import Linke_in_navber_ from "../Components/Linke_in_navber_";

function Client() {
  return (
    <>
    <Navbar>
        <Linke_in_navber_ path="/">Home</Linke_in_navber_>
        <Linke_in_navber_ path="/Projects">All projects</Linke_in_navber_>
        <Linke_in_navber_ path="/Company">Section Companys</Linke_in_navber_>
        <Linke_in_navber_ path="/Call_me">Call me</Linke_in_navber_>
    </Navbar>

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

export default Client;
