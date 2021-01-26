import React from 'react'

const RestaurantPhotos = ({ photosArr }) => {

    const photoList = photosArr.map((photoUrl, idx) => {
        return <li key={idx}><img src={photoUrl} alt="photo"/></li>
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