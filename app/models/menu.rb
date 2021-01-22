class Menu < ApplicationRecord
    validates :name, :restaurant_id, presence: true

    # has_one :restaurant

    # has_many :menu_joins
    # has_many :items,
    #     through: :menu_joins,
    #     source: :item

end
