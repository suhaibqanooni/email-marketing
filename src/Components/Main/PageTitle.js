import React from "react";

function PageTitle(props) {
  return (
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
  );
}

export default PageTitle;
