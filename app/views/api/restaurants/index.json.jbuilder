# under rest ID will need to pull name, reviews avg(method on review model), cuisine_type, price Range, potential for reservations(method to check how many times booked that day)
@restaurants.each do |restaurant|

    json.restaurants do
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :cuisine_type, :price_range, :city
            json.photoUrl url_for(restaurant.photos[0])

        end
    end
    
    json.reviews do
        json.set! restaurant.id do
            if restaurant.reviews.length == 0
                json.none "none"
            else
                restaurant.reviews.each do |review|
                    json.set! review.id do
                        json.extract! review, :id, :overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id
                    end
                end
            end
        end
    end
end
