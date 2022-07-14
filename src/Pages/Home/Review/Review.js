import React from 'react';
import { Flip, Zoom } from 'react-reveal';
import './Review.css'

const Review = (props) => {
    const { picture, name, reviews, ratings } = props.review;
    return (
        <div className='reviews-all'>
            <div>
                <Flip right cascade>
                    <div className='client-reviews'>
                        <img src={picture} alt='' />
                        <div className='review-details'>
                            <h4>{name}</h4>
                            <p>Ratings: ⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </Flip>
                <div>
                    <p className='reviews'><small>
                        {reviews}
                    </small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;