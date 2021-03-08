import React from 'react'
import FavoriteDetails from './favorites_details'

class Favorites extends React.Component {
    render() {
        let favorites;

        if (this.props.favorites["none"]) {
            favorites = <li className='no-favorites'>You have no favorite restaurants to show on this list.</li>
        } else {
            favorites = Object.values(this.props.favorites).map((favorite, idx) => {
                return <FavoriteDetails key={idx} favorite={favorite} restaurant={this.props.restaurants[favorite.restaurant_id]}/>
            })
        }

        return(
            <div className='component'>
                <h1>Saved Restaurants</h1>
                <hr/>
                <ul>
                    {favorites}
                </ul>
            </div>
        )
    }
}

export default Favorites;