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

json.favorites do
    if @favorites.length == 0
        json.none "none"
    else
        @favorites.each do |favorite|
            json.set! favorite.restaurant_id do
                json.extract! favorite, :id, :restaurant_id
            end
        end
    end
end

json.reviews do
    if @reviews.length == 0
        json.none "none"
    else
        @reviews.each do |review|
            json.set! review.restaurant_id do
                json.extract! review, :id, :overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id
            end
        end
    end
end

# @favorites.each do |favorite|
#     json.favorites do 
#         json.set! favorite.id do
#             json.extract! @restaurants[favorite.restaurant_id], :id, :name, :cuisine_type, :city
#             jason.photoUrl url_for(@restaurants[favorite.restaurant_id].photos[0])
#         end
#     end

#     json.reviews do
#         json.set! favorite.restaurant_id do
#             if @restaurants[favorite.restaurant_id].reviews.length == 0
#                 json.none "none"
#             else
#                 @restaurants[favorite.restaurant_id].reviews.each do |review|
#                     json.set! review.id do
#                         json.extract! review, :id, :overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id
#                     end
#                 end
#             end
#         end
#     end
# end