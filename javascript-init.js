function init()
{
	subTotal = 0;
	position = 0;
	gold = 20;
	health = 40;
	locations = [
		{ name: "Hero Path", description: "A worn path" },
		{ name: "King's Castle", description: "An old castle." }
	];
	buttons = [
		{ optionOne: "Continue along the path.", actionOne: "MOVE",
		optionTwo: "Stay where you are.", actionTwo: "SHOP"}
	];
	shopItems = [
		{ name: "Potion", cost: 10, description: "A healing liquid." },
	];
	playerItems = [
		{ name: "Sword", description: "An old, rusty sword." }
	];

	document.getElementById("actionButton").style.visibility = "hidden";
	document.getElementById("optionalInfo").style.visibility = "hidden";
	document.getElementById("list").style.visibility = "hidden";
	document.getElementById("extraHeader").style.visibility = "hidden";
	document.getElementById("extraSubHeader").style.visibility = "hidden";
	document.getElementById("infoHeader").style.visibility = "hidden";
	document.getElementById("list2").style.visibility = "hidden";

	loadData(position, locations, buttons, shopItems);
}