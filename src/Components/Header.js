import Cointeaner from "./Cointeaner";
import my_img from "../assets/me_1.png";
function Header() {
  return (
    <header>
      <Cointeaner>
        <div className="con_header">
          <div className="context">
            <h2 className="p_title">
              Hi my name Is <br /> Ahmed
              <span className="seliketin">Mansuor</span>
            </h2>
            <p className="p_contacet">I am Ahmed Front end devloper </p>
          </div>
          <div className="con_img">
            <div className="bor"></div>
            <img src={my_img} alt={my_img} />
          </div>
        </div>
      </Cointeaner>
    </header>
  );
}

export default Header;
