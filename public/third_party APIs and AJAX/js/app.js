$(document).ready(function( )
{
    //create a keyword array for when there is no search term
	var keywords = ["dog","fruits","food","html"]
    $.ajax(
    {
            method: "GET",
            url: "https://api.unsplash.com/search/photos",
            dataType: "json",
            data:
            {
                "client_id":"bOwQOqO2xTc4zQpAzh2ZNl7PbL1M3cWFJDVVoTaf0RI",
                // for the query take a random index to get a random search term
                "query" : keywords[(Math.floor(Math.random()*4))],
            },
            success: function(result,status) 
            {
                $("#photo1").html("");
                $("#photo2").html("");
                for(var i =0;i<4;i++)
                {
                    //add the founded image, the thumb image and the number of likes in the first colomn.
                    $("#photo1").append("<div id='prout' style='padding:25px 50px'><img src="+result.results[i].urls.small+"> <img src=\"thumb.png\" width='220px' height='100px'><a style='font-size:50px'>:  "+result.results[i].likes+"</a></div>");
                    //add the founded image, the thumb image and the number of likes in the second colomn.
                    $("#photo2").append("<div id='prout' style='padding:25px 50px'><img src="+result.results[i+4].urls.small+"> <img src=\"heart.png\"width='130px' height='120px'><a style='font-size:50px'>:  "+result.results[i].likes+"</a></div>");

                }; 
            }
    })
	$( "#Search_button" ).click(function() 
    {
		$.ajax(
        {
    		method: "GET",
            url: "https://api.unsplash.com/search/photos",
            dataType: "json",
            data:
            {
                "client_id":"bOwQOqO2xTc4zQpAzh2ZNl7PbL1M3cWFJDVVoTaf0RI",
                "query" : $("#keyword").val(),
            },
            success: function(result,status) 
            {
                $("#photo1").html("");
                $("#photo2").html("");
                for(var i =0;i<4;i++)
                {
                    //add the founded image, the thumb image and the number of likes in the first colomn.
                    $("#photo1").append("<div id='prout' style='padding:25px 50px'><img src="+result.results[i].urls.small+"> <img src=\"thumb.png\" width='220px' height='100px'><a style='font-size:50px'>:  "+result.results[i].likes+"</a></div>");
                    //add the founded image, the thumb image and the number of likes in the second colomn.
                    $("#photo2").append("<div id='prout' style='padding:25px 50px'><img src="+result.results[i+4].urls.small+"> <img src=\"heart.png\"width='130px' height='120px'><a style='font-size:50px'>:  "+result.results[i].likes+"</a></div>");
                };   
            }
    	})
	});
});