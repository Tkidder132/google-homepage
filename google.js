function searchGoogle()
{
	var x = document.getElementById("txtSearch");
	var test = x.value;
	
	var searchURL = "https://www.google.com/search?q=";
	
	for( var i = 0; i < test.length; i++ )
	{
		if( test.substring(i,i+1) === " " )
		{
			searchURL += "+";
		}
		else
		{
			searchURL += test.substring(i,i+1);
		}
	}
	
	window.open(searchURL,"_self");
}

function gmail()
{
	window.open("https://accounts.google.com", "_self");
}

function images()
{
	window.open("https://www.google.com/imghp", "_self");
}