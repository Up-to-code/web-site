import Box_my_skiles from "./Box_my_skiles";
import Cointeaner from "./Cointeaner";
import my_img from "../assets/me2.png"
function My_skiles() {
  return (
    <>
      <section className="section_myskiles  ">
        <Cointeaner>
          <div className="f-c w-100 h-100">
      {/* // eslint-disable-next-line react/jsx-pascal-case */}
            <Box_my_skiles src={my_img}/>
          </div>
        </Cointeaner>
      </section>
    </>
  );
}

export default My_skiles;
