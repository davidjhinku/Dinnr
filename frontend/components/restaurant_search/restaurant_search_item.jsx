import React from 'react'

class RestaurantSearchItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        e.preventDefault()
        this.props.history.push(`/restaurants/${this.props.restaurant.id}`)
    }

    render() {
        const rest = this.props.restaurant
        // debugger
        return(
            <li>
                <div className='search-restaurant-item'>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" onClick={this.handleClick}/>
                    {/* <img src={rest.photoUrl} onClick={this.handleClick}/> */}

                    <div className='rest-information'>
                        <p onClick={this.handleClick}>{rest.name}</p>
                        <p>Restaurant Star Rating</p>
                        <ul className='rest-info-list'>
                            <li>{rest.price_range}</li>
                            <li>{rest.cuisine_type}</li>
                            <li>{rest.city}</li>
                        </ul>
                        <p>Booking a reservation component</p>
                    </div>
                </div>
                <hr/>
            </li>
        )
    }
}

export default RestaurantSearchItem;