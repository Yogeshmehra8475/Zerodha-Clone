import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="p-3 row">
        <div className="p-5 col-6">
          <h1 className="fs-4 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-3" placeholder="Eg: how do I activate F&O, why is my older getting rejected ..." /><br/>
          <a href="" className="me-4">
            Track account opening
          </a>
          <a href="" className="me-4">
            Track segment activation
          </a>
          <a href="" className="me-4">
            Intraday margins
          </a> <br/>
          <a href="" className="me-4 mt-3">
            Kite user manual
          </a>
       </div>
        <div className="p-3 col-6">
          <h1 className="fs-4 mt-5 ">Featured</h1>
          <ol className="ms-3 mt-3 ">
            <li>
              <a href="" >MCX Crude option contract expiry - April 2025</a>
            </li>
            <li className="mt-3">
              {" "}
              <a href="">Surveillance measure on scrips - April 2025</a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
