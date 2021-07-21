import "./style.css";
import { Link } from "react-router-dom";

const Product = ({ product: { picture, price, title, city, id } }) => {
  const decimals = price?.decimals.toString().substring(2).padEnd(2, "0");
  return (
    <Link to={`/items/${id}`} className="product">
      <div className="product-picture">
        <img className="thumbnail" src={picture} alt={`product: ${title}`} />
      </div>
      <div className="product-details">
        <p className="product-price">
          {`${price.currency} ${price.amount}`}
          <sup className="item-decimal">{`${decimals}`}</sup>
        </p>
        <h2 className="product-title">{title}</h2>
      </div>
      <div className="product-address">{city}</div>
    </Link>
  );
};

export default Product;
