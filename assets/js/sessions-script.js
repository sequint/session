
// Create array for favorites and history from local storage.
// If no data yet exists, create and empty array.
let sessionsFavorites = JSON.parse(localStorage.getItem('sessionsFavorites')) || []
let sessionsHistory = JSON.parse(localStorage.getItem('sessionsHistory')) || []

// Variable to hold value of whether or not the favorite button has been clicked.
let toggle = false

// Toggle back and forth between history information and favorite info on click.
document.getElementById('fav-hist-toggle').addEventListener('click', event => {

  // If toggle is false, change to favorite information.
  if (!toggle) {
    
    // Change button text.
    document.getElementById('fav-hist-toggle').textContent = 'History'

    // Change divider icon and title.
    document.getElementById('sessions-divider').innerHTML = `
    <i class="heart outline icon"></i>
    Favorite Sessions
    `
    
    console.log(sessionsFavorites)
    // If there is no favorites data, load no favorites message.
    if (sessionsFavorites.length === 0) {
      document.getElementById('session-message').innerHTML = `
      <p class="no-data-message">You don't have any favorite sessions saved yet.</p>
      <p class="no-data-message message-2">Click on the like button after a session to add it to favorites.</p>
      `
    }

    // Set toggle to true.
    toggle = true
  }
  // Otherwise, if toggle is true change inforation to history.
  else {

    // Change button text.
    document.getElementById('fav-hist-toggle').textContent = 'Favorite Sessions'

    // Change divider icon and title.
    document.getElementById('sessions-divider').innerHTML = `
    <i class="history icon"></i>
    History
    `

    console.log(sessionsHistory)

    // If there is no history data, load no history message.
    if (sessionsHistory.length === 0) {
      document.getElementById('session-message').innerHTML = `
      <p class="no-data-message">You don't have any sessions recorded yet.</p>
      <p class="no-data-message message-2">Use our sessions finder above then get out there and surf!</p>
      `
    }

    // Set toggle to false.
    toggle = false
  }

})