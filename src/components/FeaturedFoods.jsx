import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedFoods = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/featured-foods');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                data.sort((a, b) => b.foodQuantity - a.foodQuantity);
                const limitedItems = data.slice(0, 6);
                setItems(limitedItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5">Featured Foods</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <img src={item.foodImage} alt={item.foodName} className="w-full h-40 object-cover rounded-t-md" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">{item.foodName}</h2>
                            <div className="flex items-center mt-2">
                                <img src={item.donator.donatorImage} alt={item.donator.donatorName} className="w-8 h-8 rounded-full" />
                                <p className="text-black font-semibold ml-2">{item.donator.donatorName}</p>
                            </div>
                            <p className="text-gray-500 text-left"><span className='text-black'>Quantity:</span> {item.foodQuantity}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Pickup Location:</span> {item.pickupLocation}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Expired Date/Time:</span> {item.expiredDateTime}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Additional Notes:</span> {item.additionalNotes}</p>
                            <div className="flex justify-end mt-2">
                                <Link to={`/details/${item._id}`} className="btn bg-[#66A000] border-white text-white">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/available" className="btn bg-gray-800 text-white px-4 py-2 rounded-md">Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;
