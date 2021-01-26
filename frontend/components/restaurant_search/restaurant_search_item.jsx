import React from 'react'

class RestaurantSearchItem extends React.Component {

    render() {

        // debugger
        return(
            <li className='search-restaurant-item'>
                <div className='search-restaurant-item'>
                    <span className='img standin'>200x200 img</span>
                    <div className='restaurant-information'>
                        {this.props.restaurant.name}
                        end of search item component
                    </div>
                </div>
                <hr/>
            </li>
        )
    }
}

export default RestaurantSearchItem;