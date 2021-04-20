import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';

const ServiceList = () => {
    const [ loggedInUser ] = useContext(UserContext);
    const [userDetail, setUserDetail] = useState([])

    useEffect(() => {
        fetch('https://glacial-reef-15171.herokuapp.com/user?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserDetail(data))
    })
    return (
        <div>
            <div><h1>you have: {userDetail.length} service order</h1></div>
            
            {
                userDetail.map(user => <li>{user.name} price: {user.price} service: {user.service}</li>)
            }
        </div>
    );
};

export default ServiceList;