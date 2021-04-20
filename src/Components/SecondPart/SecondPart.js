import React from 'react';
import { useHistory } from 'react-router';
import img from '../../image/housemaid.jpg';

const SecondPart = () => {
    const history = useHistory();
    const handleAbout = () => {
        history.push(`/about`);
    }

    return (
        <div style={{backgroundColor:"gray"}} className="d-flex justify-content-end mb-5">
            <div className="w-75 row mt-5">
                <div className="col-md-4 mt-3">
                    <h1 style={{color:"white"}}>THERE ARE THOUSANDS MORE REASONE TO CHOOSE US</h1>
                    <button onClick={handleAbout} className="mt-3" style={{borderRadius:"5px", padding:"5px", backgroundColor:"chocolate", color:"white"}}>ABOUT US</button>
                </div>
                <div className="col-md-8 mb-4">
                    <img style={{height:"300px", width:"250px", borderRadius:"7px"}} src={img} alt=""/>
                </div>
            </div>
            
        </div>
    );
};

export default SecondPart;