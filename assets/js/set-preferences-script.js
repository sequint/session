let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences')) || { 'wave_height': "default", 'water_temp': "default", 'price_range': "default", 'food_type': "none" }

document.getElementById("save-preferences").addEventListener('click', event => {
	event.preventDefault()

	// Wave Height
	if (document.getElementById("height_low").checked) {
		wave_height = "height_low"
	}
	else if (document.getElementById("height_mid").checked) {
		wave_height = "height_mid"
	}
	else if (document.getElementById("height_high").checked) {
		wave_height = "height_high"
	}
	else if (document.getElementById("height_overhead").checked) {
		wave_height = "height_overhead"
	}

	// Water Temp
	if (document.getElementById("polarBear").checked) {
		water_temp = "polarBear"
	}
	else if (document.getElementById("cold").checked) {
		water_temp = "cold"
	}
	else if (document.getElementById("warm").checked) {
		water_temp = "warm"
	}
	else if (document.getElementById("tropical").checked) {
		water_temp = "tropical"
	}

	// Price Range
	if (document.getElementById("$").checked) {
		price_range = "$"
	}
	else if (document.getElementById("$$").checked) {
		price_range = "$$"
	}
	else if (document.getElementById("$$$").checked) {
		price_range = "$$$"
	}
	else if (document.getElementById("$$$$").checked) {
		price_range = "$$$$"
	}

	// Food Type
	let food_type = document.getElementById("food-names").value

	console.log(wave_height)
	// Now assign to sessionsPreferences
	sessionsPreferences.wave_height = wave_height
	sessionsPreferences.water_temp = water_temp
	sessionsPreferences.price_range = price_range
	sessionsPreferences.food_type = food_type

	localStorage.setItem('sessionsPreferences', JSON.stringify(sessionsPreferences))

	window.location.href = "./preferences.html"

})

// Variable to toggle sidebar visibility.
let sideBarToggle = false

// Toggle between sidebar visibily or not depending on toggle btn status.
document.getElementById('sidebar-toggler').addEventListener('click', event => {
	event.preventDefault()

	let sideBarButton = document.getElementById('sidebar-toggler')

	if (!sideBarToggle) {
		document.getElementById('sidebar').classList.add('visible')
		sideBarButton.classList.remove('bars')
		sideBarButton.classList.add('close')
		sideBarButton.style.marginLeft = '78px'
		sideBarButton.style.color = 'white'
		sideBarToggle = true
	}
	else {
		document.getElementById('sidebar').classList.remove('visible')
		sideBarButton.style.marginLeft = '0px'
		sideBarButton.classList.remove('close')
		sideBarButton.classList.add('bars')
		sideBarToggle = false
	}

})