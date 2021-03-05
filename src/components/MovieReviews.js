import React from 'react'


const MovieReviews = ({reviews}) => {



    return(
        <div className="review-list">
        {reviews.map(Review)}
      </div>
  
    )
}
const Review = ({ title, headline}) => {
    return (
      <div className="review">
        <h3>{title}</h3><br></br>
        <p>{headline}</p>
      </div>
    )
  }
  

export default MovieReviews