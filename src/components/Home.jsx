import React from 'react';
import Slider from './Slider';
import FeaturedFoods from './FeaturedFoods';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;