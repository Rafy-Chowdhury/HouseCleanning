import React, { useEffect, useState } from 'react';
import SeviceCard from '../ServiceCard/SeviceCard';


const Service = () => {
    const [newService, setNewService] = useState([]);

    useEffect( () => {
        fetch(`https://glacial-reef-15171.herokuapp.com/service`)
        .then(res => res.json())
        .then(data => setNewService(data))
    }, [])

    
   
    return (
      <section>
          <div className="text-center mt-4">
              <h1>Our services</h1>
          </div>
          <div className="d-flex justify-content-center">
              <div className="w-75 row">
              <div className="text-center">
            {
                    newService.length === 0 && <h1>loading...please wait </h1>
            }
            </div> 
                  {
                      newService.map(service => <SeviceCard key={service._id} service={service}></SeviceCard> )
                  }
              </div>
          </div>
      </section>
    );
};

export default Service;