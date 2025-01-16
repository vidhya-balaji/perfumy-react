import one from "../images/perfume1.jpg";
import two from "../images/perfume2.jpg";
import three from "../images/perfume3.jpg";
function Product() {
  return (
    <div className="products">
      <div id="box">
        <img src={one} alt="Product1"></img>
        <p>Channel Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div id="box">
        <img src={two} alt="Product2"></img>
        <p>di Gioia Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div id="box">
        <img src={three} alt="Product3"></img>
        <p>N 5 Channel Club-Be Spoke Perfume | Premium Long Lasting Perfume</p>
      </div>

    </div>
  )

}
export default Product