class Reservation < ApplicationRecord
    validates :date, :time, :party_size, :user_id, :restaurant_id, presence: true

    belongs_to :restaurant,
        class_name: :Restaurant,
        foreign_key: :restaurant_id,
        primary_key: :id

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

    def available(terms) #to return the available timeslots

    end
end
