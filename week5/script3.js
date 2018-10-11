function sql(){
	let fname = document.getElementById("name").value;
	if(fname==""){
		document.getElementById("name").style.border = "2px solid red";
		return;
	}
	document.getElementById("name").style.border = "";	
	let lname = document.getElementById("surname").value;
	if(lname==""){
		document.getElementById("surname").style.border = "2px solid red";
		return;
	}
	document.getElementById("surname").style.border = "";
	let fac = document.getElementById("faculty").value;
	if(fac==-1){
		return;
	}
	document.getElementById("name").value="";
	document.getElementById("surname").value="";
	document.getElementById("faculty").value="-1";
	let z = document.createElement('tr');
	let x = document.createElement('td');
	let c = document.createElement('td');
	let v = document.createElement('td');
	x.innerHTML = fname;
	c.innerHTML = lname;
	v.innerHTML = fac;
	z.appendChild(x);z.appendChild(c);z.appendChild(v);
	let table = document.getElementById('students');
	table.appendChild(z);
	}
document.getElementById("addStudent").addEventListener('click',bla);


