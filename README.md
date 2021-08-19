# your-surf

## Overview

This app is a customized surf session finder for surfers anywhere.

The app allows surfers to log information on the type of wave they like to surf (wave height, tide, etc.), and their favorite food types.  The app then gets the users current location if allowed (or prompts them for input if not) and returns the wave locations in their city that match their preferences for that day.  It also gives the users choices of food locations to go to around that surf spot after their session, based on their preferences.

### API Recourses

Two APIs are used to pull surf and food data:
  - Magic Seaweed: https://magicseaweed.com/docs/api/60/
    - Used to pull information about surf reports for each day.
  - Yelp: https://www.yelp.com/developers
    - Used to query favorite food information on local restaurants.