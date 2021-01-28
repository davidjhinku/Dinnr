# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Restaurant.delete_all
Menu.delete_all
Item.delete_all
MenuItemJoin.delete_all
# Favorite.delete_all
# Review.delete_all
# Reservation.delete_all
    
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

f11 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/1.jpg')
f12 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/2.jpg')
f13 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/3.jpg')
f14 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/4.jpg')
f15 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/5.jpg')
r1.photos.attach(io: f11, filename: '1.jpg')
r1.photos.attach(io: f12, filename: '2.jpg')
r1.photos.attach(io: f13, filename: '3.jpg')
r1.photos.attach(io: f14, filename: '4.jpg')
r1.photos.attach(io: f15, filename: '5.jpg')

m11 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r1.id
)

m11i1 = Item.create!(
	name: 'Mala Pot',
	description: 'A spicy pot of assorted meats, vegetables and noodles',
	price: 39.99
)
m11i2 = Item.create!(
	name: 'Szechuan chicken',
	description: 'Mouth-numbing chicken dish from Szechuan',
	price: 25.99
)
m11i3 = Item.create!(
	name: 'Szechuan Fried Rice',
	description: 'Szechuan style fried rice with pickled chilies',
	price: 16.99
)

m12 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r1.id
)

m12i1 = Item.create!(
	name: 'Hunan Fried Lamb Chops',
	description: 'Mala seasoned fried lamb chops',
	price: 35.99
)
m12i2 = Item.create!(
	name: 'River Spinach Delight',
	description: 'Stir fried river spinach in house special sauce',
	price: 19.99
)
m12i3 = Item.create!(
	name: 'Chili Fish Soup',
	description: 'Striped bass simmered in pickled chili soup',
	price: 29.99
)

mc111 = MenuItemJoin.create!(
    menu_id: m11.id,
    item_id: m11i1.id
)
mc112 = MenuItemJoin.create!(
    menu_id: m11.id,
    item_id: m11i2.id
)
mc113 = MenuItemJoin.create!(
    menu_id: m11.id,
    item_id: m11i3.id
)
mc114 = MenuItemJoin.create!(
    menu_id: m11.id,
    item_id: m12i1.id
)
mc115 = MenuItemJoin.create!(
    menu_id: m11.id,
    item_id: m12i2.id
)

mc121 = MenuItemJoin.create!(
    menu_id: m12.id,
    item_id: m12i1.id
)
mc122 = MenuItemJoin.create!(
    menu_id: m12.id,
    item_id: m12i2.id
)
mc123 = MenuItemJoin.create!(
    menu_id: m12.id,
    item_id: m12i3.id
)
mc124 = MenuItemJoin.create!(
    menu_id: m12.id,
    item_id: m11i2.id
)
mc125 = MenuItemJoin.create!(
    menu_id: m12.id,
    item_id: m11i3.id
)

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

f21 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/1.jpg')
f22 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/2.jpg')
f23 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/3.jpg')
f24 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/4.jpg')
f25 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/5.jpg')
r2.photos.attach(io: f21, filename: '1.jpg')
r2.photos.attach(io: f22, filename: '2.jpg')
r2.photos.attach(io: f23, filename: '3.jpg')
r2.photos.attach(io: f24, filename: '4.jpg')
r2.photos.attach(io: f25, filename: '5.jpg')

m21 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r2.id
)

m21i1 = Item.create!(
	name: 'Nicoise Salad',
	description: 'French inspired nicoise salad with boiled eggs, olives, and Spanish tuna',
	price: 19.99
)
m21i2 = Item.create!(
	name: 'Club Sandwich with Fries',
	description: 'Traditional club sandwich with truffle fries',
	price: 14.99
)
m21i3 = Item.create!(
	name: 'French Onion Soup and Baguette',
	description: 'Classic french onion soup with house made baguette topped with gruyere',
	price: 14.99
)

m22 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r2.id
)

m22i1 = Item.create!(
	name: 'Steak Dinner',
	description: 'Classic 48 oz t-bone steak with side veggies',
	price: 27.99
)
m22i2 = Item.create!(
	name: 'Angus Burger',
	description: 'Quarter pounder Angus beef burger served with fries',
	price: 19.99
)
m22i3 = Item.create!(
	name: 'Fried Chicken and Biscuits',
	description: 'Southern style fried chicken with biscuits and gravy',
	price: 21.99
)

mc211 = MenuItemJoin.create!(
    menu_id: m21.id,
    item_id: m21i1.id
)
mc212 = MenuItemJoin.create!(
    menu_id: m21.id,
    item_id: m21i2.id
)
mc213 = MenuItemJoin.create!(
    menu_id: m21.id,
    item_id: m21i3.id
)
mc214 = MenuItemJoin.create!(
    menu_id: m21.id,
    item_id: m22i1.id
)
mc215 = MenuItemJoin.create!(
    menu_id: m21.id,
    item_id: m22i2.id
)

mc221 = MenuItemJoin.create!(
    menu_id: m22.id,
    item_id: m22i1.id
)
mc222 = MenuItemJoin.create!(
    menu_id: m22.id,
    item_id: m22i2.id
)
mc223 = MenuItemJoin.create!(
    menu_id: m22.id,
    item_id: m22i3.id
)
mc224 = MenuItemJoin.create!(
    menu_id: m22.id,
    item_id: m21i2.id
)
mc225 = MenuItemJoin.create!(
    menu_id: m22.id,
    item_id: m21i3.id
)
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

f31 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/1.jpg')
f32 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/2.jpg')
f33 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/3.jpg')
f34 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/4.jpg')
f35 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/5.jpg')
r3.photos.attach(io: f31, filename: '1.jpg')
r3.photos.attach(io: f32, filename: '2.jpg')
r3.photos.attach(io: f33, filename: '3.jpg')
r3.photos.attach(io: f34, filename: '4.jpg')
r3.photos.attach(io: f35, filename: '5.jpg')

