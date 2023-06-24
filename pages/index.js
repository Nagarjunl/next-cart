import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <img
            className="img-responsive"
            src="img/crackers/banner-2.jpg"
            alt="Sadhana Crackers"
            style={{margin:"auto",width:"100%"}}
          />
        </div>
      </div>

      <div className="about1-area section-space">
        <img
          src="img/about1-bottom.png"
          className="img-responsive footer-area"
          alt=""
        />

        <img
          className="img-responsive section-back"
          src="img/crackers/firecracker.png"
          alt="Sestion Back"
        />
        <div className="container">
          <div className="row">
            <h2 className="title-color">
              Welcome to <span className="cp-color">Sadhana </span>
            </h2>
            <span className="subtitle-color"> Fire works </span>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 wow zoomIn text-center">
              <img
                className="img-responsive"
                src="img/crackers/2.png"
                alt="Sadhana Crackers"
                style={{margin:"auto"}}
              />
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center">
              <p style={{margin:"auto"}} className="wow zoomIn">
                As per 2018 supreme court order, online sale of firecrackers are
                not permitted! We value our customers and at the same time,
                respect jurisdiction. We request you to add your products to the
                cart and submit the required crackers through the enquiry
                button. We will contact you within 24 hrs and confirm the order
                through WhatsApp or phone call.
              </p>
              <br />

              <p style={{margin:"auto"}} className="wow zoomIn">
                Please add and submit your enquiries and enjoy your Diwali with
                Sri Sarathi Agencies. Our License No.----. Sri Sarathi Agencies
                as a company following 100% legal & statutory compliances and
                all our shops, go-downs are maintained as per the explosive
                acts. We send the parcels through registered and legal transport
                service providers as like every other major companies in
                Sivakasi is doing so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
