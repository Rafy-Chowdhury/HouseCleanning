
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ReviewUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const [imageURL, setImageURL] = useState(null);
    
    
    const onSubmit = data => {
      const eventData = {
        name: data.name,
        title: data.title,
        comment: data.comment,
        imageURL: imageURL
      };

      const url = `https://glacial-reef-15171.herokuapp.com/addreview`;

      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json' 
        },
        body: JSON.stringify(eventData)
      })
    }
    
    const handleImageUpload = e => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3d85c8074684cd8a39a759840d9fba44');
        imageData.append('image', e.target.files[0]);
        
        
        axios.post('https://api.imgbb.com/1/upload',
        imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    
    return (
        <div>
            <div>
             <h1>this is review section</h1>
            </div>
            <div className="text-center">
            <form className="formSubmit" onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
        <input type="text" placeholder="name" {...register("name")} />
     <br/>
     <br/>
      <input type="text" placeholder="title" {...register("title")} />
    <br/>
    <br/>
      <input type="text" placeholder="comment" {...register("comment")} />
      <br/>
    <br/>
      <input className="fileField" type="file" onChange={handleImageUpload} />
    <br/>
    <br/>
      <input type="submit" />
        </fieldset>
      </form>
         </div>
        </div>
        
    );
};

export default ReviewUs;