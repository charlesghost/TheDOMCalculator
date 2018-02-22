document.addEventListener("DOMContentLoaded",function(event){
 
	
    // global variables for calculator
	var number1 = true;
	var number2 = false;
	var ops = false;

	// setting the variables

	function SetElement(){

		var numbers = document.getElementsByClassName('buttonNum');
		var operate = document.getElementsByClassName('operator');
		var clear = document.getElementsByClassName('buttonClear');
		var equal = document.getElementsByClassName('equals');

		ButtonClick(numbers);
		OperatorClick(operate);
		clear[0].addEventListener('click', ClearCalc);
		equal[0].addEventListener('click', Result);


	}

	// Resets the calculator

	function ClearCalc(){
		var screen = document.getElementById('screen');
		screen.innerHTML = "Sparta Calculator"
	    
	}

	// Show calculation result

	function Result(){
		var screen = document.getElementById('screen');
		var answer = Calc();
		screen.innerHTML = answer;

	}

	// Operators

	function Calc(){
		switch (ops){
			case '+':
			return (number1 + number2);
			break;
			case '-':
			return (number1 - number2);
			break;
			case '*':
			return (number1 * number2);
			break;
			case '/':
			return (number1 / number2);
			break;
			default:
			return 'Err';
		}

	}

	// Click button for number to appear on screen 

	function ButtonClick(buttons){
		var screen = document.getElementById('screen');

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', function(event){
				if (number1 === true) {
					screen.innerHTML = this.innerHTML;
					number1 = parseInt(this.innerHTML);
					ops = true;
				} else if (number2 === true) {
					screen.innerHTML = this.innerHTML;
					number2 = parseInt(this.innerHTML);
				}
			});
		}
	}
    
    // Click operator button for "+" "-" "*" or "/" 

	function OperatorClick(operate){
		var screen = document.getElementById('screen');
		for (var i = 0; i < operate.length; i++) {
			operate[i].addEventListener('click', function(event) {
				if (ops === true) {
					screen.innerHTML = this.innerHTML;
					ops = this.innerHTML;
					number2 = true;

				}
			})
		}
	}

	SetElement();

})

    








	


