
// Create array for favorites and history from local storage.
// If no data yet exists, create and empty array.
let sessionsFavorites = JSON.parse(localStorage.getItem('sessionsFavorites')) || []
// let sessionsHistory = JSON.parse(localStorage.getItem('sessionsHistory')) || []
let sessionsHistory = [
  {
    date: '08-23-21',
    location: 'San Diego',
    waveHeight: 2,
    waterTemp: '72',
    restaurant: 'Burger Lounge'
  },
  {
    date: '07-03-21',
    location: 'Hawaii',
    waveHeight: '6',
    waterTemp: '78',
    restaurant: 'The Pita Joint'
  },
  {
    date: '08-07-21',
    location: 'Orange County',
    waveHeight: '6',
    waterTemp: '78',
    restaurant: 'The Pita Joint'
  },
  {
    date: '08-01-21',
    location: 'Mexico',
    waveHeight: '6',
    waterTemp: '78',
    restaurant: 'The Pita Joint'
  }
]

console.log(sessionsFavorites)

const displayHistory = () => {
  // If there is no history data on load, display no history message.
  if (sessionsHistory.length === 0) {
    document.getElementById('sessions-main-display').innerHTML = `
    <div class="no-data-message">
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
    // Clear out the history display section.
    document.getElementById('sessions-main-display').innerHTML = ''

    sessionsHistory.forEach(session => {
      let sessionElement = document.createElement('div')
      sessionElement.className = 'ui card'
      sessionElement.innerHTML = `
        <article
          class="session-data"
          data-date=${session.date}
          data-location="${session.location}"
          data-waveheight=${session.waveHeight}
          data-watertemp=${session.waterTemp}
          data-restaurant="${session.restaurant}">
        </article>

          <div class="content">
            <div class="header">${session.date}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">${session.location}</h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Wave Height: ${session.waveHeight} ft.</p>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Water Temp: ${session.waterTemp} degrees</p>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Restaurant: ${session.restaurant}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content vote-area">
            <span class="left floated star vote favorite">
              <i class="star icon"></i>
              Favorite
            </span>
            <span class="right floated star vote delete">
              <i class="close icon"></i>
              Delete
            </span>
          </div>
      `
      document.getElementById('sessions-main-display').append(sessionElement)
    })
  }
}

const displayFavorites = () => {
  // If there is no favorites data, load no favorites message.
  if (sessionsFavorites.length === 0) {
    document.getElementById('sessions-main-display').innerHTML = `
      <div class="no-data-message">
        <div class="ui icon header">
          <i class="search icon"></i>
          You don't have any favorites saved yet.
        </div>
      </div>
      `
  }
  else {
    // Clear out the history display section.
    document.getElementById('sessions-main-display').innerHTML = ''

    sessionsFavorites.forEach(session => {
      let sessionElement = document.createElement('div')
      sessionElement.className = 'ui card'
      sessionElement.innerHTML = `
          <div class="content">
            <div class="header">${session.date}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">${session.location}</h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Wave Height: ${session.waveHeight} ft.</p>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Water Temp: ${session.waterTemp} degrees</p>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Restaurant: ${session.restaurant}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content vote-area">
            <span class="left floated star vote favorite">
              <i class="star icon"></i>
              Favorite
            </span>
            <span class="right floated star vote delete">
              <i class="close icon"></i>
              Delete
            </span>
          </div>
      `

      document.getElementById('sessions-main-display').append(sessionElement)
    })
  }
}

document.addEventListener('click', event => {

  if (event.target.classList.contains('favorite')) {
    // Create a variable that stores the embeded data set from the parent node.
    let sessionData = event.target.parentNode.parentNode.parentNode.children[0]

    let newFavorite = {
      date: sessionData.dataset.date,
      location: sessionData.dataset.location,
      waveHeight: sessionData.dataset.waveheight,
      waterTemp: sessionData.dataset.watertemp,
      restaurant: sessionData.dataset.restaurant
    }

    // Create a bool variable to find if the date clicked on is already stored in favorites.
    let favAlreadyStored = sessionsFavorites.find(session => session.date === newFavorite.date)

    // If the date is not already stored, store and set data.
    if (!favAlreadyStored) {
      // Place new object in the front of the favorites array.
    sessionsFavorites.unshift(newFavorite)
    // Add updated favorites array to local storage using site favorites key.
    localStorage.setItem('sessionsFavorites', JSON.stringify(sessionsFavorites))
    }
    

  }

})

// Call function to display the history of surf sessions.
displayHistory()

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
    
    displayFavorites()

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

    // Display a history of session in card form.
    displayHistory()

    // Set toggle to false.
    toggle = false
  }

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
    sideBarButton.style.marginLeft = '20px'
    sideBarButton.classList.remove('close')
    sideBarButton.classList.add('bars')
    sideBarToggle = false
  }
  

})



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Search Functionality