import React from 'react'

const RestaurantPhotos = ({ photosArr }) => {
    const photoList = photosArr.map((photo, idx) => {
        return <li key={idx}>{photo}</li>
    })

    return (
        <div className='show-restaurant-photos'>
            <h2>{photosArr.length} Photos</h2>
            <hr />
            <ul>
                {photoList}
            </ul>
        </div>
    )
}

export default RestaurantPhotos;