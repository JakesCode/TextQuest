function hideShop()
{
	var shop = document.getElementById("shop");
	shop.parentNode.removeChild(shop);
}

function appendShopItem(shopItem)
{
    // Create the list item:
    var item = document.createElement( 'li' );

    // Set its contents:
    item.appendChild( document.createTextNode( 
        shopItem.name + ' - ' + shopItem.cost + ' Gold'
    ) );

    // Add it to the list:
    list.appendChild( item );

    var radio = document.createElement( 'button' );
    var text = document.createTextNode( "Buy " + shopItem.name + " for " + shopItem.cost + " Gold");
    radio.name = 'shop';
    radio.value = shopItem.name;
    radio.id = "shop";
    radio.onclick = function () {
        addValue( shopItem );
    };

    radio.appendChild( text );
    document.body.appendChild( radio );

    var lineBreak = document.createElement("BR");
    document.body.appendChild(lineBreak);
}

function addValue(shopItem)
{
    if (subTotal <= gold)
    {
        subTotal += parseInt(shopItem.cost);
        var object = {name: shopItem.name, description: shopItem.description}
        alert("Bought " + shopItem.name + " for " + shopItem.cost + " Gold.")
        gold -= shopItem.cost;
        document.getElementById("infoHeader").innerHTML = "Your Gold: " + gold;
        playerItems.push(object);
        document.getElementById("extraSubHeader").innerHTML = "Current Total: " + subTotal + " Gold";
    } else
    {
        alert("You don't have enough Gold....");
    }
}

function enterShop(position, locations, buttons, shopItems, shopCosts)
{
	document.getElementById("extraHeader").style.visibility = "visible";
	document.getElementById("extraHeader").innerHTML = "Welcome to the Shop!";

	document.getElementById("extraSubHeader").style.visibility = "visible";
	document.getElementById("extraSubHeader").innerHTML = "Current Total: 0 Gold";

	document.getElementById("infoHeader").style.visibility = "visible";
	document.getElementById("infoHeader").innerHTML = "Your Gold: " + gold;
	
	document.getElementById("list").style.visibility = "visible";
	

	document.getElementById("option1").style.visibility = "hidden";
	document.getElementById("option2").style.visibility = "hidden";
	document.getElementById("option3").style.visibility = "hidden";
	document.getElementById("optionalInfo").style.visibility = "hidden";
    document.getElementById("list2").style.visibility = "hidden";
    document.getElementById("stats").style.visibility = "hidden";
	document.getElementById("actionButton").innerHTML = "Leave Shop";
	document.getElementById("actionButton").onclick = function (){ loadData(position, locations, buttons, shopItems, shopCosts); hideShop(); }
	document.getElementById("header").style.visibility = "hidden";

	for( var i = 0;  i < shopItems.length;  ++i )
	{
		appendShopItem( shopItems[i] );
    }
}