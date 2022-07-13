import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import auth from '../../Firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            console.log(email);
            const url = `https://tranquil-beyond-66752.herokuapp.com/product?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                        "content-type": "Application/json"
                    }
                })
                setItems(data);
            }
            catch (error) {
                console.log(error)
            }

        }
        getItems()

    }, [user])

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
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                })
        }

    }

    return (
        <div>
            <div>
                <h1 className='text-center'>My Items:- {items.length}</h1>
                <div className='container inventories'>
                    {
                        items.map(item =>
                            <div key={item._id}
                                className='inventory shadow-lg' data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img style={{ height: "10rem" }} src={item.img} alt="" />
                                <h3>{item.name}</h3>
                                <h5>Price:-$ {item.price}</h5>
                                <h5>Quantity:-{item.quantity}</h5>
                                <button onClick={() => handleDelete(item._id)} type="button" style={{ borderRadius: "50px" }} className="btn btn-info btn-md mx-auto d-block fw-bolder">DELETE</button>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;