import Layout from "../components/layout";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="inner-page-banner-area inner-page-banner-area-contact">
          <div className="container">
            <div className="pagination-area">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        
        <div className="contact-us-page-area section-space-bottom pt-100 relative">
          <img
            src="img/about1-bottom.png"
            className="img-responsive footer-area"
            alt=""
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="contact-us-left">
                  <h2 className="title-bar-medium-left inner-sub-title">
                    Details
                  </h2>
                  <ul>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <h3>Phone</h3>
                      <p>+91 98949 81364 (WhatsApp) +91 86681 70374</p>
                    </li>
                    <li>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <h3>Address</h3>
                      <p>
                        Site no: 156, Srinivasa Nagar, Thayilpatti village,
                        Sivakash - 626-128.
                      </p>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      <h3>E-mail</h3>
                      <p>sathanafireworks@gmail.com</p>
                    </li>
                    <li>
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                      <h3>Follow Us</h3>
                      <ul className="contact-social">
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-rss" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-google-plus"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div className="contact-us-right">
                  <h2 className="title-bar-medium-left inner-sub-title">
                    Location
                  </h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3936.434560567829!2d77.77513891478934!3d9.383202293275641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjInNTkuNSJOIDc3wrA0NiczOC40IkU!5e0!3m2!1sen!2sin!4v1687271688082!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{border:"0"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
