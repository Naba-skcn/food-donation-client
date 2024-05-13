import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { MdSecurityUpdateGood } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-toastify';

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetchProducts();
    }, [user]);
     

    const fetchProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/foods/${user?.email}`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                throw new Error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };
    


    const handleDelete = async id =>{
        try{
            const {data} = await axios.delete(`http://localhost:5000/food/${id}`)
            console.log(data)
            toast.success('Deleted Successfully')
            fetchProducts()
        }
        catch(error){
            console.log(error.message)
            toast.error(error.message)
        }
    }


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
                        {products.map(product => (
                            <tr key={product._id}>
                                <td className="px-6 py-3 whitespace-nowrap">
                                    <img className="rounded-lg h-16 w-16" src={product.foodImage} alt="" />
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
                                        <Link to={`/update/${product._id}`}><button><MdSecurityUpdateGood className='size-[22px]' /></button></Link>
                                        <button onClick={() => handleDelete(product._id)}><MdDeleteForever className='size-[25px] mb-2' /></button>
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
