class Follows < ApplicationRecord
    validates :user_id, :followable_id, :followable_type, presence: true
    validates :user_id, uniqueness: {:scope => [:followable_type, :followable_id]}
    validates :followable_type, inclusion: { in: ['User', 'Board'] }
    belongs_to :followable, polymorphic: true;

    belongs_to :follower,
        class_name: :User,
        foreign_key: :user_id
end
