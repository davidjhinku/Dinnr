json.reservations do
    @reservations.each do |reservation|
        json.set! reservation.id do
            json.extract! reservation, :id, :date, :time, :party_size, :user_id, :restaurant_id, :phone, :email, :occasion, :special_request
        end
    end
end

json.restaurants do
    @restaurants.each do |restaurant|
        json.set! restaurant.id do
            json.extract! restaurant, :id, :name, :cuisine_type, :price_range, :city
            json.photoUrl url_for(restaurant.photos[0])
        end
    end
end