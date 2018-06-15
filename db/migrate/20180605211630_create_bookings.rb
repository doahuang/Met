class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.integer :guests, null: false
      t.integer :booker_id, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
    add_index :bookings, :booker_id
    add_index :bookings, :spot_id
    add_index :bookings, [:start_date, :end_date]
  end
end
