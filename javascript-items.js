function items()
{
	var lineBreak = document.createElement("BR");
	document.getElementById("centeredDiv").appendChild(lineBreak);
	document.getElementById("list2").style.visibility = "visible";
	document.getElementById("list2").innerHTML = "";
	document.getElementById("list2").innerHTML += "<b class='big'>Your Items....</b>";

	for( var i = 0;  i < playerItems.length;  ++i )
	{
		document.getElementById("list2").innerHTML += (playerItems[i].name + " - " + playerItems[i].description);
		document.getElementById("list2").appendChild(lineBreak);

    }
}