m31 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r3.id
)

m31i1 = Item.create!(
	name: 'Spam Musubi',
	description: 'Three spam musubis with homemade teriyaki sauce',
	price: 11.99
)

m31i2 = Item.create!(
	name: 'Salmon poke',
	description: 'Atlantic salmon over sushi rice with select toppings',
	price: 16.99
)

m31i3 = Item.create!(
	name: 'Teriyaki over Rice',
	description: 'Choice of chicken, beef or pork teriyaki over rice with vegetables',
	price: 16.99
)

m32 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r3.id
)

m32i1 = Item.create!(
	name: 'Pork Lau Lau',
	description: 'Smoked pork shoulder cooked in taro leaves',
	price: 22.99
)

m32i2 = Item.create!(
	name: 'Grand Poke Bowl',
	description: 'Tuna, salmon, yellowtail, and scallop poke over rice with traditional island sauces',
	price: 27.99
)

m32i3 = Item.create!(
	name: 'Mochi Fried Chicken Wings',
	description: 'Chicken wings coated with mochi flour and deep fried, tossed into house special seasoning powder',
	price: 22.99
)

mc311 = MenuItemJoin.create!(
    menu_id: m31.id,
    item_id: m31i1.id
)
mc312 = MenuItemJoin.create!(
    menu_id: m31.id,
    item_id: m31i2.id
)
mc313 = MenuItemJoin.create!(
    menu_id: m31.id,
    item_id: m31i3.id
)
mc314 = MenuItemJoin.create!(
    menu_id: m31.id,
    item_id: m32i1.id
)
mc315 = MenuItemJoin.create!(
    menu_id: m31.id,
    item_id: m32i2.id
)

mc321 = MenuItemJoin.create!(
    menu_id: m32.id,
    item_id: m32i1.id
)
mc322 = MenuItemJoin.create!(
    menu_id: m32.id,
    item_id: m32i2.id
)
mc323 = MenuItemJoin.create!(
    menu_id: m32.id,
    item_id: m32i3.id
)
mc324 = MenuItemJoin.create!(
    menu_id: m32.id,
    item_id: m31i2.id
)
mc325 = MenuItemJoin.create!(
    menu_id: m32.id,
    item_id: m31i3.id
)
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

f41 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/1.jpg')
f42 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/2.jpg')
f43 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/3.jpg')
f44 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/4.jpg')
f45 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/5.jpg')
r4.photos.attach(io: f41, filename: '1.jpg')
r4.photos.attach(io: f42, filename: '2.jpg')
r4.photos.attach(io: f43, filename: '3.jpg')
r4.photos.attach(io: f44, filename: '4.jpg')
r4.photos.attach(io: f45, filename: '5.jpg')

m41 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r4.id
)

m41i1 = Item.create!(
	name: 'Green Curry over Rice',
	description: 'Thai green curry with choice of either pork, beef, or chicken over rice',
	price: 12.99
)

m41i2 = Item.create!(
	name: 'Pork Satay',
	description: 'Grilled pork skewers served with peanut sauce',
	price: 9.99
)

m41i3 = Item.create!(
	name: 'Red Curry over Rice',
	description: 'Thai red curry with choice of either pork, beef, or chicken over rice',
	price: 12.99
)

m42 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r4.id
)

m42i1 = Item.create!(
	name: 'Thai Duck Fried Rice',
	description: 'Roast duck fried rice served with house sauce and cucumbers',
	price: 22.99
)

m42i2 = Item.create!(
	name: 'Massaman Curry over Rice',
	description: 'Beef Massaman curry over rice',
	price: 17.99
)

m42i3 = Item.create!(
	name: 'Pad See Ew',
	description: 'Stir fried rice noodles with beef, veggies, and egg',
	price: 17.99
)

mc411 = MenuItemJoin.create!(
    menu_id: m41.id,
    item_id: m41i1.id
)
mc412 = MenuItemJoin.create!(
    menu_id: m41.id,
    item_id: m41i2.id
)
mc413 = MenuItemJoin.create!(
    menu_id: m41.id,
    item_id: m41i3.id
)
mc414 = MenuItemJoin.create!(
    menu_id: m41.id,
    item_id: m42i1.id
)
mc415 = MenuItemJoin.create!(
    menu_id: m41.id,
    item_id: m42i2.id
)

mc421 = MenuItemJoin.create!(
    menu_id: m42.id,
    item_id: m42i1.id
)
mc422 = MenuItemJoin.create!(
    menu_id: m42.id,
    item_id: m42i2.id
)
mc423 = MenuItemJoin.create!(
    menu_id: m42.id,
    item_id: m42i3.id
)
mc424 = MenuItemJoin.create!(
    menu_id: m42.id,
    item_id: m41i1.id
)
mc425 = MenuItemJoin.create!(
    menu_id: m42.id,
    item_id: m41i2.id
)

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

f51 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/1.jpg')
f52 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/2.jpg')
f53 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/3.jpg')
f54 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/4.jpg')
f55 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/5.jpg')
r5.photos.attach(io: f51, filename: '1.jpg')
r5.photos.attach(io: f52, filename: '2.jpg')
r5.photos.attach(io: f53, filename: '3.jpg')
r5.photos.attach(io: f54, filename: '4.jpg')
r5.photos.attach(io: f55, filename: '5.jpg')

m51 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r5.id
)

m51i1 = Item.create!(
	name: 'French Toast',
	description: 'Classic french toast served with housemade mascarpone dipping sauce',
	price: 14.99
)

