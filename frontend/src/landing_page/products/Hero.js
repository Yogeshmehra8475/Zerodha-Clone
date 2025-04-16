import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5 ">
        <div className="row text-center mt-5">
      <h1>Zerodha Products</h1>
      <h3 className="fs-4 text-muted mt-2">Sleek, modern, and intuitive trading platforms</h3>
      <p className="mt-3 mb-5">
        Check out our
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
    </div>
  );
}

export default Hero;
