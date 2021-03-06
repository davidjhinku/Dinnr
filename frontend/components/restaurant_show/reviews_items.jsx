import React from 'react'
import ReviewItemDetails from './review_item_details'

class ReviewsItems extends React.Component {

    render(){
        let reviewItems = this.props.reviews.map((review, idx) => {
            return <ReviewItemDetails key={idx} review={review} />
        })
        return(
            // <div>
                <ul>
                    {reviewItems}
                </ul>
            // </div>
        )
    }
}

export default ReviewsItems;