m51i2 = Item.create!(
	name: 'Golden Pancake Stacks',
	description: 'Stack of six fluffy pancakes served with maple syrup ad whipped butter',
	price: 14.99
)

m51i3 = Item.create!(
	name: 'Acai Bowl',
	description: 'Frozen acai puree topped with seasonal fruits and hemp seeds',
	price: 14.99
)

m52 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r5.id
)

m52i1 = Item.create!(
	name: 'Russian Blintzes',
	description: 'Russian crepes filled with cottage cheese mixture and topped with raspberry coulis',
	price: 19.99
)

m52i2 = Item.create!(
	name: 'Mudslide',
	description: "Boozy chocolate milkshake with Kahlua, Bailey's, and Amaretto",
	price: 15.99
)

m52i3 = Item.create!(
	name: 'Pies Pies Pies',
	description: 'Surprise sort of three different slices of pies courtesy of our pastry chef',
	price: 15.99
)

mc511 = MenuItemJoin.create!(
    menu_id: m51.id,
    item_id: m51i1.id
)
mc512 = MenuItemJoin.create!(
    menu_id: m51.id,
    item_id: m51i2.id
)
mc513 = MenuItemJoin.create!(
    menu_id: m51.id,
    item_id: m51i3.id
)
mc514 = MenuItemJoin.create!(
    menu_id: m51.id,
    item_id: m52i1.id
)
mc515 = MenuItemJoin.create!(
    menu_id: m51.id,
    item_id: m52i2.id
)

mc521 = MenuItemJoin.create!(
    menu_id: m52.id,
    item_id: m52i1.id
)
mc522 = MenuItemJoin.create!(
    menu_id: m52.id,
    item_id: m52i2.id
)
mc523 = MenuItemJoin.create!(
    menu_id: m52.id,
    item_id: m52i3.id
)
mc524 = MenuItemJoin.create!(
    menu_id: m52.id,
    item_id: m51i1.id
)
mc525 = MenuItemJoin.create!(
    menu_id: m52.id,
    item_id: m51i2.id
)

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

f61 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/1.jpg')
f62 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/2.jpg')
f63 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/3.jpg')
f64 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/4.jpg')
f65 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/5.jpg')
r6.photos.attach(io: f61, filename: '1.jpg')
r6.photos.attach(io: f62, filename: '2.jpg')
r6.photos.attach(io: f63, filename: '3.jpg')
r6.photos.attach(io: f64, filename: '4.jpg')
r6.photos.attach(io: f65, filename: '5.jpg')

m61 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r6.id
)

m61i1 = Item.create!(
	name: 'Kati Roll',
	description: 'Roti filled with channa masala served with dahl',
	price: 12.99
)

m61i2 = Item.create!(
	name: 'Tandoori Skewers',
	description: 'Chicken tandoori skewers served with naan',
	price: 16.99
)

m61i3 = Item.create!(
	name: 'Chicken Biryani',
	description: 'Chicken cooked with basmati rice and spices',
	price: 14.99
)

m62 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r6.id
)

m62i1 = Item.create!(
	name: 'Lamb Biryani',
	description: 'New Zealand lamb cooked with basmati rice and spices',
	price: 22.99
)

m62i2 = Item.create!(
	name: 'Chicken Korma',
	description: 'Chicken cooked in cashew based curry served with naan',
	price: 20.99
)

m62i3 = Item.create!(
	name: 'Saag Paneer',
	description: 'Spinach curry with chunks of paneer cheese served with naan',
	price: 17.99
)

mc611 = MenuItemJoin.create!(
    menu_id: m61.id,
    item_id: m61i1.id
)
mc612 = MenuItemJoin.create!(
    menu_id: m61.id,
    item_id: m61i2.id
)
mc613 = MenuItemJoin.create!(
    menu_id: m61.id,
    item_id: m61i3.id
)
mc614 = MenuItemJoin.create!(
    menu_id: m61.id,
    item_id: m62i1.id
)
mc615 = MenuItemJoin.create!(
    menu_id: m61.id,
    item_id: m62i2.id
)

mc621 = MenuItemJoin.create!(
    menu_id: m62.id,
    item_id: m62i1.id
)
mc622 = MenuItemJoin.create!(
    menu_id: m62.id,
    item_id: m62i2.id
)
mc623 = MenuItemJoin.create!(
    menu_id: m62.id,
    item_id: m62i3.id
)
mc624 = MenuItemJoin.create!(
    menu_id: m62.id,
    item_id: m61i1.id
)
mc625 = MenuItemJoin.create!(
    menu_id: m62.id,
    item_id: m61i2.id
)

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

f71 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/1.jpg')
f72 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/2.jpg')
f73 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/3.jpg')
f74 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/4.jpg')
f75 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/5.jpg')
r7.photos.attach(io: f71, filename: '1.jpg')
r7.photos.attach(io: f72, filename: '2.jpg')
r7.photos.attach(io: f73, filename: '3.jpg')
r7.photos.attach(io: f74, filename: '4.jpg')
r7.photos.attach(io: f75, filename: '5.jpg')

m71 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r7.id
)

m71i1 = Item.create!(
	name: 'Chocolate Chip Pancakes',
	description: 'Classic chocolate chip pancake with maple syrup',
	price: 9.99
)

m71i2 = Item.create!(
	name: 'Banana Pancakes',
	description: 'Banana pancakes with whipped cream and maple syrup',
	price: 9.99
)

m71i3 = Item.create!(
	name: 'Breakfast Platter',
	description: 'Sausage, eggs, pancakes, what more do you want?',
	price: 13.99
)

m72 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r7.id
)

m72i1 = Item.create!(
	name: 'Seafood Platter',
	description: 'Fried shrimp, cod, and scallops served with pancakes',
	price: 21.99
)

