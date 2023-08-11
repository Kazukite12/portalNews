import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../componentStyle/dashboard.css";
import { FiArrowLeft } from "react-icons/fi";


const Dashboard =()=> {

    const logout =async()=> {
        await fetch('https://zacky-news.up.railway.app/api/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
    }
    return (
        <div className="Dashboard">
            <div className="side-bar">
                <div>
                    
                    <Link to="/">
                        <FiArrowLeft/>
                    </Link>
                    <h3>Dashboard</h3>
                    <Link to="manager">
                     <p>Post Manager</p>
                    </Link>
                    <Link to="add-post">
                        <p>Add Post</p>
                    </Link>
                </div>
            </div>
            <div className="Dashboard-container">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard