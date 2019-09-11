'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

const onViewCommute = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.viewCommute(data.id)
    .then(ui.viewCommuteSuccess)
    .catch(ui.failure)
}

const onEditCommute = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.id
  api.editCommute(id, data)
    .then(function () {
      onGetCommutes(event)
    })
    .catch(ui.failure)
}

const onClearCommutes = function (event) {
  event.preventDefault()
  ui.clearCommutes()
}

const onDeleteCommute = function (event) {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.deleteCommute(id)
    .then(function () {
      onGetCommutes(event)
    })
    .catch(ui.failure)
}

module.exports = {
  onAddCommute,
  onGetCommutes,
  onClearCommutes,
  onEditCommute,
  onViewCommute,
  onDeleteCommute
}
