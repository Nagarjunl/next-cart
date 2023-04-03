import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="vendor/OwlCarousel/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          href="vendor/OwlCarousel/owl.theme.default.min.css"
        />
        <link rel="stylesheet" href="css/meanmenu.min.css" />
        <link
          rel="stylesheet"
          href="vendor/slider/css/nivo-slider.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="vendor/slider/css/preview.css"
          type="text/css"
          media="screen"
        />
        <link rel="stylesheet" href="css/jquery.datetimepicker.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
