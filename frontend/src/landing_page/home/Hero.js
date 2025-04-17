import React from 'react';

function Hero() {
    return ( 
       <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src='media/images/homehero.png' alt='Hero Image' className='mb-3'/>
                <h1 className='mt-3'>Invest in everything</h1>
                <p className='fs-5 mt-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mt-4' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
            </div>
       </div>
     );
}

export default Hero;