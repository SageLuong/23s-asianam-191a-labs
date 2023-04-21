// declare variables
let mapCenter = [34.0709,-118.444];
let zoomLevel = 5;

let mapOptions = {
    'zoom' : 5,
    "center": [34.0709,-118.444],
}

// declare the map
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(34.03954468344123, -118.4425376037954,'&#127845 Tsujita LA Artisan Noodles in Sawtelle, CA! &#127845', 'images/charsiu_tsukemen.png', 'This restaurant is known for its char siu tsukemen! Imagine dipping hot, chewy noodles into a thick, warm broth with a soft-boiled egg, nori, mushrooms, bamboo shoots, and green onions. Good for people who love ramen and want to try something new!', 'https://www.tsujita.com/')
addMarker(36.972562543112886, -122.02722533144846,'&#127828; Jacks Hamburgers in Santa Cruz, CA! &#127828;', 'images/jacks.jpg', 'If you love a classic burger done well, you have to come here! They also have some creative specialty burgers, too. If you are really hungry, get the Diablo Burger with a 1/3 pound burger, cheddar cheese, chipotle sauce, lettuce, tomato, avocado, grilled onions, and jalapenos on toasted sourdough bread.', 'https://www.grubhub.com/restaurant/jacks-hamburgers-202-lincoln-st-santa-cruz/1083740')
addMarker(37.74292067726369, -122.47636365233842,'&#129374; House of Pancakes in San Fracisco, CA! &#129374;', 'images/pancakes.jpeg', 'There are no American flapjack-style pancakes here, but they do have Taiwanese-style pancakes! They are filled with your choice of protein including beef, lamb, and tofu, and they also come with vegetables. Do not pass up on the hand-pulled noodle soups either!', 'https://www.doordash.com/store/house-of-pancakes-san-francisco-865571/')
addMarker(41.85136870260876, -87.63185299197342,'&#129390; Chiu Quon Bakery & Dim Sum in Chicago, IL! &#129390;', 'images/pastries.jpg', 'One of the oldest Chinese bakeries located in Chicago Chinatown - their char siu bao is their best seller! You better snatch their pastries early in the day because they often run out by mid-afternoon!', 'http://www.cqbakery.com/')
addMarker(41.51642338818565, -81.66487064375946,'&#129377; Siam Cafe in Cleveland, OH! &#129377;', 'images/siam.jpeg', 'You can get many different types of cuisine here: Chinese, Taiwanese, Vietnamese, and Thai. This place is great for big parties, and you get to play with a huge, glass Lazy Susan while you are waiting for your food. Almost everything is good here!', 'https://siamcafeoh.com/')

// create a function to add markers
function addMarker(lat,lng,title,image,message, link){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<center> <h2>${title}</h2> </center> <center> <img src="${image}" height="150px" width="150px"> </center> <h3>${message}</h3> <h3> Take a look at their <a href="${link}"> menu! </a></h3>` )
    createButtons(lat,lng,title);
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton); 
}

fetch("map.geojson")
    .then(response => {
        return response.json();
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data).addTo(map)
    });