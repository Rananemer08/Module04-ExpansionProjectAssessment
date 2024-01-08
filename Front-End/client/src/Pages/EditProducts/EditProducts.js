import React, { useState, useEffect } from 'react';
import {  useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

function EditDashboard() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(
                        `http://localhost:4001/api/products/${id}`
                    );
                    setProduct(response.data.data);
                    
                    setTitle(response.data.data.title);
                    setCategory(response.data.data.category);
                    setPrice(response.data.data.price);
                    setDescription(response.data.data.description);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    // const handleImageChange = (e) => {
    //     setImageFile(e.target.files[0]);
    // };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('category', category);
            formData.append('price', price);
            formData.append('description', description);
            await axios.put(`http://localhost:4001/api/products/${id}`, formData);
            navigate('/')
        } catch (error) {
            console.error("Error updating data:", error.response.data);
        }
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Update Product</h2>
                    
                   
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Title</label>
                        <input
                            type='text'
                            id='title'
                            placeholder='Enter title'
                            className='form-control'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Category</label>
                        <input
                            type='text'
                            id='category'
                            placeholder='Enter category'
                            className='form-control'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Price</label>
                        <input
                            type='text'
                            id='price'
                            placeholder='Enter price'
                            className='form-control'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Description</label>
                        <input
                            type='text'
                            id='captionInput'
                            placeholder='Enter description'
                            className='form-control'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditDashboard;
