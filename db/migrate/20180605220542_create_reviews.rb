class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body
      t.integer :reviewer_id, null: false
      t.integer :spot_id, null: false

      t.timestamps
    end
    add_index :reviews, :reviewer_id
    add_index :reviews, :spot_id
  end
end
