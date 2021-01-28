import React from 'react'

const MenuHeader = ({ menus, selectedMenu, clickMenu }) => {
    const headers = menus.map((menu, idx) => {
        const currentMenu = idx === selectedMenu ? 'active' : '';
        debugger
        return (
            <li key={idx} className={currentMenu} onClick={() => clickMenu(idx)}>
                {menu.name}
            </li>
        )
    })
    
    debugger
    return(
        <ul className='menu-header'>
            {headers}
        </ul>
    )
}

export default MenuHeader;