import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Assets/images/banner/slide01-1.jpg'
import banner2 from '../../../Assets/images/banner/slide02-1.jpg'
import banner3 from '../../../Assets/images/banner/slide03-1.jpg'
import './Banner.css';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div data-aos="zoom-in-down">
            <Carousel>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>
                            <Typed
                                strings={[
                                    'For People Who Love Their Home',
                                    'Shop online from the convenience of your home at warehouse Furniture!',
                                    'Search for brands']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className='rounded-3 btn btn-info btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>
                            <Typed
                                strings={[
                                    'Quality Doesn’t Have To Be Expensive',
                                    'Warehouse Furniture would like to invite you to shop with us online!',
                                    'We offer low cost delivery or free same day in store pickup                                    ']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className='rounded-3 btn btn-info btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ maxHeight: "600px" }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='description'>
                        <h1 className='text-white'>
                            <Typed
                                strings={[
                                    'Due to delays in production our inventory levels are low.',
                                    'We can not stock all of the items ilisted on our website.',
                                    'Everything is available to order. contact us to see availability.']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                            </Typed>
                        </h1>
                        <p className='text-white'>Star Furniture first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our internal processes and our outward appearance.</p>
                        <button className=' rounded-3 btn btn-info btn-lg'>MORE INFORMATION</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;