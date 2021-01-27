CITIES = ['New York', 'Brooklyn', 'Queens'].freeze


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

    # has_one_attached :profile_photo

    has_many_attached :photos
    # has_many :reservations
    # has_many :reviews
    # has_many :favorited_by, might not need anymore without restaurant mgmt side.

    def self.search(terms)
        # debugger

        
        results = Restaurant.where("name ILIKE :term OR city ILIKE :term OR cuisine_type ILIKE :term", term: "%#{terms[:wildcard]}%")
    
        if results.length > 0
            withinHours = results.select { |restaurant| Restaurant.withinOpenHours(restaurant, terms[:time]) }

            # debugger
            withinHours.length > 0 ? @restaurants = withinHours : @restaurants = {}
        else
            # debugger
            @restaurants = {}
        end
    end

    def self.withinOpenHours(rest, time)
        t = time.to_f
        open = rest.open_at
        close = rest.close_at

        # debugger
        return ((t > open) && (t < close))
    end
end