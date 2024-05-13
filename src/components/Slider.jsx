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
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/493206157/photo/hands-holding-apple.jpg?s=612x612&w=0&k=20&c=v5zcwn7227AtNQxbvmF7iFXuxOD71jS0jgLA4B9GDik=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Support a Cause with NutriHarvest.</h1>
                        <p className="text-sm lg:text-lg">Join us in fighting hunger and malnutrition by donating nutritious food to those in need. Every contribution makes a difference in the lives of individuals and families struggling with food insecurity. Together, let's build a healthier and happier community. Get involved today!</p>
                        <Link to="/donate" className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Donate Now</Link>
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/1130406978/photo/adorable-young-food-bank-volunteer-holds-thank-you-sign.jpg?s=612x612&w=0&k=20&c=6Vz3YIq85y6MTdQWOGZHRJKX93d_X8k0HIejay2xQco=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Support a Cause with NutriHarvest.</h1>
                        <p className="text-sm lg:text-lg">Join us in fighting hunger and malnutrition by donating nutritious food to those in need. Every contribution makes a difference in the lives of individuals and families struggling with food insecurity. Together, let's build a healthier and happier community. Get involved today!</p>
                        <Link to="/donate" className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Donate Now</Link>
                    </motion.div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <img className='w-[1300px] h-[450px] rounded-lg' src="https://media.istockphoto.com/id/1498170325/photo/volunteers-are-working-together-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=NjRPlqH8EBSx11OSFPxYL3olk662uMTTyR6BUKSB9u4=" alt="" />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="absolute top-0 left-0 p-10 mt-[0px] lg:mt-[100px]  text-white text-center "
                    >
                        <h1 className="text-4xl font-bold">Support a Cause with NutriHarvest.</h1>
                        <p className="text-sm lg:text-lg">Join us in fighting hunger and malnutrition by donating nutritious food to those in need. Every contribution makes a difference in the lives of individuals and families struggling with food insecurity. Together, let's build a healthier and happier community. Get involved today!</p>
                        <Link to="/donate" className='btn mt-4 bg-[#66A000] border-[#66A000] text-white'>Donate Now</Link>
                    </motion.div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Slider;
