import React from "react";
import PageTitle from "./Main/PageTitle";
import Tabs from "./Main/Tabs";

function Main(props) {
  return (
    <main id="main" class="main">
      <PageTitle />
      <Tabs />
    </main>
  );
}

export default Main;
