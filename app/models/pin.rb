class Pin < ApplicationRecord 
  validates :author_id, :board_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User 

  belongs_to :board,
    foreign_key: :board_id,
    class_name: :Board
end