import React from 'react'

class ReviewsHeader extends React.Component {
    

    
    render() {
        return(
            <div className='review-header'>
                <div className='left'>
                    <h3>Overall ratings and reviews</h3>
                    <p>Reviews can only be made by diners who have eaten at this restaurant</p>
                    <div className='overall'>
                        stars and overall based on recent ratings
                    </div>
                    <div className='averages'>
                        <div>
                            <span>4.7</span>
                            Food
                        </div>
                        <hr/>
                        <div>
                            <span>4.7</span>
                            Service
                        </div>
                        <hr/>
                        <div>
                            Ambiance
                        </div>
                        <hr/>
                        <div>
                            Value
                        </div>
                    </div>
                    <div className='volume'>
                        <i class="fas fa-signal"></i>
                        <ul>
                            <li>Noise</li>
                            <li>function</li>
                        </ul>

                    </div>
                    <div className='recommended'>
                        <i class="far fa-thumbs-up"></i>
                        <span>function of people</span> would recommend it to a friend
                    </div>
                </div>
                <div className='right'>

                </div>
            </div>
        )
    }
}

export default ReviewsHeader;