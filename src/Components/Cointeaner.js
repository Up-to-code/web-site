import component from "../styles/styles"

function Cointeaner(props) {
  return (
    <>
      <div className="Cointeaner">{props.children}</div>
    </>
  );
}

export default Cointeaner;
