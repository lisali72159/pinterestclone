@follows.each do |follow|
    json.set! follow.id do     
        json.extract! follow, :id, :user_id, :followable_id, :followable_type
        json.follower follow.followable        
    end
end