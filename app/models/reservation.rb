class Reservation < ApplicationRecord
    validates :date, :time, :party_size, :user_id, :restaurant_id, presence: true
end
