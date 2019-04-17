function addItem(){
	var input= document.getElementsByTagName('input')[0];
	var newItemText= input.value;
	input.value = '';
	
	var newItem = document.createElement('table');
	newItem.innerHTML = newItemText;
	document.getElementById('newReserveName', 'reserveDate').appendChild(table);
	newItem.addEventListener('click', completeItem);
}

function completeItem(){
	addItemToTable('table')
}

function initMap(){
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.8054491, lng: -73.9654415}
		zoom: 8
		zoomControl: false,
		fullscreenControl: true
	
	});
}