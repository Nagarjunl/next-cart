import Layout from "../components/layout";
import { useSelector, useDispatch } from "react-redux"; // updated
import React, { useState, useEffect } from "react";

export default function PrintPreview() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.user);

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
            <div className="print-container">
              <div className="header-container">
                <div className="customer-detail">
                  <span>Name </span>
                  <span>
                    <strong> : {user.name}</strong>
                  </span>
                  <span>Address </span> <span>: {user.address}</span>
                  <span>City </span> <span>: {user.city}</span>
                  <span>District </span> <span>: {user.district}</span>
                  <span>Pincode </span> <span>: {user.pincode}</span>
                </div>

                <div className="bank-detail">
                  <span>A/C Name </span>
                  <span>
                    <strong>: P.Vishnuvarthini</strong>
                  </span>
                  <span>A/C Number </span> <span>: 33090100001552</span>
                  <span>A/C Type </span> <span>: Savings account </span>
                  <span>Bank Name </span> <span>: Bank of Baroda</span>
                  <span>IFSC Code </span> <span>: BARBOSIVAKA</span>
                </div>
              </div>

              <div className="item-container">
                <div>#</div>
                <div>Product Name</div>
                <div>Content</div>
                {/* <div>Actual Price</div> */}
                <div>Amount</div>
                <div>Quantity</div>
                <div>Total</div>
                {cartItems &&
                  cartItems.map((item, index) => {
                    return (
                      <>
                        <div>{index + 1}</div>
                        <div>{item.name}</div>
                        <div className="text-center">{item.content}</div>
                        {/* <div className="amount">
                        <strike>{item.actual_amount}</strike>
                      </div> */}
                        <div className="text-right">{item.amount}</div>
                        <div className="text-center">{item.qty}</div>
                        <div className="text-right">{item.total}</div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
