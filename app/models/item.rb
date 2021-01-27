class Item < ApplicationRecord
    validates :name, :description, :price, presence: true

    has_many :menu_joins,
        class_name: :MenuItemJoin,
        foreign_key: :item_id,
        primary_key: :id

    has_many :menus,
        through: :menu_joins,
        source: :menu
    
end
