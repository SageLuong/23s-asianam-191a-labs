// declare variables
let zoomLevel = 4;
const mapCenter = [34.0709,-118.444];

// use the variables
const map = L.map('the_map').setView(mapCenter, zoomLevel);

var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

//add custom smiley map icon
var smileyicon = L.icon({
    iconUrl: 'images/map-pin.png',
    shadowUrl: 'images/map-shadow.png',

    iconSize:     [53, 68], // size of the icon
    shadowSize:   [68, 44], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// create a function to add markers
function addMarker(lat,lng,title,image,message, link){
    console.log(message)
    L.marker([lat,lng], {icon: smileyicon}).addTo(map).bindPopup(`<h2>${title}</h2> <center> <img src="${image}" height="150px" width="150px"> </center> <h3>${message}</h3> <h3> Take a look at their <a href="${link}"> menu! </a></h3>` )
    return message
}

// use our marker functions
addMarker(34.049580, -118.451088,'&#127845 Tsujita LA Artisan Noodles in Sawtelle, CA! &#127845', 'images/charsiu_tsukemen.png', 'This restaurant is known for its char siu tsukemen! Imagine dipping hot, chewy noodles into a thick, warm broth with a soft-boiled egg, nori, mushrooms, bamboo shoots, and green onions. Good for people who love ramen and want to try something new!', 'https://www.tsujita.com/')
addMarker(36.972620, -122.027200,'&#127828; Jacks Hamburgers in Santa Cruz, CA! &#127828;', 'images/jacks.jpg', 'If you love a classic burger done well, you have to come here! They also have some creative specialty burgers, too. If you are really hungry, get the Diablo Burger with a 1/3 pound burger, cheddar cheese, chipotle sauce, lettuce, tomato, avocado, grilled onions, and jalapenos on toasted sourdough bread.', 'https://www.grubhub.com/restaurant/jacks-hamburgers-202-lincoln-st-santa-cruz/1083740')
addMarker(37.742840, -122.476410,'&#129374; House of Pancakes in San Fracisco, CA! &#129374;', 'images/pancakes.jpeg', 'There are no American flapjack-style pancakes here, but they do have Taiwanese-style pancakes! They are filled with your choice of protein including beef, lamb, and tofu, and they also come with vegetables. Do not pass up on the hand-pulled noodle soups either!', 'https://www.doordash.com/store/house-of-pancakes-san-francisco-865571/')
addMarker(41.851372, -87.631638,'&#129390; Chiu Quon Bakery & Dim Sum in Chicago, IL! &#129390;', 'images/pastries.jpg', 'One of the oldest Chinese bakeries located in Chicago Chinatown - their char siu bao is their best seller! You better snatch their pastries early in the day because they often run out by mid-afternoon!', 'http://www.cqbakery.com/')
addMarker(41.516610, -81.665060,'&#129377; Siam Cafe in Cleveland, OH! &#129377;', 'images/siam.jpeg', 'You can get many different types of cuisine here: Chinese, Taiwanese, Vietnamese, and Thai. This place is great for big parties, and you get to play with a huge, glass Lazy Susan while you are waiting for your food. Almost everything is good here!', 'https://siamcafeoh.com/')
addMarker(34.087901, -118.090728,'&#127836; Kim Ky Noodle House in San Gabriel, CA! &#127836;', 'images/noodles.jpg', 'My parents have been going here for at least 20 years, and it still has the same tasty goodness! Besides the huge portions, my favorite add on is the chow guey, or fried dough. It soaks up the broth and imbues it with an oily, umami taste that deepens the flavor.', 'https://www.yelp.com/biz/kim-ky-noodle-house-san-gabriel')
addMarker(34.418567, -119.675078,'&#127790; East Beach Tacos in Santa Barbara, CA! &#127790;', 'images/tacos.jpg', 'This place also has a batting cage that you can watch while you eat! My favorites were the ahi poke taco, battered cod taco, and grilled shrimp taco. The food is so good that you will just keep coming back for more!', 'https://www.yelp.com/biz/east-beach-tacos-santa-barbara')
addMarker(34.170690, -118.539890,'&#127843; Sushi Iki in Tarzana, CA! &#127843;', 'images/sushi.jpg', 'Though the price is high, the experience and the quality of the food is unmatched. The sushi chef is a very jolly and friendly gentleman, and his biggest passion in life is making sushi. A great conversationalist and a master at the craft, you will feel at home as you dine. I came here for my 21st birthday, and the omakase (chef choice) was the best sushi I ever had!', 'https://www.yelp.com/biz/sushi-iki-tarzana')
