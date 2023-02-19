import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-card.scss";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
      <div className="product__item">
        <Link to={`/foods/${id}`}>
          <div className="product__img">
            <img src={image01} alt="product-img" className="w-50" />
          </div>
        </Link>

          <div className="product__content">
            <h5>
              <div>{title}</div>
            </h5>
            <div className=" d-flex align-items-center justify-content-between ">
              <span className="product__price">${price}</span>
              <button className="addTOCart__btn" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
      </div>
  );
};

export default ProductCard;