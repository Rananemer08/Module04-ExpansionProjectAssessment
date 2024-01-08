import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReadProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(
                        `http://localhost:4001/api/products/${id}`
                    );
                    setProduct(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <div className='p-8'> 
                <h2>product Details</h2>
                {product && product.id && (
                    <>
                        <h2>{product.id}</h2>
                        
                                    <h2>{product.title}</h2>
                                    <h2>{product.category}</h2>
                                    <h2>{product.price}</h2>
                                    <h2>{product.description}</h2>
                    </>
                )}
                </div>
                <Link to="/" className='btn btn-primary me-2'>Back</Link>
                {/* <Link to={`/edit/${meme.id}`} className='btn btn-primary'>Edit</Link>
                 */}
            </div>
        </div>
    );
}

export default ReadProduct;
