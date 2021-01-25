# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Restaurant.delete_all
# Favorite.delete_all
# Review.delete_all
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

r1 = Restaurant.create!(
    name: 'Hunan Counter',
    bio: 'A wide selection of spicy dishes sure to make you sweat.',
    cuisine_type: 'Chinese',
    price_range:'$$',
    lat: 40.73259,
    lng: -73.98807,
    open_at: 8.00,
    close_at: 22.00,
    address: '96 3rd Ave',
    city: 'New York',
    state: 'NY',
    zip: '10003',
)
f11 = open('')
f12 = open('')
f13 = open('')
f14 = open('')
f15 = open('')
r1.photos.attach(io: f11, filename: '1.jpg')
r1.photos.attach(io: f12, filename: '2.jpg')
r1.photos.attach(io: f13, filename: '3.jpg')
r1.photos.attach(io: f14, filename: '4.jpg')
r1.photos.attach(io: f15, filename: '5.jpg')

r2 = Restaurant.create!(
    name: 'American Bistro',
    bio: 'Burgers and fries, where could you possibly go wrong?',
    cuisine_type: 'American',
    price_range:'$',
    lat: 40.78296,
    lng: -73.97639,
    open_at: 8.00,
    close_at: 22.00,
    address: '366 Colombus Ave',
    city: 'New York',
    state: 'NY',
    zip: '10024',
)

f21 = open('')
f22 = open('')
f23 = open('')
f24 = open('')
f25 = open('')
r2.photos.attach(io: f21, filename: '1.jpg')
r2.photos.attach(io: f22, filename: '2.jpg')
r2.photos.attach(io: f23, filename: '3.jpg')
r2.photos.attach(io: f24, filename: '4.jpg')
r2.photos.attach(io: f25, filename: '5.jpg')

r3 = Restaurant.create!(
    name: 'Island Grill',
    bio: "We have all the tropical flavors that you've been missing during this pandemic. Your tastebuds will be on the adventure of a lifetime.",
    cuisine_type: 'Seafood',
    price_range:'$',
    lat: 40.75961,
    lng: -73.96796,
    open_at: 11.00,
    close_at: 23.00,
    address: '217 E 51st St',
    city: 'New York',
    state: 'NY',
    zip: '10022',
)

f31 = open('')
f32 = open('')
f33 = open('')
f34 = open('')
f35 = open('')
r3.photos.attach(io: f31, filename: '1.jpg')
r3.photos.attach(io: f32, filename: '2.jpg')
r3.photos.attach(io: f33, filename: '3.jpg')
r3.photos.attach(io: f34, filename: '4.jpg')
r3.photos.attach(io: f35, filename: '5.jpg')

r4 = Restaurant.create!(
    name: 'Green Curry',
    bio: "Extra spicy authentic Thai food. Our curry's can't be beat, perfect for a chilly winters day or a summer sweat.",
    cuisine_type: 'Thai',
    price_range:'$$$',
    lat: 40.73880,
    lng: -74.00212,
    open_at: 10.00,
    close_at: 20.00,
    address: '60 Greenwich Ave',
    city: 'New York',
    state: 'NY',
    zip: '10011',
)

f41 = open('')
f42 = open('')
f43 = open('')
f44 = open('')
f45 = open('')
r4.photos.attach(io: f41, filename: '1.jpg')
r4.photos.attach(io: f42, filename: '2.jpg')
r4.photos.attach(io: f43, filename: '3.jpg')
r4.photos.attach(io: f44, filename: '4.jpg')
r4.photos.attach(io: f45, filename: '5.jpg')

r5 = Restaurant.create!(
    name: 'Sweet Escape',
    bio: "Ice cream for breakfast, we say why not? After a tough year you deserve to treat yo self.",
    cuisine_type: 'Dessert',
    price_range:'$',
    lat: 40.71669,
    lng: -73.99216,
    open_at: 14.00,
    close_at: 22.00,
    address: '150 E Broadway',
    city: 'New York',
    state: 'NY',
    zip: '10002',
)

f51 = open('')
f52 = open('')
f53 = open('')
f54 = open('')
f55 = open('')
r5.photos.attach(io: f51, filename: '1.jpg')
r5.photos.attach(io: f52, filename: '2.jpg')
r5.photos.attach(io: f53, filename: '3.jpg')
r5.photos.attach(io: f54, filename: '4.jpg')
r5.photos.attach(io: f55, filename: '5.jpg')

