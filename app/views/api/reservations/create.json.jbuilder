# json.reservations do
    json.extract! @reservation, :id, :date, :time, :party_size, :user_id, :restaurant_id, :phone, :email, :occasion, :special_request
# end