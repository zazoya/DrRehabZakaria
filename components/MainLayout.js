import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Social from "./Social";

export default function MainLayout(props) {
  return (
    <>
      <Head>
        <title>Dr - Rehab Zakria</title>
        <meta name="description" content="DR Rehab Zakaria WebSite" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" sizes="180x180" href="/Img/favicon-180x180.png" />
        <link rel="icon" sizes="32x32" href="/Img/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/Img/favicon-16x16.png" />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <Social />
    </>
  );
}
