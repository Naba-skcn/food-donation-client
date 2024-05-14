import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './providers/AuthProvider';

const MyRequest = () => {
    const { user } = useContext(AuthContext);
    const [foodRequests, setFoodRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodRequests = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/requested-foods/${user?.email}`);
                if (response.status === 200) {
                    setFoodRequests(response.data);
                } else {
                    throw new Error('Failed to fetch food requests');
                }
            } catch (error) {
                console.error('Error fetching food requests:', error);
                setFoodRequests([]); // Clear food requests in case of error
            } finally {
                setLoading(false);
            }
        };

        fetchFoodRequests();
    }, [user]);
 console.log(foodRequests);
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">My Requested Foods</h1>
            {loading ? (
                <p>Loading...</p>
            ) : foodRequests.length > 0 ? (
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Donor Name</th>
                            <th className="border px-4 py-2">Food Name</th>
                            <th className="border px-4 py-2">Pickup Location</th>
                            <th className="border px-4 py-2">Expire Date</th>
                            <th className="border px-4 py-2">Request Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodRequests.map(request => (
                            <tr key={request._id}>
                                <td className="border px-4 py-2">{request.donatorName}</td>
                                <td className="border px-4 py-2">{request.foodName}</td>
                                <td className="border px-4 py-2">{request.pickupLocation}</td>
                                <td className="border px-4 py-2">{request.expiredDateTime}</td>
                                <td className="border px-4 py-2">{request.requestDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No requested foods found for this user.</p>
            )}
        </div>
    );
};

export default MyRequest;
