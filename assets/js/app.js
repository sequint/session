
// restaurant search
let restaurant_info = JSON.parse(localStorage.getItem('restaurant_info')) || []
let restaurant_choice = JSON.parse(localStorage.getItem('restaurant_choice')) || []

document.getElementById('restaurant-search').addEventListener('click', event => {
  const latitude = sessionStorage.getItem('latitude')
  const longitude = sessionStorage.getItem('longitude')
  const cuisine = sessionsPreferences.getItem('food_type')

  // Default preferences for food type
  if (cuisine === "default") {
    axios.get(`https://api.documenu.com/v2/restaurants/search/geo?lat=${latitude}&lon=${longitude}&distance=5`, {
      headers: {
        'X-API-KEY': '65e9991ec80a9970fe3112ddc2617c8b'
      }
    })
      .then(res => {
        const restaurant_info = res.data.data
        localStorage.setItem('restaurant_info', JSON.stringify(restaurant_info))
      })
      .catch(error => console.log(error))
  }
  // specific cuisine preferences
  else {
    axios.get(`https://api.documenu.com/v2/restaurants/search/geo?lat=${latitude}&lon=${longitude}&distance=5&cuisine=${cuisine}`, {
      headers: {
        'X-API-KEY': '65e9991ec80a9970fe3112ddc2617c8b'
      }
    })
      .then(res => {
        const restaurant_info = res.data.data
        localStorage.setItem('restaurant_info', JSON.stringify(restaurant_info))
      })
      .catch(error => console.log(error))
  }

  // Display list of restaurants and let user choose one
  displayRestaurants()
})

const displayRestaurants = () => {
  // If there is no favorites data, load no favorites message.
  if (restaurant_info.length === 0) {
    document.getElementById('restaurants-main-display').innerHTML = `
      <div class="no-data-message">
        <div class="ui icon header">
          <i class="search icon"></i>
          No results found!
        </div>
      </div>
      `
  }
  else {
    // Clear out the history display section.
    document.getElementById('restaurants-main-display').innerHTML = ''

    restaurant_info.forEach(restaurant => {
      let restaurantElement = document.createElement('div')
      restaurantElement.className = 'ui card'
      restaurantElement.innerHTML = `
          <div class="content">
            <div class="header">${restaurant.restaurant_name}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">${restaurant.restaurant_phone}</h4>
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Wave Height: ${restaurant.restaurant_id} ft.</p>
                  </div>
                </div>
              </div>
              <div class="event">
                <div class="content">
                  <div class="summary">
                    <p>Water Temp: ${restaurant.address} degrees</p>
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

      document.getElementById('restaurant-main-display').append(sessionElement)
    })
  }
}
