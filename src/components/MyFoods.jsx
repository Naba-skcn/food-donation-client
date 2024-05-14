import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { MdSecurityUpdateGood, MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query'; // Check import
import { toast } from 'react-toastify';

const MyFoods = () => {
    const { user } = useContext(AuthContext);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/foods/${user?.email}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch products');
        }
    };

    const deleteProduct = async id => {
        try {
            const response = await axios.delete(`http://localhost:5000/food/${id}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to delete product');
        }
    };

    const { data: products, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: fetchProducts,
    });

    const mutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            toast.success('Deleted Successfully');
            refetch();
        },
        onError: (error) => {
            toast.error(error.message || 'Failed to delete product');
        }
    });

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4 text-center mt-5 relative z-10 bg-gradient-to-r from-[#66A000] to-green-900 text-white py-2 px-4 rounded-lg shadow-md">Manage My Foods</h1>  
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Food Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Food Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Food Quantity
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Expired Date/Time
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {isLoading && <tr><td>Loading...</td></tr>}
                        {isError && <tr><td>Error: {error.message}</td></tr>}
                        {products && products.map(product => (
                            <tr key={product._id}>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <img className="rounded-lg h-16 w-16" src={product.foodImage} alt={`Image of ${product.foodName}`} />
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <div className="text-sm text-left text-gray-900">{product.foodName}</div>
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <div className="text-sm text-left text-gray-900">{product.foodQuantity}</div>
                                </td>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <div className="text-sm text-left text-gray-900">{product.expiredDateTime}</div>
                                </td>
                                <td className="px-6 py-3 text-left whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex space-x-3">
                                        <Link to={`/update/${product._id}`}>
                                            <button className="text-blue-500" aria-label={`Update ${product.foodName}`}>
                                                <MdSecurityUpdateGood className='size-[22px]' />
                                            </button>
                                        </Link>
                                        <Link><button onClick={() => mutation.mutate(product._id)} className="text-red-500" aria-label={`Delete ${product.foodName}`}>
                                            <MdDeleteForever className='size-[24px]' />
                                        </button></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
        </div>
    );
};

export default MyFoods;
