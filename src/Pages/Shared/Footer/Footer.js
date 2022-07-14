import React from 'react';
import { Flip, Zoom } from 'react-reveal';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ background: " #231F20" }} className="mb-3 mt-5">
            <div className='text-center text-white'>
                <div>
                    <p>Copyright © 2022 <span className=' text-lowercase'>Star Furniture</span></p>
                    <small>made by <span>Md Rana Hossain</span></small>
                </div>
            </div>
            <div className='footer-container'>
                <div>
                        <h3 className='text-info footer-header'>About Us</h3>
                    <Flip right cascade>
                        <div className='details'>
                            <p>Who We Are</p>
                            <p>Why Choose Us</p>
                            <p>What We Do</p>
                            <p>Giving Back</p>
                            <p>Media</p>
                        </div>
                    </Flip>
                </div>
                <div>
                    <h3 className='footer-header text-info'>Policies</h3>
                    <Flip right cascade>
                        <div className='details'>
                            <p>Shipping & Delivery</p>
                            <p>Warranty</p>
                            <p>Privacy Policy</p>
                            <p>Payment & Security</p>
                            <p>Terms Of Use</p>
                        </div>
                    </Flip>

                </div>
                <div>
                    <h3 className='footer-header text-info'>Service</h3>
                    <Flip right cascade>
                        <div className='details'>
                            <p>Write a Testimonial</p>
                            <p>Career</p>
                            <p>FaQ's</p>
                            <p>Contact</p>
                            <p>Registered a Complaint</p>
                        </div>
                    </Flip>

                </div>
                <div>
                    <h3 className='footer-header text-info'>Contact Us</h3>
                    <Flip right cascade>
                        <div className='details'>
                            <p>USA, California 20, First Avenue, California
                            </p>
                            <p>Tel: +7 998 71 150 ##
                            </p>
                            <p>Fax: +7 998 71 150 ##
                            </p>
                            <p>rana286090@gmail.com</p>
                        </div>
                    </Flip>
                </div>
            </div>
        </div>
    );
};

export default Footer;