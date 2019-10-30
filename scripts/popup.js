document.addEventListener("DOMContentLoaded", LoadButton);

function LoadButton() {
	var x = document.getElementsByClassName("btnClick");
	for (var i = 0; i < x.length; i++) {
		x[i].addEventListener("click", CopyMe);
		x[i].index = i;
	}

	var btnAddjs = document.getElementsByClassName("btnAdd");
	btnAddjs[0].addEventListener("click", function() {
		addButton("text");
	});
}

function CopyMe(evt) {
	var indexx = evt.target.index;
	var copyText = document.getElementsByClassName("content")[indexx];
	var showText = document.getElementById("demo");
	copyText.select();
	document.execCommand("copy");
	showText.textContent = "Copied button: " + indexx;
}

function addButton(type) {
	//Create an input type dynamically.
	var obj = {
		table: []
	};
	var InputName = document.getElementById("addName");
	var InputContent = document.getElementById("addContent");

	// Check if both input are empty
	if (InputName.value.trim() != "" && InputContent.value.trim() != "") {
		// Add a button
		var buttonElement = document.createElement("input");
		buttonElement.type = "button";
		buttonElement.className = "btnClick";
		buttonElement.value = InputName.value;
		var foo = document.getElementById("content-container");
		foo.appendChild(buttonElement);

		// Load a textarea to copy
		var textareaElement = document.createElement("textarea");
		textareaElement.type = "text";
		textareaElement.className = "content";
		textareaElement.value = InputContent.value;
		var foo = document.getElementById("content-container");

		foo.appendChild(textareaElement);

		LoadButton(); // Load again
	} else {
		alert("Please fill all blanks!");
	}
}
