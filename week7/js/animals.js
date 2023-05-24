// declare variables
let mapOptions = {'center': [37.742888, -38.389767],'zoom':2}

let aboveEquator = L.featureGroup();
let belowEquator = L.featureGroup();

let layers = {
    "Above Equator": aboveEquator,
    "Below Equator": belowEquator
}

let circleOptions = {
    radius: 6,
    fillColor: "#ff7800",
    color: "rgb(50, 55, 45)",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

let Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
Stadia_AlidadeSmooth.addTo(map)

// add layer control box
L.control.layers(null, layers).addTo(map)

function addMarker(lat,lng,title,message, image, fact){
    if(lat > 0){
        circleOptions.fillColor = "rgb(96, 189, 127)"
        aboveEquator.addLayer(L.circleMarker([lat,lng], circleOptions).addTo(map).bindPopup(`<center> <h1><u>${title}</u></h1> <h2>${message}</h2> <img src="${image}" height="150px" width="150px"> <h3>Fun fact:</h3> ${fact} <p>Above the equator!</p> </center>`))
        createButtons(lat, lng, message)
        return message
    }
    else{
        circleOptions.fillColor = "rgb(253, 137, 122)"
        belowEquator.addLayer(L.circleMarker([lat,lng], circleOptions).addTo(map).bindPopup(`<center> <h1><u>${title}</u></h1> <h2>${message}</h2> <img src="${image}" height="150px" width="150px"> <h3>Fun fact:</h3> ${fact} <p>Below the equator!</p> </center>`))
        createButtons(lat, lng, message)
        return message
    }
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    newButton.className = "surveyButtons";
    const spaceForButtons = document.getElementById('buttons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSG8SdJNGGbqLZQ6pKmNyPEO10lzqwSygBn2hlkKD58KyKHD_F3wpKz81TcqMkTAeTyDSEU6JDoArq9/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data.lat,data.lng,data['Where is one of their habitats?'],data['What is your favorite animal?'], data['Do you have an image of your favorite animal? Please provide the image link below.'], data['Do you know any fun facts about them?'])
    })
    aboveEquator.addTo(map)
    belowEquator.addTo(map)
    let allLayers = L.featureGroup([aboveEquator, belowEquator]);
    map.fitBounds(allLayers.getBounds());
}

loadData(dataUrl)
