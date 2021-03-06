<p align="center">
  <img width="240" height="80.43" src="https://raw.githubusercontent.com/davidjhinku/Dinnr/main/app/assets/images/logo-text.png">
</p>

# Overview
Dinnr is a single-page fullstack clone of OpenTable where users can find top rated restaurants near them and make a reservation to dine in. Each restaurant includes information on it's location, menus, photos, and attributes which users can view before commiting to making an account and booking a table. Reviews and ratings are generated by our users once a visit has been completed and each user will soon have their own profile page to manage their information, upcoming reservations, past reservations, and reviews

[Try it yourself!](https://dinnr-aa.herokuapp.com/#/)

## Key Technologies
##### Backend
* Postgres
* Ruby on Rails

##### Frontend
* React
* Redux

##### API's
* Google Maps
* AWS

## Standout Features
* User authentication with persistence
* Search bar accesible from spash, search index, and modal on any screen
* Restaurants can have multiple menus with individual items available across multiple menus

### Restaurant carousel
<p align='center'>
  <img width="900" height="264" src="https://github.com/davidjhinku/Dinnr/blob/main/app/assets/gifs/carousel-example.gif">
</p>

Splash page features a clickable carousel of restaurants with styled info blocks for each restaurant. Each restaurant card includes key information and is styled to encourage users to click through to view more information and book a reservation. The carousel is formated into a horizontal list with overflow hidden and JS built into overlayed buttons which handles scrolling through the list.

```javascript
scroll(distance){
    document.getElementById('carousel-ul').scrollLeft += distance
}

render() {
    const restList = this.props.restaurants.map((restaurant, idx) => {
        return <RestaurantCarouselItem key={idx} restaurant={restaurant} {...this.props}/>
    })
    return (
        <div className='carousel-component'>
            <h2>Your picks for today</h2>
            <hr/>
            <div className='carousel-list'>

                <ul id='carousel-ul'>
                    <button className='left-scroll-button' onClick={() => this.scroll(-600)}></button>
                    <button className='right-scroll-button' onClick={() => this.scroll(600)}></button>
                    {restList}
                </ul>
            </div>
        </div>
    )
}
```

### Search wildcards
Searches include a `date`, `time`, and `party size`. An optional case insensitive wildcard can be keyed in for `location`, `cuisine`, or `restaurant name` which is handled by the restaurant model. Validations for inputs are modular and can be added or removed to integrate with the main `search(terms)` function similar to the `withinOpenHours(rest, time)` function below

```ruby
def self.search(terms)
    results = Restaurant.where("name ILIKE :term OR city ILIKE :term OR cuisine_type ILIKE :term", term: "%#{terms[:wildcard]}%")

    if results.length > 0
        withinHours = results.select { |restaurant| Restaurant.withinOpenHours(restaurant, terms[:time]) }
        withinHours.length > 0 ? @restaurants = withinHours : @restaurants = {}
    else
        @restaurants = {}
    end
end

def self.withinOpenHours(rest, time)
    t = time.to_f
    open = rest.open_at
    close = rest.close_at

    return ((t > open) && (t < close))
end
```

## Coming Soon!
* Filter results on the search page by additional metrics
* Users can make reservations and manage them from their profile page
* Users can leave reviews after a reservation with reviews displaying on a restaurants show page
* Users can add restaurants to a favorites list which can be managed from their profile page