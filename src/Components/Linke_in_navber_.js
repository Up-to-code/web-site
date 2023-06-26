import { Link } from "react-router-dom";

function Linke_in_navber_(props) {
  return (
    <>
      <Link to={props.path}>
        <div className="Linke_muno">{props.children}</div>
      </Link>
    </>
  );
}

export default Linke_in_navber_;
