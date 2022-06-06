function service(service){
    var url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function reservation(){
    var elem = document.getElementById("service-reservation");
    elem.value = "brushing";
}