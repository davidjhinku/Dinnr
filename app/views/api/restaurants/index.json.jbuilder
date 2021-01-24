# under rest ID will need to pull name, reviews avg(method on review model), cuisine_type, price Range, potential for reservations(method to check how many times booked that day)
@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :cuisine_type, :price_range, :city
        json.photoUrl url_for(restaurant.photos[0])
    end

end