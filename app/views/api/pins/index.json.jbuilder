@pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :board_id, :author_id, :id, :title, :link, :description, :photo
    # debugger
    if pin.photo.attached?
      json.photo_url url_for(pin.photo)
    end
  end
end