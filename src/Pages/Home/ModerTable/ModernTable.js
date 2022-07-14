import React from 'react';
import moderTable from '../../../Assets/images/moderTable.jpg'

const ModernTable = () => {
    return (
        <div class="mb-5 mt-4 container">
            <div class="row g-5">
                <div class="col-md-6">
                    <div class="card-body">
                        <h1 class="card-title mb-2">MODERN TABLE SET</h1>
                        <p class="card-text">A real American Walnut wood modern farmhouse table, paired with the eclectic to modern dining chairs or the matching bench made for this table. How about this for even more flexibility; pop in the extension leaf and comfortably go from seating 6 people to 8 with 2 on each end. It is a modern table set steeped in creativity that will add a sophisticated touch to your dining space.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6">
                    <img src={moderTable} class="img-fluid rounded-3 h-100" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default ModernTable;