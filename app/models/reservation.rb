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
        slots = {}
        bookedSlots = Reservation.currReservations(terms[:restId], terms[:date], terms[:time])


        slotsStart = terms[:time].to_i - 2
        debugger

        5.times do 
            if !bookedSlots[slotsStart]
                slots[slotsStart] = "available"
            else
                slots[slotsStart] = "booked"
            end
            slotsStart += 1
        end

        debugger
        # @timeslots = Reservation.availableSlots(slots, terms[:date], terms[:time])
        @timeslots = slots
    end

    def self.currReservations(restId, date, time)
        debugger
        # todaysReservations = Reservation.where(date: date, time: {between: (time-2..time+2)})
        # Reservation.where(restaurant_id: terms[:restId], time: 14).select("id, time")
        bookedHash = {}
        reservations = Reservation.where(restaurant_id: restId, date: date, time: ((time.to_i-2)..(time.to_i+2))).select("id, time").as_json

        reservations.each do |booking|
            debugger
            bookedHash[booking["time"]] = "booked"
        end

        debugger

        return bookedHash
        # return Reservation.where(restaurant_id: restId, date: date, time: ((time.to_i-2)..(time.to_i+2)))

    end
end
