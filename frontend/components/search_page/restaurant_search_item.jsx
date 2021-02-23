import React from 'react'
import ReservationTimeslotsContainer from './reservation_timeslots_container'

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
        debugger
        return(
            <li>
                <div className='search-restaurant-item'>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image" onClick={this.handleClick}/>
                    {/* <img src={rest.photoUrl} onClick={this.handleClick}/> */}

                    <div className='rest-information'>
                        <p onClick={this.handleClick}>{rest.name}</p>
                        <div className='search-star'>
                            <img src={window.starUrl} alt="rating"/>
                            <p>Exceptional ({Math.floor(Math.random() * 50)})</p>
                        </div>
                        <ul className='rest-info-list'>
                            <li>{rest.price_range}</li>
                            <li>{rest.cuisine_type}</li>
                            <li>{rest.city}</li>
                        </ul>
                        <ReservationTimeslotsContainer restId={rest.id}/>
                    </div>
                </div>
                <hr/>
            </li>
        )
    }
}

export default RestaurantSearchItem;