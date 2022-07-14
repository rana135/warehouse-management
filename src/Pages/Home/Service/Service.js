import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, name, price, description, supplierName, quantity } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='mt-5' data-aos="flip-up">
            <div className='service' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img style={{height:"10rem"}} src={img} alt="" />
                <h3 className='fw-bold'>{name}</h3>
                <h5>Price:-$ {price}</h5>
                <h5>Quantity:-{quantity}</h5>
                <p>{description}</p>
                <h5>Supplier:-{supplierName}</h5>
                <button onClick={() => navigateToServiceDetail(_id)} type="button" style={{ borderRadius: "50px" }} className="btn btn-info btn-md fw-bolder">UPDATE</button>
            </div>
        </div>
    );
};

export default Service;