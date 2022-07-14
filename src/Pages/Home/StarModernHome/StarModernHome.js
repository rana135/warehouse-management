import React from 'react';
import starMagazine from '../../../Assets/images/star-magazine-summer.jpg'

const StarModernHome = () => {
    return (
        <div class="mb-5 container" style={{background:"#F5F3F2", marginTop:"15%", borderRadius:"2%"}}>
            <div class="row g-5">
                <div class="col-md-6 col-lg-6">
                    <img style={{marginTop:"-100px"}} src={starMagazine} class="img-fluid rounded-3 h-100" alt="..." />
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title">Kardiel Modern </h1>
                        <span className='fs-1'>Home</span>
                        <h1>Spring / Summer 2022</h1>
                        <p class="card-text">KARDIEL MODERN HOME is a quarterly lifestyle magazine designed for modern décor enthusiasts, inspiring and empowering readers to create their own modern havens. Each issue is packed with interior design ideas, practical decorating tips, and features on products and services designed to transform modern décor dreams into reality.</p>
                        <p class="card-text fw-bolder"><u>GET THE MAGAZINE</u></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarModernHome;