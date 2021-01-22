class CreateBusinessHours < ActiveRecord::Migration[5.2]
  def change
    create_table :business_hours do |t|
      t.integer :day_of_week, null: false
      t.float :open_at, null: false
      t.float :close_at, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end
    add_index :business_hours, :restaurant_id
  end
end
