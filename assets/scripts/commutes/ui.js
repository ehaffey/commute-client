'use strict'

// const store = require('./../store')
const commutesHandlebars = require('../templates/show-commutes.handlebars')

const addCommuteSuccess = function () {
  $('#message').text('Commute saved')
  $('#message').attr('class', 'success')
  $('.text-field').val('')
}

const getCommutesSuccess = function (data) {
  $('#message').text('Success')
  $('#message').attr('class', 'success')
  // console.log(data)
  const commutesHTML = commutesHandlebars({ commutes: data.commutes })
  $('.content').html('<div class="row">' + commutesHTML + '</div>')
  $('.text-field').val('')
  $('.form-group').val('')
  $('.form-control').val('')
}

const viewCommuteSuccess = function (data) {
  $('#message').text('Success')
  $('#message').attr('class', 'success')
  //  console.log(data)
  const commutesHTML = commutesHandlebars({ commutes: data })
  $('.content').html(commutesHTML)
  $('.text-field').val('')
  $('.form-group').val('')
  $('.form-control').val('')
}

const failure = function () {
//  console.error(error)
  $('#message').text('Unable to complete request. Please check your entry and try again')
  $('#message').attr('class', 'failure')
  setTimeout(function () { $('#message').attr('class', 'default') }, 500)
}

const entryFailure = function () {
//  console.error(error)
  $('#message').text('¯\\_(ツ)_/¯ Please check your entry, be realistic with your inputs, and try again')
  $('#message').attr('class', 'failure')
  setTimeout(function () { $('#message').attr('class', 'default') }, 500)
}

const numberFailure = function () {
//  console.error(error)
  $('#message').text('Your time is not realistic. Please try again')
  $('#message').attr('class', 'failure')
  setTimeout(function () { $('#message').attr('class', 'default') }, 500)
}

const clearCommutes = function () {
  $('#message').text('Success')
  $('.content').empty()
}

module.exports = {
  addCommuteSuccess,
  getCommutesSuccess,
  viewCommuteSuccess,
  clearCommutes,
  failure,
  entryFailure,
  numberFailure
}
