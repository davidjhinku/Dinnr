import React from 'react'
import SearchContainer from '../search/search_container'

class Splash extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: Date
        }
    }

    render() {
        return(
            <div className="splash-components">
                <div className="splash-search-form">
                    <SearchContainer date={this.state.today} />
                </div>
                <div className="splash-restaurant-index">
                    <div>This will be rotating restaurant index</div>
                </div>
            </div>
        )
    }
}

export default Splash;