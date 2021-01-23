class Restaurant < ApplicationRecord
    validates :name, :bio, :cuisine_type, :price_range, :lat, :lng, :address, :city, :state, :zip, presence: true
    validates :name, uniqueness: true
    validates :bio, length: {maximum: 2000}
    
    has_many :business_hours,
        class_name: :BusinessHour,
        foreign_key: :restaurant_id,
        primary_key: :id

    has_many :menus,
        class_name: :Menu,
        foreign_key: :restaurant_id,
        primary_key: :id

    has_one_attached :profile_photo

    has_many_attached :photos
    # has_many :reservations
    # has_many :reviews
    # has_many :favorited_by, might not need anymore without restaurant mgmt side.

end