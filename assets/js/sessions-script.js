// Create array for favorites and history from local storage.
// If no data yet exists, create and empty array.
let sessionsFavorites = JSON.parse(localStorage.getItem('sessionsFavorites')) || []
// let sessionsHistory = JSON.parse(localStorage.getItem('sessionsHistory')) || []
let sessionsPreferences = JSON.parse(localStorage.getItem('sessionsPreferences')) || { 'wave_height': "default", 'water_temp': "default", 'price_range': "default", 'food_type': "none" }
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
    sideBarButton.style.marginLeft = '85px'
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


// Function that finds a users city based on coords.
const findCounty = (long) => {
  let counter = 1
  let countyObject = {}

  // Loop through the county array to compare high and low longitude points to users geolocation.
  beaches.lowHighPoints.forEach(county => {
    // Set conditional to tell if users longitude is within the county's longitude range.
    if (long <= county.lowLong && long >= county.highLong) {
      console.log('In first if.')
      countyObject = county
    }
    // If the longitude points were not within any set county perameters, display error message.
    else if (counter > beaches.lowHighPoints.length) {
      return 'Must be in San Diego or Orange County'
    }
    // Iterate the counter to catch whether or not the user is within county perameters.
    else {
      counter++
    }
  })

  // Rreturn the county property of the object found based on the geolocation.
  return countyObject.county

}

const displayBeachCard = (location, waveHeight, waterTemp, lat, long) => {

  let sessionElement = document.createElement('div')
  sessionElement.className = 'ui card'
  sessionElement.innerHTML = `
      <article
        class="beach-data"
        data-lat=${lat}
        data-long=${long}>
      </article>

      <div class="content">
        <div class="header">${location}</div>
      </div>
      <div class="content">
        <h4 class="ui sub header">Wave Information</h4>
        <div class="ui small feed">
          <div class="event">
            <div class="content">
              <div class="summary">
                <p>Wave Height: ${waveHeight} ft.</p>
              </div>
            </div>
          </div>
          <div class="event">
            <div class="content">
              <div class="summary">
                <p>Water Temp: ${waterTemp} degrees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra content vote-area">
        <button class="positive ui button go-btn">Go!</button>
      </div>
      `
  document.getElementById('sessions-display').append(sessionElement)

}

const findWaves = (lat, long, county, wavePrefLow, wavePrefHigh, tempPrefLow, tempPrefHigh) => {
  
  let userCounty = ''
  console.log(lat + ' ' + long)

  if (lat !== 0 && long !== 0) {
    console.log('Correct')
    userCounty = findCounty(long)
  }
  else {
    userCounty = county
  }
  console.log(userCounty)
  

  if (userCounty === 'sanDiegoCounty') {
    beaches.sanDiegoCounty.forEach(beach => {
      axios.get(`http://api.worldweatheronline.com/premium/v1/marine.ashx?key=500045134f354b9590e131348212008&format=json&q=${beach.latitude},${beach.longitude}`)
        .then(res => {
          let location = beach.name
          let waveHeight = res.data.data.weather[0].hourly[0].swellHeight_ft
          let waterTemp = res.data.data.weather[0].hourly[0].waterTemp_F

          if ((waveHeight >= wavePrefLow && waveHeight <= wavePrefHigh) && (waterTemp >= tempPrefLow && waterTemp <= tempPrefHigh)) {
            displayBeachCard(location, waveHeight, waterTemp, beach.latitude, beach.longitude)
          }
          else {
            console.log('No beaches found.')
          }
        })
        .catch(error => console.log(error))
    })
  }
  else if (userCounty === 'orangeCounty') {
    beaches.orangeCounty.forEach(beach => {
      axios.get(`http://api.worldweatheronline.com/premium/v1/marine.ashx?key=500045134f354b9590e131348212008&format=json&q=${beach.latitude},${beach.longitude}`)
        .then(res => {
          let location = beach.name
          let waveHeight = res.data.data.weather[0].hourly[0].swellHeight_ft
          let waterTemp = res.data.data.weather[0].hourly[0].waterTemp_F

          if ((waveHeight >= wavePrefLow && waveHeight <= wavePrefHigh) && (waterTemp >= tempPrefLow && waterTemp <= tempPrefHigh)) {
            displayBeachCard(location, waveHeight, waterTemp, beach.latitude, beach.longitude)
          }
          else {
            console.log('No beaches found.')
          }
        })
        .catch(error => console.log(error))
    })
  }
  else {
    console.log('Not a valid county.')
  }

}

// User preferences global varaibles.
  let waveHeightLow = 0
  let waveHeightHigh = 0
  let waterTempLow = 0
  let waterTempHigh = 0

// User preferences variables.
const setUserPreferences = () => {

  // Set wave height range.
  if (sessionsPreferences.wave_height === 'height_low') {
    waveHeightLow = 0
    waveHeightHigh = 3
  }
  else if (sessionsPreferences.wave_height === 'height_mid') {
    waveHeightLow = 3
    waveHeightHigh = 6
  }
  else if (sessionsPreferences.wave_height === 'height_high') {
    waveHeightLow = 6
    waveHeightHigh = 9
  }
  else if (sessionsPreferences.wave_height === 'height_overhead'){
    waveHeightLow = 9
    waveHeightHigh = 100
  }

  // Set water temp range.
  if (sessionsPreferences.water_temp === 'polarBear') {
    waterTempLow = 0
    waterTempHigh = 52
  }
  else if (sessionsPreferences.water_temp === 'cold') {
    waterTempLow = 53
    waterTempHigh = 63
  }
  else if (sessionsPreferences.water_temp === 'warm') {
    waterTempLow = 64
    waterTempHigh = 74
  }
  else if (sessionsPreferences.water_temp === 'tropical'){
    waterTempLow = 75
    waterTempHigh = 500
  }

}



document.getElementById('wave-near-me').addEventListener('click', event => {

  if (navigator.geolocation) {

    // Set user preferences to global variables.
    setUserPreferences()

    navigator.geolocation.getCurrentPosition(
      position => {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        // Send coords to the find waves function.
        findWaves(latitude, longitude, '', waveHeightLow, waveHeightHigh, waterTempLow, waterTempHigh)
      },
      err => {
        document.getElementById('search-area').innerHTML = `
        <h3>Please Select a County</h3>
        <div class="field">
          <label>County</label>
          <select class="ui fluid dropdown">
            <option value="Orange">Orange County</option>
            <option value="SD">San Diego</option>
          </select>
        </div>
        <button class="find-by-county-select">Find</button>
        `
      }
    )
  }
  else {
    document.getElementById('search-area').innerHTML = `
    <h3>Geolocation not available</h3>
    <input type="text" class="location-input" id="location-input" placeholder="Zip code">
    <button class="search-btn" type="button" id="search-btn">Search</button>
    `
  }

})

document.addEventListener('click', event => {
  if(event.target.classList.contains('find-by-county-select')) {
    let countySelected = event.target.parentNode.children[1].children[1].children
    console.log(countySelected)

    findWaves(0, 0, countySelected, waveHeightLow, waveHeightHigh, waterTempLow, waterTempHigh)
  }
})