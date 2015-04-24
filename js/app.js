$(function colorStackz(){
  
  	var counter = 1;
  	
  	function colorChange(counter) {
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		$("#colorBar" + counter).css("background-color", "rgb(" + red + "," + green + "," + blue + ")"); 
		$("#colorBarText" + counter).append( [red + ", " + green + ", " + blue + ")"] );
		 
		console.log(red, green, blue);
	}

  	while (counter < 7) {
		colorChange(counter);
		counter += 1;
	}
})



