var sport;
var equipement;
var itemID;
var item = "Item"
var link = "https://nico242001.github.io/projet2/"
var imageLink;
var price;

function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    itemID = params.get("itemName");
    imageLink = params.get("imageLink");
    price = params.get("price");
    if(equipement == "shinGuards"){
        equipement = "shin guards"
    }
    var equipementLink = link.concat("items?sport=",sport,"&equipement=",equipement);
    document.getElementById("image").src = imageLink;
    if(sport == "basketball"){
        document.getElementById("sportLink").href = link.concat("basket");
        document.getElementById("sportLink").innerHTML = "basketball";
    } else{
        document.getElementById("sportLink").href = link.concat(sport);
        document.getElementById("sportLink").innerHTML = sport;
    }
    document.getElementById("price").innerHTML = price;
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = equipementLink;
    document.getElementById("itemLink").innerHTML = item.concat(" ",itemID);
    document.getElementById("itemLink").href = window.location;
    size();
}

function size(){
    if(equipement == "shin guards" || equipement == "sticks" || equipement == "helmets" || equipement == "shirts"){
        document.getElementById("itemSize").innerHTML = "<option value='S'>Small</option><option value='M'>Medium</option><option value='L'>Large</option>";
    } else if(equipement == "cleats" || equipement == "shoes" || equipement == "skates"){
        document.getElementById("itemSize").innerHTML = "<option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option>";
    } else if(sport == "soccer"){
        document.getElementById("itemSize").innerHTML = "<option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option>";
    } else{
        document.getElementById("itemSize").innerHTML = "<option value='27.5'>27.5</option><option value='28.5'>28.5</option><option value='29.5'>29.5</option>";
    }
}
