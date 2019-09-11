'use strict'

// const store = require('./../store')
const commutesHandlebars = require('../templates/show-commutes.handlebars')

const addCommuteSuccess = function () {
  $('#message').text('Commute saved')
  $('#message').attr('class', 'success')
  $('.text-field').val('')
}

const getCommutesSuccess = function (data) {
  // console.log(data)
  const commutesHTML = commutesHandlebars({ commutes: data.commutes })
  $('.content').html('<div class="row">' + commutesHTML + '</div>')
  $('.text-field').val('')
  $('.form-group').val('')
  $('.form-control').val('')
}

const viewCommuteSuccess = function (data) {
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
}

const clearCommutes = function () {
  $('.content').empty()
}

module.exports = {
  addCommuteSuccess,
  getCommutesSuccess,
  viewCommuteSuccess,
  clearCommutes,
  failure
}
