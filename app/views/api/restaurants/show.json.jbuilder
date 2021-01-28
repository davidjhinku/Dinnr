# Load all the same stuff as index

#then load photos 
#thenload menu
# then load reviews

# json.restaurant do
    json.extract! @restaurant, :id, :name, :bio, :cuisine_type, :price_range, :lat, :lng, :address, :city, :state, :zip, :open_at, :close_at
    # :first_picture_url, :photos, :average_review, :reviews
    json.photoUrls @restaurant.photos.map {|file| url_for(file) }
    
    # debugger
    json.menus do
        @restaurant.menus.each do |menu|

            # debugger
            json.set! menu.name do

                # debugger
                menu.items.each do |item|

                    json.set! item.id do# debugger
                        json.extract! item, :name, :description, :price
                    end
                end
            end
        end
    end

    # debugger
    # json.menus @restaurant.
# end add in when there's multiple layers of data being returned

# json.photoUrls @restaurant.photos.map { |file| url_for(file) }