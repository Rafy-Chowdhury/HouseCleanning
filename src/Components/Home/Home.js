import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SecondPart from '../SecondPart/SecondPart';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SecondPart/>
            <Service/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;