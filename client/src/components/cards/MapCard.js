import { mappls, mappls_plugin } from 'mappls-web-maps';

function MapCard({ ad }) {
  const styleMap = { width: '99%', height: '66vh', display: 'inline-block' }
  // console.log("before", ad?.location?.coordinates?.[1]);
  // console.log("before", ad?.location?.coordinates?.[0]);
  let latitude, longitude;
  const label = ad?.label || "indore";

  // Make an API request to get autocomplete suggestions
  fetch(
    `https://geocode.maps.co/search?q=${label}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data of map lat", data[0]?.lat);
      console.log("data of map lon", data[0]?.lon);
      latitude = data[0]?.lat || 22.7196;
      longitude = data[0]?.lon || 75.8577;

      console.log("after", latitude, longitude);

      const mapProps = { center: [latitude, longitude], traffic: false, zoom: 13, geolocation: false, clickableIcons: false }
      var mapObject, markerObject;
      var mapplsClassObject = new mappls();


      mapplsClassObject.initialize("d9ce2b321735842012daee487cdc5f01", () => {
        mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });
        // Marker
        markerObject = mapplsClassObject.Marker({
          map: mapObject,
          position: { lat: latitude, lng: longitude },

        });



      });

    })
    .catch((error) => console.error(error));




  return (
    <div>
      <div id="map" style={styleMap}></div>
    </div>
  );
}
export default MapCard;