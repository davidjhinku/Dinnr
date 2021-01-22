class CreateMenuItemJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_item_joins do |t|
      t.integer :menu_id, null: false
      t.integer :item_id, null: false
      t.timestamps
    end
    add_index :menu_item_joins, :menu_id
    add_index :menu_item_joins, :item_id
  end
end
