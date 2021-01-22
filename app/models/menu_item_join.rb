class MenuItemJoin < ApplicationRecord
    validates :menu_id, :item_id, presence: true

    # belongs_to :menu
    # belongs_to :item
end