m72i2 = Item.create!(
	name: 'Savory Crepes',
	description: 'Ham and cheese buckwheat crepe served with side salad',
	price: 17.99
)

m72i3 = Item.create!(
	name: 'Decadent Pancakes',
	description: "S'mores pancakes served for dinner, never a bad idea",
	price: 14.99
)

mc711 = MenuItemJoin.create!(
    menu_id: m71.id,
    item_id: m71i1.id
)
mc712 = MenuItemJoin.create!(
    menu_id: m71.id,
    item_id: m71i2.id
)
mc713 = MenuItemJoin.create!(
    menu_id: m71.id,
    item_id: m71i3.id
)
mc714 = MenuItemJoin.create!(
    menu_id: m71.id,
    item_id: m72i1.id
)
mc715 = MenuItemJoin.create!(
    menu_id: m71.id,
    item_id: m72i2.id
)

mc721 = MenuItemJoin.create!(
    menu_id: m72.id,
    item_id: m72i1.id
)
mc722 = MenuItemJoin.create!(
    menu_id: m72.id,
    item_id: m72i2.id
)
mc723 = MenuItemJoin.create!(
    menu_id: m72.id,
    item_id: m72i3.id
)
mc724 = MenuItemJoin.create!(
    menu_id: m72.id,
    item_id: m71i1.id
)
mc725 = MenuItemJoin.create!(
    menu_id: m72.id,
    item_id: m71i2.id
)

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

f81 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/1.jpg')
f82 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/2.jpg')
f83 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/3.jpg')
f84 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/4.jpg')
f85 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/5.jpg')
r8.photos.attach(io: f81, filename: '1.jpg')
r8.photos.attach(io: f82, filename: '2.jpg')
r8.photos.attach(io: f83, filename: '3.jpg')
r8.photos.attach(io: f84, filename: '4.jpg')
r8.photos.attach(io: f85, filename: '5.jpg')

m81 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r8.id
)

m81i1 = Item.create!(
	name: 'Combo Pho',
	description: 'Pho with beef flank, tendon, and beef balls',
	price: 14.99
)

m81i2 = Item.create!(
	name: 'Beef Ball Pho',
	description: 'Pho with beef balls',
	price: 10.99
)

m81i3 = Item.create!(
	name: 'Pho Ga',
	description: 'Chicken pho',
	price: 12.99
)

m82 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r8.id
)

m82i1 = Item.create!(
	name: 'Combo Rice Platter',
	description: 'BBQ pork, egg meatloaf, shredded pork, and salad over rice',
	price: 17.99
)

m82i2 = Item.create!(
	name: 'Deluxe Pho',
	description: 'Beef pho with beef flank, tendon, tripe, brisket, beef balls, and toppings. XL size only',
	price: 17.99
)

m82i3 = Item.create!(
	name: 'Vietnamese Fish Sauce Wings',
	description: 'Fried chicken wings in fish sauce dressing',
	price: 10.99
)

mc811 = MenuItemJoin.create!(
    menu_id: m81.id,
    item_id: m81i1.id
)
mc812 = MenuItemJoin.create!(
    menu_id: m81.id,
    item_id: m81i2.id
)
mc813 = MenuItemJoin.create!(
    menu_id: m81.id,
    item_id: m81i3.id
)
mc814 = MenuItemJoin.create!(
    menu_id: m81.id,
    item_id: m82i1.id
)
mc815 = MenuItemJoin.create!(
    menu_id: m81.id,
    item_id: m82i2.id
)

mc821 = MenuItemJoin.create!(
    menu_id: m82.id,
    item_id: m82i1.id
)
mc822 = MenuItemJoin.create!(
    menu_id: m82.id,
    item_id: m82i2.id
)
mc823 = MenuItemJoin.create!(
    menu_id: m82.id,
    item_id: m82i3.id
)
mc824 = MenuItemJoin.create!(
    menu_id: m82.id,
    item_id: m81i1.id
)
mc825 = MenuItemJoin.create!(
    menu_id: m82.id,
    item_id: m81i2.id
)

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

f91 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/1.jpg')
f92 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/2.jpg')
f93 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/3.jpg')
f94 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/4.jpg')
f95 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/5.jpg')
r9.photos.attach(io: f91, filename: '1.jpg')
r9.photos.attach(io: f92, filename: '2.jpg')
r9.photos.attach(io: f93, filename: '3.jpg')
r9.photos.attach(io: f94, filename: '4.jpg')
r9.photos.attach(io: f95, filename: '5.jpg')

m91 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r9.id
)

m91i1 = Item.create!(
	name: 'Tuna tartare',
	description: 'Raw tuna melange with seasonal citrus, avocado, and pickled onions',
	price: 14.99
)

m91i2 = Item.create!(
	name: 'Fried Calamari',
	description: 'Fried squid with housemade aioli',
	price: 14.99
)

m91i3 = Item.create!(
	name: 'Mediterranean Tuna Salad',
	description: 'Mediterranean tuna salad with seasonal greens, boiled eggs, olives, and feta',
	price: 12.99
)

m92 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r9.id
)

m92i1 = Item.create!(
	name: 'Seafood pasta',
	description: 'Squid ink pasta with calamari, shrimp, and mussels',
	price: 25.99
)

m92i2 = Item.create!(
	name: 'Seafood paella',
	description: 'Smoked paella with shrimp, calamari, mussels and clams',
	price: 27.99
)

m92i3 = Item.create!(
	name: 'Frutti di Mare',
	description: 'Tomato pasta with clams, shrimp, and calamari topped with homegrown basil',
	price: 25.99
)

