import React from "react";
import banner from "../assets/banner.jpg"
import { FiArrowRight, FiChevronsRight } from "react-icons/fi";
import contoh from "../assets/contoh.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const MainSection =()=> {


    const navigate = useNavigate()

    const [data, setData] = useState({content:[]});


    useEffect (()=> {
        fetch('https://zacky-news.up.railway.app/api/content')
        .then((resp)=> resp.json())
        .then((data) => setData({content: data.content}))
        .catch(err => console.log(err))
    },[]);

    console.log(data)

    const HandleDetail =(id)=> {
        navigate(`detail/${id}`)
    }

    const imgURL = "https://zacky-news.up.railway.app"

    return (
        <div className="main-container">
          
            <h3>TOPIK PILIHAN</h3>
            {data.content.slice(0,1).map((data,index)=>{
                return (
                    <div className="Hero" key={index}>
                <div className="banner-container">
                    <img className="banner" src={imgURL+data.image} />
                </div>
                <div className="sub-container"> 
                     <h3>{data.tittle}</h3>
                     <FiArrowRight onClick={()=>HandleDetail(data.id)} />
                </div>
            </div>
                )
            })}
    
            <div className="list">
                {data.content.map((data,index)  => {
                    return (
                    <div className="card-list" key={index}> 
                        <div className="list-img">
                        <img src={imgURL+data.image} />
                        </div>
                        <div className="list-tittle">
                        <p>{data.tittle}</p>
                        <FiChevronsRight onClick={()=>HandleDetail(data.id)} />
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MainSection