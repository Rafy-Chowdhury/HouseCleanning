import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import StripePayment from '../StripePayment/StripePayment';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router';

const Booking = () => {
  const [ loggedInUser ] = useContext(UserContext);

  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = data => {
    const bookingData = {
      ...loggedInUser,
      name: data.name,
      email: data.email,
      price: data.price,
      service: data.service,
      address: data.address
    };
    console.log(bookingData);
    const url = `https://glacial-reef-15171.herokuapp.com/adduser`;

      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json' 
        },
        body: JSON.stringify(bookingData)
      })

    history.push(`/list`);
  }

// for parameter
  const [services, setServices] = useState([]);

  const { title } = useParams();
  
  useEffect( () => {
    fetch(`https://glacial-reef-15171.herokuapp.com/service`)
    .then(res => res.json())
    .then(data => setServices(data))
}, [])

const serviceInfo = services.find(service => service.title === title);
 
    return (
        <div className="text-center">
            <div className="text-center mt-3">
              <h1>Please fillup this form to book your service</h1>
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>

              <input name="name" defaultValue={loggedInUser.name}  {...register("name")} placeholder="name" /> <br/> <br/>

              <input name="email" defaultValue={loggedInUser.email}  {...register("email")} placeholder="Email" /> <br/> <br/>

              <input type="number" name="price" defaultValue={serviceInfo?.price} {...register("price")} placeholder="price" /> <br/> <br/>

              <input name="service" defaultValue={serviceInfo?.title} {...register("service")} placeholder="service title" /> <br/> <br/>

              <input name="address" {...register("address")} placeholder="address" /> <br/> <br/>

                <input type="submit" />
                </form>
            </div>
            <div className="mt-5">
              <StripePayment/>
            </div>
        </div>
    );
};

export default Booking;