import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialCard = ({review}) => {
    const {imageURL, name, title, comment } = review;
    return (
        <div className="col-md-4 text-center mt-5 mb-5">
            <div>
                <img style={{height:"200px", borderRadius:"10px"}} src={imageURL} alt=""/>
            </div>
         <h1>{name}</h1> <br/>
         <h3>{title}</h3><br/>
         {comment} <br/> <br/>
       
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
    </div>
    );
};

export default TestimonialCard;