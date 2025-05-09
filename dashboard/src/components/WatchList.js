import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";

const WatchList = () => {
    return(
        <div className="watchList-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search ed:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts">9 / 50</span>
            </div>
            <ul className="List"></ul>
        </div>

    );
}


export default WatchList;