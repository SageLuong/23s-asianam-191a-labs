// JavaScript const variable declaration
const map = L.map('the_map').setView([34.049580, -118.451088], 4); // (1)!

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // (2)!

//JavaScript let variable declaration to create a marker
let marker1 = L.marker([34.049580, -118.451088]).addTo(map) // (3)!
        .bindPopup('Tsujita LA Artisan Noodles in Sawtelle, CA!<br> This restaurant is known for its char siu tsukemen! Imagine dipping hot, chewy noodles into a thick, warm broth with a soft-boiled egg, nori, mushrooms, bamboo shoots, and green onions. Good for people who love ramen and want to try something new!')
        .openPopup();

let marker2 = L.marker([36.972620, -122.027200]).addTo(map) // (3)!
        .bindPopup('Jacks Hamburgers in Santa Cruz, CA! <br> If you love a classic burger done well, you have to come here! They also have some creative specialty burgers, too. If you are really hungry, get the Diablo Burger with a 1/3 pound burger, cheddar cheese, chipotle sauce, lettuce, tomato, avocado, grilled onions, and jalapenos on toasted sourdough bread.')
        .openPopup();

let marker3 = L.marker([37.742840, -122.476410]).addTo(map) // (3)!
        .bindPopup('House of Pancakes in San Fracisco, CA! <br> There are no American flapjack-style pancakes here, but they do have Taiwanese-style pancakes! They are filled with your choice of protein including beef, lamb, and tofu, and they also come with vegetables. Do not pass up on the hand-pulled noodle soups either!')
        .openPopup();

let marker4 = L.marker([41.851372, -87.631638]).addTo(map) // (3)!
        .bindPopup('Chiu Quon Bakery & Dim Sum in Chicago, IL! <br> One of the oldest Chinese bakeries located in Chicago Chinatown - their char siu bao is their best seller! You better snatch their pastries early in the day because they often run out by mid-afternoon!')
        .openPopup();

let marker5 = L.marker([41.516610, -81.665060]).addTo(map) // (3)!
        .bindPopup('Siam Cafe in Cleveland, OH! <br> You can get many different types of cuisine here: Chinese, Taiwanese, Vietnamese, and Thai. This place is great for big parties, and you get to play with a huge, glass Lazy Susan while you are waiting for your food. Almost everything is good here!')
        .openPopup();

let marker6 = L.marker([35.0825284, -106.650633]).addTo(map) // (3)!
        .bindPopup('Silver Street Market in Albuquerque, NM! <br> When my partner and I were traveling across the country on an Amtrak train, this was our first experience with hot food after a full day of travel. The store is quaint and peaceful, and you can get a delicious combo meal with fried chicken, mac and cheese, potato or pasta salad, or any other side for just $8!')
        .openPopup();

let marker7 = L.marker([34.087901, -118.090728]).addTo(map) // (3)!
        .bindPopup('Kim Ky Noodle House in San Gabriel, CA! <br> My parents have been going here for at least 20 years, and it still has the same tasty goodness! Besides the huge portions, my favorite add on is the chow guey, or fried dough. It soaks up the broth and imbues it with an oily, umami taste that deepens the flavor.')
        .openPopup();

let marker8 = L.marker([34.418567, -119.675078]).addTo(map) // (3)!
        .bindPopup('East Beach Tacos in Santa Barbara, CA! <br> This place also has a batting cage that you can watch while you eat! My favorites were the ahi poke taco, battered cod taco, and grilled shrimp taco. The food is so good that you will just keep coming back for more!')
        .openPopup();