import React from "react";

function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Black Box Design</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">
        Designed by{" "}
        <a href="https://suhaib-qanooni.vercel.app/">Suhaib Qanooni</a>
      </div>
    </footer>
  );
}

export default Footer;