r6 = Restaurant.create!(
    name: 'Bangalore Spices',
    bio: 'With freshly imported spices and flavors just like your mum used to make, our dishes will warm your soul.',
    cuisine_type: 'Indian',
    price_range:'$$',
    lat: 40.71952,
    lng: -73.95671,
    open_at: 8.00,
    close_at: 22.00,
    address: '148 Bedford Ave',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
)

f61 = open('')
f62 = open('')
f63 = open('')
f64 = open('')
f65 = open('')
r6.photos.attach(io: f61, filename: '1.jpg')
r6.photos.attach(io: f62, filename: '2.jpg')
r6.photos.attach(io: f63, filename: '3.jpg')
r6.photos.attach(io: f64, filename: '4.jpg')
r6.photos.attach(io: f65, filename: '5.jpg')

r7 = Restaurant.create!(
    name: 'Pancake Heaven',
    bio: "Light and fluffy towers of syrupy goodness. Your dentist might not be too happy but we bet that's not your top priority.",
    cuisine_type: 'American',
    price_range:'$',
    lat: 40.71428,
    lng: -73.95577,
    open_at: 6.00,
    close_at: 16.00,
    address: '87 Havemeyer',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
)

f71 = open('')
f72 = open('')
f73 = open('')
f74 = open('')
f75 = open('')
r7.photos.attach(io: f71, filename: '1.jpg')
r7.photos.attach(io: f72, filename: '2.jpg')
r7.photos.attach(io: f73, filename: '3.jpg')
r7.photos.attach(io: f74, filename: '4.jpg')
r7.photos.attach(io: f75, filename: '5.jpg')

r8 = Restaurant.create!(
    name: 'Pho 77',
    bio: "The ultimate soup with rich delicious flavors. Our large bowls leave you full and give the best value.",
    cuisine_type: 'Vietnamese',
    price_range:'$',
    lat: 40.70508,
    lng: -73.98710,
    open_at: 10.00,
    close_at: 20.00,
    address: '20 Pearl St',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
)

f81 = open('')
f82 = open('')
f83 = open('')
f84 = open('')
f85 = open('')
r8.photos.attach(io: f81, filename: '1.jpg')
r8.photos.attach(io: f82, filename: '2.jpg')
r8.photos.attach(io: f83, filename: '3.jpg')
r8.photos.attach(io: f84, filename: '4.jpg')
r8.photos.attach(io: f85, filename: '5.jpg')

r9 = Restaurant.create!(
    name: 'Mediterranean Seafood',
    bio: "Fresh local catch, straight from our local fishermen to your plate. Kick off the year with some healthy locally sourced foods.",
    cuisine_type: 'Seafood',
    price_range:'$$$$',
    lat: 40.71116,
    lng: -73.96538,
    open_at: 12.00,
    close_at: 22.00,
    address: '85 Broadway',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
)

f91 = open('')
f92 = open('')
f93 = open('')
f94 = open('')
f95 = open('')
r9.photos.attach(io: f91, filename: '1.jpg')
r9.photos.attach(io: f92, filename: '2.jpg')
r9.photos.attach(io: f93, filename: '3.jpg')
r9.photos.attach(io: f94, filename: '4.jpg')
r9.photos.attach(io: f95, filename: '5.jpg')

r10 = Restaurant.create!(
    name: 'Bonchan',
    bio: "We offer great BBQ cooked right at your table, it doesn't get fresher than this. Our meat is sourced straight from a private supplier for the best flavor",
    cuisine_type: 'Korean',
    price_range:'$$$$',
    lat: 40.70283,
    lng: -73.98770,
    open_at: 10.00,
    close_at: 22.00,
    address: '81 Washington St',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11201',
)

f101 = open('')
f102 = open('')
f103 = open('')
f104 = open('')
f105 = open('')
r10.photos.attach(io: f101, filename: '1.jpg')
r10.photos.attach(io: f102, filename: '2.jpg')
r10.photos.attach(io: f103, filename: '3.jpg')
r10.photos.attach(io: f104, filename: '4.jpg')
r10.photos.attach(io: f105, filename: '5.jpg')

#Test
#$.ajax({method: "POST", url: 'api/users', data: {user: {first_name: 'demo', last_name: 'account', email: 'demo@demo.com', primary_location: 'New York', password: 'password'}}})
#{first_name: 'demo1', last_name: 'account1', email: 'demo1@demo.com', primary_location: 'New York', password: 'password'}
#$.ajax({method: "POST", url: 'api/session', data: {user: {email: 'demo@demo.com', password: 'password'}}})
#$.ajax({method: "DELETE", url: 'api/session'})

# $.ajax({method: 'GET', url: 'api/restaurants'})
# $.ajax({method: 'GET', url: 'api/restaurants/1'})

    