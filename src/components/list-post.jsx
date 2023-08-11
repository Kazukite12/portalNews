import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ListPost =()=> {

    const navigate = useNavigate()

    const [data, setData] = useState({content:[]});

    useEffect (()=> {
        fetch('https://zacky-news.up.railway.app/api/content')
        .then((resp)=> resp.json())
        .then((data) => setData({content: data.content}))
        .catch(err => console.log(err))
    },[]);

    
    const submit = async(id)=> {
        await fetch ("https://zacky-news.up.railway.app/api/content/delete",{
            method:'DELETE',
            headers: {'Content-Type':'application/json'},
            credentials:'include',
            body: JSON.stringify({
                id
            })
        })
    }

    const imgURL = "https://zacky-news.up.railway.app"

    const HandleDetail =(id)=> {
        navigate(`/detail/${id}`)
    }


    return (
        <div id="post-manager">
             {data.content.map(item => (
                <div key={item}> 
                            <div className="list-post" >
                        <img className="thumbnail" src={imgURL+item.image}/>
                        <p>{item.tittle}</p>
                    <div className="list-icon">
                        <FiEdit className="icon-image" />
                        <FiTrash2 className="icon-image" onClick={()=>submit(item.id)} />
                        <FiEye className="icon-image" onClick={()=>HandleDetail(item.id)} />
                    </div>
        
                </div>

                </div>
             ))}
        </div>
    )
}

export default ListPost