function items()
{
	document.getElementById("list2").style.visibility = "visible";
	document.getElementById("list2").innerHTML = "";
	document.getElementById("list2").innerHTML += "<b class='big'>Your Items....</b>";
	var lineBreak = document.createElement("BR");
	document.getElementById("list2").appendChild(lineBreak);

	for( var i = 0;  i < playerItems.length;  ++i )
	{
		document.getElementById("list2").innerHTML += (playerItems[i].name + " - " + playerItems[i].description);
		document.getElementById("list2").appendChild(lineBreak);

    }
}