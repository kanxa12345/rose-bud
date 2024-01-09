import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="RoseBud Human Resource Pvt. Ltd." />
        <meta
          name="author"
          content="Name Surname, Chairman, RoseBud Human Resource Pvt. Ltd."
        />
        <meta name="keywords" content="manpower company, vacancy, apply" />
        <meta
          name="description"
          content="Discover excellence in human resource solutions with RoseBud Human Resource Pvt. Ltd. As a leading manpower agency, we specialize in connecting businesses with skilled and dedicated professionals. Our tailored recruitment services provide a seamless bridge between employers and talented individuals, fostering growth and success. Trust Niles International for unparalleled staffing expertise and unlock a world of opportunities."
        />
        <link
          rel="shortcut icon"
          href="/images/favicon_io/favicon-16x16.png"
          type="image/png"
          size="16x16"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon_io/favicon-32x32.png"
          type="image/png"
          size="32x32"
        />
        <title>RoseBud Human Resource Pvt. Ltd.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
