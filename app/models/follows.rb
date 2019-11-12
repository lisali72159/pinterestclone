class Follows < ApplicationRecord
    validates :followable_id, :followable_type, presence: true
    
    belongs_to :followable, polymorphic: true;

    belongs_to :follower,
        class_name: :User
end
