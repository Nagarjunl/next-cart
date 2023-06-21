import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux"; // updated
import { addCartItems } from "@/store/slices/cartslice";
import { addItem } from "@/store/slices/itemslice";

import React, { useState, useEffect } from "react";

export default function Product() {
  const items = useSelector((state) => state.items.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [total, setTotal] = useState();

  const qtyChange = (e, itemObj, pos) => {
    const quantity = e.target.value;
    const id = itemObj.id;
    let cartItem = { ...itemObj };
    cartItem.total = quantity * cartItem.price;

    dispatch(addCartItems(cartItem));

    dispatch(
      addItem(
        items.map((obj) => {
          const { category, items } = { ...obj };
          return {
            category: category,
            items: items.map((item) =>
              item.id === id
                ? { ...item, total: cartItem.total, qty: quantity }
                : item
            ),
          };
        })
      )
    );
  };

  useEffect(() => {
    console.log(cartItems);
    setTotal(cartItems.reduce((acc, cartItem) => acc + cartItem.total, 0));
  }, [setTotal, cartItems]);

  return (
    <>
      <Layout>
        <div className="inner-page-banner-area">
          <div className="container">
            <div className="pagination-area">
              <h2>Product</h2>
            </div>
          </div>
        </div>

        <div className="cart-page-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="cart-page-top table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <td className="cart-form-heading"></td>
                        <td className="cart-form-heading">Product</td>
                        <td className="cart-form-heading">Price</td>
                        <td className="cart-form-heading">Quantity</td>
                        <td className="cart-form-heading">Total</td>
                        <td className="cart-form-heading"></td>
                      </tr>
                    </thead>
                    <tbody id="quantity-holder">
                      {items &&
                        items.map((item, index) => {
                          return (
                            <>
                              <tr key={index}>
                                <td colSpan="6">
                                  <h4 className="category-title-center text-center">
                                    {item.category}
                                  </h4>
                                </td>
                              </tr>
                              {item.items.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="cart-img-holder">
                                      <a href="#">
                                        <img
                                          src={item.img}
                                          alt="cart"
                                          className="img-responsive"
                                        />
                                      </a>
                                    </td>
                                    <td>
                                      <h3>
                                        <a href="#">{item.name}</a>
                                      </h3>
                                    </td>
                                    <td className="amount">Rs. {item.price}</td>
                                    <td className="quantity">
                                      <div className="input-group quantity-holder">
                                        <input
                                          type="text"
                                          name="quantity"
                                          className="form-control quantity-input"
                                          value={item.qty}
                                          onChange={(e) =>
                                            qtyChange(e, item, index)
                                          }
                                        />
                                        <div className="input-group-btn-vertical">
                                          <button
                                            className="btn btn-default quantity-plus"
                                            type="button"
                                          >
                                            <i
                                              className="fa fa-plus"
                                              aria-hidden="true"
                                            ></i>
                                          </button>
                                          <button
                                            className="btn btn-default quantity-minus"
                                            type="button"
                                          >
                                            <i
                                              className="fa fa-minus"
                                              aria-hidden="true"
                                            ></i>
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="amount">{item.total}</td>
                                    <td className="dismiss">
                                      <a href="#">
                                        <i
                                          className="fa fa-times"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                );
                              })}
                            </>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="cart-page-bottom-right">
                  <h3>
                    Total<span> {total} </span>
                  </h3>
                  <div className="proceed-button">
                    <button
                      className="btn-apply-coupon disabled"
                      type="submit"
                      value="Login"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
