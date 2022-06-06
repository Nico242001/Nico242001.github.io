function service(service){
    var url = url.concat(service);
    window.location.replace(url);
}

function reservation(){
    var elem = document.getElementById("service-reservation");
    elem.value = "brushing";
}