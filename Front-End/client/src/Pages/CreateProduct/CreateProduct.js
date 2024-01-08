



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateMemes() {
    const [values, setValues] = useState({
        title: '',
        category: '',
        price:0,
        description: '',
    });
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/api/products", values, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            setValues(response.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Memes</h2>
                    
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Title</label>
                        <input
                            type='title'
                            id='captionInput'
                            placeholder='Enter title'
                            className='form-control'
                            onChange={e => setValues({ ...values, title: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Category</label>
                        <input
                            type='Category'
                            id='Category'
                            placeholder='Enter category'
                            className='form-control'
                            onChange={e => setValues({ ...values, category: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Price</label>
                        <input
                            type='price'
                            id='Price'
                            placeholder='Enter price'
                            className='form-control'
                            onChange={e => setValues({ ...values, price: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='captionInput'>Description</label>
                        <input
                            type='description'
                            id='description'
                            placeholder='Enter description'
                            className='form-control'
                            onChange={e => setValues({ ...values, description: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateMemes;
