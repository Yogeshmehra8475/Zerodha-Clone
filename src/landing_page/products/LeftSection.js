import React from "react";

function LeftSection({
  imageURl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4">
          <img src={imageURl} />
        </div>
        <div className="col-2"></div>
        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "60px", textDecoration:"none"}}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
