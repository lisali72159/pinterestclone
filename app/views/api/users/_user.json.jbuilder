
json.extract! user, :id, :email, :first_name, :last_name, :location, :age, :description
json.photoUrl url_for(user.photo)