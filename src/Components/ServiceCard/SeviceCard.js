

import React from 'react';

import { useHistory } from 'react-router';



const SeviceCard = ({service}) => {
    const {title, description, price} = service;
    const history = useHistory();
    
    const purchaseItem = (title) => {
        history.push(`/booking/${title}`)
    }
        
    
    return (
        <div className="col-md-4 text-center mt-5">
           <h2>{title}</h2> <br/>
           {description} <br/><br/>
           it will cost ${price} <br/><br/>
           <button style={{borderRadius:"5px", padding:"5px", backgroundColor:"chocolate", color:"white"}} onClick={() => purchaseItem(title)}>GET NOW</button>
         
        </div>
            
                
    );
};

export default SeviceCard;