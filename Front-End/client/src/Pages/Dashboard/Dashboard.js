import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Dashboard() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:4001/api/products"
                );
                setProducts(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData(); 
    }, []); 
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:4001/api/products/${id}`)
      
     .then(response =>console.log("ress ",response.data.data))
     .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <title> products List</title>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className=' btn btn-success'> Create +</Link>
                </div>
                {console.log(products)}
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>  
                            <th>Images</th> 
                            <th>Text Caption</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.length > 0 ? (
                            products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    
                                    
                                    
                                    <td> 
                                    <Link to={`/read/${product.id}`} className='btn btn-sm btn-info'>Read</Link>
                                        <Link to={`/edit/${product.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        <Link onClick={() => handleDelete(product.id)} className='btn btn-sm btn-danger'>Delete</Link>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No products found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;
