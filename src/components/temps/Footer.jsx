import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="row margin-top-20">
        <footer className="">
          <div className="col-md-12 bg-black">
            <p className="padding-10 center">Copyright ⓒ All right Reserved {year}</p>
          </div>
        </footer>
    </div>
  );
}

export default Footer;

