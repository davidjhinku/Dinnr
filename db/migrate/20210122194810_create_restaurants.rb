class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :bio, null: false
      t.string :cuisine_type, null: false
      t.string :price_range, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :cuisine_type
    add_index :restaurants, :city
  end
end
