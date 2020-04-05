const mymap = L.map('issMap').setView([0, 0], 1);

const url = 'https://api.wheretheiss.at/v1/satellites/25544';

const attribution =
   '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution }); /// it accepts two arguments
tiles.addTo(mymap); // for adding amd display to map.

const issIcon = L.icon({
   ///for displaying icons
   iconUrl: 'iss200.png',
   iconSize: [50, 32],
   iconAnchor: [25, 16],
});

async function getISS() {
   const response = await fetch(url);

   const data = await response.json();

   const { latitude, longitude } = data; // destructing

   document.getElementById('lat').textContent = latitude;
   document.getElementById('long').textContent = longitude;

   // marker.setLanLng([latitude, longitude]); /// function to set at live location.
   L.marker([latitude, longitude], { icon: issIcon }).addTo(mymap); //for  marker.
   console.log(data.latitude, data.longitude);
}

getISS();
