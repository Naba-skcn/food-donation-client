import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <Swiper className='container mx-auto mt-5'
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >



            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/1434542354/photo/a-female-chef-pouring-sauce-on-salad.jpg?s=612x612&w=0&k=20&c=ZWsHCE6eKTXvQ48ljLhgraUreNA0t3JZN2LH7KUdw2w=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Embark on a Culinary Journey at DelishDomain.</h1>
                        <p className="text-sm lg:text-lg">Savor the flavors of our handpicked culinary delights, crafted with passion and expertise. Dive into our curated collection of mouthwatering dishes, where every bite tells a story of culinary mastery. Whether you're seeking comfort classics or adventurous creations, DelishDomain is your destination for unforgettable dining experiences. Join us in celebrating the art of food today.</p>
                        <button className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Know more About us</button>
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/184946701/photo/pizza.jpg?s=612x612&w=0&k=20&c=97rc0VIi-s3mn4xe4xDy9S-XJ_Ohbn92XaEMaiID_eY=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Embark on a Culinary Journey at DelishDomain.</h1>
                        <p className="text-sm lg:text-lg">Savor the flavors of our handpicked culinary delights, crafted with passion and expertise. Dive into our curated collection of mouthwatering dishes, where every bite tells a story of culinary mastery. Whether you're seeking comfort classics or adventurous creations, DelishDomain is your destination for unforgettable dining experiences. Join us in celebrating the art of food today.</p>
                        <button className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Know more About us</button>
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/1331036205/photo/spreading-pepper-on-roasted-chicken-leg.jpg?s=612x612&w=0&k=20&c=TaNMM8pUEb42yvI4lxw3KeBEWwvM8EPCDPnfAApIJdA=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Embark on a Culinary Journey at DelishDomain.</h1>
                        <p className="text-sm lg:text-lg">Savor the flavors of our handpicked culinary delights, crafted with passion and expertise. Dive into our curated collection of mouthwatering dishes, where every bite tells a story of culinary mastery. Whether you're seeking comfort classics or adventurous creations, DelishDomain is your destination for unforgettable dining experiences. Join us in celebrating the art of food today.</p>
                        <Link to="/about" className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Know more About us</Link>

                    </motion.div>
                </div>
            </SwiperSlide>
            
            
            
        </Swiper>
    );
};

export default Slider;
