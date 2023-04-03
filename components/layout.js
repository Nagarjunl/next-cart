import Link from "next/link";
export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="header2-area">
            <div className="header-top-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="header-top-left">
                      <ul>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <a href="Tel:+1234567890"> + 123 456 78910 </a>
                        </li>
                        <li>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <a href="#">info@redchili.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="header-top-right">
                      <ul>
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
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom-area" id="sticker">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <div className="logo-area">
                      <a href="index.html">
                        <img
                          className="img-responsive"
                          src="img/logo-color.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <div className="main-menu-area">
                      <nav>
                        <ul>
                          <li className="active">
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="about">About</Link>
                          </li>
                          <li>
                            <Link href="product">Product</Link>
                          </li>
                          <li>
                            <Link href="contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mobile-menu">
                    <nav id="dropdown">
                      <ul>
                        <li className="active">
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="about">About</Link>
                        </li>
                        <li>
                          <Link href="product">Product</Link>
                        </li>
                        <li>
                          <Link href="contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer>
          <div className="footer-area-top section-space">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="footer-box">
                    <h3 className="title-bar-footer">About Cafe</h3>
                    <div className="footer-about">
                      <p>
                        We aim to home-produce as much as possiblefor the best
                        quality, and to reduce food mcious cakes, traditional
                        Devon soups, sauces and accompanimentsion.We aim to
                        home-produce as much as possiblefor the best quality,
                        and to reduce food mcious cakes.
                      </p>
                    </div>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-rss" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="footer-box">
                    <h3 className="title-bar-footer">Blog Posts</h3>
                    <div className="footer-blog-post">
                      <div className="media">
                        <div className="media-body">
                          <h4>
                            <a href="#">Beef Burger Daily Special Foods That</a>
                          </h4>
                          <p>20 Aug, 2016</p>
                        </div>
                      </div>
                    </div>
                    <div className="footer-blog-post">
                      <div className="media">
                        <div className="media-body">
                          <h4>
                            <a href="#">Beef Burger Daily Special Foods That</a>
                          </h4>
                          <p>20 Aug, 2016</p>
                        </div>
                      </div>
                    </div>
                    <div className="footer-blog-post">
                      <div className="media">
                        <div className="media-body">
                          <h4>
                            <a href="#">Beef Burger Daily Special Foods That</a>
                          </h4>
                          <p>20 Aug, 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div className="footer-box">
                    <h3 className="title-bar-footer">Opening Hours</h3>
                    <ul className="opening-schedule">
                      <li>
                        Monday<span> 5pm - 11pm</span>
                      </li>
                      <li>
                        Tuesday<span> 5pm - 11pm</span>
                      </li>
                      <li>
                        Wednesday <span> Closed</span>
                      </li>
                      <li>
                        Thursday<span> 5pm - Midnight</span>
                      </li>
                      <li>
                        Friday<span> 4:30pm - Midnight</span>
                      </li>
                      <li>
                        Saturday <span> 5pm - 11pm</span>
                      </li>
                      <li>
                        Sunday<span> 5pm - 11pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom">
            <div className="container">
              <p>
                © 2016 RedChili All Rights Reserved. &nbsp; Designed by
                <a target="_blank" href="http://radiustheme.com/">
                  {" "}
                  RadiusTheme
                </a>
                .com
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
