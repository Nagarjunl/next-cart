import Layout from "../components/layout";
import { useSelector, useDispatch } from "react-redux"; // updated
import {
  addCartItems,
  clearCartItems,
  removeCartItem,
} from "@/store/slices/cartslice";
import { addItem, clearItem } from "@/store/slices/itemslice";

import React, { useState, useEffect } from "react";

export default function Product() {
  const items = useSelector((state) => state.items.items);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [total, setTotal] = useState();
  const [discount, setDiscount] = useState();

  const qtyChange = (e, itemObj) => {
    const quantity = e.target.value;
    const id = itemObj.id;
    let cartItem = { ...itemObj };

    if (quantity) {
      cartItem.total = quantity * cartItem.price;
      cartItem.qty = quantity;
      dispatch(addCartItems(cartItem));
      dispatch(
        addItem(
          items.map((obj) => {
            const { category, items } = { ...obj };
            return {
              category: category,
              items: items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      total: cartItem.total,
                      qty: quantity,
                      discount: item.discount,
                    }
                  : item
              ),
            };
          })
        )
      );
    } else {
      dispatch(removeCartItem(itemObj));
      dispatch(
        addItem(
          items.map((obj) => {
            const { category, items } = { ...obj };
            return {
              category: category,
              items: items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      total: "",
                      qty: "",
                      discount: item.discount,
                    }
                  : item
              ),
            };
          })
        )
      );
    }
  };

  useEffect(() => {
    setTotal(cartItems.reduce((acc, cartItem) => acc + cartItem.total, 0));
    setDiscount(
      cartItems.reduce(
        (acc, cartItem) => acc + cartItem.discount * cartItem.qty,
        0
      )
    );
  }, [setTotal, cartItems]);

  return (
    <>
      <Layout>
        <div className="inner-page-banner-area inner-page-banner-area-product">
          <div className="container">
            <div className="pagination-area">
              <h2>Product</h2>
            </div>
          </div>
        </div>

        <section className="sticky_cart">
          <div className="container ">
            <div className="row">
              <div className="text-center">
                <table className="ccrt" style={{ margin: "auto" }}>
                  <tbody>
                    <tr className="display-inline">
                      <td>
                        <h3 className="crt-h3">Products </h3>
                        <h3 className="crt-colon">:</h3>
                        <h3 className="crt-h3">
                          <span className="no_of_products crt">
                            {cartItems.length || 0}
                          </span>
                        </h3>
                      </td>
                      <td>
                        <h3 className="crt-h3">Discount </h3>
                        <h3 className="crt-colon">:</h3>
                        <h3 className="crt-h3">
                          <span className="discount_sum crt">
                            {discount || 0}
                          </span>
                        </h3>
                      </td>
                      <td>
                        <h3 className="crt-h3">Total </h3>
                        <h3 className="crt-colon">:</h3>
                        <h3 className="crt-h3">
                          <span className="total crt"> {total} </span>
                        </h3>
                      </td>
                      <td
                        data-toggle="modal"
                        data-target=".bs-example-modal-lg"
                      >
                        <img
                          src="img/cart-modal.png"
                          className="cart-img-modal"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

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
                        <td className="cart-form-heading">Discount</td>
                        <td className="cart-form-heading">Total</td>
                        <td className="cart-form-heading"></td>
                      </tr>
                    </thead>
                    <tbody id="quantity-holder">
                      {items &&
                        items.map((item, index) => {
                          return (
                            <>
                              <tr key={index * 1}>
                                <td colSpan="7">
                                  <h4 className="category-title-center text-center">
                                    {item.category}
                                  </h4>
                                </td>
                              </tr>
                              {item.items.map((item, index) => {
                                return (
                                  <tr key={index * 2}>
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
                                          onChange={(e) => qtyChange(e, item)}
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
                                    <td className="amount">{item.discount}</td>

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
                  <h3>
                    Disaount<span> {discount} </span>
                  </h3>

                  <div className="proceed-button">
                    <button
                      className="btn-apply-coupon disabled"
                      onClick={() => {
                        dispatch(clearCartItems());
                        dispatch(clearItem());
                      }}
                    >
                      Clear Cart
                    </button>
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
