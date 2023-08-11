import React from "react";

import ads from "../assets/ads.jpg"

const RightSection =()=> {
    return (
        <div className="right-container">
            <div className="ads">
                <img className="img" src={ads}/>
            </div>
            <div className="trending">
                <h3>TREND NEWS</h3>

            </div>
        </div>
    )
}

export default RightSection