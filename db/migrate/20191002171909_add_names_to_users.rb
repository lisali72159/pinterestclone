class AddNamesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string
    add_column :users, :location, :string
    add_column :users, :age, :integer
  end
end
