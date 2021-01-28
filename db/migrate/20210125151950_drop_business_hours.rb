class DropBusinessHours < ActiveRecord::Migration[5.2]
  def change
    drop_table :business_hours
  end
end
