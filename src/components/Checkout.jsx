import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB67kUVGD9sEdX7qDiUPvlOz8UQfm7folHBw&usqp=CAU"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shoppping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to Button" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
