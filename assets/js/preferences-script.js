let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences')) || { 'wave_height': "default", 'water_temp': "default", 'price_range': "default", 'food_type': "none" }

// If there is no preferences setup, display msg
if (sessionsPreferences.food_type == "none") {
	document.getElementById('preferences-message').innerHTML = `
      <div class="ui placeholder segment">
        <div>
          <p class="no-pref">Looks like you don't have any preferences yet!</p>
					<p class="no-pref">Set up your preferences first!</p>
        </div>
				<a href="set-preferences.html">
					<button class="pref-nav-btns set-pref-btn" id="button1">Set Preferences</button>
				</a>
      </div>
      `
}
else if (sessionsPreferences.food_type != "none") {
	document.getElementById('preferences-message').innerHTML = `
			<div class="ui placeholder segment">
        <div class="inline pref-output">
          Wave Height: <span class="user-output">${sessionsPreferences.wave_height}</span>
					<hr>
					Water Temp: <span class="user-output">${sessionsPreferences.water_temp}</span>
					<hr>
					Price Range: <span class="user-output">${sessionsPreferences.price_range}</span>
					<hr>
					Food Type: <span class="user-output">${sessionsPreferences.food_type}</span>
        </div>
				<a href="set-preferences.html">
					<button class="pref-nav-btns change-pref" >Change Preferences</button>
				</a>
				<a href="sessions.html">
					<button class="pref-nav-btns" tabindex="0">Go to Sessions</button>
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
		sideBarButton.style.marginLeft = '0px'
		sideBarButton.classList.remove('close')
		sideBarButton.classList.add('bars')
		sideBarToggle = false
	}

})