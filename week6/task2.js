let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Atyrau"],"Russia":["Moscow","Saint-Petersburg","Kazan" , "Ufa"],"France":["Paris","Lyon","Marseille" , ] , "England":["London","Manchester","Liverpool"]};

for (var country of countries){
	var newitem = document.createElement('option');
	newitem.textContent = country;
	var select = document.getElementById('countries');
	select.appendChild(newitem);
}

function changeCountry() {
	document.getElementById('cities').options.length = 1;
	var selector = event.currentTarget.value;
	
	for(var i = 0; i < cities_by_country[selector].length; i++){
		var select = document.getElementById('cities');
		var option = document.createElement('option');
		option.textContent = cities_by_country[selector][i];
		select.appendChild(option);
	}
}



document.querySelector("#countries").addEventListener('click',changeCountry);