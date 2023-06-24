import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        <div className="inner-page-banner-area inner-page-banner-area-about">
          <div className="container">
            <div className="pagination-area">
              <h2>About Us</h2>
            </div>
          </div>
        </div>

        <div className="about-page-area">
          <img src="img/about1-bottom.png" className="img-responsive" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="about-page-left">
                  <h2>Our History</h2>
                  <p>
                    <span>1947</span> ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip.ex ea commodo
                    consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="about-page-right">
                  <div className="about-page-img-holder">
                    <img
                      src="img/crackers/about1-banner1.jpg"
                      className="img-responsive"
                      alt="about1-banner"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="about-page-bottom">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div
                    className="about-page-bottom-box border-right wow zoomIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    <div className="media">
                      <a href="#" className="pull-left">
                        <i className="flaticon-verified-protection"></i>
                      </a>
                      <div className="media-body text-center">
                        <h3>
                          <a href="#">We Are Certified</a>
                        </h3>
                        <p>
                          Corem ipsum dolor sit amet, consectetur adipiscing
                          elit. In sed nisl elementumty yer scelerisque posuere
                          neque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div
                    className="about-page-bottom-box wow zoomIn"
                    data-wow-duration="2s"
                    data-wow-delay="1.5s"
                  >
                    <div className="media">
                      <a href="#" className="pull-left">
                        <i className="flaticon-coffee-cup"></i>
                      </a>
                      <div className="media-body text-center">
                        <h3>
                          <a href="#">Cup Of Coffee</a>
                        </h3>
                        <p>
                          Corem ipsum dolor sit amet, consectetur adipiscing
                          elit. In sed nisl elementumty yer scelerisque posuere
                          neque.
                        </p>
                      </div>
                    </div>
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
