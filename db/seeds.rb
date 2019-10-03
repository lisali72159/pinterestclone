# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demouser = User.create({first_name: 'Lisa', last_name: 'Li', location:'New York City', age: 24, email: "lisa@gmail.com", password: "lisalisa"})
