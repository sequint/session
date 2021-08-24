
// Create array for favorites and history from local storage.
// If no data yet exists, create and empty array.
let sessionsFavorites = JSON.parse(localStorage.getItem('sessionsFavorites')) || []
let sessionsHistory = JSON.parse(localStorage.getItem('sessionsHistory')) || []

// If there is no history data on load, display no history message.
if (sessionsHistory.length === 0) {
  document.getElementById('session-message').innerHTML = `
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          Looks like you don't have any sessions recorded yet!
        </div>
        <div class="inline">
          <div class="ui button">Find a Session</div>
        </div>
      </div>
      `
}
else {
  document.getElementById('session-message').innerHTML = `
      <div class="ui very padded segment">
        <p></p>
      </div>
      `
}

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
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          You don't have any favorites saved yet.
        </div>
      </div>
      `
    }
    else {
      document.getElementById('session-message').innerHTML = `
      <div class="ui very padded segment">
        <p></p>
      </div>
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
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="search icon"></i>
          Looks like you don't have any sessions recorded yet!
        </div>
        <div class="inline">
          <div class="ui button">Find a Session</div>
        </div>
      </div>
      `
    }
    else {
      document.getElementById('session-message').innerHTML = `
      <div class="ui very padded segment">
        <p></p>
      </div>
      `
    }

    // Set toggle to false.
    toggle = false
  }

})