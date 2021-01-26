import React from 'react'

class RestaurantCarouselItem extends React.Component {
    constructor(props){
        super(props)
        this.visitRestaurant = this.visitRestaurant.bind(this)
    }

    visitRestaurant(e) {
        e.preventDefault()
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
    }

    render() {
        const rest = this.props.restaurant
        return (
            <li className='carousel-item' onClick={this.visitRestaurant} >
                <img src={rest.photoUrl} alt="first image"/>
                <div className='carousel-info-block'>
                    <p>{rest.name}</p>
                    <span>Average Rating Component</span>
                    <ul className='rest-info-list'>
                        <li>{rest.cuisine_type}</li>
                        <li>{rest.price_range}</li>
                        <li>{rest.city}</li>
                    </ul>
                </div>
            </li>
        )
    }
}

export default RestaurantCarouselItem;