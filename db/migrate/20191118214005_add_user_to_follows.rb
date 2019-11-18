class AddUserToFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows, :user_id, :integer, null: false
  end
end
