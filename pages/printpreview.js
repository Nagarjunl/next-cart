import Image from "next/image";

import Layout from "../components/layout";
import { useSelector } from "react-redux"; // updated
import React, { useState, useEffect } from "react";
import BillInPDF from "./billinpdf";
import ItemHook from "@/hooks/itemHook";

export default function PrintPreview() {
  const { cartItems } = ItemHook();

  return (
    <>
      <Layout>
        <div className="inner-page-banner-area inner-page-banner-area-product">
          <div className="container">
            <div className="pagination-area">
              <h2>Invoice Print</h2>
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

          {cartItems.length > 0 ? (
            <div className="container">
              <BillInPDF />
            </div>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="cart-page-top table-responsive">
                    <table className="table table-hover">
                      <tbody id="quantity-holder">
                        <tr>
                          <td colSpan="8">
                            <h4 className="category-title-center text-center">
                              No Items In Your Cart
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
