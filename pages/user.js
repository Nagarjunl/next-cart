import Layout from "../components/layout";
import UserForm from "@/components/userform";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="inner-page-banner-area inner-page-banner-area-contact">
          <div className="container">
            <div className="pagination-area">
              <h2>Billing Details</h2>
            </div>
          </div>
        </div>

        <div className="checkout-page-area section-space-bottom pt-100 relative">
          <img
            src="img/about1-bottom.png"
            className="img-responsive footer-area"
            alt=""
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-30">
                <h2 className="title-bar-medium-left inner-sub-title mb-30">
                  Terms And Conditions
                </h2>
                <div className="payment-option">
                  <div className="form-group">
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>{" "}
                      &nbsp; Transport charges from Sivakasi to your destination
                      is TOPAY basis only.
                    </span>
                  </div>
                  <div className="form-group">
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>{" "}
                      &nbsp; C.G.S.T.18 % will be charged in the states other
                      than Tamilnadu.
                    </span>
                  </div>
                  <div className="form-group">
                    <span>
                      <i className="fa fa-dot-circle-o" aria-hidden="true"></i>{" "}
                      &nbsp; 100% Payment has to be done during place order.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h2 className="title-bar-medium-left inner-sub-title mb-30">
                  Fill All Fields
                </h2>
                <div className="billing-details-area">
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
