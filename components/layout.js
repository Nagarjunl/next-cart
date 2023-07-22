import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Layout({ children }) {
  const router = useRouter();

  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);
  });

  if (width <= 768) {
    document.body.classList.add("mean-container");
  } else {
    document.body.classList.remove("mean-container");
  }

  return (
    <>
      <div className="mean-bar">
        <Link href="/" className="logo-mobile-menu">
          <Image
            className="img-responsive"
            src="/img/Sathana Fireworks.png"
            width={70}
            height={70}
            alt="Sathana Fireworks"
          />
        </Link>
        <a
          href="#nav"
          className={showMenu ? "meanmenu-reveal" : "meanmenu-reveal meanclose"}
          onClick={() => setShowMenu(!showMenu)}
          style={{
            right: " 0px",
            left: "auto",
            textAlign: "center",
            textIndent: "0px",
            fontSize: "18px",
          }}
        >
          {showMenu ? (
            "X"
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </a>
        <nav
          className="mean-nav"
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <ul>
            <li className={router.pathname == "/" ? "active" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname == "/about" ? "active" : ""}>
              <Link href="about">About</Link>
            </li>
            <li className={router.pathname == "/product" ? "active" : ""}>
              <Link href="product">Product</Link>
            </li>
            <li className={router.pathname == "/cart" ? "active" : ""}>
              <Link href="cart">Cart</Link>
            </li>
            <li className={router.pathname == "/contact" ? "active" : ""}>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrapper" style={{ overflow: "unset" }}>
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
                          <Link href="callto:+919894981364">
                            +91 98949 81364
                          </Link>
                        </li>
                        <li>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <Link href="mailto:sathanafireworks@gmail.com">
                            sathanafireworks@gmail.com
                          </Link>
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
            <div className="rm-pt header-bottom-area" id="sticker">
              <div className="container">
                <div className="row flex-menu">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                    <div className="">
                      <Link href="/" className="logo-mobile-menu">
                        <Image
                          src="/img/Sathana Fireworks.png"
                          width={100}
                          height={100}
                          alt="Sathana Fireworks"
                          style={{ paddingBottom: 5 }}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                    <div className="main-menu-area">
                      <nav>
                        <ul>
                          <li
                            className={router.pathname == "/" ? "active" : ""}
                          >
                            <Link href="/">Home</Link>
                          </li>
                          <li
                            className={
                              router.pathname == "/about" ? "active" : ""
                            }
                          >
                            <Link href="about">About</Link>
                          </li>
                          <li
                            className={
                              router.pathname == "/product" ? "active" : ""
                            }
                          >
                            <Link href="product">Product</Link>
                          </li>
                          <li
                            className={
                              router.pathname == "/cart" ? "active" : ""
                            }
                          >
                            <Link href="cart">Cart</Link>
                          </li>
                          <li
                            className={
                              router.pathname == "/contact" ? "active" : ""
                            }
                          >
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
                        <li className={router.pathname == "/" ? "active" : ""}>
                          <Link href="/">Home</Link>
                        </li>
                        <li
                          className={
                            router.pathname == "/about" ? "active" : ""
                          }
                        >
                          <Link href="about">About</Link>
                        </li>
                        <li
                          className={
                            router.pathname == "/product" ? "active" : ""
                          }
                        >
                          <Link href="product">Product</Link>
                        </li>
                        <li
                          className={router.pathname == "/cart" ? "active" : ""}
                        >
                          <Link href="cart">Cart</Link>
                        </li>
                        <li
                          className={
                            router.pathname == "/contact" ? "active" : ""
                          }
                        >
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
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                  <div className="footer-box">
                    <h3 className="title-bar-footer">About Cafe</h3>
                    <div className="footer-about">
                      <p>
                        We are the leading supplier of Sparklers, Ground
                        Chakkars, Flower Pots, Fountains, Fancy Crackers, Sound
                        Crackers, Novelty Fireworks, Rockets, Bombs, Twinkling
                        Stars, Elite Crackers, Fancy Deluxe Fountains, Loose
                        Crackers, Electric Crackers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-md-offset-1 col-sm-4 col-xs-12">
                  <div className="footer-box">
                    <h3 className="title-bar-footer"> For Contact</h3>
                    <ul className="opening-schedule">
                      <li>
                        Address : Site no: 156, Srinivasa Nagar, Thayilpatti
                        village, Sivakash-626128
                      </li>
                      <li>Email: sathanafireworks@gmail.com</li>
                      <li>Mobile: +91 98949 81364 (WhatsApp) </li>
                      <li>Mobile: +91 86681 70374</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom">
            <div className="container">
              <p>
                &copy; 2023. &nbsp; Designed by &nbsp;
                <a target="_blank" href="https://coderplays.com/">
                  coderplays.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
