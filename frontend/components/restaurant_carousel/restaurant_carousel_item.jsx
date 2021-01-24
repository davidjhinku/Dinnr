import React from 'react'

class RestaurantCarouselItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault()
        // something to redirect to that restaurants show page, <a>?
    }

    render() {
        const rest = this.props.restaurant
        debugger
        return (
            <li className='carousel-item'>
                {/* onclick directly on li */}
                <img src={rest.photoUrl} alt="first image"/>
                <div className='carousel-info-block'>
                    <p>{rest.name}</p>
                    <span>Average Rating Component</span>
                    <ul className='carousel-info-list'>
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