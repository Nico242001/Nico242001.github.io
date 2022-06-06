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
    const params = new URLSearchParams(window.location.search)
    if(params.has("service")){
        console.log("service");
    }
    if(params.has("expert")){
        console.log("expert");
    }
}

// var elem = document.getElementById("service-reservation");
// elem.value = "brushing";