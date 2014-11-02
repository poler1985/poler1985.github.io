/*JavaScript here*/

$(document).ready(function(){
	//should be for every jquery project
	init();
})

var init = function() {
	// console.log('document loaded now');

	$('#submitButton1').on('click', function (e){
		//it's just how the way it is
   		e.preventDefault();
   		//when #submitButton1 is clicked, call this function:
   		getInfoFromAPI();	
	});
}

var getInfoFromAPI = function () {

	var textBox =  $('#textBox').val();
	console.log(textBox);

	//this calls the giphy API
	$.ajax({
		// this URL is straight from their documentation
		url : "http://api.giphy.com/v1/gifs/search?q="+textBox+"&api_key=dc6zaTOxFJmzC",
		dataType : "json",
		success : function (response) {
			// save the response to our own variable
			console.log (response.data.length);		
			displayImage(response);
			// for (var i=0; i<response.data.length; i++) {
				
			// }
		}
	});
}
var displayImage = function(response) {
	$("#display").css("background-image", "url(http://i.giphy.com/" + response.data[getRandomInt(0, response.data.length-1)].id + ".gif)");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//$("#next").















