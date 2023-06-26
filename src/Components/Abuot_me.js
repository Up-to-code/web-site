import Titles from "./Titles";

function Abuot_me(props) {
  return (
    <div className="box_skiles f-r">
      <section className="box_all_skiles">
        <p className="cont_me">
          <Titles>
            Abuot me<div className="point">.</div>
          </Titles>
          Hi my name Is AhmedMansuor I am Ahmed Front end devloper
        </p>
      </section>

      <section className="img_section">
        <div className="bor"></div>
        <img src={props.src} alt="" />
      </section>
    </div>
  );
}

export default Abuot_me;
