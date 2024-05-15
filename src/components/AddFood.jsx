import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import UseAuth from './routes/UseAuth';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const AddFood = () => {
    const { user } = UseAuth();
    const { id } = useParams();
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPhoto, setUserPhoto] = useState('');
   
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;

        const foodId = id; 

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = 'Available';

        const donatorEmail = user ? user.email : userEmail;
        const donatorName = user ? user.displayName : userName;
        const donatorImage = user ? user.photoURL : userPhoto;

        const foodData = {
            foodId,
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            donatorName,
            donatorEmail,
            donatorImage,
            foodStatus
        };
        
        try{
            const {data} = await axios.post('http://localhost:5000/addFood', foodData)
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Food Added!',
                text: 'Your food has been successfully added.',
            });
    
            // Reset form fields after successful submission
            form.reset();
        } catch(err) {
            console.error(err);
            // Show SweetAlert notification upon error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while adding the food. Please try again later.',
            });
        }
    };

    return (
        <div className="container mx-auto">
            <Helmet><title>NutriHarvest | Add Foods</title></Helmet>
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Add Foods</h1>
            <section className="p-6 bg-center bg-cover bg-[url('https://media.istockphoto.com/id/1283712032/photo/cardboard-box-filled-with-non-perishable-foods-on-wooden-table-high-angle-view.jpg?s=612x612&w=0&k=20&c=7B2cUwQB2LeBmIh5JElkO5DoE7GRq-CRVmERsMSJoVY=')] dark:text-gray-900">
                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto bg-opacity-30 backdrop-blur-lg p-8 space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1  bg-gradient-to-r from-[#66A000] to-green-900 rounded-lg text-white p-2">
                            <p className="font-medium text-3xl">Food Information</p>
                            <p className="text-sm">Share the bounty of your harvest with NutriHarvest! Your generous donation can help nourish those in need and make a meaningful difference in their lives. Together, let's cultivate a healthier, happier community by spreading the goodness of fresh, nutritious food. Your contribution is a vital ingredient in our mission to promote wellness and food security. Thank you for sowing the seeds of kindness and compassion with NutriHarvest!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <label htmlFor="foodName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Name</label>
                            <div className="col-span-full">
                                <input id="foodName" name='foodName' type="text" placeholder="Food Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="foodImage" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Image</label>
                            <div className="col-span-full">
                                <input id="foodImage" name='foodImage' type="url" placeholder="Food Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="foodQuantity" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Quantity</label>
                            <div className="col-span-full">
                                <input id="foodQuantity" name='foodQuantity' type="number" placeholder="Food Quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="pickupLocation" className="text-xs text-white bg-green-900 p-1 rounded-lg">Pickup Location</label>
                            <div className="col-span-full">
                                <input id="pickupLocation" name='pickupLocation' type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="expiredDateTime" className="text-xs text-white bg-green-900 p-1 rounded-lg">Expired Date/Time</label>
                            <div className="col-span-full">
                                <input id="expiredDateTime" name='expiredDateTime' type="datetime-local" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="foodStatus" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Status</label>
                            <div className="col-span-full">
                                <input id="foodStatus" name='foodStatus' defaultValue="Available" type="text" placeholder="Food Status" readOnly className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="additionalNotes" className="text-xs text-white bg-green-900 p-1 rounded-lg">Additional Notes</label>
                            <div className="col-span-full">
                                <textarea id="additionalNotes" name='additionalNotes' placeholder="Additional Notes" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
                            <div className="col-span-full">
                                <button type="submit" className="btn btn-block text-white rounded-md bg-[#66A000] border-[#66A000]">Add</button>
                            </div>
                            <div className="col-span-full bg-[#66A000] rounded-lg text-white font-semibold"><span>Donator Information</span></div>
                            <div className="col-span-full flex items-center">
                           <label htmlFor="donatorImage" className="text-sm mr-2"></label>
                            {user ? (
                           <img src={user.photoURL} alt="Donator" className="w-20 h-20 rounded-lg" />
                             ) : (
                            <input id="donatorImage" name='donatorImage' type="url" placeholder="Enter image URL" className="w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 px-3 py-2" />
                              )}
                            </div>
                            <div className="col-span-full flex items-center bg-white p-3 rounded-lg">
                           <label htmlFor="donatorName" className="text-sm mr-2 text-black font-semibold">Donator Name:</label>
                            {user ? (
                           <span className="text-gray-700">{user.displayName}</span>
                           ) : (
                          <input id="donatorName" name='donatorName' type="text" placeholder="Enter your name" className="w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 px-3 py-2" />
                         )}
                        </div>
                        <div className="col-span-full flex items-center  bg-white p-3 rounded-lg">
    <label htmlFor="donatorEmail" className="text-sm mr-2 text-black font-semibold">Donator Email:</label>
    {user ? (
        <span className="text-gray-700">{user.email}</span>
    ) : (
        <input id="donatorEmail" name='donatorEmail' type="email" placeholder="Enter your email" className="w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 px-3 py-2" />
    )}
                         </div>


                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddFood;
