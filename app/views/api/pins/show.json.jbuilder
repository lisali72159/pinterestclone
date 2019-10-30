json.pin do
  json.extract! @pin, :title, :author_id, :id, :board_id, :link, :description, :photo
  json.photo_url url_for(@pin.photo)
end

json.board do
  json.extract! @pin.board, :name, :author_id, :id, :description
end

json.author do
  json.extract! @pin.author, :id, :email, :first_name, :last_name, :location, :age, :description
end