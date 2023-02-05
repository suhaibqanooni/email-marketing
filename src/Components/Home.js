import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

function Home(props) {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
