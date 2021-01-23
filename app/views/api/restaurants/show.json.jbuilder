# Load all the same stuff as index

#then load photos 
#thenload menu
# then load reviews

json.restaurant do
    json.extract! @restaurant, :id, :name, :bio, :cuisine_type, :price_range, :lat, :lng, :address, :city, :state, :zip
    # :first_picture_url, :photos, :average_review, :reviews

end

# json.photoUrls @restaurant.photos.map { |file| url_for(file) }