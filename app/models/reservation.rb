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

    


    def self.available(terms) #to return the available timeslots
        slots = {

        }
        debugger

        slotsStart = terms[:time].to_i - 2
        5.times do 
            slots[slotsStart] = "available"
            slotsStart += 1
        end

        debugger
        # @timeslots = Reservation.availableSlots(slots, terms[:date], terms[:time])
        @timeslots = slots
    end

    def self.availableSlots(hash, date, time)
        debugger
        # add in methods to check if there is a reservation here
    end
end
