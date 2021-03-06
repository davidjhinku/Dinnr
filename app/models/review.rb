class Review < ApplicationRecord
    validates :overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id, presence: true
    validates :review, length: {minimum: 50, maximum: 2000}
    validates :nickname, length: {minimum: 3, maximum: 24}

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

    def self.reviewData(reviews)
        volume = ['none', 'Do not recall', 'Quiet', 'Moderate', 'Energetic']
        totalReviews = reviews.length

        # debugger
        
        if totalReviews == 0
            return {}
        else
            # debugger
            # overall = 0,
            # food = 0,
            # service = 0,
            # ambiance = 0,
            # value = 0,
            # noise = 0,
            # recommended = 0,

            data = {
                "overall": 0,
                "food": 0,
                "service": 0,
                "ambiance": 0,
                "value": 0,
                "noise": 0,
                "recommended": 0,
                "totalReviews": totalReviews
            }

            reviews.each do |rev|
                rev.each do |k, v|
                    data[k] += v
                end
            end

            # return {
            #     "overall": 0,
            #     "food": 0,
            #     "service": 0,
            #     "ambiance": 0,
            #     "value": 0,
            #     "noise": 0,
            #     "recommended": 1,
            # }
            # debugger
            return data
        end


    end
end