# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.delete_all
# Restaurant.delete_all
# Favorite.delete_all
# Review.delete_all
# Reservation.delete_all
# Menu.delete_all
# Item.delete_all
#MenuItem.delete_all Do we do this for a joins table?

# User.create!(
#     first_name: 'demo',
#     last_name: 'user',
#     email: 'demo@gmail.com',
#     primary_location: 'New York',
#     password: 'password'
# )

# r1 = Restaurant.create!(
#     name: 'Hunan Counter',
#     bio: 'A wide selection of spicy dishes sure to make you sweat.',
#     cuisine_type: 'Chinese',
#     price_range:'$$',
#     lat: 40.73259,
#     lng: -73.98807,
#     open_at: 8.00,
#     close_at: 22.00,
#     address: '96 3rd Ave',
#     city: 'New York',
#     state: 'NY',
#     zip: '10003',
# )

# f11 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/1.jpg')
# f12 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/2.jpg')
# f13 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/3.jpg')
# f14 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/4.jpg')
# f15 = open('https://dinnr-aa-seeds.s3.amazonaws.com/1.+hunan_counter/5.jpg')
# r1.photos.attach(io: f11, filename: '1.jpg')
# r1.photos.attach(io: f12, filename: '2.jpg')
# r1.photos.attach(io: f13, filename: '3.jpg')
# r1.photos.attach(io: f14, filename: '4.jpg')
# r1.photos.attach(io: f15, filename: '5.jpg')

