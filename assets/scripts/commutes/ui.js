'use strict'

// const store = require('./../store')
const commutesHandlebars = require('../templates/show-commutes.handlebars')

const addCommuteSuccess = function () {
  $('#message').text('Commute saved')
  $('#message').attr('class', 'success')
  $('.text-field').val('')
  console.log('commutesuccess ran')
}

const getCommutesSuccess = (data) => {
  console.log(data)
  const commutesHTML = commutesHandlebars({ commutes: data.commutes })
  $('.content').html(commutesHTML)
}

const failure = function (error) {
  console.error(error)
}

module.exports = {
  addCommuteSuccess,
  getCommutesSuccess,
  failure
}
