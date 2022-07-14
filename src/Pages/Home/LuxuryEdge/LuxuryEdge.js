import React from 'react';
import luxury from '../../../Assets/images/luxury.png'

const LuxuryEdge = () => {
    return (
        <div class="mb-5 mt-5 container">
            <div class="row g-5">
                <div class="col-md-6 col-lg-6">
                    <img src={luxury} class="img-fluid rounded-3 h-100" alt="..."/>
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title mb-2">LUXURY EDGE</h1>
                        <p class="card-text">Modern Farm + Middle-Century = Smiley. Think American Walnut and modernist splay leg detailing. This high-end extending dining table brings a luxury edge to a contemporary home. Pop in the leaf and the top expands; great for hosting.You are about to get so many compliments and not just on the menu.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LuxuryEdge;