// declare variables
let mapOptions = {'center': [37.742888, -38.389767],'zoom':2}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function addMarker(lat,lng,title,message, image, fact){
    console.log(message)
    L.circleMarker([lat,lng]).addTo(map).bindPopup(`<center> <h1><u>${title}</u></h1> <h2>${message}</h2> <img src="${image}" height="150px" width="150px"> <h3>Fun fact:</h3> ${fact} </center>`)
    createButtons(lat, lng, message)
    return message
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
}

loadData(dataUrl)
