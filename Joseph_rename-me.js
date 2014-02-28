//alert("JavaScript works!");

// global variables

var numbers = new Array[1234567]

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
	
var UrlVal = function(UrlInput){

var valInput1 = "http://";
var valInput2 = "https://";

var valUserInput1 = UrlInput.substring(0,6); 
var valUserInput2 = UrlInput.substring(0,7);

 if(valUserInput1 = valInput1){
 
    if(valUserInput2 = valInput2){
    
    	return true;
    
    	}else { return false; }
    
}else{ return false; };	

};
	
var splitUpper = function(wordInput){
	
	var firstWord = wordInput.substring(0,1);
	var secWord = wordInput.substring(2,6);
	
	var firstLetter = firstWord.charAt(0);
	var secLetter = secWord.charAt(2);
	
	var upperCase1 = firstLetter.toUpperCase();
	var upperCase2 = secLetter.toUpperCase();
	
	var newWord = (firstWord + SecWord);
	
	return Word;  

}:

// array 

var SecGreatestNum(myArray,MyNum){

	for( i = 0; i < myArray.length]; i++){
	 
	 while(myNum > MyArray[i]){ 
	 myArray ++;
	 };
	 
	 return myArray  
	};


};
	
	
	
	
	
	
	
	
//main code 
phoneNumVal(201-212-1844);
emailVal("juliojoseph@fullsail.edu");
UrlVal("https://www.fullsail.com");
splitUpper("myhouse");
SecGreatestNum(numbers,9)