mc911 = MenuItemJoin.create!(
    menu_id: m91.id,
    item_id: m91i1.id
)
mc912 = MenuItemJoin.create!(
    menu_id: m91.id,
    item_id: m91i2.id
)
mc913 = MenuItemJoin.create!(
    menu_id: m91.id,
    item_id: m91i3.id
)
mc914 = MenuItemJoin.create!(
    menu_id: m91.id,
    item_id: m92i1.id
)
mc915 = MenuItemJoin.create!(
    menu_id: m91.id,
    item_id: m92i2.id
)

mc921 = MenuItemJoin.create!(
    menu_id: m92.id,
    item_id: m92i1.id
)
mc922 = MenuItemJoin.create!(
    menu_id: m92.id,
    item_id: m92i2.id
)
mc923 = MenuItemJoin.create!(
    menu_id: m92.id,
    item_id: m92i3.id
)
mc924 = MenuItemJoin.create!(
    menu_id: m92.id,
    item_id: m91i1.id
)
mc925 = MenuItemJoin.create!(
    menu_id: m92.id,
    item_id: m91i2.id
)

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

f101 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/1.jpg')
f102 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/2.jpg')
f103 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/3.jpg')
f104 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/4.jpg')
f105 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/5.jpg')
r10.photos.attach(io: f101, filename: '1.jpg')
r10.photos.attach(io: f102, filename: '2.jpg')
r10.photos.attach(io: f103, filename: '3.jpg')
r10.photos.attach(io: f104, filename: '4.jpg')
r10.photos.attach(io: f105, filename: '5.jpg')

m101 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r10.id
)

m101i1 = Item.create!(
	name: 'Kimchi Fried Rice',
	description: 'Kimchi fried rice with caramelized spam',
	price: 14.99
)

m101i2 = Item.create!(
	name: 'Jjajangmyeon',
	description: 'Black bean noodles with pork and zucchini',
	price: 14.99
)

m101i3 = Item.create!(
	name: 'Kimchi Jjigae',
	description: 'Kimchi stew with tofu',
	price: 9.99
)

m102 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r10.id
)

m102i1 = Item.create!(
	name: 'Bulgogi',
	description: 'Stewed Korean beef with rice',
	price: 19.99
)

m102i2 = Item.create!(
	name: 'Seafood Pajeon',
	description: 'Korean seafood pancakes',
	price: 14.99
)

m102i3 = Item.create!(
	name: 'Army Base Stew',
	description: 'Spicy stew with kimchi, spam, sausages, mushrooms, tofu, and noodles',
	price: 19.99
)

mc1011 = MenuItemJoin.create!(
    menu_id: m101.id,
    item_id: m101i1.id
)
mc1012 = MenuItemJoin.create!(
    menu_id: m101.id,
    item_id: m101i2.id
)
mc1013 = MenuItemJoin.create!(
    menu_id: m101.id,
    item_id: m101i3.id
)
mc1014 = MenuItemJoin.create!(
    menu_id: m101.id,
    item_id: m102i1.id
)
mc1015 = MenuItemJoin.create!(
    menu_id: m101.id,
    item_id: m102i2.id
)

mc1021 = MenuItemJoin.create!(
    menu_id: m102.id,
    item_id: m102i1.id
)
mc1022 = MenuItemJoin.create!(
    menu_id: m102.id,
    item_id: m102i2.id
)
mc1023 = MenuItemJoin.create!(
    menu_id: m102.id,
    item_id: m102i3.id
)
mc1024 = MenuItemJoin.create!(
    menu_id: m102.id,
    item_id: m101i1.id
)
mc1025 = MenuItemJoin.create!(
    menu_id: m102.id,
    item_id: m101i2.id
)

r11 = Restaurant.create!(
    name: 'Salty Squid',
    bio: "What's better than deep fried seafood? The answer is nothing! Come on down and get yourself some delicious and healthy fried goods.",
    cuisine_type: 'Seafood',
    price_range:'$',
    lat: 40.74709,
    lng: -73.91524,
    open_at: 11.00,
    close_at: 20.00,
    address: '41-11 49th St',
    city: 'Queens',
    state: 'NY',
    zip: '11104',
)

f111 = open('https://dinnr-aa-seeds.s3.amazonaws.com/11.+salty_squid/1.jpg')
f112 = open('https://dinnr-aa-seeds.s3.amazonaws.com/11.+salty_squid/2.jpg')
f113 = open('https://dinnr-aa-seeds.s3.amazonaws.com/11.+salty_squid/3.jpg')
f114 = open('https://dinnr-aa-seeds.s3.amazonaws.com/11.+salty_squid/4.jpg')
f115 = open('https://dinnr-aa-seeds.s3.amazonaws.com/11.+salty_squid/5.jpg')
r11.photos.attach(io: f111, filename: '1.jpg')
r11.photos.attach(io: f112, filename: '2.jpg')
r11.photos.attach(io: f113, filename: '3.jpg')
r11.photos.attach(io: f114, filename: '4.jpg')
r11.photos.attach(io: f115, filename: '5.jpg')

m111 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r11.id
)
m111i1 = Item.create!(
	name: 'Calamari',
	description: 'Crispy and served with lemon and dip',
	price: 12.99
)
m111i2 = Item.create!(
	name: 'Oysters (Dozen)',
	description: 'Delicious Hudson Bay oysters',
	price: 16.99
)
m111i3 = Item.create!(
	name: 'Burger with Fries',
	description: 'A favorite American staple served with fries',
	price: 9.99
)

m112 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r11.id
)
m112i1 = Item.create!(
	name: 'Marinated Squid',
	description: 'Served raw with rice',
	price: 15.99
)
m112i2 = Item.create!(
	name: 'Catch of the day',
	description: "Let our chefs decide, you're sure to love it",
	price: 24.99
)
m112i3 = Item.create!(
	name: 'Fried Cod',
	description: 'Tender slices of Cod fried to perfection',
	price: 19.99
)

