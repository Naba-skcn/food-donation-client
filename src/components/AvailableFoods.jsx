import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AvailableFoods = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortedItems, setSortedItems] = useState([]);
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/featured-foods');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                // Filter items where food status is 'Available'
                const availableItems = data.filter(item => item.foodStatus === 'Available');
                setItems(availableItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const sorted = [...items].sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
        setSortedItems(sorted);
    }, [items]);

    const handleSearch = () => {
        if (!searchTerm) {
            setSortedItems([...items]);
            return;
        }
        const filteredItems = items.filter(item => item.foodName.toLowerCase().includes(searchTerm.toLowerCase()));
        setSortedItems(filteredItems);
    };

    const handleSort = () => {
        const sorted = [...sortedItems].sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
        setSortedItems(sorted);
    };

    const toggleLayout = () => {
        setIsThreeColumnLayout(prevState => !prevState);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Available Foods</h1>

            <div className="flex justify-center my-4">
                <input type="text" placeholder="Search by Food Name" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 mr-4" />
                <button onClick={handleSearch} className="btn bg-[#66A000] text-white">Search</button>
                <button onClick={handleSort} className="btn bg-[#66A000] text-white ml-4">Sort by Expiry Date</button>
                <button onClick={toggleLayout} className="btn bg-[#66A000] text-white ml-4">{isThreeColumnLayout ? 'Change Layout' : 'Change Layout'}</button>
            </div>

            <div className={`grid ${isThreeColumnLayout ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2' } gap-4`}>
                {sortedItems.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <img src={item.foodImage} alt={item.foodName} className="w-full h-40 object-cover rounded-t-md" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold">{item.foodName}</h2>
                            <div className="flex items-center mt-2">
                                <img src={item.donatorImage} alt={item.donatorName} className="w-8 h-8 rounded-full" />
                                <p className="text-black font-semibold ml-2">{item.donatorName}</p>
                            </div>
                            <p className="text-gray-500 text-left"><span className='text-black'>Quantity:</span> {item.foodQuantity}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Pickup Location:</span> {item.pickupLocation}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Expired Date/Time:</span> {item.expiredDateTime}</p>
                            <p className="text-gray-500 text-left"><span className='text-black'>Additional Notes:</span> {item.additionalNotes}</p>
                            <div className="flex justify-end mt-2">
                                <Link to={`/food/${item._id}`} className="btn bg-[#66A000] border-white text-white">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
