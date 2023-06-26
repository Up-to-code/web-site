import Cointeaner from "./Cointeaner"
function Top_porject(props) {
  return (
<div>
<section className="section_top_tojects">
<Cointeaner>
    {props.children}
</Cointeaner>
</section>
</div>
  )
}
export default Top_porject