let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences')) || { 'wave_height': "default", 'water_temp': "default", 'price_range': "default", 'food_type': "none" }

// If there is no preferences setup, display msg
if (sessionsPreferences.food_type == "none") {
	document.getElementById('preferences-message').innerHTML = `
      <div class="ui placeholder segment">
        <div class="inline">
          Looks like you don't have any preferences yet!
					Set up your preferences first!
        </div>
				<a href="set-preferences.html">
          <button class="pref-btn hover" id="button1">
            Set your preferences
          </button>
        </a>
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
				<a href="set-preferences.html">
          <button class="pref-btn hover" id="button1">
            Change your preferences
          </button>
        </a>
				<a href="./sessions.html">
          <button class="pref-btn hover" id="button2">
						Session
          </button>
        </a>
      </div>
      `
}

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
		sideBarButton.style.marginLeft = '20px'
		sideBarButton.classList.remove('close')
		sideBarButton.classList.add('bars')
		sideBarToggle = false
	}

})