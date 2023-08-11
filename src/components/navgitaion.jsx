import React from "react";
import "../componentStyle/navigation.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation =()=> {


    return (
        <div className="navigation" >
            <div className="nav">
                <div className="tittle">
                    <p>NEWS</p>
                </div>
                <div className="items">
                    <Link to="/Dashboard">
                        <p>DASHBOARD</p>
                    </Link>
                    <Link to="/Login">
                        <p>LOGIN</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation