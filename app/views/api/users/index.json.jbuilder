@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :email, :first_name, :last_name, :location, :age, :description
  end
end