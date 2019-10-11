# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Pin.destroy_all
User.destroy_all
Board.destroy_all

demouser = User.create!({first_name: 'Lisa', last_name: 'Li', location:'New York City', age: 24, email: "lisa@gmail.com", password: "lisalisa"})
board1 = Board.create!({author_id: demouser.id, name: "Kimchi"})
board2 = Board.create({author_id: demouser.id, name: "Kimonos"})
board3 = Board.create({author_id: demouser.id, name: "Kim Possible"})
board4 = Board.create({author_id: demouser.id, name: "Kim Kardashian"})
board5 = Board.create({author_id: demouser.id, name: "Kimbap"})

pin1 = Pin.create({author_id: demouser.id, board_id: Board.first.id, title:"wow kimchi", link:"recipes.com", description:"hola"})
file = open('https://kim-seeds.s3.amazonaws.com/k4.jpg')
pin1.photo.attach(io: file, filename: 'k4.jpg')
pin1.save!

pin2 = Pin.create({author_id: demouser.id, board_id: Board.first.id })
file = open('https://kim-seeds.s3.amazonaws.com/k1.jpg')
pin2.photo.attach(io: file, filename: 'k1.jpg')
pin2.save!

pin3 = Pin.create({author_id: demouser.id, board_id: Board.first.id })
file = open('https://kim-seeds.s3.amazonaws.com/k2.jpg')
pin3.photo.attach(io: file, filename: 'k2.jpg')
pin3.save!

pin4 = Pin.create({author_id: demouser.id, board_id: Board.first.id })
file = open('https://kim-seeds.s3.amazonaws.com/k3.jpg')
pin4.photo.attach(io: file, filename: 'k3.jpg')
pin4.save!

pin5 = Pin.create({author_id: demouser.id, board_id: Board.second.id })
file = open('https://kim-seeds.s3.amazonaws.com/k5.jpg')
pin5.photo.attach(io: file, filename: 'k5.jpg')
pin5.save!

pin6 = Pin.create({author_id: demouser.id, board_id: Board.second.id })
file = open('https://kim-seeds.s3.amazonaws.com/k6.jpg')
pin6.photo.attach(io: file, filename: 'k6.jpg')
pin6.save!

pin7 = Pin.create({author_id: demouser.id, board_id: Board.second.id })
file = open('https://kim-seeds.s3.amazonaws.com/k7.jpg')
pin7.photo.attach(io: file, filename: 'k7.jpg')
pin7.save!

pin8 = Pin.create({author_id: demouser.id, board_id: Board.second.id })
file = open('https://kim-seeds.s3.amazonaws.com/k8.jpg')
pin8.photo.attach(io: file, filename: 'k8.jpg')
pin8.save!

pin9 = Pin.create({author_id: demouser.id, board_id: Board.third.id })
file = open('https://kim-seeds.s3.amazonaws.com/k9.jpg')
pin9.photo.attach(io: file, filename: 'k9.jpg')
pin9.save!

pin10 = Pin.create({author_id: demouser.id, board_id: Board.third.id })
file = open('https://kim-seeds.s3.amazonaws.com/k10.png')
pin10.photo.attach(io: file, filename: 'k10.png')
pin10.save!

pin11 = Pin.create({author_id: demouser.id, board_id: Board.third.id })
file = open('https://kim-seeds.s3.amazonaws.com/k11.jpg')
pin11.photo.attach(io: file, filename: 'k11.jpg')
pin11.save!

pin12 = Pin.create({author_id: demouser.id, board_id: Board.third.id })
file = open('https://kim-seeds.s3.amazonaws.com/k12.gif')
pin12.photo.attach(io: file, filename: 'k12.gif')
pin12.save!

pin13 = Pin.create({author_id: demouser.id, board_id: Board.fourth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k13.jpg')
pin13.photo.attach(io: file, filename: 'k13.jpg')
pin13.save!

pin14 = Pin.create({author_id: demouser.id, board_id: Board.fourth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k14.jpg')
pin14.photo.attach(io: file, filename: 'k14.jpg')
pin14.save!

pin15 = Pin.create({author_id: demouser.id, board_id: Board.fourth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k15.jpg')
pin15.photo.attach(io: file, filename: 'k15.jpg')
pin15.save!

pin16 = Pin.create({author_id: demouser.id, board_id: Board.fourth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k16.jpg')
pin16.photo.attach(io: file, filename: 'k16.jpg')
pin16.save!

pin17 = Pin.create({author_id: demouser.id, board_id: Board.fourth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k17.jpg')
pin17.photo.attach(io: file, filename: 'k17.jpg')
pin17.save!

pin18 = Pin.create({author_id: demouser.id, board_id: Board.fifth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k18.jpg')
pin18.photo.attach(io: file, filename: 'k18.jpg')
pin18.save!

pin19 = Pin.create({author_id: demouser.id, board_id: Board.fifth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k19.jpg')
pin19.photo.attach(io: file, filename: 'k19.jpg')
pin19.save!

pin20 = Pin.create({author_id: demouser.id, board_id: Board.fifth.id })
file = open('https://kim-seeds.s3.amazonaws.com/k20.jpg')
pin20.photo.attach(io: file, filename: 'k20.jpg')
pin20.save!

