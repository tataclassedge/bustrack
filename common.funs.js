 // Error callback

 var Latitude = undefined;
 var Longitude = undefined;

 function onMapError(error) {
     console.log('code: ' + error.code + '\n' +
         'message: ' + error.message + '\n');
 }
