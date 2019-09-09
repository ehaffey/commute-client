'use strict'

const config = require('./../config')
const store = require('./../store')

const addCommute = function (data) {
  return $.ajax({
    url: config.apiUrl + '/commutes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getCommutes = function () {
  return $.ajax({
    url: config.apiUrl + '/commutes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addCommute,
  getCommutes
}
