import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UseAuth from './routes/UseAuth';

const Update = () => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/food/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    throw new Error('Failed to fetch product');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;

        const _id = product._id;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = product.foodQuantity;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const donatorName = form.donatorName.value;
        const foodStatus = 'Requested';

        const loggedInUserEmail = user ? user.email : userEmail;

        const foodData = {
            _id,
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            expiredDateTime,
            additionalNotes,
            foodStatus,
            donatorName,
            loggedInUserEmail
        };

        try {
            const { data } = await axios.put(`http://localhost:5000/food/${_id}`, foodData);
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Updated Successfully!',
                text: 'All modifications are updated.',
            });
            navigate('/myFood')

            // Reset form fields after successful submission
            form.reset();
        } catch (err) {
            console.error(err);
            // Show SweetAlert notification upon error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while updating the food. Please try again later.',
            });
        }
    };

    return (
        <div className='container mx-auto'>
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Update My Foods</h1>  
            <form onSubmit={handleSubmit} className="container flex flex-col mx-auto bg-slate-100 rounded-lg p-8 space-y-12">
                <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-1">
                        <label htmlFor="foodName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Name</label>
                        <div className="col-span-full">
                            <input id="foodName" name='foodName' type="text" defaultValue={product?.foodName} placeholder="Food Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <label htmlFor="foodQuantity" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Quantity</label>
                        <div className="col-span-full">
                            <input id="foodQuantity" name='foodQuantity' type="text" defaultValue={product?.foodQuantity} placeholder="Food Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <label htmlFor="foodImage" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Image</label>
                        <div className="col-span-full">
                            <input id="foodImage" defaultValue={product?.foodImage} name='foodImage' type="text" placeholder="Food Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            {product && <img className='size-[250px] rounded-lg' src={product.foodImage} alt="Food" />}
                        </div>
                        <label htmlFor="donatorName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Donator Name</label>
                        <div className="col-span-full">
                            <input id="donatorName" name='donatorName' defaultValue={product?.donatorName || ''} readOnly type="text" placeholder="Donator Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full flex items-center bg-white p-3 rounded-lg">
                            <label htmlFor="userEmail" className="text-xs text-white bg-green-900 p-1 rounded-lg">User Email </label>
                            {user ? (
                                <span className="text-gray-700">: {user.email}</span>
                            ) : (
                                <input id="userEmail" name='userEmail' type="email" placeholder="Enter your email" className="w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 px-3 py-2" />
                            )}
                        </div>
                        <label htmlFor="requestDate" className="text-xs text-white bg-green-900 p-1 rounded-lg">Current Time</label>
                        <input id="requestDate" name='requestDate' type="text" value={new Date().toLocaleString()} readOnly />
                        <label htmlFor="pickupLocation" className="text-xs text-white bg-green-900 p-1 rounded-lg">Pickup Location</label>
                        <div className="col-span-full">
                            <input id="pickupLocation" name='pickupLocation' defaultValue={product?.pickupLocation || ''} type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <label htmlFor="expiredDateTime" className="text-xs text-white bg-green-900 p-1 rounded-lg">Expired Date/Time</label>
                        <div className="col-span-full">
                            <input id="expiredDateTime" name='expiredDateTime' defaultValue={product?.expiredDateTime || ''} type="text" placeholder="Expired Date/Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <label htmlFor="additionalNotes" className="text-xs text-white bg-green-900 p-1 rounded-lg">Additional Notes</label>
                        <div className="col-span-full">
                            <textarea id="additionalNotes" name='additionalNotes' defaultValue={product?.additionalNotes || ''} placeholder="Additional Notes" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>
                    </div>
                </fieldset>
                <button type="submit" className="bg-[#66A000] font-semibold text-white px-4 py-2 rounded-md hover:bg-green-900">Submit</button>
            </form>
        </div>
    );
};

export default Update;
