class Item < ApplicationRecord
    validates :name, :description, :price, presence: true

    # has_many :menu_joins
    # has_many :items,
    #     through: :menu_joins,
    #     source: :menu
    
end
