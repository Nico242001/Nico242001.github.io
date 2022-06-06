function service(service){
    var url = "https://nico242001.github.io/reservation?service=";
    var url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function expert(expert){
    var url = "https://nico242001.github.io/reservation?expert=";
    var url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function reservation(){
    if(URLSearchParams.has("service")){
        console.log("service");
    }
    if(URLSearchParams.has("expert")){
        console.log("expert");
    }
}

// var elem = document.getElementById("service-reservation");
// elem.value = "brushing";