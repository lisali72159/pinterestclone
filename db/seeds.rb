# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demouser = User.create({first_name: 'Lisa', last_name: 'Li', location:'New York City', age: 24, email: "lisa@gmail.com", password: "lisalisa"})



pin1 = Pin.create({author_id: 1, board_id: 1})
file = open('https://kim-seeds.s3.amazonaws.com/k4.jpg')
pin1.photo.attach(io: file, filename: 'k4.jpg')