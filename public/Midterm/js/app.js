$(document).ready(function( ){
	$( "#Query" ).click(function() {
		$.ajax({
            method: "GET",
            url:"https://openlibrary.org/api/books",
            jscmd :"data",
            dataType: "json",
            data:{
            	"bibkeys":"ISBN:"+$("#ISBN").val(),
            },
            success: function(result,status) {
                $("#photo").html("");
                $("#photo").append(result.medium);
            }
        })
	})
});