import React from 'react';
import Slider from './Slider';
import FeaturedFoods from './FeaturedFoods';
import AboutUs from './AboutUs';
import ChefSpecialties from './ChefSpecialties';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <ChefSpecialties></ChefSpecialties>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;