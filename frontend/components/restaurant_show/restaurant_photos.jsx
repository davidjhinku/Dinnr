import React from 'react'

const RestaurantPhotos = ({ photosArr }) => {

    const photoList = photosArr.map((photoUrl, idx) => {
        return <li key={idx}>
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="test image"/>
                    {/* <img src={photoUrl} alt="photo"/> */}
                </li>
    })

    return (
        <div className='show-restaurant-photos'>
            <h2>{photosArr.length} Photos</h2>
            <hr className='show-hr'/>
            <ul className='photo-list'>
                {photoList}
            </ul>
        </div>
    )
}

export default RestaurantPhotos;