m11 = Menu.create!(
	name: 'Lunch',
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

# r2 = Restaurant.create!(
#     name: 'American Bistro',
#     bio: 'Burgers and fries, where could you possibly go wrong?',
#     cuisine_type: 'American',
#     price_range:'$',
#     lat: 40.78296,
#     lng: -73.97639,
#     open_at: 8.00,
#     close_at: 22.00,
#     address: '366 Colombus Ave',
#     city: 'New York',
#     state: 'NY',
#     zip: '10024',
# )

# f21 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/1.jpg')
# f22 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/2.jpg')
# f23 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/3.jpg')
# f24 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/4.jpg')
# f25 = open('https://dinnr-aa-seeds.s3.amazonaws.com/2.+american_bistro/5.jpg')
# r2.photos.attach(io: f21, filename: '1.jpg')
# r2.photos.attach(io: f22, filename: '2.jpg')
# r2.photos.attach(io: f23, filename: '3.jpg')
# r2.photos.attach(io: f24, filename: '4.jpg')
# r2.photos.attach(io: f25, filename: '5.jpg')

m21 = Menu.create!(
	name: 'Lunch',
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

# r3 = Restaurant.create!(
#     name: 'Island Grill',
#     bio: "We have all the tropical flavors that you've been missing during this pandemic. Your tastebuds will be on the adventure of a lifetime.",
#     cuisine_type: 'Seafood',
#     price_range:'$',
#     lat: 40.75961,
#     lng: -73.96796,
#     open_at: 11.00,
#     close_at: 23.00,
#     address: '217 E 51st St',
#     city: 'New York',
#     state: 'NY',
#     zip: '10022',
# )

# f31 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/1.jpg')
# f32 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/2.jpg')
# f33 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/3.jpg')
# f34 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/4.jpg')
# f35 = open('https://dinnr-aa-seeds.s3.amazonaws.com/3.+island_grill/5.jpg')
# r3.photos.attach(io: f31, filename: '1.jpg')
# r3.photos.attach(io: f32, filename: '2.jpg')
# r3.photos.attach(io: f33, filename: '3.jpg')
# r3.photos.attach(io: f34, filename: '4.jpg')
# r3.photos.attach(io: f35, filename: '5.jpg')

m31 = Menu.create!(
	name: 'Lunch',
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

# r4 = Restaurant.create!(
#     name: 'Green Curry',
#     bio: "Extra spicy authentic Thai food. Our curry's can't be beat, perfect for a chilly winters day or a summer sweat.",
#     cuisine_type: 'Thai',
#     price_range:'$$$',
#     lat: 40.73880,
#     lng: -74.00212,
#     open_at: 10.00,
#     close_at: 20.00,
#     address: '60 Greenwich Ave',
#     city: 'New York',
#     state: 'NY',
#     zip: '10011',
# )

# f41 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/1.jpg')
# f42 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/2.jpg')
# f43 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/3.jpg')
# f44 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/4.jpg')
# f45 = open('https://dinnr-aa-seeds.s3.amazonaws.com/4.+green_curry/5.jpg')
# r4.photos.attach(io: f41, filename: '1.jpg')
# r4.photos.attach(io: f42, filename: '2.jpg')
# r4.photos.attach(io: f43, filename: '3.jpg')
# r4.photos.attach(io: f44, filename: '4.jpg')
# r4.photos.attach(io: f45, filename: '5.jpg')

m41 = Menu.create!(
	name: 'Lunch',
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

# r5 = Restaurant.create!(
#     name: 'Sweet Escape',
#     bio: "Ice cream for breakfast, we say why not? After a tough year you deserve to treat yo self.",
#     cuisine_type: 'Dessert',
#     price_range:'$',
#     lat: 40.71669,
#     lng: -73.99216,
#     open_at: 14.00,
#     close_at: 22.00,
#     address: '150 E Broadway',
#     city: 'New York',
#     state: 'NY',
#     zip: '10002',
# )

# f51 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/1.jpg')
# f52 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/2.jpg')
# f53 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/3.jpg')
# f54 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/4.jpg')
# f55 = open('https://dinnr-aa-seeds.s3.amazonaws.com/5.+sweet_escape/5.jpg')
# r5.photos.attach(io: f51, filename: '1.jpg')
# r5.photos.attach(io: f52, filename: '2.jpg')
# r5.photos.attach(io: f53, filename: '3.jpg')
# r5.photos.attach(io: f54, filename: '4.jpg')
# r5.photos.attach(io: f55, filename: '5.jpg')

m51 = Menu.create!(
	name: 'Lunch',
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

# r6 = Restaurant.create!(
#     name: 'Bangalore Spices',
#     bio: 'With freshly imported spices and flavors just like your mum used to make, our dishes will warm your soul.',
#     cuisine_type: 'Indian',
#     price_range:'$$',
#     lat: 40.71952,
#     lng: -73.95671,
#     open_at: 8.00,
#     close_at: 22.00,
#     address: '148 Bedford Ave',
#     city: 'Brooklyn',
#     state: 'NY',
#     zip: '11201',
# )

# f61 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/1.jpg')
# f62 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/2.jpg')
# f63 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/3.jpg')
# f64 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/4.jpg')
# f65 = open('https://dinnr-aa-seeds.s3.amazonaws.com/6.+bangalore_spices/5.jpg')
# r6.photos.attach(io: f61, filename: '1.jpg')
# r6.photos.attach(io: f62, filename: '2.jpg')
# r6.photos.attach(io: f63, filename: '3.jpg')
# r6.photos.attach(io: f64, filename: '4.jpg')
# r6.photos.attach(io: f65, filename: '5.jpg')

m61 = Menu.create!(
	name: 'Lunch',
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

# r7 = Restaurant.create!(
#     name: 'Pancake Heaven',
#     bio: "Light and fluffy towers of syrupy goodness. Your dentist might not be too happy but we bet that's not your top priority.",
#     cuisine_type: 'American',
#     price_range:'$',
#     lat: 40.71428,
#     lng: -73.95577,
#     open_at: 6.00,
#     close_at: 16.00,
#     address: '87 Havemeyer',
#     city: 'Brooklyn',
#     state: 'NY',
#     zip: '11201',
# )

# f71 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/1.jpg')
# f72 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/2.jpg')
# f73 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/3.jpg')
# f74 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/4.jpg')
# f75 = open('https://dinnr-aa-seeds.s3.amazonaws.com/7.+pancake_heaven/5.jpg')
# r7.photos.attach(io: f71, filename: '1.jpg')
# r7.photos.attach(io: f72, filename: '2.jpg')
# r7.photos.attach(io: f73, filename: '3.jpg')
# r7.photos.attach(io: f74, filename: '4.jpg')
# r7.photos.attach(io: f75, filename: '5.jpg')

m71 = Menu.create!(
	name: 'Lunch',
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

# r8 = Restaurant.create!(
#     name: 'Pho 77',
#     bio: "The ultimate soup with rich delicious flavors. Our large bowls leave you full and give the best value.",
#     cuisine_type: 'Vietnamese',
#     price_range:'$',
#     lat: 40.70508,
#     lng: -73.98710,
#     open_at: 10.00,
#     close_at: 20.00,
#     address: '20 Pearl St',
#     city: 'Brooklyn',
#     state: 'NY',
#     zip: '11201',
# )

# f81 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/1.jpg')
# f82 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/2.jpg')
# f83 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/3.jpg')
# f84 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/4.jpg')
# f85 = open('https://dinnr-aa-seeds.s3.amazonaws.com/8.+pho_77/5.jpg')
# r8.photos.attach(io: f81, filename: '1.jpg')
# r8.photos.attach(io: f82, filename: '2.jpg')
# r8.photos.attach(io: f83, filename: '3.jpg')
# r8.photos.attach(io: f84, filename: '4.jpg')
# r8.photos.attach(io: f85, filename: '5.jpg')

m81 = Menu.create!(
	name: 'Lunch',
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

# r9 = Restaurant.create!(
#     name: 'Mediterranean Seafood',
#     bio: "Fresh local catch, straight from our local fishermen to your plate. Kick off the year with some healthy locally sourced foods.",
#     cuisine_type: 'Seafood',
#     price_range:'$$$$',
#     lat: 40.71116,
#     lng: -73.96538,
#     open_at: 12.00,
#     close_at: 22.00,
#     address: '85 Broadway',
#     city: 'Brooklyn',
#     state: 'NY',
#     zip: '11201',
# )

# f91 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/1.jpg')
# f92 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/2.jpg')
# f93 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/3.jpg')
# f94 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/4.jpg')
# f95 = open('https://dinnr-aa-seeds.s3.amazonaws.com/9.+mediterra_seafood/5.jpg')
# r9.photos.attach(io: f91, filename: '1.jpg')
# r9.photos.attach(io: f92, filename: '2.jpg')
# r9.photos.attach(io: f93, filename: '3.jpg')
# r9.photos.attach(io: f94, filename: '4.jpg')
# r9.photos.attach(io: f95, filename: '5.jpg')

m91 = Menu.create!(
	name: 'Lunch',
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

# r10 = Restaurant.create!(
#     name: 'Bonchan',
#     bio: "We offer great BBQ cooked right at your table, it doesn't get fresher than this. Our meat is sourced straight from a private supplier for the best flavor",
#     cuisine_type: 'Korean',
#     price_range:'$$$$',
#     lat: 40.70283,
#     lng: -73.98770,
#     open_at: 10.00,
#     close_at: 22.00,
#     address: '81 Washington St',
#     city: 'Brooklyn',
#     state: 'NY',
#     zip: '11201',
# )

# f101 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/1.jpg')
# f102 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/2.jpg')
# f103 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/3.jpg')
# f104 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/4.jpg')
# f105 = open('https://dinnr-aa-seeds.s3.amazonaws.com/10.+bonchan/5.jpg')
# r10.photos.attach(io: f101, filename: '1.jpg')
# r10.photos.attach(io: f102, filename: '2.jpg')
# r10.photos.attach(io: f103, filename: '3.jpg')
# r10.photos.attach(io: f104, filename: '4.jpg')
# r10.photos.attach(io: f105, filename: '5.jpg')

m101 = Menu.create!(
	name: 'Lunch',
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

#Test
#$.ajax({method: "POST", url: 'api/users', data: {user: {first_name: 'demo', last_name: 'account', email: 'demo@demo.com', primary_location: 'New York', password: 'password'}}})
#{first_name: 'demo1', last_name: 'account1', email: 'demo1@demo.com', primary_location: 'New York', password: 'password'}
#$.ajax({method: "POST", url: 'api/session', data: {user: {email: 'demo@demo.com', password: 'password'}}})
#$.ajax({method: "DELETE", url: 'api/session'})

# $.ajax({method: 'GET', url: 'api/restaurants'})
# $.ajax({method: 'GET', url: 'api/restaurants/1'})

    