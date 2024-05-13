import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [additionalNotes, setAdditionalNotes] = useState('');

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

    const handleRequest = () => {
        // Logic to handle request submission
        // This could involve an API call to update the status and move the food to "My request foods"
    };

    return (
        <div className="container mx-auto ">
              <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Food Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : product ? (
                <div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Donor Information</h3>
                        <p><span className='font-semibold text-black'>Donor Name:</span> {product.donatorName}</p>
                        <p><span  className='font-semibold text-black'>Food Pickup Location:</span> {product.pickupLocation}</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
                        <img src={product.foodImage} alt={product.foodName} className="w-full h-64 object-cover" />
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold mb-4">{product.foodName}</h3>
                            <p className="text-gray-800 leading-relaxed mb-4">Food Quantity: {product.foodQuantity}</p>
                            <p className="text-gray-800 leading-relaxed mb-4">Expired Date/Time: {product.expiredDateTime}</p>
                            {/* <p>User Email: {user.email}</p> */}
                            <p>Request Date: {new Date().toLocaleString()}</p>
                            <textarea
                                value={additionalNotes}
                                onChange={(e) => setAdditionalNotes(e.target.value)}
                                placeholder="Additional Notes"
                                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            ></textarea>
                            <button className="btn bg-[#BA4A00] border-white text-white" onClick={handleRequest}>
                                Request
                            </button>
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
