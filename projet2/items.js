var sport;
var equipement;
var link = "https://nico242001.github.io/projet2/"

function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var result = sport.concat(" ", equipement);
    document.getElementById("sportNameEquipement").innerHTML = result;
    document.getElementById("sportLink").href = link.concat(sport);
    document.getElementById("equipementLink") = window.location;
}