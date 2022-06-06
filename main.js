function service(service){
    var url = "https://nico242001.github.io/reservation?";
    var url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function reservation(){
    var elem = document.getElementById("service-reservation");
    elem.value = "brushing";
}