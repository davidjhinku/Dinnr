class Review < ApplicationRecord
    validates :overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id, presence: true
    validates :review, length: {minimum: 50}

    belongs_to :reservation,
        class_name: :Reservation,
        foreign_key: :reservation_id,
        primary_key: :id
        
    belongs_to :restaurant,
        class_name: :Restaurant,
        foreign_key: :restaurant_id,
        primary_key: :id
        
    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id,
        primary_key: :id

end