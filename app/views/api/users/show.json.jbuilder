# json.user do
    json.partial! 'api/users/user', user: @user
# end

# json.reservations do
#     @reservations.each do |reservation|
#         json.set! reservation.id do
#             json.extract! reservation, :id, :date, :time, :party_size, :user_id, :restaurant_id, :phone, :email, :occasion, :special_request
#         end
#     end
# end