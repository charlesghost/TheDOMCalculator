document.addEventListener("DOMContentLoaded",function(event){

    
    var screen = document.getElementById('screen');



	var buttons = document.getElementsByClassName('buttonNum');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(){
			screen.innerHTML = this.innerHTML;
		})
	}

	var operators = document.getElementsByClassName("operator");
	for (var i = 0; i < operators.length; i++){
		operators[i].addEventListener('click', function(){
			screen.innerHTML = this.innerHTML;
		})
	}

	var equals = document.getElementsByClassName("equals");
	for (var i = 0; i < equals.length; i++){
		equals[i].addEventListener('click', function(){
			screen.innerHTML = this.innerHTML;
		})
	}


	var clear = document.getElementsByClassName("buttonClear");
	for (var i = 0; i < clear.length; i++){
		 clear[i].addEventListener('click', function(){
			screen.innerHTML = "Sparta Calculator";
		})
	}

	

	

	
		
		 

	
	





});