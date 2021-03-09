import React from 'react';
import {restAverages, starRating} from '../../util/util_functions';

class ReviewsHeader extends React.Component {

    render() {
        let averages = restAverages(this.props.reviews)
        return(
            <div className='review-header'>
                <div className='left'>
                    <h3>Overall ratings and reviews</h3>
                    <p>Reviews can only be made by diners who have eaten at this restaurant</p>
                    <div className='overall'>
                        <span className='strong'>{starRating(averages['overall'])} {averages['overall']} based on recent ratings</span> 
                    </div>
                    <div className='averages'>
                        <div>
                            <span>{averages['food']}</span>
                            Food
                        </div>
                        <hr/>
                        <div>
                            <span>{averages['service']}</span>
                            Service
                        </div>
                        <hr/>
                        <div>
                            <span>{averages['ambiance']}</span>
                            Ambiance
                        </div>
                        <hr/>
                        <div>
                            <span>{averages['value']}</span>
                            Value
                        </div>
                    </div>
                    <div className='volume'>
                        <i class="fas fa-signal"></i>
                        <ul>
                            <li className='strong'>Noise</li>
                            <li>{averages['noise']}</li>
                        </ul>

                    </div>
                    <div className='recommended'>
                        <i class="far fa-thumbs-up"></i>
                        <span className='strong'>{`${averages['recommended'] * 100}% of people`}</span> would recommend it to a friend
                    </div>
                </div>
                <div className='right'>

                </div>
            </div>
        )
    }
}

export default ReviewsHeader;