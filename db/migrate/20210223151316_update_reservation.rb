class UpdateReservation < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :phone, :string, null: false
    add_column :reservations, :email, :string, null: false
    add_column :reservations, :occasion, :string
    add_column :reservations, :special_request, :text
  end
end
