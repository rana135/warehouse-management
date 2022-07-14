import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';
import ReactImageMagnify from 'react-image-magnify';
import { useForm } from 'react-hook-form';


const ServiceDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    console.log(product?.quantity);
    const { register, reset, handleSubmit } = useForm();


    // Single product
    useEffect(() => {
        const url = `https://tranquil-beyond-66752.herokuapp.com/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    // Update Delivered:-
    const handleUpdate = (event) => {
        const quantity = parseFloat(product?.quantity) - 1;
        const update = { quantity }
        const url = `https://tranquil-beyond-66752.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
            }
            )
    };

    // updated Quantity:-
    const onSubmit = (data) => {
        const quantity = parseFloat(data?.quantity) + parseFloat(product?.quantity);
        const update = { quantity }
        const url = `https://tranquil-beyond-66752.herokuapp.com/product/${productId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
            })
    }
    return (
        <div>
            <div>
                <div>
                    <div>

                        <div className=' mt-5 rounded-3
                col-lg-11 col-md-10 col-sm-12 col-12 mx-auto' data-aos="flip-up">
                            <div className='service services-details shadow-lg' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: product.img
                                        },
                                        largeImage: {
                                            src: product.img,
                                            width: 1200,
                                            height: 1800
                                        }
                                    }} />
                                </div>
                                <div className='ms-3'>
                                    <h3>{product.name}</h3>
                                    <h5>Price:-$ {product.price}</h5>
                                    <h5>Quantity:-{product?.quantity}</h5>
                                    <h5>ID:-{product._id}</h5>
                                    <h5>Sold:-{product.sold}</h5>
                                    <p>{product.description}</p>
                                    <h5>Supplier:-{product.supplierName}</h5>
                                    <div className="d-flex justify-content-center">
                                        <Button onClick={() => handleUpdate()} variant="info" className='btn-lg mb-3 fw-bolder'>
                                            Delivered
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='mt-3'>
                    <div data-aos="zoom-in-down">
                        <div className='text-center mt-5 mb-5 rounded-3
                col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
                            <div className='delivered text-white' style={{background:"#414a4c"}}>
                                <div data-aos="zoom-in">
                                    <div className='fs-1 fw-bold'>
                                        Do you really want to restock inventory it?
                                    </div>
                                </div>
                                <h2 className='text-center mt-3'>Product name: {product.name}</h2>
                                <h2 className='text-center mt-3 '>Quantity: {product.quantity}</h2>
                                <hr style={{ height: '3px' }} />
                                <form className='mb-3 mr-2' onSubmit={handleSubmit(onSubmit)}>
                                    <input className='me-2 text-center rounded-3 border-0' placeholder='Enter Price' type="number" {...register("quantity")} />
                                    <input className='updateQuantity-btn fw-bolder bg-info ms-2' type="submit" value="Restock" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;