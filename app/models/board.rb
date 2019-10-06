class Board < ApplicationRecord
  validates :author_id, :name

  has_many :pins
  belongs_to :author
  has_many :follows, :as => followable
end