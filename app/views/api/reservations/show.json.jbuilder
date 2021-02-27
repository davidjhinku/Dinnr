json.reservations do
    json.extract! @reservation, :id, :date, :time, :party_size, :user_id, :restaurant_id, :phone, :email, :occasion, :special_request
end

json.restaurants do
    json.extract! @restaurant, :id, :name, :bio, :cuisine_type, :price_range, :lat, :lng, :address, :city, :state, :zip, :open_at, :close_at
    # :first_picture_url, :photos, :average_review, :reviews
    json.photoUrls @restaurant.photos.map {|file| url_for(file) }
end