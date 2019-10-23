json.extract! @board, :name, :author_id, :id
  
json.pins do 
  json.array! @board.pins do |pin|
    json.extract! pin, :id, :title, :link, :description, :photo
    json.photo_url url_for(@pin.photo)
  end
end