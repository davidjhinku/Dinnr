import React from 'react'
import SearchFormContainer from './search_form_container'
import RestaurantSearch from '../restaurant_search/restaurant_search'
import FilterForm from './filter_form'

class SearchPage extends React.Component {

    render() {
        return (
            <div className='search-page'>
                <nav>
                    <SearchFormContainer {...this.props} />
                </nav>
                <div className='search-page-columns'>
                    <div className='filter-component'>
                        <button className='search-map-link'>
                            <span className='search-map-icon'>Map</span>
                        </button>

                        <FilterForm fetchRestaurants={this.props.fetchRestaurants}/>
                    </div>
                    <div className='search-restaurants'>
                        <RestaurantSearch restaurants={this.props.restaurants} history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPage;