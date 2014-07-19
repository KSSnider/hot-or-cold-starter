
$(document).ready(function(){
		/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  function rand () {
  	
  	
  	var rand = Math.floor((Math.random()*100)+1);
  	return rand;
  	
  	 	 }

 // User Guess Function 	 
  	 function userGuess () {
  	 
  	 var valGuess = +document.getElementById("userGuess").value;
  	 
	  
		

  	 return valGuess;
  	 }

	function compare (guess,rand) {
    
    var currentResult = guess - rand;
    var correct = "You guessed the correct Number!!!"; 
    var hot = "You are hot!!!";
    var cold = "You are cold!!!";
    var hotter = "You are getting hotter!!!";
    var colder = "You are getting colder!!!";    
    var same = "You guess is just as close as your last guess!";
    var not_A_Num = "Your entry is not a number!";
    var overLimit = "You need to enter a # between 1 & 100";
    
    currentResult = Math.abs(currentResult);
    
  

   console.log(currentResult);
   console.log( lastResult);
   
    
    if (currentResult===0) {
   console.log(correct);
    $('#feedback').html(correct + " Your score is " + guessCount);  
       
   
    
    }    else if (lastResult === null) {    
     if (currentResult <= 10) {
   $('#feedback').html(hot);    
    
 
	console.log(hot);
   
   } else if (currentResult >= 10) {
    $('#feedback').html(cold);

	console.log(cold); 
   }  
}
             	
         else if (currentResult < lastResult) {
     		 $('#feedback').html(hotter);
     		
     		
     		}   else if (currentResult > lastResult) {
			  $('#feedback').html(colder); 
			
     		
     		}
         
     lastResult = currentResult;
     
     }    

    var guessCount = 0;
    var lastResult =null;
    $('input#userGuess').focus();    // focus on user text
    
  var getNum = rand();
  console.log('The random # is ' + getNum);

 $('.new').click(function () {
    $('input#userGuess').focus();  
 	 lastResult =null;
 	 currentResult=null;
   console.log('The Last Result # is ' + lastResult);
 	var getNum = rand();
  console.log('The random # is ' + getNum);
  
 	$('span').html(0);
 	
 
 	
 	var userGuess = 
				$('input[name="userGuess"').val("");
				
				guessCount = 0;
 			$('span').html(guessCount);
 			
 			$('#feedback').html('Guess a Number between 1 & 100');
 	
 	      $('ul#guessList').html('');
 	
 })

$('form').submit(function(event){ 
  			 event.preventDefault(); 
  			
          console.log(guessCount);

})

$('#guessButton').click(function () {
		 
			var getUserGuess = userGuess();
			var validate = isNaN(getUserGuess);
        	
         if (getUserGuess > 100 ){
         	
         	    $('#feedback').html("You need to select a number between 1 & 100");  
         	    $('input#userGuess').focus(); 
         	
         } else if (validate == true || getUserGuess =="")  {         
       			 
       			      			 
       		 $('#feedback').html("You did not enter a Number.   Please type a number from 1 to 100!");  
         	 $('input#userGuess').focus();
         }  else {	
        	 guessCount++ ;
        	    $('span').html(guessCount);
          var result = +(compare(getUserGuess,getNum));
       
          $('input[name="userGuess"').val("");
         
       	 $('ul#guessList').prepend(
 	 			'<li>' + getUserGuess + '</li>'	 	     
 	 			);	
         }   
   });
});


