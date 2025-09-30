import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RequestProduct from './RequestProduct';

function ProductItem(props) {
  const [open, setOpen] = useState(false);

  const handleRequestClick = (e) => {
    e.preventDefault();        // don't navigate via <Link>
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <li className="product__item">
        <Link className="product__item__link" to={props.path}>
          <figure className="product__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt={props.title} className="product__item__img" />
          </figure>

          <div className="product__item__info">
            <h5 className="product__item__text">{props.text}</h5>
            <p className="product_subtitle">{props.subtitle}</p>
            <p className="product_price">{props.price}</p>

            {props.tags && props.tags.length > 0 && (
              <div className="product__tags">
                {props.tags.map((tag, i) => (
                  <span key={i} className="product__tag">{tag}</span>
                ))}
              </div>
            )}

            {/* Request button */}
            <button
              type="button"
              className="product__request_btn"
              onClick={handleRequestClick}
            >
              Request this product
            </button>
          </div>
        </Link>
      </li>

      {/* Modal lives at the same level so it isn't inside the clickable Link */}
      <RequestProduct
        open={open}
        productName={props.text}        // or props.title, whichever you prefer
        onClose={() => setOpen(false)}
        // endpoint="/api/request-product" // optional override
      />
    </>
  );
}

export default ProductItem;
