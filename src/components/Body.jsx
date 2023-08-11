import React from "react";
import "../componentStyle/body.css"
import Navigation from "./navgitaion";
import LeftSection from "./left-section";
import MainSection from "./main-section";
import RightSection from "./right-section";

const Body =()=> {
    return (
        <div className="main-body">
            <Navigation />
            <div className="section">
                <LeftSection />
                <MainSection />
                <RightSection/>
            </div>
        </div>
    )
}

export default Body