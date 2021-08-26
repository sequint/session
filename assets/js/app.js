
// restaurant search
let restaurant_info = JSON.parse(localStorage.getItem('restaurant_info')) || []
let restaurant_choice = JSON.parse(localStorage.getItem('restaurant_choice')) || []

document.getElementById('go-btn').addEventListener('click', event => {
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
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Here i am</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            Thank to pop me out of that button, but now i'm done so you can close this window.
          </div>
        </div>
      </div>
      `
  }
  else {
    document.getElementById('restaurants-main-display').innerHTML = `
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Here i am</h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            Thank to pop me out of that button, but now i'm done so you can close this window.
          </div>
        </div>
      </div>
    `
  }
}

