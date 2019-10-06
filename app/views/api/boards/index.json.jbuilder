json.array! @boards do |board|
  json.name board.name
  json.author_id board.author_id
  json.id board.id

end
