import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product1 from '../../../Assets/images/relatedProduct/product1.jpg'
import product2 from '../../../Assets/images/relatedProduct/product2.jpg'
import product3 from '../../../Assets/images/relatedProduct/product3.jpg'
import product4 from '../../../Assets/images/relatedProduct/product4.jpg'
import product5 from '../../../Assets/images/relatedProduct/product5.jpg'
import product6 from '../../../Assets/images/relatedProduct/product6.jpg'
import product7 from '../../../Assets/images/relatedProduct/product7.jpg'
import product8 from '../../../Assets/images/relatedProduct/product8.jpg'
import product9 from '../../../Assets/images/relatedProduct/product9.jpg'
import product10 from '../../../Assets/images/relatedProduct/product10.jpg'
import './RelatedProduct.css'


const RelatedProduct = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div>
            <div className='container mt-5'>
                <h1 className="text-center mb-4">Modernists <span className="text-info">Favorites</span></h1>
                <Slider {...settings}>
                    <div className="RelatedProduct">
                        <img src={product1} alt="" />
                    </div>
                    <div className="RelatedProduct">
                        <img src={product2} alt="" />
                    </div>
                    <div className="RelatedProduct">
                        <img src={product3} alt="" />
                    </div>
                    <div className="RelatedProduct">
                        <img src={product4} alt="" />
                    </div>
                    <div className="RelatedProduct">
                        <img src={product5} alt="" />
                    </div>
                    <div className="RelatedProduct" id="home">
                        <img src={product6} alt="" />
                    </div>
                    <div className="RelatedProduct" id="home">
                        <img src={product7} alt="" />
                    </div>
                    <div className="RelatedProduct" id="home">
                        <img src={product8} alt="" />
                    </div>
                    <div className="RelatedProduct" id="home">
                        <img src={product9} alt="" />
                    </div>
                    <div className="RelatedProduct" id="home">
                        <img src={product10} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default RelatedProduct;