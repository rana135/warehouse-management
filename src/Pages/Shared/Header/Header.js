import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../Firebase.init';
import './Header.css';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' className='d-flex align-items-center nav' style={{background:"#231F20"}}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h1 className='text-white me-3 project-title '>⭐Star Furniture</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home" className='text-white '>home</Nav.Link>
                        <Nav.Link as={Link} to="blogs" className='text-white '>Blogs</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="addService" className='text-white '>Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manageInventories" className='text-white '>Manage inventories</Nav.Link>
                                <Nav.Link as={Link} to="myItem" className='text-white '>My Items</Nav.Link>
                            </>
                        }

                    </Nav>
                    <div>
                        <img src={user?.photoURL} style={{ borderRadius: "50%", width: "2.5rem", marginRight: "0.5rem" }} alt="" />
                    </div>
                    <Nav>
                        {user ?
                            <button onClick={() => handleSignOut()} className='btn btn-info '>Sign Out</button>
                            :
                            <Nav.Link as={Link} to="login" className='text-white '>
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;