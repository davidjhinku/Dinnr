# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
# Restaurant.delete_all
# Favorite.delete_all
# Review.delete_all
# BusinessHour.delete_all
# Reservation.delete_all
# Menu.delete_all
# Item.delete_all
#MenuItem.delete_all Do we do this for a joins table?

User.create!(
    first_name: 'demo',
    last_name: 'user',
    email: 'demo@gmail.com',
    primary_location: 'New York',
    password: 'password'
)

Restaurant.create!(
    name: 'Hunan Counter',
    bio: 'A wide selection of spicy dishes sure to make you sweat',
    cuisine_type: 'Chinese',
    price_range:'$$',
    lat: 40.73259,
    lng: -73.98807,
    address: '96 3rd Ave',
    city: 'New York',
    state: 'NY',
    zip: '10003',

)

#Test
#$.ajax({method: "POST", url: 'api/users', data: {user: {first_name: 'demo', last_name: 'account', email: 'demo@demo.com', primary_location: 'New York', password: 'password'}}})
#{first_name: 'demo1', last_name: 'account1', email: 'demo1@demo.com', primary_location: 'New York', password: 'password'}
#$.ajax({method: "POST", url: 'api/session', data: {user: {email: 'demo@demo.com', password: 'password'}}})
#$.ajax({method: "DELETE", url: 'api/session'})


    