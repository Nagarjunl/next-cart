import React, { Fragment } from "react";
import { clearItem } from "@/store/slices/itemslice";

import Link from "next/link";

import Layout from "../components/layout";
import ItemHook from "@/hooks/itemHook";

export default function Product() {
  const {
    items,
    total,
    discount,
    cartItems,
    showDiscount,
    qtyChange,
    dispatch,
  } = ItemHook();

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
                      {showDiscount && (
                        <td>
                          <h3 className="crt-h3">Discount </h3>
                          <h3 className="crt-colon">:</h3>
                          <h3 className="crt-h3">
                            <span className="discount_sum crt">{discount}</span>
                          </h3>
                        </td>
                      )}
                      <td>
                        <h3 className="crt-h3">Total </h3>
                        <h3 className="crt-colon">:</h3>
                        <h3 className="crt-h3">
                          <span className="total crt"> {total} </span>
                        </h3>
                      </td>
                      <td>
                        <Link href="cart">
                          <img
                            src="img/cart-modal.png"
                            className="cart-img-modal"
                          />
                        </Link>
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
                        <td className="cart-form-heading">#</td>
                        <td className="cart-form-heading">Product Name</td>
                        <td className="cart-form-heading">Unit</td>
                        {showDiscount && (
                          <td className="cart-form-heading">Actual Price</td>
                        )}
                        <td className="cart-form-heading">Amount</td>
                        <td className="cart-form-heading">Quantity</td>
                        <td className="cart-form-heading">Total</td>
                        <td className="cart-form-heading"></td>
                      </tr>
                    </thead>
                    <tbody id="quantity-holder">
                      {items &&
                        items.map((item) => {
                          return (
                            <Fragment key={item.id}>
                              <tr key={item.id}>
                                <td colSpan="8">
                                  <h4 className="category-title-center text-center">
                                    {item.category}
                                  </h4>
                                </td>
                              </tr>
                              {item.items.map((item) => {
                                return (
                                  <tr key={item.id}>
                                    <td className="cart-img-holder">
                                      <h3>{item.id}</h3>
                                    </td>
                                    <td>
                                      <h3>{item.name}</h3>
                                    </td>
                                    <td>
                                      <h3>{item.unit}</h3>
                                    </td>
                                    {showDiscount && (
                                      <td className="amount">
                                        <strike>{item.actual_amount}</strike>
                                      </td>
                                    )}
                                    <td className="amount">{item.amount}</td>
                                    <td className="quantity">
                                      <div className="input-group quantity-holder">
                                        <input
                                          type="number"
                                          min={0}
                                          name="quantity"
                                          className="form-control quantity-input"
                                          value={item.qty}
                                          onChange={(e) =>
                                            qtyChange(e.target.value, item)
                                          }
                                          autoComplete="off"
                                        />
                                        <div className="input-group-btn-vertical">
                                          <button
                                            className="btn btn-default quantity-plus"
                                            type="button"
                                            onClick={() =>
                                              qtyChange(item.qty + 1, item)
                                            }
                                          >
                                            <i
                                              className="fa fa-plus"
                                              aria-hidden="true"
                                            ></i>
                                          </button>
                                          <button
                                            className="btn btn-default quantity-minus"
                                            type="button"
                                            onClick={() =>
                                              qtyChange(item.qty - 1, item)
                                            }
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
                                      <button
                                        onClick={(e) => qtyChange(e, item)}
                                      >
                                        <i
                                          className="fa fa-times"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </Fragment>
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
                  {showDiscount && (
                    <h3>
                      DisCount<span> {discount} </span>
                    </h3>
                  )}
                  <div className="proceed-button">
                    <button
                      className="btn-apply-coupon disabled mr-15"
                      onClick={() => {
                        dispatch(clearItem());
                      }}
                    >
                      Clear Cart
                    </button>
                    <Link href="cart">
                      <button className="btn-apply-coupon disabled">
                        Go To Cart
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
