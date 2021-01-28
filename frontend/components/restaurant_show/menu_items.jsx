import React from 'react'

const MenuItems = ({items}) => {
    const itemsList = items.map((item, idx) => {

        return(
            <li key={idx}>
                {/* <div className='item-left'>
                    <p className='item-name'>{item.name}</p>
                    <p className='item-description'>{item.description}</p>
                </div>
                <div className='item-right'>
                    <p className='item-price'>${item.price}</p>
                </div> */}
                <div className='item-bold'>
                    <p className='item-name'>{item.name}</p>
                    <p className='item-price'>${item.price}</p>
                </div>
                <div className='item-description'>
                    <p>{item.description}</p>
                </div>

            </li>
        )
    })
    return(
        <ul className='item-list'>
            {itemsList}
        </ul>
    )
}

export default MenuItems;