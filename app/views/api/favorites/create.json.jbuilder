# json.favorites do
#     json.set! @favorite.id do
        json.extract! @favorite, :id, :restaurant_id
#     end
# end