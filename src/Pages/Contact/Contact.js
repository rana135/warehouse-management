import React from 'react';
import { toast } from 'react-toastify';

const Contact = (message) => {
    const sendRequest = ()=>{
        toast.success("Message Sent Successfully")
    }
    return (
        <div className='w-75 mx-auto m-5 border p-5 rounded-3 checkOut shadow-lg'>
            <h1 className='text-center'>Please Contact Us.</h1>
            <div className='text-center'></div>
            <p></p>
            <div className='d-flex justify-content-center p-3'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name" required />
                </div>
                <div className="mb-3 ms-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3 ms-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Write your message here</label>
                <textarea className="form-control rounded-3" id="exampleFormControlTextarea1" rows="7" placeholder='Message'></textarea>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <button onClick={()=> sendRequest(message)} type="button" className="btn btn-primary btn-lg">Send request</button>
            </div>
        </div>
    );
};

export default Contact;