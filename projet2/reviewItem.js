var sport;
var equipement;
var itemID;
var itemName;
var link = "https://nico242001.github.io/projet2/"
var imageLink;
var itemPrice;
sessionStorage.setItem(0,0);
var totalPrice;


function onload() {
    const params = new URLSearchParams(window.location.search);
    sport = params.get("sport");
    equipement = params.get("equipement");
    itemID = params.get("itemName");
    imageLink = params.get("imageLink");
    itemPrice = params.get("price");
    itemName = params.get("itemName");
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
    document.getElementById("price").innerHTML = itemPrice;
    document.getElementById("equipementLink").innerHTML = equipement;
    document.getElementById("equipementLink").href = equipementLink;
    document.getElementById("itemLink").innerHTML = itemName;
    document.getElementById("itemLink").href = window.location;
    document.getElementById("itemNameHeader").innerHTML = itemName;
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

function addToCart(){
    var itemAmount = document.getElementById("itemAmount").value;
    var itemSize = document.getElementById("itemSize").value;
    var item = {id:itemID, name:itemName, image:imageLink, price:itemPrice, amount:itemAmount, size:itemSize}
    var amount = sessionStorage.getItem(0);
    amount = amount + 1;
    sessionStorage.setItem(0, amount);
    sessionStorage.setItem(sessionStorage.getItem(0), JSON.stringify(item));
}

function cartItems(){
    totalPrice = 0;
    let keys = Object.keys(sessionStorage);
    for(let key of keys){
        if(key != 0){
            var itemInfo =JSON.parse(sessionStorage.getItem(key));
            var total = itemInfo.price * itemInfo.amount;
            totalPrice = totalPrice + total;
            document.getElementById("cartItems").appendChild =  "<div class='row mx-auto border border-3 border-dark bg-light'><div class='col-12'><div class='row mx-auto p-0'><div class='col-2 text-center'><img src='"+itemInfo.image+"'</div><div class='col-2 text-center'><h4 class='mx-auto'>"+itemInfo.itemName+"</h4></div><div class='col-2 text-center'><h4 class='mx-auto'>"+itemInfo.size+"</h4></div><div class='col-2 text-center'><h4 class='mx-auto'>"+itemInfo.price+"</h4></div><div class='col-2 text-center'><h4 class='mx-auto'>"+itemInfo.amount+"</h4></div><div class='col-2 text-center'><h4 class='mx-auto'>"+total+"</h4></div></div></div></div>";
        }
    }
    document.getElementById("totalPrice").innerHTML = "$"+totalPrice;
}