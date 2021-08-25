let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences'))

// If there is no preferences setup, display msg
if (sessionsPreferences.food_type == "none") {
	document.getElementById('preferences-message').innerHTML = `
      <div class="ui placeholder segment">
        <div class="inline">
          Looks like you don't have any preferences yet!
					Set up your preferences first!
        </div>
      </div>
      `
}
else if (sessionsPreferences.food_type != "none") {
	document.getElementById('preferences-message').innerHTML = `
			<div class="ui placeholder segment">
        <div class="inline">
          Wave Height: ${sessionsPreferences.wave_height}
					<hr>
					Water Temp: ${sessionsPreferences.water_temp}
					<hr>
					Price Range: ${sessionsPreferences.price_range}
					<hr>
					Food Type: ${sessionsPreferences.food_type}
        </div>
      </div>
      `
}