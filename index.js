var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];



function addListItem(value) {

  

}

// write append loop here


// write the class loop here


document.addEventListener("DOMContentLoaded", function(event){

	var myfirstTag = document.getElementById("firstPtag");

	var myParagraph = document.getElementsByClassName("myPtag");

	var myTag = document.getElementsByTagName('p');
	for (var i = 0; i < myTag.length; i++){

		myTag[i].style.color = "red";
		myTag[i].addEventListener("click",function(event){
			alert("you are clicking on a paragraph");

		});
	}

	alert(myfirstTag);
	alert(myParagraph);
	alert(myTag);

	var selected = document.querySelectorAll('li.selected');
	for (var i = 0; i < selected.length; i++) {


		selected[i].style.color = "red";
	}

});


