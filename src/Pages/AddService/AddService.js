import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import './AddService.css'

const AddService = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    // Product Added by Form:
    const onSubmit = (data, event) => {
        console.log(data)
        event.target.reset()
        const url = `https://tranquil-beyond-66752.herokuapp.com/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className=' border mb-5 mt-5 p-5 rounded-3 col-lg-10 col-md-10 col-sm-12 col-12 mx-auto'>
            <h1 className='text-center mb-4'>Please add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='serviceAdd-input'>
                    <input  className='mb-2' type="email" 
                    {...register("email")}/>
                    <input placeholder='name' className='mb-2' {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder='price' className='mb-2' type="number" {...register("price")} />
                    <input placeholder='quantity' className='mb-2' type="number" {...register("quantity")} />
                    <input placeholder='img' className='mb-2' type="text" {...register("img")} />
                </div>
                <input type="submit" value="Add Service" className="btn btn-info btn-lg mx-auto d-block mt-3 fw-bolder" />
            </form>
        </div>
    );
};
export default AddService;
