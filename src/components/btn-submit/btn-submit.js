import React from 'react'
import './btn-submit.scss'
import PropTypes from 'prop-types'

const BtnSubmit = ({ mixes }) => {
  return (
    <button className={`btn-submit ${mixes}__btn-submit`} type="submit">
      Отправить
    </button>
  )
}

BtnSubmit.propTypes = {
  mixes: PropTypes.string.isRequired
}

export default BtnSubmit
