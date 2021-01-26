import React from 'react'

class RestaurantSearchItem extends React.Component {

    render() {

        debugger
        return(
            <li className='restaurant-item'>
                <span>Link to image</span>
                <div className='restaurant-information'>
                    {this.props.restaurant.name}
                    end of search item component
                </div>

            </li>
        )
    }
}

export default RestaurantSearchItem;