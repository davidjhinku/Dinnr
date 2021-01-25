import React from 'react'
import SearchFormContainer from './search_form_container'
import RestaurantSearchContainer from '../restaurant_search/restaurant_search_container'

class SearchPage extends React.Component {

    render() {
        // render the searchformcomp, filter, restaurantsearchcomp
        return (
            <div className='search-page'>
                <SearchFormContainer />
                <div className='search-page-columns'>
                    <div className='filter-component'>
                        {/* Map */}
                        <p>List of filter options</p>
                    </div>
                    <div className='search-restaurants'>
                        <RestaurantSearchContainer />
                    </div>
                </div>


            </div>
        )
    }
}

export default SearchPage;