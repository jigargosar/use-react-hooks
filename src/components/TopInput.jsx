//<editor-fold desc="Default Imports">
// @formatter:off
/* eslint-disable no-unused-vars, no-empty-pattern */
// noinspection all
import PropTypes from 'prop-types'
// noinspection all
import * as R from 'ramda'
/* eslint-enable no-unused-vars */
// @formatter:on
//</editor-fold>
import React from 'react'
import InputText from './InputText'
import { bindInputValue, onTopInputSubmit } from '../State'

const TopInput = ({ state, setState }) => {
  return (
    <InputText
      onEnter={() => setState(onTopInputSubmit)}
      {...bindInputValue([state, setState])}
    />
  )
}

TopInput.propTypes = {}

TopInput.defaultProps = {}

export default TopInput
