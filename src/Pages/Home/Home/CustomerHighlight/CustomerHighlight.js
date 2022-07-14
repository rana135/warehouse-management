import React from 'react';
import houseoffawn from '../../../../Assets/images/houseoffawn.jpg'

const CustomerHighlight = () => {
    return (
        <div class="mb-5 container" style={{ background: "#F5F3F2", marginTop: "15%", borderRadius: "2%" }}>
            <div class="row g-5 mb-5">
                <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title">Star Designs</h1>
                        <span className='fs-1'>An Elegant,</span>
                        <h1>Modernist Statement</h1>
                        <p class="card-text">Every Kardiel is hand made, small-batch manufactured, and designed to exemplify the distinguished elegance and avant-garde aesthetic of 20th century Modernism.</p>
                        <p class="card-text fw-bolder"><u>Explore Our Process</u></p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <img style={{ marginTop: "-120px", height:"370px" }} src={houseoffawn} class="img-fluid w-100 rounded-3" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default CustomerHighlight;