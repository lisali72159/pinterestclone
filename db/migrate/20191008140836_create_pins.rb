class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :author_id, null: false
      t.integer :board_id, null: false
      t.string :title
      t.string :link
      t.string :description
      t.timestamps
    end
    add_index :pins, :author_id
    add_index :pins, :board_id
  end
end
