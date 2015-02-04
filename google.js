function searchGoogle()
{
    var x = document.getElementById("txtSearch").value.trim();
    var searchURL = "https://www.google.com/search?q=";
	searchURL += x;

    window.open(searchURL, "_self");
}

var pos;

function feelingLucky()
{
    var x = document.getElementById("txtSearch").value.trim();
    var searchURL = "https://www.google.com/search?q=";
	searchURL += x;

    searchURL += "&btnI";

    window.open(searchURL, "_self");
}

$(document).ready(function ()
{
    $('.button.default#lucky').hover(function()
	{
		var self = this;
		pos = -(Math.floor(Math.random() * 9) + 1) * 27;
		var x = document.getElementById("txtSearch").value.trim();
		
		setTimeout(function()
		{
			if( x === "" )
			{
				$(self).find("ul").css("margin-top", pos + "px");
			}
		}, 500);
	}, function()
	{
		pos = 0;
		$(this).find("ul").css("margin-top", "0px");
	});
});