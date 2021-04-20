import React from 'react'
import ReviewItemDetails from './review_item_details'

class ReviewsItems extends React.Component {

    render(){
        let reviewItems = this.props.reviews.map((review, idx) => {
            return <ReviewItemDetails key={idx} review={review} />
        })
        return(
            <ul>
                {reviewItems}
            </ul>
        )
    }
}

export default ReviewsItems;
