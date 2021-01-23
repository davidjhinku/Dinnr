class Menu < ApplicationRecord
    validates :name, :restaurant_id, presence: true

    belongs_to :restaurant,
        class_name: :Restaurant,
        foreign_key: :restaurant_id,
        primary_key: :id

    has_many :menu_joins,
        class_name: :MenuItemJoin,
        foreign_key: :menu_id,
        primary_key: :id

    has_many :items,
        through: :menu_joins,
        source: :item

end
