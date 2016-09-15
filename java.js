

// display images

$('button').on('click', function() {

	var display = $(this).data('word');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + display + "&api_key=dc6zaTOxFJmzC&limit=6";
	
	$.ajax({

		url: queryURL,
		method: 'GET'
	})
	.done(function(response){

		console.log(queryURL);
		console.log(response);

		var result = response.data;

	
		 for (var i= 0; i<result.length; i++) {

		 	var a = $('<panel> <div=row> </panel>')
		 	var image =$('<img>');
		 	image.attr('src', result[i].images.fixed_height.url);
		 	a.append(image)

		 	$('#display').prepend(a);

		 	// creating button

		 	$('#addword').on("click", function(){

			var valuebox= $('#input').val().trim();
			console.log(valuebox);
			
			// var jumbo=$("#jumbo")

			// var item = $("<button>");
			// item.attr("data-word"+ display.data());
			// item.append(" " + valuebox);

			// $("#jumbo").append(item[i]);

			// $('#input').val("");

			// return false;

		 		})
	}
			
		
	})
	// create buttons
				// var todocount= 0;

	
})

	
	
