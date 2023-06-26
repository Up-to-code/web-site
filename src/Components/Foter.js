/* eslint-disable react/jsx-pascal-case */
import Cointeaner from "./Cointeaner";
import Title from "./Titles";
import component from "../styles/styles";
import Linkes_foter from "./Linkes_foter";

import { Link } from "react-router-dom";

function Foter() {
  return (
    <footer>
      <Cointeaner>
        <section className="Sections-fotwer">
          <section className="Sections">
            <Title>
              Call me<div className="point">.</div>
            </Title>
            <p className="email">Email ensitcode@gmail.com</p>
            <p className="phone">Phone +201015638178</p>
            <p className="uesr-name">Uesr name github ensite-code</p>
          </section>
          <section className="Sections">
            <Title>
              Linkes<div className="point">.</div>
            </Title>
            <div className="Linkes_foter">
              <Linkes_foter linke="/">Fecbook</Linkes_foter>
              <Linkes_foter linke="/">Linkedin</Linkes_foter>
              <Linkes_foter linke="/">Github</Linkes_foter>
              <Linkes_foter linke="/">Instegram</Linkes_foter>
            </div>
          </section>
          <section className="Sections">
            <Title>
              Sections<div className="point">.</div>
            </Title>
            <div className="Linkes_foter">
              <div className="LInke_link">
                <Link to="/">Home</Link>
                <Link to="/Client">Section Clients</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Company" >Section Companys</Link>
              </div>
            </div>
          </section>
        </section>
      </Cointeaner>
    </footer>
  );
}

export default Foter;
