import React from 'react'

class FilterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.fetchRestaurants(this.state)
    }

    render() {

        return(
            <form className='filter-form' onSubmit={this.handleSubmit}>
                <h1>Price</h1>
                <ul className='filter-price'>
                    <li>
                        <label htmlFor="price1">
                            <input type="checkbox" name="$" id="price1"/>
                            <span>$</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="price2">
                            <input type="checkbox" name="$$" id="price2" />
                            <span>$$</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="price3">
                            <input type="checkbox" name="$$$" id="price3" />
                            <span>$$$</span>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="price4">
                            <input type="checkbox" name="$$$$" id="price4" />
                            <span>$$$$</span>
                        </label>
                    </li>
                </ul>
                <hr/>
                <button className='filter-submit'>Filter</button>
            </form>
        )
    }
}

export default FilterForm;