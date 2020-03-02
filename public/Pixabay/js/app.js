$(document).ready(function( ){
	var print_image = false;
	var nblikes;
	var keywords = ["sun","birds","food","tree"]
	//keywords = keywords.shuffle(keywords);
	$.ajax({
    		method: "GET",
    		url: "https://pixabay.com/api/",
    		dataType: "json",
    		data:{
    			"key" : "15429546-aacdfb7e4943379e5b82d7c21",
    			"q" : keywords[(Math.floor(Math.random()*4))],
    			"orientation" : $("#selector option:selected").val(),
    		},
    		success: function(result,status) {
    			$("#photos").html("");
    			for(var i =0;i<4;i++)
    			{
    				$("#photos").append("<a style=\"text-align:right\">Likes:"+result.hits[i].likes+"</a><img src='" + result.hits[i].previewURL + "'>");
    			};
       		}
    	})
	$( "#Search_button" ).click(function() {
		$.ajax({
    		method: "GET",
    		url: "https://pixabay.com/api/",
    		dataType: "json",
    		data:{
    			"key" : "15429546-aacdfb7e4943379e5b82d7c21",
    			"q" : $("#keyword").val() ,
    			"orientation" : $("#selector option:selected").val(),
    		},
    		success: function(result,status) {
    			$("#photos").html("");
    			for(var i =0;i<4;i++)
    			{
    				$("#photos").append("<a style=\"text-align:right\">Likes:"+result.hits[i].likes+"</a><img src='" + result.hits[i].previewURL + "'>");
    			};
       		}
    	})
	});
});