/**
 * https://developer.mozilla.org/ja/docs/Web/API/Geolocation/watchPosition#%E5%BC%95%E6%95%B0
 */

let id, target, options;

function success(pos) {
  let crd = pos.coords;
  console.log(`Your current position is: ${crd.latitude} , ${crd.longitude}. (${crd.accuracy} )`);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
