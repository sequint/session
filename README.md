# Session

## Overview

This app is a customized surf session finder for surfers anywhere.

The app allows surfers to log information on the type of wave they like to surf (wave height, tide, etc.), and their favorite food types.  The app then gets the users current location if allowed (or prompts them for input if not) and returns the wave locations in their city that match their preferences for that day.  It also gives the users choices of food locations to go to around that surf spot after their session, based on their preferences.

### API Recourses

Two APIs are used to pull surf and food data:
  - World Weather Online: https://www.worldweatheronline.com/developer/api/docs/marine-weather-api.aspx#intro
    - Used to pull information about surf reports for each day.
  - Documenu: https://documenu.com/docs
    - Used to find local restaurants that match the users preferences.

## Deployed Site

[Session](https://sequint.github.io/session/)

![ScreenShot](/assets/README-screenshot.png)