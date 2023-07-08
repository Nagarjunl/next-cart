import Image from "next/image";

import Layout from "../components/layout";
import { useSelector } from "react-redux"; // updated
import React from "react";
import ItemHook from "@/hooks/itemHook";

export default function PrintPreview() {
  const user = useSelector((state) => state.user.user);
  const { total, cartItems } = ItemHook();

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
              <div className="invoide-detail-container">
                <div> Invoice Number : Inv-001 </div>
                <div> Invoice Date : 12/12/2023 </div>
              </div>
              <div className="logo-container">
                <div className="logo-container-left">
                  <Image
                    src="/img/logo.png"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                  />
                </div>

                <div className="logo-container-right">
                  <span> Sadhana Crackers</span>
                  <span> +91 98949 81364 (WhatsApp) </span>
                  <span> +91 86681 70374 </span>
                  <span> sathanafireworks@gmail.com </span>
                  <span>Site no: 156, Srinivasa Nagar,</span>
                  <span> Thayilpatti Village, Sivakash - 626128</span>
                </div>
              </div>

              <div className="header-container-header">
                <div className="customer-detail-header">
                  <u>Customer Detail</u>
                </div>
                <div className="bank-detail-header">
                  <u>Bank Detail</u>
                </div>
              </div>

              <div className="header-container">
                <div className="customer-detail">
                  <span>Name </span>
                  <span>: {user.name}</span>
                  <span>Address </span> <span>: {user.address}</span>
                  <span>City </span> <span>: {user.city}</span>
                  <span>District </span> <span>: {user.district}</span>
                  <span>Pincode </span> <span>: {user.pincode}</span>
                </div>

                <div className="bank-detail">
                  <span>A/C Name </span>
                  <span>: Sadhana Crackers</span>
                  <span>A/C Number </span> <span>: 33091888887667</span>
                  <span>A/C Type </span> <span>: Savings account </span>
                  <span>Bank Name </span> <span>: State Bank Of India</span>
                  <span>IFSC Code </span> <span>: SBI0007</span>
                </div>
              </div>

              <div className="item-container">
                <div>#</div>
                <div>Product Name</div>
                <div>Content</div>
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

                        <div className="text-right">{item.amount}</div>
                        <div className="text-center">{item.qty}</div>
                        <div className="text-right">{item.total}</div>
                      </>
                    );
                  })}
              </div>

              <div className="total-container">
                <div className="text-right">Total</div>
                <div className="text-right">{total}</div>
              </div>
              <div className="thank-you-container text-center">
                Thank you for your order
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
