document.getElementById('surf-button').addEventListener('click', event => {

  axios.get('http://api.worldweatheronline.com/premium/v1/marine.ashx?key=500045134f354b9590e131348212008&format=json&q=33.3853,-117.5939')
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

})

document.getElementById('restaurant-button').addEventListener('click', event => {

  axios.get('https://api.documenu.com/v2/restaurants/zip_code/92130?cuisine=italian', {
    headers: {
      'X-API-KEY': '65e9991ec80a9970fe3112ddc2617c8b'
    }
  })
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

})

