import React from 'react';

function Universe() {
    return ( 
        <div className="container ">
        <div className="row p-5 text-center">
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            
          <div className="col-4 p-3">
            <img src="media/images/smallcaseLogo.png" />
            <p className='text-small text-muted'></p>
          </div>
          <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" />
          <p className='text-small text-muted'></p>
          </div>
          <div className="col-4 p-3">
           <img src="media/images/smallcaseLogo.png" />
            <p className='text-small text-muted'></p>
          </div>
        </div>
      </div>
     );
}

export default Universe;