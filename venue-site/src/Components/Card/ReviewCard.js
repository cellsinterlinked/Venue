import React from 'react'
import './ReviewCard.css';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({name, image, date, review}) => {
    return(
        <div className="review_container">
            <div className="review-portrait_container">
                <div className= "review-portrait_ring">
                <img alt="" src={image} />
                </div>
            </div>
                <h1>{name}</h1>
                <FaQuoteLeft className="review_quote"/>
                <div  className="review-text_container">
                    <p>{review}</p>

                </div>
            
        </div>
    )
}

export default ReviewCard