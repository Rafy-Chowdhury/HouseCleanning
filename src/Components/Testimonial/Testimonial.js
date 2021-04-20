import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const [newReview, setNewReview] = useState([]);

    useEffect( () => {
        fetch(`https://glacial-reef-15171.herokuapp.com/review`)
    .then(res => res.json())
    .then(data => setNewReview(data))
    }, [])

    return (
        <section>
        <div className="text-center mt-5">
            <h1>Review From Clients</h1>
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
            <div className="text-center">
            {
                    newReview.length === 0 && <h1>loading...please wait </h1>
            }
            </div>    
            {
                newReview.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
            }
            </div>
        </div>
    </section>
    );
};

export default Testimonial;