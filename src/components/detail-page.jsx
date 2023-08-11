import React from "react";
import "../componentStyle/detail-page.css"
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailPage =()=> {

    const {id} = useParams();

    const [data, setData] = useState({content:[]});


    useEffect (()=> {
        fetch(`https://zacky-news.up.railway.app/api/content/${id}`)
        .then((resp)=> resp.json())
        .then((data) => setData({content: data.content}))
        .catch(err => console.log(err))
    },[id]);

    const imgURL = "https://zacky-news.up.railway.app"


    return(
        <div className="detail-page">
            <div className="detail-container">
                <Link to="/">
                        <FiArrowLeft />
                </Link>
                {data.content.map(item => (
                    <div>
                    <h2>{item.tittle}</h2>
                    <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailPage