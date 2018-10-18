function onClick() {
	let target = event.currentTarget;
	target.dataset.status = 'done';
}
let list_of_tasks = document.getElementById('tasks');
let divs = list_of_tasks.getElementsByTagName('div');

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click', onClick);
}