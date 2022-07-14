import React from 'react';
import useService from '../../hooks/useService';
import Typed from 'react-typed';
import './ManageInventories.css'
import { Link } from 'react-router-dom';

const ManageInventories = () => {
    const [services, setServices] = useService()
    // specific One item Delete:-
    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure?")
        if (proceed) {
            const url = `https://tranquil-beyond-66752.herokuapp.com/product/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                })
        }

    }
    return (
        <div>
            <h1 style={{ marginTop: "2.5rem" }} className='text-center'>
                <Typed
                    strings={[
                        'Manage Inventories']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            </h1>
            <div className='container inventories'>
                {
                    services.map(service =>
                        <div key={service._id}
                            className='inventory shadow-lg' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img style={{ height: "10rem" }} src={service.img} alt="" />
                            <h3 className='fw-bold'>{service.name}</h3>
                            <h5>Price:-$ {service.price}</h5>
                            <h5>Quantity:-{service.quantity}</h5>
                            <button onClick={() => handleDelete(service._id)} type="button" style={{ borderRadius: "50px" }} className="btn btn-info btn-md mx-auto d-block fw-bolder">DELETE</button>
                        </div>
                    )
                }
            </div>
            <div className="d-flex justify-content-center">
                <Link to='/addService'>
                    <button variant="info" className='btn-lg btn-info fw-bolder'>
                        ADD NEW ITEMS
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ManageInventories;