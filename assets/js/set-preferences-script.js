let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences'))

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


	// Now assign to sessionsPreferences
	sessionsPreferences.wave_height = wave_height
	sessionsPreferences.water_temp = water_temp
	sessionsPreferences.price_range = price_range
	sessionsPreferences.food_type = "food_type"

	localStorage.setItem('sessionsPreferences', JSON.stringify(sessionsPreferences))

	window.location.href = "./preferences.html"

})
