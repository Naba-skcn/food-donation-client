import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UseAuth from './routes/UseAuth';

const ViewDetails = ( ) => {
    const { user } = UseAuth();
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
        const foodName = product.foodName;
        const foodImage = product.foodImage;
        const foodQuantity = product.foodQuantity;
        const pickupLocation = product.pickupLocation;
        const expiredDateTime = product.expiredDateTime;
        const additionalNotes = form.additionalNotes.value;
        const email = product.email;
        const donatorName = product.donatorName;
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
            email,
            donatorName,
            loggedInUserEmail
        };

        try {
            const { data } = await axios.post('http://localhost:5000/addFood', foodData);
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Food Added!',
                text: 'Your food has been successfully added.',
            });

            // Reset form fields after successful submission
            form.reset();
        } catch (err) {
            console.error(err);
            // Show SweetAlert notification upon error
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while adding the food. Please try again later.',
            });
        }
    };

    const handleRequest = async () => {
        try {
            // Send a PUT request to update the food status to "requested"
            const response = await axios.put(`http://localhost:5000/food/${id}/request`);
            if (response.status === 200) {
                // If the request is successful, update the product state
                setProduct(prevProduct => ({
                    ...prevProduct,
                    foodStatus: 'Requested'
                }));
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Food Requested!',
                    text: 'Your request for this food has been successfully submitted.',
                });
            } else {
                throw new Error('Failed to request food');
            }
        } catch (error) {
            console.error('Error requesting food:', error);
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while requesting the food. Please try again later.',
            });
        }
    };

    console.log(product);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Food Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : product ? (
                <div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Donor Information</h3>
                        <p><span className='font-semibold text-black'>Donor Name:</span> {product.donatorName}</p>
                        <p><span className='font-semibold text-black'>Food Pickup Location:</span> {product.pickupLocation}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
                        <img src={product.foodImage} alt={product.foodName} className="w-full h-64 object-cover" />
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4">{product.foodName}</h3>
                            <p className="text-gray-800 leading-relaxed mb-4">Food Quantity: {product.foodQuantity}</p>
                            <p className="text-gray-800 leading-relaxed mb-4">Expired Date/Time: {product.expiredDateTime}</p>
                            {/* The button to open modal */}
                            <a href="#my_modal_8" className="btn bg-[#66A000] border-white text-white">Request</a>
                            {/* Put this part before </body> tag */}
                            <div className="modal" role="dialog" id="my_modal_8">
                                <div className="modal-box">
                                <form onSubmit={handleSubmit} className="container flex flex-col mx-auto bg-opacity-30 backdrop-blur-lg p-8 space-y-12">
                    <fieldset className="p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-1">
                            <label htmlFor="foodName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Name</label>
                            <div className="col-span-full">
                                <input id="foodName" name='foodName' type="text" value={product.foodName} readOnly placeholder="Food Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="foodImage" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Image</label>
                            <div className="col-span-full">
                                <input id="foodImage"  value={product.foodImage} readOnly name='foodImage' type="" placeholder="Food Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                <img src={product.foodImage} alt="" />
                            </div>
                            <label htmlFor="foodId" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Id</label>
                            <div className="col-span-full">
                                <input id="foodId" name='foodId' value={product._id} readOnly type="text" placeholder="foodId" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="email" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Donator email</label>
                            <div className="col-span-full">
                                <input id="email" name='email' value={product.email} readOnly type="email" placeholder="email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="donatorName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Food Donator Name</label>
                            <div className="col-span-full">
                                <input id="donatorName" name='donatorName' value={product.donatorName} readOnly type="text" placeholder="foodId" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full flex items-center  bg-white p-3 rounded-lg">
                            <label htmlFor="donatorName" className="text-xs text-white bg-green-900 p-1 rounded-lg">User Email </label>
    {user ? (
        <span className="text-gray-700">: {user.email}</span>
    ) : (
        <input id="donatorEmail" name='donatorEmail' type="email" placeholder="Enter your email" className="w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 px-3 py-2" />
    )}
                         </div>
                         <label htmlFor="donatorName" className="text-xs text-white bg-green-900 p-1 rounded-lg">Current Time</label>
<input id="requestDate" name='requestDate' type="text" value={new Date().toLocaleString()} readOnly />

                            <label htmlFor="pickupLocation" className="text-xs text-white bg-green-900 p-1 rounded-lg">Pickup Location</label>
                            <div className="col-span-full">
                                <input id="pickupLocation" name='pickupLocation' value={product.pickupLocation} readOnly type="text" placeholder="Pickup Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="expiredDateTime" className="text-xs text-white bg-green-900 p-1 rounded-lg">Expired Date/Time</label>
                            <div className="col-span-full">
                                <input id="expiredDateTime" name='expiredDateTime' value={product.expiredDateTime} readOnly type="text" placeholder="expiredDateTime" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <label htmlFor="additionalNotes" className="text-xs text-white bg-green-900 p-1 rounded-lg">Additional Notes</label>
                            <div className="col-span-full">
                                <textarea id="additionalNotes" name='additionalNotes' placeholder="Additional Notes" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                            </div>
    
                        </div>
                    </fieldset>
                </form>
                                    <div className="modal-action col-span-full">
                                    <button onClick={handleRequest} className="btn btn-block text-white rounded-md bg-[#66A000] border-[#66A000]">Request</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Food not found.</p>
            )}
        </div>
    );
};

export default ViewDetails;
