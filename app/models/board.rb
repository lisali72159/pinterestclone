class Board < ApplicationRecord
  validates :author_id, :name, presence: true

  has_many :pins
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User 

  # has_many :follows, :as => followable
end