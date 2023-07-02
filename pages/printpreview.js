import Link from "next/link";

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
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [total, setTotal] = useState();
  const [discount, setDiscount] = useState();

  useEffect(() => {
    setTotal(cartItems.reduce((acc, cartItem) => acc + cartItem.total, 0));
    setDiscount(
      cartItems.reduce(
        (acc, cartItem) =>
          cartItem.actual_amount === ""
            ? acc
            : acc + (cartItem.actual_amount - cartItem.amount) * cartItem.qty,
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
              <h2>Cart</h2>
            </div>
          </div>
        </div>

        <div className="cart-page-area">
          <div className="checkout-page-area p-0 pb-50">
            <div className="container">
              <div className="row mb-30">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-30">
                  <h2 className="title-bar-medium-left inner-sub-title mb-30">
                    Note
                  </h2>
                  <div className="payment-option">
                    <div className="form-group">
                      <span>
                        <i
                          className="fa fa-dot-circle-o"
                          aria-hidden="true"
                        ></i>{" "}
                        &nbsp; After enter your detail Download Pdf WhatsApp it
                        to 33 33 33 .
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="cart-page-top table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <td className="cart-form-heading">#</td>
                        <td className="cart-form-heading">Product Name</td>
                        <td className="cart-form-heading">Content</td>
                        <td className="cart-form-heading">Actual Price</td>
                        <td className="cart-form-heading">Amount</td>
                        <td className="cart-form-heading">Quantity</td>
                        <td className="cart-form-heading">Total</td>
                        <td className="cart-form-heading"></td>
                      </tr>
                    </thead>
                    <tbody id="quantity-holder">
                      {cartItems &&
                        cartItems.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="cart-img-holder">
                                <h3>{index+1}</h3>
                              </td>
                              <td>
                                <h3>
                                  <a href="#">{item.name}</a>
                                </h3>
                              </td>
                              <td>
                                <h3>
                                  <a href="#">{item.content}</a>
                                </h3>
                              </td>
                              <td className="amount">
                                <strike>{item.actual_amount}</strike>
                              </td>
                              <td className="amount">{item.amount}</td>
                              <td className="amount">{item.qty}</td>
                              <td className="amount">{item.total}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="cart-page-bottom-right">
                  <h3>
                    Total<span> {total} </span>
                  </h3>
                  <h3>
                    Discount<span> {discount} </span>
                  </h3>

                  <div className="proceed-button">
                    <button
                      className="btn-apply-coupon  mr-15"
                      onClick={() => {
                        dispatch(clearCartItems());
                        dispatch(clearItem());
                      }}
                    >
                      Clear Cart
                    </button>

                    <Link href="user">
                      <button className="btn-apply-coupon disabled">
                        Proceed To Buy
                      </button>
                    </Link>
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
