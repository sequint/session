
// Variable to hold value of whether or not the favorite button has been clicked.
let toggle = false

// Toggle back and forth between history information and favorite info on click.
document.getElementById('fav-hist-toggle').addEventListener('click', event => {

  // If toggle is false, change to history information.
  if (!toggle) {
    document.getElementById('fav-hist-toggle').textContent = 'History'

    // Set toggle to true.
    toggle = true
  }
  // Otherwise, if toggle is true change inforation to favorite.
  else {
    document.getElementById('fav-hist-toggle').textContent = 'Favorite Sessions'

    // Set toggle to false.
    toggle = false
  }

})