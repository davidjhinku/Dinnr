# Load all the same stuff as index

#then load photos 
#thenload menu
# then load reviews

json.extract! @restaurant, :id, :name
json.photoUrls @restaurant.photos.map { |file| url_for(file) }