mc1111 = MenuItemJoin.create!(
    menu_id: m111.id,
    item_id: m111i1.id
)
mc1112 = MenuItemJoin.create!(
    menu_id: m111.id,
    item_id: m111i2.id
)
mc1113 = MenuItemJoin.create!(
    menu_id: m111.id,
    item_id: m111i3.id
)
mc1114 = MenuItemJoin.create!(
    menu_id: m111.id,
    item_id: m112i1.id
)
mc1115 = MenuItemJoin.create!(
    menu_id: m111.id,
    item_id: m112i2.id
)

mc1121 = MenuItemJoin.create!(
    menu_id: m112.id,
    item_id: m112i1.id
)
mc1122 = MenuItemJoin.create!(
    menu_id: m112.id,
    item_id: m112i2.id
)
mc1123 = MenuItemJoin.create!(
    menu_id: m112.id,
    item_id: m112i3.id
)
mc1124 = MenuItemJoin.create!(
    menu_id: m112.id,
    item_id: m111i1.id
)
mc1125 = MenuItemJoin.create!(
    menu_id: m112.id,
    item_id: m111i2.id
)

r12 = Restaurant.create!(
    name: 'Shanghai Mountain House',
    bio: "The best Shanghainese cuisine in the whole city, possibly the whole state. We don't make that claim lightly, come try our vibrant dishes",
    cuisine_type: 'Chinese',
    price_range:'$$',
    lat: 40.76107,
    lng: -73.92005,
    open_at: 6.00,
    close_at: 23.00,
    address: '37-15 Broadway',
    city: 'Queens',
    state: 'NY',
    zip: '11103',
)

f121 = open('https://dinnr-aa-seeds.s3.amazonaws.com/12.+shanghai_mountain_house/1.jpg')
f122 = open('https://dinnr-aa-seeds.s3.amazonaws.com/12.+shanghai_mountain_house/2.jpg')
f123 = open('https://dinnr-aa-seeds.s3.amazonaws.com/12.+shanghai_mountain_house/3.jpg')
f124 = open('https://dinnr-aa-seeds.s3.amazonaws.com/12.+shanghai_mountain_house/4.jpg')
f125 = open('https://dinnr-aa-seeds.s3.amazonaws.com/12.+shanghai_mountain_house/5.jpg')
r12.photos.attach(io: f121, filename: '1.jpg')
r12.photos.attach(io: f122, filename: '2.jpg')
r12.photos.attach(io: f123, filename: '3.jpg')
r12.photos.attach(io: f124, filename: '4.jpg')
r12.photos.attach(io: f125, filename: '5.jpg')

m121 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r12.id
)
m121i1 = Item.create!(
	name: 'Xiao Long Bao',
	description: 'Delicious soup dumplings with a rich soup captured in a tender wrapper',
	price: 11.99
)
m121i2 = Item.create!(
	name: 'Sauteed Bok Choy',
	description: 'Medley of bok choy and mushrooms sauteed in savory Shanghai sauce.',
	price: 16.99
)
m121i3 = Item.create!(
	name: 'Mung Bean Noodles',
	description: 'Kimchi stew with tofu',
	price: 9.99
)

m122 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r12.id
)
m122i1 = Item.create!(
	name: 'House Special Soup',
	description: 'Served with noodles and pork, shrimp, and chicken with vegetables.',
	price: 9.95
)
m122i2 = Item.create!(
	name: 'Veggie Fried Spicy Rice Cakes',
	description: 'Soft rice cakes with vegetables drenched with spicy sauce.',
	price: 13.99
)
m122i3 = Item.create!(
	name: 'Steamed Whole Fish',
	description: 'Soy and chilie base with a whole steamed fish. Served with rice.',
	price: 22.99
)

mc1211 = MenuItemJoin.create!(
    menu_id: m121.id,
    item_id: m121i1.id
)
mc1212 = MenuItemJoin.create!(
    menu_id: m121.id,
    item_id: m121i2.id
)
mc1213 = MenuItemJoin.create!(
    menu_id: m121.id,
    item_id: m121i3.id
)
mc1214 = MenuItemJoin.create!(
    menu_id: m121.id,
    item_id: m122i1.id
)
mc1215 = MenuItemJoin.create!(
    menu_id: m121.id,
    item_id: m122i2.id
)

mc1221 = MenuItemJoin.create!(
    menu_id: m122.id,
    item_id: m122i1.id
)
mc1222 = MenuItemJoin.create!(
    menu_id: m122.id,
    item_id: m122i2.id
)
mc1223 = MenuItemJoin.create!(
    menu_id: m122.id,
    item_id: m122i3.id
)
mc1224 = MenuItemJoin.create!(
    menu_id: m122.id,
    item_id: m121i1.id
)
mc1225 = MenuItemJoin.create!(
    menu_id: m122.id,
    item_id: m121i2.id
)

r13 = Restaurant.create!(
    name: 'Bombay Grill House',
    bio: "Flame grilled to perfection, heavy on the spice, and soothing beverages to cool you down. You won't be able to escape the flavor overload",
    cuisine_type: 'Indian',
    price_range:'$$$',
    lat: 40.75463,
    lng: -73.93911,
    open_at: 14.00,
    close_at: 23.00,
    address: '24-08 40th Ave',
    city: 'Queens',
    state: 'NY',
    zip: '11101',
)

