import React from 'react';
import ReviewsHeader from './reviews_header';
import ReviewsItems from './reviews_items';

class Reviews extends React.Component {
    render() {
        let reviews = this.props.reviews

        // debugger
        if (reviews['none']) {
            return (
                <div className='no-reviews'>
                    <h2>Be the first to review this restaurant</h2>
                    <hr />
                    <p>At present, {this.props.restaurant} has no reviews. Please add a review after your dining experience to help others make a decision about where to eat.</p>
                    <hr/>
                </div>
            )
        } else {
            // debugger
            let reviewDetails = Object.values(reviews)

            return(
                <div className='show-reviews'>
                    <h2>What {reviewDetails.length} people are saying</h2>
                    <hr />

                    <ReviewsHeader reviews={reviewDetails} />
                    <hr/>
                    <ReviewsItems reviews={reviewDetails}/>

                </div>
            )
        }
    }
}

export default Reviews