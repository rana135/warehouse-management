import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import GoogleLogo from '../../../Assets/images/google.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const [validated, setValidated] = useState(false);
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );


  let errorElement;
  if (error || error1 || sending) {
    errorElement = (
      <div>
        <p>Error: {error?.message}{error1?.message}{sending?.message}</p>
      </div>
    );
  }

  if (user || user1) {
    navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <Loading></Loading>
  }

  const handleLogin = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);


    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password)
    await signInWithEmailAndPassword(email, password)
    const { data } = await axios.post('https://tranquil-beyond-66752.herokuapp.com/login', { email })
    console.log(data)
    localStorage.setItem('accessToken', data.accessToken)
    navigate(from, { replace: true });
    event.preventDefault();
  }

  const navigateRegister = () => {
    navigate('/register')
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast("please enter your email address")
    }

  }
  return (
    <div className='col-lg-6 col-md-10 col-sm-12 col-12 mx-auto border p-5 m-5 rounded-3 login' data-aos="zoom-in-down">
      <h1 className='text-center'>Login</h1>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
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
        <Button style={{ height: "60px" }} className='btn btn-lg mx-auto d-block w-100 fw-bolder' variant="info" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <div className='m-4'>
        <p className='text-center mt-2 '>New to Start Furniture? <span onClick={navigateRegister}><u className='text-primary'>Please Register</u></span></p>
        <p className='text-center mt-2 '>Forget Password?<span className='ms-2' onClick={resetPassword}><u className='text-primary'>Reset Password</u></span></p>
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

export default Login;