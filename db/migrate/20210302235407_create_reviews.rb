class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :overall, null: false
      t.integer :food, null: false
      t.integer :service, null: false
      t.integer :ambiance, null: false
      t.integer :value, null: false
      t.integer :noise, null: false
      t.text :review, null: false
      t.integer :recommended, null: false
      t.string :nickname, null: false
      t.integer :reservation_id, null: false
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :reviews, :reservation_id
    add_index :reviews, :restaurant_id
    add_index :reviews, :user_id
  end
end
