//alert("JavaScript works!");

//functions 


//string 

var phoneNumVal = function(phoneNumber){
	var valcharaters = "1234567890-"
	var	phoneNumlength = phoneNumber.length

		for (i = 0; i < phoneNumlength; i++){
		
		var charCheck = phoneNumber.charAt(i);
		var charReturn = valcharaters.indexof(charCheck);
		
		};
	
		if(charReturn == -1){
		
		return false; 
		
		}else { return true };
		
		
	
	
	}; 
	
var emailVal = function(emailInput){
	
	var valletters = "A a B b C c D d E e F f G g H h Ii J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z @ ."
	var emailLength = emailInput.length
	
		for( i = 0; i < emailInput.length; i++ ){
		
		charCheck = emailInput.charAt(i);
		charReturn = valCharaters.indexof(charCheck); 
		
		
		};
		if( charReturn == -1 ){
		
		return false;
		
		} else{ return false };
		

};		
	
	
	
	
	
	
	
	
	
	
	
	
//main code 
phoneNumPattern(201-212-1844);