
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
  let restaurant_displayElem = `
  <div class="ui placeholder segment">
        <div class="inline">
          Name: ${restaurant_info[0].restaurant_name}
					<hr>
					Phone: ${restaurant_info[0].restaurant_phone}
					<hr>
					Address: ${restaurant_info[0].address}
					<hr>
					Food Type: ${restaurant_info[0].cuisine}
        </div>
      </div>
  `

})
