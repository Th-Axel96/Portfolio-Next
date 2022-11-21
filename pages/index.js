// import HomePage from './home'
import Head from "next/head";

import HomePage from "@pages/home/";

const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio Moussart Axel</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
