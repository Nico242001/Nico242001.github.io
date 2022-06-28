var sport;
var equipement;
var itemID;
var item = "Item"
var link = "https://nico242001.github.io/projet2/"
var imageLink;

function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    itemID = params.get("itemName");
    imageLink = params.get("imageLink");
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var equipementLink = link.concat("items?sport=",sport,"&equipement=",equipement);
    document.getElementById("image").src = imageLink;
    document.getElementById("sportLink").innerHTML = sport;
    document.getElementById("sportLink").href = link.concat(sport);
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = equipementLink;
    document.getElementById("itemLink").innerHTML = item.concat(" ",itemID);
    document.getElementById("itemLink").href = window.location;
}

