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

    has_one :review,
        class_name: :Review,
        foreign_key: :reservation_id,
        primary_key: :id

    def self.available(terms) #to return the available timeslots
        slots = {}
        bookedSlots = Reservation.currReservations(terms[:restId], terms[:date], terms[:time])


        slotsStart = terms[:time].to_i - 2

        5.times do 
            if slotsStart > 24
                slots[slotsStart] = 'booked'
            elsif !bookedSlots[slotsStart]   
                slots[slotsStart] = "available"
            else
                slots[slotsStart] = "booked"
            end
            slotsStart += 1
        end

        @timeslots = slots
    end

    def self.currReservations(restId, date, time)
        bookedHash = {}
        reservations = Reservation.where(restaurant_id: restId, date: date, time: ((time.to_i-2)..(time.to_i+2))).select("id, time").as_json

        reservations.each do |booking|
            bookedHash[booking["time"]] = "booked"
        end

        return bookedHash
    end
end
