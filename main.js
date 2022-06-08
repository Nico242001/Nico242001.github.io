function service(service){
    var url = "https://nico242001.github.io/reservation?service=";
    url = url.concat(service);
    console.log(url);
    window.location.replace(url);
}

function expert(expert){
    var url = "https://nico242001.github.io/reservation?expert=";
    url = url.concat(expert);
    console.log(url);
    window.location.replace(url); 
}

function reservation(){
    correctHeader();
    const params = new URLSearchParams(window.location.search);
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
    
    var date = document.getElementById("date-reservation").value;
    var heure = document.getElementById("heure-reservation").value;
    var expert = document.getElementById("expert-reservation").value;
    var service = document.getElementById("service-reservation").value;
    var url = "https://nico242001.github.io/confirmation?date=";
    url = url.concat(date, "&heure=",heure, "&expert=", expert, "&service=", service);
    window.location.replace(url);
}

function confirmationLoad(){
    correctHeader();
    const params = new URLSearchParams(window.location.search);
    var date = params.get("date");
    var heure = params.get("heure");
    var expert = params.get("expert");
    var service = params.get("service");
    document.getElementById("date").innerHTML = date;
    document.getElementById("heure").innerHTML = heure;
    document.getElementById("expert").innerHTML = expert;
    document.getElementById("service").innerHTML = service;
}

function confirmationPopUp(){
    Swal.fire({
        title:"Votre rendez-vous a été cédulé.",
        titleColor: "black",
        background: "green"
    });
 }

 window.addEventListener('resize', function(event){
    correctHeader();
});

function correctHeader(){
    if(window.innerWidth<850){
        const elemLG = document.getElementById("headerLG");
        elemLG.innerHTML=""
        const elemMD = document.getElementById("headerMD");
        elemMD.innerHTML = "<nav class='navbar navbar-expand-md navbar-light border-bottom border-5 border-dark' style='background-color: lightblue;''>"+
        "<div class='container-fluid text-center'>"+"<a href='#' class='navbar-brand'>"+"<h1 class='text-center my-0 py-0'>Coiffeur d'Ottawa</h1></a>"+
        "<button type='button' class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>"+
        "<span class='navbar-toggler-icon'></span></button>"+
        "<div class='collapse navbar-collapse  justify-content-end' id='navbarCollapse'>"+
        "<div class='navbar-nav'>"+"<li class='nav-item'>"+"<a class='nav-link text-black' href='https://Nico242001.github.io'>A propos</a></li>"
        +"<li class='nav-item'>"+"<li class='nav-item'><a class='nav-link text-black' href='https://Nico242001.github.io/reservation'>Résérvation</a></li>"
        +"<li class='nav-item'>"+"<li class='nav-item'><a class='nav-link text-black' href='https://Nico242001.github.io/services'>Services</a></li>"
        +"<li class='nav-item'>"+"<li class='nav-item'><a class='nav-link text-black' href='https://Nico242001.github.io/experts'>Nos Experts</a></li>"
        +"<li class='nav-item'>"+"<li class='nav-item'><a class='nav-link text-black' href='https://Nico242001.github.io/contact'>Contact</a></li>"+
        "</div>"+"</div>"+"</div>"+"</nav>";
     
    } else{
        const elemMD = document.getElementById("headerMD");
        elemMD.innerHTML = "";
        const elemLG = document.getElementById("headerLG");
        elemLG.innerHTML="<div class='container-fluid my-0 py-0' style='background-color: lightblue;'>"+
        "<h1 class='text-center my-0 py-0'>Coiffeur d'Ottawa</h1>"+
        "</div>"+
"<nav class='navbar navbar-expand-sm justify-content-center border-top border-bottom border-5 border-dark' style='background-color: lightblue; border-color: black;'>"+
"<ul class='navbar-nav nav-fill w-50'>"+
"<li class='nav-item'>"+"<a class='nav-link text-black' href='https://Nico242001.github.io'>A propos</a>"+
" </li>"+"<li class='nav-item'>"+"<a class='nav-link text-black' href='https://Nico242001.github.io/reservation'>Résérvation</a>"+
"</li>"+"<li class='nav-item'>"+"<a class='nav-link text-black' href='https://Nico242001.github.io/services'>Services</a>"+
"</li>"+"<li class='nav-item'>"+" <a class='nav-link text-black' href='https://Nico242001.github.io/experts'>Nos Experts</a>"+
"</li>"+"<li class='nav-item'>"+"<a class='nav-link text-black' href='https://Nico242001.github.io/contact'>Contact</a>"+
"</li>"+"</ul>"+"</nav";

        
    }
}