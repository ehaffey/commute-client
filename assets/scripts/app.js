'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const commuteEvents = require('./commutes/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#enter-commute').on('submit', commuteEvents.onAddCommute)
  $('#get-commutes').on('click', commuteEvents.onGetCommutes)

  // not hooked up yet
  $('#clear-commutes').on('click', commuteEvents.onClearBooks)
  $('.content').on('click', '.delete-button', commuteEvents.onDeleteCommute)
})
