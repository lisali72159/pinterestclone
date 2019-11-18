class Follows < ApplicationRecord
    validates :user_id, :followable_id, :followable_type, presence: true
    validates :user_id, uniqueness: {:scope => [:followable_type, :followable_id]}
    
    belongs_to :followable, polymorphic: true;

    belongs_to :follower,
        class_name: :User
end
