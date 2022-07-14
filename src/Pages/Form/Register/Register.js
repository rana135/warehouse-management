import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from '../../../Assets/images/google.svg'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [validated, setValidated] = useState(false);
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [updateProfile, updateError] = useUpdateProfile(auth);



    let errorELement;
    if (error || error1 || updateError) {
        errorELement = (
            <div>
                <p>Error: {error?.message}{error1?.message}</p>
            </div>
        );
    }

    if (user || user1) {
        navigate('/home')
    }

    if (loading || loading1) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        event.target.reset()
    }

    const navigateLogin = () => {
        navigate("/login")
    }
    return (
        <div className='col-lg-6 col-md-10 col-sm-12 col-12 mx-auto border p-5 m-5 rounded-3 register'data-aos="zoom-in-down">
            <h1 className='text-center'>Register</h1>
            <Form noValidate validated={validated} onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept Genius Car Terms And Conditions" className={agree ? "text-primary" : "text-danger"} />
                </Form.Group>
                <Button
                    disabled={!agree}
                    style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100 fw-bolder' variant="info" type="submit">
                    Register
                </Button>
            </Form>
            {errorELement}
            <div className='m-4'>
                <p className='text-center mt-2'>Already have an account? <span onClick={navigateLogin}><u className='text-info'>Please login</u></span></p>
            </div>
            <div className='input-wrapper'>
                <button onClick={() => signInWithGoogle()} className='google-auth'>
                    <img src={GoogleLogo} alt='' />
                    <p className='mt-3 fw-bolder'> Continue with Google </p>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;