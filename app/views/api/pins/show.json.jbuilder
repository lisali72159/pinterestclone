json.extract! @pin, :title, :author_id, :id, :board_id, :title, :link, :description, :photo
json.photo_url url_for(@pin.photo)