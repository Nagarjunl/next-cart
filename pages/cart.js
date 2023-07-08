import Link from "next/link";
import Layout from "../components/layout";
import { clearItem } from "@/store/slices/itemslice";
import React from "react";
import ItemHook from "@/hooks/itemHook";

export default function Product() {
  const {
    total,
    discount,
    cartItems,
    showDiscount,
    dispatch,
    cartQtyChange,
    removeItemFromCart,
  } = ItemHook();

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
                            <span className="discount_sum crt">
                              {discount || 0}
                            </span>
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
                        <td className="cart-form-heading text-center">Unit</td>
                        {showDiscount && (
                          <td className="cart-form-heading text-center">
                            Actual Price
                          </td>
                        )}
                        <td className="cart-form-heading text-center">
                          Amount
                        </td>
                        <td className="cart-form-heading text-center">
                          Quantity
                        </td>
                        <td className="cart-form-heading text-center">Total</td>
                        <td className="cart-form-heading"></td>
                      </tr>
                    </thead>
                    <tbody id="quantity-holder">
                      {cartItems.length > 0 ? (
                        <>
                          {cartItems.map((item, index) => (
                            <tr key={item.id * 2}>
                              <td className="cart-img-holder">
                                <h3>{index + 1}</h3>
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
                                    // min={0}
                                    name="quantity"
                                    className="form-control quantity-input"
                                    value={item.qty}
                                    onChange={(e) =>
                                      cartQtyChange(e.target.value, item)
                                    }
                                    autoComplete="off"
                                  />
                                  <div className="input-group-btn-vertical">
                                    <button
                                      className="btn btn-default quantity-plus"
                                      type="button"
                                      onClick={() =>
                                        cartQtyChange(item.qty + 1, item)
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
                                        cartQtyChange(item.qty - 1, item)
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
                                  onClick={(e) => removeItemFromCart(e, item)}
                                >
                                  <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <tr>
                          <td colSpan="8">
                            <h4 className="category-title-center text-center">
                              No Items In Your Cart
                            </h4>
                          </td>
                        </tr>
                      )}
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
                      Discount<span> {discount} </span>
                    </h3>
                  )}

                  <div className="proceed-button">
                    <button
                      className="btn-apply-coupon  mr-15"
                      onClick={() => {
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
