class Restaurant < ApplicationRecord
    validates :name, :bio, :cuisine_type, :price_range, :lat, :lng, :address, :city, :state, :zip, presence: true
    validates :name, uniqueness: true
    
    # has_many :business_hours
    # has_many :menus
    # has_many :reservations
    # has_many :reviews
    # has_many :favorited_by, might not need anymore without restaurant mgmt side.

end