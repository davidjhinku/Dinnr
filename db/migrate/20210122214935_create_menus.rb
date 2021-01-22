class CreateMenus < ActiveRecord::Migration[5.2]
  def change
    create_table :menus do |t|
      t.string :name, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end
    add_index :menus, :restaurant_id
  end
end
