import Cointeaner from "./Cointeaner";
function Navbar({children}) {
  return (
    <nav>
      <Cointeaner>
        <div className="min_nav">
          <h2 className="Logo">
            <span className="seliketin">Ahmed</span>Mansuor
          </h2>
          <div className="muno">{children}</div>
        </div>
      </Cointeaner>
    </nav>
  );
}

export default Navbar;
