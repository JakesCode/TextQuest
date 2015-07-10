function parseInput(action, position, locations, buttons, shopItems, shopCosts)
{
	if(action == "MOVE")
	{
		position += 1;
		reloadElements(position, locations, buttons, shopItems, shopCosts);
		document.getElementById("optionalInfo").innerHTML = "";

	} else if(action == "SHOP")
	{
		document.getElementById("optionalInfo").style.visibility = "visible";
		document.getElementById("optionalInfo").innerHTML = "Currently staying put.\nThere is a shop here.";
		document.getElementById("actionButton").style.visibility = "visible";
		document.getElementById("actionButton").innerHTML = "Enter Shop";
		document.getElementById("actionButton").onclick = function (){ enterShop(position, locations, buttons, shopItems, shopCosts); }
	}
}

function reloadElements(position, locations, buttons, shopItems, shopCosts)
{
	// console.log(position, locations, buttons, buttonActions);
	loadData(position, locations, buttons, shopItems, shopCosts);
}

function loadData(position, locations, buttons, shopItems, shopCosts)
{
	items();

	document.getElementById("actionButton").style.visibility = "hidden";
	document.getElementById("optionalInfo").style.visibility = "hidden";
	document.getElementById("extraHeader").style.visibility = "hidden";
	document.getElementById("infoHeader").style.visibility = "hidden";
	document.getElementById("extraSubHeader").style.visibility = "hidden";
	document.getElementById("list").style.visibility = "hidden";

	document.getElementById("optionalInfo").style.visibility = "hidden";

	var totalPrice = 0;
	localStorage.setItem("totalPrice", totalPrice)

	document.getElementById("header").style.visibility = "visible";
	document.getElementById("option1").style.visibility = "visible";
	document.getElementById("option2").style.visibility = "visible";
	document.getElementById("stats").style.visibility = "visible";

	var position = parseInt(position);
	document.getElementById("header").innerHTML = (locations[position].name + " - " + locations[position].description);

	document.getElementById("option1").innerHTML = (buttons[position].optionOne + " [" + buttons[position].actionOne + "]");
	document.getElementById("option2").innerHTML = (buttons[position].optionTwo + " [" + buttons[position].actionTwo + "]");

	document.getElementById("option1").onclick = function (){ parseInput(buttons[position].actionOne, position, locations, buttons, shopItems, shopCosts); }
	document.getElementById("option2").onclick = function (){ parseInput(buttons[position].actionTwo, position, locations, buttons, shopItems, shopCosts); }

	var option1Action = buttons[position].actionOne;
	var option2Action = buttons[position].actionTwo;

	document.getElementById("stats").innerHTML = ("Health: " + health + " / Gold: " + gold);
}