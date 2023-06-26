import "../styles/Welcome.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="h-100vh f-c min">
      <div className="Popu-Box f-c f-col">
        <h1 className="f-c font-50px Q">Who are you ?</h1>
        <div className="Boxes f-c">
          <Link to="/Company">
            <div className="Box">Company</div>
          </Link>
          <Link to="/Client">
            <div className="Box">Client</div>
          </Link>
        </div>
        <Link to="/Projects" >
          <div className="Box">I just want to see your projects</div>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
