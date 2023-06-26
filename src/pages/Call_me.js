/* eslint-disable react/jsx-pascal-case */
import Abuot_me from "../Components/Abuot_me";
import Cointeaner from "../Components/Cointeaner";
import Foter from "../Components/Foter";
import Githp_ from "../Components/Githp_";
import Linke_in_navber_ from "../Components/Linke_in_navber_";
import Navbar from "../Components/Navbar";
import img from "../assets/me2.png";

function Call_me() {
  return (
    <>
      <Navbar>
        <Linke_in_navber_ path="/">Home</Linke_in_navber_>
        <Linke_in_navber_ path="/Projects">All projects</Linke_in_navber_>
        <Linke_in_navber_ path="/Client">Section clients</Linke_in_navber_>
        <Linke_in_navber_ path="/Company">Section Companys</Linke_in_navber_>
      </Navbar>
      <div className="mt-70"></div>
      <Cointeaner>
        <Abuot_me src={img} />
      </Cointeaner>
      <Githp_ />
      <Foter />
    </>
  );
}

export default Call_me;
