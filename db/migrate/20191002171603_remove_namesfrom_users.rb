class RemoveNamesfromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :location
    remove_column :users, :last_name
  end
end
