import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const serviceData = {
      title: data.title,
      description: data.description,
      price: data.price
    };
    
    const url = `https://glacial-reef-15171.herokuapp.com/addservice`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(serviceData)
    })

  }
    return (
        <div>
            <div className="text-center mb-3 mt-4">
                <h3>Add more service</h3>
            </div>
            <div className="text-center mt-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="title" type="text" {...register("title")} placeholder="title" />
                <br/><br/>
                <input name="description" type="text" {...register("description")} placeholder="description" />
                <br/><br/>
                <input name="price" type="number" {...register("price")} placeholder="price" />
                <br/><br/>
                <input type="submit" />
              </form>
            </div>
        </div>
    );
};

export default AddService;