'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddCommute = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (Math.abs(data.commute.time) <= 2147483647) {
    api.addCommute(data)
      .then(ui.addCommuteSuccess)
      .catch(ui.entryFailure)
  } else {
    ui.numberFailure()
  }
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
  if (data.id.length > 0) {
    api.viewCommute(data.id)
      .then(ui.viewCommuteSuccess)
      .catch(ui.failure)
  } else {
    ui.failure()
  }
}

const onEditCommute = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).closest('section').data('id')
  if (Math.abs(data.commute.time) <= 2147483647) {
    api.editCommute(id, data)
      .then(function () {
        onGetCommutes(event)
      })
      .catch(ui.entryFailure)
  } else {
    ui.numberFailure()
  }
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
