function searchGoogle()
{
	var x = document.getElementById("txtSearch").value.trim();
	searchURL = "https://www.google.com/search?q=" + x;
    
	window.open(searchURL, "_self");
}

var pos = 0;

function feelingLucky()
{
	var searchURL = "";
	switch( pos / 27 )
	{
		case 0:
			var x = document.getElementById("txtSearch").value.trim();
			searchURL = "https://www.google.com/search?q=" + x + "&btnI";	
			break;
		case -1:
			searchURL = "https://www.google.com/search?gws_rd=ssl&q=restaurants";
			break;
		case -2:
			searchURL = "https://www.google.com/doodles/";
			break;
		case -3:
			searchURL = "https://www.google.com/doodles/";
			break;
		case -4:
			searchURL = "https://www.google.com/trends/hottrends";
			break;
		case -5:
			searchURL = "https://www.google.com/culturalinstitute/u/0/asset-viewer/LQEbD5GpU4Q65Q?projectId=art-project";
			break;
		case -6:
			searchURL = "http://www.agoogleaday.com/";
			break;
		case -7:
			searchURL = "https://www.google.com/culturalinstitute/u/0/entity/%2Fm%2F0wzm790?hl=en&projectId=world-wonders";
			break;
		case -8:
			searchURL = "https://www.google.com/search?gws_rd=ssl&q=reflection+nebula&um=1&ie=UTF-8&tbm=isch";
			break;
		case -9:
			searchURL = "https://onetoday.google.com/home/v";
			break;
		default:
			break;
	}

    window.open(searchURL, "_self");
}

function setPos()
{
	if( document.getElementById("txtSearch").value.trim() != "" )
	{
		pos = 0;
	}
}

$(document).ready(function ()
{
    $('.button.default#lucky').hover(function()
	{
		var self = this;
		var x = document.getElementById("txtSearch").value.trim();
		
		setTimeout(function()
		{
			if( x === "" )
			{
				pos = -(Math.floor(Math.random() * 9) + 1) * 27;
				$(self).find("ul").css("margin-top", pos + "px");
			}
		}, 500);
	}, function()
	{
		pos = 0;
		$(this).find("ul").css("margin-top", "0px");
	});
});