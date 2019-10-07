@boards.each do |board|
  json.set! board.id do 
    json.extract! board, :name, :author_id, :id
  end
end