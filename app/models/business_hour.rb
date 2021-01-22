class BusinessHour < ApplicationRecord
    validates :day_of_week, :open_at, :close_at, :restaurant_id, presence: true

    # belongs_to :restaurant
end