import React from 'react';
import Menu from "./Menu";

const TopBar = () => {
    return (
        <div className='toolbar-container'>
          <div className="indices-container">
            <div className='nifty'>
              <p className='index'>NIFTY 50</p>
              <p className='index-points'>{100.2}</p>
              <p className='percent'></p>
            </div>
            <div className='sensex'>
              <p className='index'>sensex</p>
              <p className='index-points'>{100.2}</p>
              <p className='percent'></p>
            </div>
          </div>

          <Menu/>
        </div>
      );
}

export default TopBar;