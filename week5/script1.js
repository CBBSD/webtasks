function onClick(){
	let q = document.querySelector("#s11").value;
	let w = document.querySelector("#s12").value;
	let e = document.querySelector("#s13").value;
	let a = document.querySelector("#s21").value;
	let s = document.querySelector("#s22").value;
	let d = document.querySelector("#s23").value;
	let z = document.querySelector("#s31").value;
	let x = document.querySelector("#s32").value;
	let c = document.querySelector("#s33").value;
	let g = q*s*c+w*d*z+a*x*e-e*s*z-w*a*c-d*x*q;
	console.log(g);
	document.querySelector("#result").innerHTML = g;
}
document.querySelector("#determinant").addEventListener('click',onClick);
console.log(g);