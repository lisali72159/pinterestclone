@pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :board_id, :author_id, :id, :title, :link, :description, :photo
  end
end