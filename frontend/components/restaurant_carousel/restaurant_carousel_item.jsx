import React from 'react'

class RestaurantCarouselItem extends React.Component {

    render() {

        return (
            <li className='restaurant-item'>
                {/* onclick directly on li */}
                <span>Link to image</span>
                <div className='restaurant-information'>

                </div>

            </li>
        )
    }
}

export default RestaurantCarouselItem;