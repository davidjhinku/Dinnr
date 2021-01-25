class UpdateRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :open_at, :float, null: false
    add_column :restaurants, :close_at, :float, null: false
  end
end
