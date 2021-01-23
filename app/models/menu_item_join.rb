class MenuItemJoin < ApplicationRecord
    validates :menu_id, :item_id, presence: true

    belongs_to :menu
        class_name: :Menu,
        foreign_key: :menu_id,
        primary_key: :id
    
    belongs_to :item
        class_name: :Item,
        foreign_key: :item_id,
        primary_key: :id

end
