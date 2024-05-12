import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AboutUs = () => {
    return (
        
        <div className='container mx-auto'>
             <h1 className="text-3xl font-semibold mb-4 text-center mt-5">About Delish Domain</h1>
            <div className='font-semibold' style={{ backgroundImage: "url('https://media.istockphoto.com/id/1466389057/photo/abstract-soft-background.jpg?s=612x612&w=0&k=20&c=yEuwKt6tC4RBz25UH4RhH4VkgP6WVH-IZ3M4Qzk2vB4=')", backgroundSize: 'cover', backgroundPosition: 'center', padding: '40px', borderRadius: '8px', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}>
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-4 text-center">
                    <p className="text-xs font-semibold tracking-wider mt-[-80px] uppercase">#DelishDomain</p>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        <Typewriter
                            words={['Discover Culinary Excellence with Delish Domain']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p className="text-sm dark:text-gray-600">by
                        <span className="font-semibold"> The Delish Domain Team</span>
                        on
                        <time dateTime="2024-05-12"> May 12th, 2024</time>
                    </p>
                </div>
                <div className="dark:text-gray-800">
                    <p>Welcome to Delish Domain, your ultimate destination for exquisite culinary experiences. We take pride in curating a diverse selection of mouthwatering dishes crafted by talented chefs from around the world.</p>
                    <p>From comforting classics to innovative creations, each dish at Delish Domain is a celebration of flavors, textures, and culinary artistry. Join us on a gastronomic journey filled with delightful discoveries and unforgettable dining moments.</p>
                </div>
                <div className="pt-12 border-t dark:border-gray-300">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVlKHcGU8e_4KuD768cjCBjTbGV-GWTyv_g&s" alt="Team Member" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start" style={{ backgroundColor: '#D1D5DB' }} />
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold">Meet Our Team</h4>
                            <p className="dark:text-gray-600">Our team at Delish Domain is passionate about creating unforgettable dining experiences for our customers. With dedication, creativity, and expertise, we strive to delight your taste buds and exceed your expectations.</p>
                        </div>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 align-center">
                        <a rel="noopener noreferrer" href="#" aria-label="Instagram" className="p-2 rounded-md hover:text-violet-600" style={{ color: '#4B5563', transition: 'color 0.3s ease' }}>
                            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 186.4c-40.3 0-73.1-32.8-73.1-73.1s32.8-73.1 73.1-73.1 73.1 32.8 73.1 73.1-32.9 73.1-73.1 73.1zm136.9-186.4c-12.8 0-23.2 10.4-23.2 23.2s10.4 23.2 23.2 23.2 23.2-10.4 23.2-23.2-10.4-23.2-23.2-23.2zM400 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM316.7 236c0 40.4-32.7 73.1-73.1 73.1s-73.1-32.7-73.1-73.1 32.7-73.1 73.1-73.1 73.1 32.7 73.1 73.1zm91.3 156.1c0 6.3-5.1 11.4-11.4 11.4H363c-6.3 0-11.4-5.1-11.4-11.4v-49.9c0-6.3 5.1-11.4 11.4-11.4h33.1c6.3 0 11.4 5.1 11.4 11.4v49.9zm0-107.3c0 6.3-5.1 11.4-11.4 11.4h-39.6c-6.3 0-11.4-5.1-11.4-11.4v-83.4c0-19.9 16.2-36.1 36.1-36.1h16.8c6.3 0 11.4 5.1 11.4 11.4v107.5zm32.6-141.5c-6.3 0-11.4-5.1-11.4-11.4v-14.6c0-6.3 5.1-11.4 11.4-11.4h14.6c6.3 0 11.4 5.1 11.4 11.4v14.6c0 6.3-5.1 11.4-11.4 11.4z"/>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Facebook" className="p-2 rounded-md hover:text-violet-600" style={{ color: '#4B5563', transition: 'color 0.3s ease' }}>
                            <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="M278.3 288l14.6-94.4H208V128c0-26.5 21.5-48 48-48h64V0h-64C142.7 0 96 46.7 96 104v89.6H32v94.4h64V512h96V288h78.3z"/>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md hover:text-violet-600" style={{ color: '#4B5563', transition: 'color 0.3s ease' }}>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                            </svg>
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md hover:text-violet-600" style={{ color: '#4B5563', transition: 'color 0.3s ease' }}>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </div>
        </div>
    );
};

export default AboutUs;