f131 = open('https://dinnr-aa-seeds.s3.amazonaws.com/13.+bombay_grill_house/1.jpg')
f132 = open('https://dinnr-aa-seeds.s3.amazonaws.com/13.+bombay_grill_house/2.jpg')
f133 = open('https://dinnr-aa-seeds.s3.amazonaws.com/13.+bombay_grill_house/3.jpg')
f134 = open('https://dinnr-aa-seeds.s3.amazonaws.com/13.+bombay_grill_house/4.jpg')
f135 = open('https://dinnr-aa-seeds.s3.amazonaws.com/13.+bombay_grill_house/5.jpg')
r13.photos.attach(io: f131, filename: '1.jpg')
r13.photos.attach(io: f132, filename: '2.jpg')
r13.photos.attach(io: f133, filename: '3.jpg')
r13.photos.attach(io: f134, filename: '4.jpg')
r13.photos.attach(io: f135, filename: '5.jpg')

m131 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r13.id
)
m131i1 = Item.create!(
	name: 'Paneer Taash Kebab',
	description: 'Tandoor style smoked paneer cheese with creamy peppercorn marinade. Spicy.',
	price: 11.50
)
m131i2 = Item.create!(
	name: 'Gilafi Reshmi',
	description: 'Skewered chicken rolls, paneer cheese and bell peppers.',
	price: 12.99
)
m131i3 = Item.create!(
	name: 'Baigan Bhartha',
	description: 'Roasted and mashed eggplant, baby green pea, onion, and tomato. Served with basmati rice.',
	price: 16.99
)

m132 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r13.id
)
m132i1 = Item.create!(
	name: 'Lamb Saag',
	description: 'Spinach, peppercorns, onion, ginger, garlic, and tomato. Served with basmati rice.',
	price: 18.99
)
m132i2 = Item.create!(
	name: 'Lamb Curry',
	description: 'Cardamom cinnamon curry sauce, cloves, and nutmeg. Served with basmati rice.',
	price: 17.99
)
m132i3 = Item.create!(
	name: 'Tandoori Chicken Tikka',
	description: 'Earthen oven grilled, yoghurt marinade, paprika, and lemon. Served with basmati rice.',
	price: 16.99
)

mc1311 = MenuItemJoin.create!(
    menu_id: m131.id,
    item_id: m131i1.id
)
mc1312 = MenuItemJoin.create!(
    menu_id: m131.id,
    item_id: m131i2.id
)
mc1313 = MenuItemJoin.create!(
    menu_id: m131.id,
    item_id: m131i3.id
)
mc1314 = MenuItemJoin.create!(
    menu_id: m131.id,
    item_id: m132i1.id
)
mc1315 = MenuItemJoin.create!(
    menu_id: m131.id,
    item_id: m132i2.id
)

mc1321 = MenuItemJoin.create!(
    menu_id: m132.id,
    item_id: m132i1.id
)
mc1322 = MenuItemJoin.create!(
    menu_id: m132.id,
    item_id: m132i2.id
)
mc1323 = MenuItemJoin.create!(
    menu_id: m132.id,
    item_id: m132i3.id
)
mc1324 = MenuItemJoin.create!(
    menu_id: m132.id,
    item_id: m131i1.id
)
mc1325 = MenuItemJoin.create!(
    menu_id: m132.id,
    item_id: m131i2.id
)

r14 = Restaurant.create!(
    name: 'Seoul Express',
    bio: "Warm and homestyle Korean food served fast. We can't wait for you to try our grilled meats and experience the beauty of Korean food",
    cuisine_type: 'Korean',
    price_range:'$',
    lat: 40.76997,
    lng: -73.92554,
    open_at: 10.00,
    close_at: 18.00,
    address: '21-02 30th Ave',
    city: 'Queens',
    state: 'NY',
    zip: '11102',
)

f141 = open('https://dinnr-aa-seeds.s3.amazonaws.com/14.+seoul_express/1.jpg')
f142 = open('https://dinnr-aa-seeds.s3.amazonaws.com/14.+seoul_express/2.jpg')
f143 = open('https://dinnr-aa-seeds.s3.amazonaws.com/14.+seoul_express/3.jpg')
f144 = open('https://dinnr-aa-seeds.s3.amazonaws.com/14.+seoul_express/4.jpg')
f145 = open('https://dinnr-aa-seeds.s3.amazonaws.com/14.+seoul_express/5.jpg')
r14.photos.attach(io: f141, filename: '1.jpg')
r14.photos.attach(io: f142, filename: '2.jpg')
r14.photos.attach(io: f143, filename: '3.jpg')
r14.photos.attach(io: f144, filename: '4.jpg')
r14.photos.attach(io: f145, filename: '5.jpg')

m141 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r14.id
)
m141i1 = Item.create!(
	name: 'Beef Bibimbap',
	description: 'Marinated Beef, 7 kinds of Seasoned Vegetables & Egg Over Rice',
	price: 14.99
)
m141i2 = Item.create!(
	name: 'Spicy Raw Blue Crab',
	description: 'Marinated raw softshell blue crab.',
	price: 18.99
)
m141i3 = Item.create!(
	name: 'Corn and Cream Croquettes',
	description: "Han's signature Corn and Cream Croquettes. 2pcs.",
	price: 9.99
)

m142 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r14.id
)
m142i1 = Item.create!(
	name: 'Slow Cooked Pork Belly',
	description: 'Served with kimchi and berry wine sauce, jalapeno soybean paste, assorted home-made pickles, and bossam kimchi.',
	price: 19.99
)
m142i2 = Item.create!(
	name: 'Galbi BBQ',
	description: "Fire-grilled Beef Marinated in Chef's Soy Sauce.",
	price: 28.99
)
m142i3 = Item.create!(
	name: 'Kimchi JJim',
	description: 'Steamed Home-made Kimchi and Pork Ribs, Squash and Tofu in Anchovy Broth.',
	price: 26.99
)

