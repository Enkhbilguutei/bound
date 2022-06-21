import React from "react";
import Banner from "../component/Banner";
import Header from "../component/common/Header";
import Cart from "../component/Cart";
import Footer from "../component/common/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Cart />
      <Footer />
    </div>
  );
}

export default Home;
