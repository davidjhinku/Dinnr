import React from 'react'

class Favorite extends React.Component {
    render() {
        return(
            <div className='component'>
                <h1>Saved Restaurants</h1>
                <hr/>
                <div>You have no favorites</div>
            </div>
        )
    }
}

export default Favorite;