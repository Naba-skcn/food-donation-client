import React from 'react';
import Slider from './Slider';
import FeaturedFoods from './FeaturedFoods';
import AboutUs from './AboutUs';
import ChefSpecialties from './ChefSpecialties';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>NutriHarvest | Home</title></Helmet>
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <ChefSpecialties></ChefSpecialties>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;