function service(service){
    var url = "https://nico242001.github.io/reservation?service=";
    var url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function expert(expert){
    var url = "https://nico242001.github.io/reservation?expert=";
    var url = url.concat(expert);
    console.log(url);
    window.location.replace(url); 
}

function reservation(){
    const params = new URLSearchParams(window.location.search)
    if(params.has("service")){
        var elem = document.getElementById("service-reservation");
        var paramValue = params.get("service");
        elem.value = paramValue;
    }else if(params.has("expert")){
        var elem = document.getElementById("expert-reservation");
        var paramValue = params.get("expert");
        elem.value = paramValue;
    }
}

function confirmerReservation(){
    var date = document.getElementById("date-reservation");
    var heure = document.getElementById("heure-reservation");
    var expert = document.getElementById("expert-reservation");
    var service = document.getElementById("service-reservation");
    date = date.value;
    console.log(value);
}