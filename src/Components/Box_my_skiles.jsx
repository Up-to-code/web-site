function Box_my_skiles(props) {
  return (
    <div className="box_skiles">

      <section className="img_section">
        <div className="bor"></div>
        <img src={props.src} alt="" />
      </section>
      
      <section className="box_all_skiles">
        <div className="line">
        <p className="skile">HTML</p>
        <p className="skile">CSS</p>
        <p className="skile">CSS3</p>
        <p className="skile">Javascript</p>
        </div>

        <div className="line">
        <p className="skile">Node js</p>
        <p className="skile">React</p>
        <p className="skile">Express</p>
        </div>

        <div className="line">
        <p className="skile">Bootstarpe</p>
        <p className="skile">tillwin css</p>
        <p className="skile">Firebase</p>
        </div>

        <div className="line">
        <p className="skile">and i am learne Next js</p>
        </div>
      </section>
    </div>
  );
}

export default Box_my_skiles;
