// Initialize saved data from local storage or create an empty array for saved data
let savedPreferencesData = JSON.parse(localStorage.getItem('savedPreferencesData')) || []

// // Function that handles click for save button.
// document.addEventListener('click', event => {

// 	if (event.target.classList.contains('saveBtn')) {
// 		// Create an object to save input about event
// 		let savedCalEvent = {
// 			input: event.target.parentNode.children[1].value,
// 			date: moment().format('dddd, MMMM Do'),
// 			time: event.target.parentNode.children[0].textContent
// 		}
// 		savedPlannerData.push(savedCalEvent)
// 		localStorage.setItem('savedPlannerData', JSON.stringify(savedPlannerData))
// 	}

// })

function savePreferences() {
	let savedPreferencesData = {
		// need to modify
		wave_height: 1,
		water_temp: 2,
		price_range: [1, 2],
		food_type: 'food name'
	}
}