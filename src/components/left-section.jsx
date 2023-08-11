import React from "react";
import "../componentStyle/section.css"
import { category } from "./dummy-data";

const LeftSection =()=> {
    return (

        <div className="left-container">
            <div className="profile">
                <p>welcome, <br></br>lorem ipsum</p>
            </div>
            <div className="category">
                <h3>Kategori</h3>
                {category.map((category, index)=> {
                return (
                    <div key={index} className="category-list"> 
                        <p>{category.kategori}</p>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default LeftSection