$(function(){
	
	var rand_num = Math.floor(Math.random() * 100) + 1,
		guess_counter = 0;
	
	$("form").on("submit", function(event){
		event.preventDefault();
		
		var input = +$("#guess").val(),
			message = " ";
		
		if (rand_num === input) {
			message = "You guessed it! It took you " + guess_counter + " guesses";
		} else if (rand_num > input) {
			message = "My number is greater than " + input;
			guess_counter++;
		} else if (rand_num < input) {
			message = "My number is less than " + input;
			guess_counter++;
		} else {
			message = "Please enter a valid input.";
			guess_counter++;
		}
		
		$("p").text(message);
		
	});
	
	$("a").on("click", function(event) {
		event.preventDefault();
		
		rand_num = Math.floor(Math.random() * 100) + 1;
		guess_counter = 0;
		$("#guess").val(" ");
		$("p").text("Enter a number between 1 and 100");
		
	});
	
});