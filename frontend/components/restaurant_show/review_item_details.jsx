import React from 'react'
import {readableDate} from '../../util/util_functions'

class ReviewItemDetails extends React.Component {

    render() {
        let review = this.props.review;
        // debugger
        return(
            <div>
                <li key={this.props.key} className='item'>
                    <div className='left'>
                        <div className='avatar'>
                            {review.nickname.charAt(0)}{review.nickname.slice(-1)}
                        </div>
                        <div className='name'>
                            {review.nickname}
                        </div>
                        <div className='location'>
                            New York Area
                        </div>
                    </div>
                    <div className='right'>
                        <div className='overall'>
                            <ul>
                                <li>{review.overall}</li>
                                <li>Dined on</li>
                            </ul>
                        </div>
                        <div>
                        {/* <div className='details'> */}
                            <ul className='details'>
                                <li>Overall <span className="rating">{review.overall}</span></li>
                                <li>Food <span className="rating">{review.food}</span></li>
                                <li>Service <span className="rating">{review.service}</span></li>
                                <li>Ambiance <span className="rating">{review.ambiance}</span></li>
                            </ul>
                        </div>
                        <p className='review'>
                            {review.review}
                        </p>
                    </div>              

                </li>
                <hr/>
            </div>
        )
    }
}

export default ReviewItemDetails;