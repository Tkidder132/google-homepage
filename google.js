function searchGoogle() {
    var x = document.getElementById("txtSearch");
    var test = x.value;

    var searchURL = "https://www.google.com/search?q=";

    for (var i = 0; i < test.length; i++) {
        if (test.substring(i, i + 1) === " ") {
            searchURL += "+";
        } else {
            searchURL += test.substring(i, i + 1);
        }
    }

    window.open(searchURL, "_self");
}

function feelingLucky() {
    var x = document.getElementById("txtSearch");
    var test = x.value;

    var searchURL = "https://www.google.com/search?q=";

    for (var i = 0; i < test.length; i++) {
        if (test.substring(i, i + 1) === " ") {
            searchURL += "+";
        } else {
            searchURL += test.substring(i, i + 1);
        }
    }

    searchURL += "&btnI";

    window.open(searchURL, "_self");
}

$(document).ready(function ()
{
    $('.button.default#lucky').hover(function()
	{
		var self = this;
		var pos = -(Math.floor(Math.random() * 8) + 1) * 27
		setTimeout(function()
		{
			$(self).find("ul").css("margin-top", pos + "px");
		}, 500);
	}, function()
	{
		$(this).find("ul").css("margin-top", "0px");
	});
});