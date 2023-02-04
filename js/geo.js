function getLocation(){
    navigator.geolocation.getCurrentPosition(onSuccess);
}
function onSuccess(position){
    let name = prompt ('Hola soy el programa de localizacion,por favor dame tu nombre:');
    document.getElementById ("ouput").innerHTML = "Hola " + name + " esta es tu ubicacion actual: " + "Latitud: " + position.coords.latitude + " Longitud " + position.coords.longitude;
}