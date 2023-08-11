import React, { useState } from "react";
import thumbnail from "../assets/imageThumbnail.png"

const AddPost =()=> {
    const [tittle, setTittle] = useState("")
    const [text, setText] = useState("")

    const [image, setImage] = useState(null)

    function handleImage(e) {
        let file = e.target.files[0];
        setImage(file)
    }

    console.log(image)

    const submit = async (e)=> {
        e.preventDefault()

        let formData = new FormData();

        formData.append("image",image)

       const imageUploadResponse = await fetch("https://zacky-news.up.railway.app/api/image/upload", {
            method:'POST',
            body: formData,
        })

        const response = await imageUploadResponse.json();

        console.log(response.image)
       
        


        //post the content


        const contentCreation = await fetch("https://zacky-news.up.railway.app/api/content/create", {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            credentials:'include',
            body: JSON.stringify({
                tittle,
                text,
                image: response.image
            })
        });
        
    }

    return(
        <div>
            <section id="add-post" >
                <form className="post-container" onSubmit={submit} >
                    <h5>Image thumbnail</h5>
                    {image ? <img src={URL.createObjectURL(image)} alt="thubmnail" /> : <img src={thumbnail} alt="thubmnail" /> }
                    <input type="file" name="file" onChange={handleImage} required />

                    <input type="tittle" className="tittle" placeholder="Judul"  onChange={e=>{setTittle(e.target.value)}} required/>
                    <textarea className="text" id="konten" name="konten" rows="10" cols="50"  onChange={e=>{setText(e.target.value)}} required></textarea>
                    
                    <button type="submit">add</button>
                </form>
            </section>
        </div>
    )
}

export default AddPost