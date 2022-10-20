/**
 * https://developer.mozilla.org/ja/docs/Web/API/Geolocation/watchPosition#%E5%BC%95%E6%95%B0
 */

let id, target, options;

function success(pos) {
  let crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    alert('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

target = {
  latitude : 0,
  longitude: 0
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
