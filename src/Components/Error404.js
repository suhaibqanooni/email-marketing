import React from "react";

function Error404(props) {
  return (
    <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>404</h1>
      <h2>The page you are looking for doesn't exist.</h2>
      <a class="btn" href="/">
        Back to home
      </a>
      <img
        src="assets/img/not-found.svg"
        class="img-fluid py-5"
        alt="Page Not Found"
      />
      <div class="credits">
        Designed by
        <a href="https://suhaib-qanooni.vercel.app/">Suhaib Qanooni</a>
      </div>
    </section>
  );
}

export default Error404;
