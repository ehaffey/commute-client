'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddCommute = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addCommute(data)
    .then(ui.addCommuteSuccess)
    .catch(ui.failure)
}

const onGetCommutes = function (event) {
  event.preventDefault()
  api.getCommutes()
    .then(ui.getCommutesSuccess)
    .catch(ui.failure)
}

const onClearCommutes = (event) => {
  event.preventDefault()
  ui.clearCommutes()
}

const onDeleteCommute = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deletecommute(id)
    .then(function () {
      onGetCommutes(event)
    })
    .catch(ui.failure)
}

module.exports = {
  onAddCommute,
  onGetCommutes,
  onClearCommutes,
  onDeleteCommute
}