mc1411 = MenuItemJoin.create!(
    menu_id: m141.id,
    item_id: m141i1.id
)
mc1412 = MenuItemJoin.create!(
    menu_id: m141.id,
    item_id: m141i2.id
)
mc1413 = MenuItemJoin.create!(
    menu_id: m141.id,
    item_id: m141i3.id
)
mc1414 = MenuItemJoin.create!(
    menu_id: m141.id,
    item_id: m142i1.id
)
mc1415 = MenuItemJoin.create!(
    menu_id: m141.id,
    item_id: m142i2.id
)

mc1421 = MenuItemJoin.create!(
    menu_id: m142.id,
    item_id: m142i1.id
)
mc1422 = MenuItemJoin.create!(
    menu_id: m142.id,
    item_id: m142i2.id
)
mc1423 = MenuItemJoin.create!(
    menu_id: m142.id,
    item_id: m142i3.id
)
mc1424 = MenuItemJoin.create!(
    menu_id: m142.id,
    item_id: m141i1.id
)
mc1425 = MenuItemJoin.create!(
    menu_id: m142.id,
    item_id: m141i2.id
)

r15 = Restaurant.create!(
    name: 'Thai Kitchen',
    bio: "And upscale taste of South East Asia. We've combined the best flavors from Bankok to Chiang Mai into a lovely fusion that will ignite your taste buds",
    cuisine_type: 'Thai',
    price_range:'$$$$',
    lat: 40.77605,
    lng: -73.90804,
    open_at: 15.00,
    close_at: 23.00,
    address: '35-12 Ditmars Boulevard',
    city: 'Queens',
    state: 'NY',
    zip: '11105',
)

f151 = open('https://dinnr-aa-seeds.s3.amazonaws.com/15.+thai_kitchen/1.jpg')
f152 = open('https://dinnr-aa-seeds.s3.amazonaws.com/15.+thai_kitchen/2.jpg')
f153 = open('https://dinnr-aa-seeds.s3.amazonaws.com/15.+thai_kitchen/3.jpg')
f154 = open('https://dinnr-aa-seeds.s3.amazonaws.com/15.+thai_kitchen/4.jpg')
f155 = open('https://dinnr-aa-seeds.s3.amazonaws.com/15.+thai_kitchen/5.jpg')
r15.photos.attach(io: f151, filename: '1.jpg')
r15.photos.attach(io: f152, filename: '2.jpg')
r15.photos.attach(io: f153, filename: '3.jpg')
r15.photos.attach(io: f154, filename: '4.jpg')
r15.photos.attach(io: f155, filename: '5.jpg')

m151 = Menu.create!(
    name: 'Lunch',
    restaurant_id: r15.id
)
m151i1 = Item.create!(
	name: 'Curry Puffs',
	description: 'Ground chicken, sweet potato, onion, curry powder, and white paper wrapped in fresh puff pastry dough sheets.',
	price: 14.99
)
m151i2 = Item.create!(
	name: 'Pla Muk Tod',
	description: 'Crispy calamari served with sweet and sour sauce.',
	price: 15.99
)
m151i3 = Item.create!(
	name: 'Thai Salad',
	description: 'Mixed fresh green salad with tomatoes, cucumbers, carrots, red cabbage, and bean curd.',
	price: 12.99
)

m152 = Menu.create!(
    name: 'Dinner',
    restaurant_id: r15.id
)
m152i1 = Item.create!(
	name: 'Panang Curry',
	description: 'Panang curry paste in coconut milk with pineapple, fresh basil, kaffir lime leaves, and bell peppers.',
	price: 19.99
)
m152i2 = Item.create!(
	name: 'Pad Gra Tiam',
	description: 'Sauteed mixed vegetables (baby corn, carrot, zucchini, string beans, napa cabbage, broccoli, cauliflower, mushrooms, and scallions) with garlic sauce.',
	price: 18.99
)
m152i3 = Item.create!(
	name: 'Duck Tamarind',
	description: "Crispy duck topped with chef's special Thai tamarind sauce, garlic, and steamed, mixed vegetables (baby corn, carrots, and zucchini).",
	price: 23.99
)

mc1511 = MenuItemJoin.create!(
    menu_id: m151.id,
    item_id: m151i1.id
)
mc1512 = MenuItemJoin.create!(
    menu_id: m151.id,
    item_id: m151i2.id
)
mc1513 = MenuItemJoin.create!(
    menu_id: m151.id,
    item_id: m151i3.id
)
mc1514 = MenuItemJoin.create!(
    menu_id: m151.id,
    item_id: m152i1.id
)
mc1515 = MenuItemJoin.create!(
    menu_id: m151.id,
    item_id: m152i2.id
)

mc1521 = MenuItemJoin.create!(
    menu_id: m152.id,
    item_id: m152i1.id
)
mc1522 = MenuItemJoin.create!(
    menu_id: m152.id,
    item_id: m152i2.id
)
mc1523 = MenuItemJoin.create!(
    menu_id: m152.id,
    item_id: m152i3.id
)
mc1524 = MenuItemJoin.create!(
    menu_id: m152.id,
    item_id: m151i1.id
)
mc1525 = MenuItemJoin.create!(
    menu_id: m152.id,
    item_id: m151i2.id
)
#Test
#$.ajax({method: "POST", url: 'api/users', data: {user: {first_name: 'demo', last_name: 'account', email: 'demo@demo.com', primary_location: 'New York', password: 'password'}}})
#{first_name: 'demo1', last_name: 'account1', email: 'demo1@demo.com', primary_location: 'New York', password: 'password'}
#$.ajax({method: "POST", url: 'api/session', data: {user: {email: 'demo@demo.com', password: 'password'}}})
#$.ajax({method: "DELETE", url: 'api/session'})

# $.ajax({method: 'GET', url: 'api/restaurants'})
# $.ajax({method: 'GET', url: 'api/restaurants/1'})
