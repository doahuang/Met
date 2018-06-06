class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :name, null: false
      t.string :image_url
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :landscape, null: false
      t.integer :size, null: false
      t.integer :price, null: false
      t.text :description
      t.integer :owner_id, null: false

      t.timestamps
    end
    add_index :spots, :owner_id
  end
end
