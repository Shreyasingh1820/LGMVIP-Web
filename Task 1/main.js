let addToDoButton= document.getElementById('addToDo');
let toDoContainer= document.getElementById('toDoContainer');
let inputField= document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
	var paragraph = document.createElement('p')
	var btn = document.createElement('button')
	//var line = document.createElement('hr')
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText= inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value="";

	btn.innerText = "Remove ToDo";
	btn.classList.add('btn-styling');
	toDoContainer.appendChild(btn);

	// line.classList.add('line-styling');
	// toDoContainer.appendChild(line);

	paragraph.addEventListener('click',function() {
		paragraph.style.textDecoration = "line-through";
	})

	paragraph.addEventListener('dblclick',function() {
		paragraph.style.textDecoration = "none";
	})

	btn.addEventListener('click',function() {
		toDoContainer.removeChild(btn);
		toDoContainer.removeChild(paragraph);
		//toDoContainer.removeChild(line);
	})
})
