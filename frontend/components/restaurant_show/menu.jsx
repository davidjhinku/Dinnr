import React from 'react'
import MenuHeader from './menu_headers'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenu: 0
        }
        this.selectMenu = this.selectMenu.bind(this)
    }

    selectMenu(num) {
        this.setState
    }

    render() {
        const menuNames = Object.keys(this.props.menus)
        const menuItems = Object.values(this.props.menus)[this.state.selectedMenu]

        debugger
        return(
            <div className='show-restaurant-menu'>
                <h2>Menu</h2>
                <hr/>
                
                <MenuHeader menus={menuNames} selectedMenu={this.state.selectedMenu} clickMenu={this.selectMenu} />
                <hr/>

                <div className='menu-content'>
                    <p>{menuItems.name}</p>
                </div>
            </div>
        )

    }
}

export default Menu;