import React, { Component } from 'react'
import './pickup-tab.scss'
import BtnSubmit from '../btn-submit/btn-submit'
import Map from '../map/map'

class PickupTab extends Component {
  state = {
    value: 'Песчаная улица, дом 13'
  }

  handleChange = e => {
    const target = e.target
    const name = target.name

    this.setState({
      value: name
    })
  }

  render() {
    const { handleChange } = this
    const { value } = this.state

    return (
      <div className="pickup-tab">
        <div className="pickup-tab__row">
          <div className="pickup-tab__check">
            <input
              id="address-one"
              name="Песчаная улица, дом 13"
              className="pickup-tab__check-input"
              onChange={handleChange}
              type="radio"
              checked={value === 'Песчаная улица, дом 13'}
            />
            <label className="pickup-tab__check-label" htmlFor="address-one">
              <span className="pickup-tab__check-label-text">
                Пункт Выдачи заказов Песчаная улица, дом 13
              </span>
            </label>
          </div>
          <div className="pickup-tab__check">
            <input
              id="address-two"
              name="Подсосенский переулок, 11"
              className="pickup-tab__check-input"
              onChange={handleChange}
              type="radio"
              checked={value === 'Подсосенский переулок, 11'}
            />
            <label className="pickup-tab__check-label" htmlFor="address-two">
              <span className="pickup-tab__check-label-text">
                Пункт Выдачи заказов Подсосенский переулок, 11
              </span>
            </label>
          </div>
        </div>
        <Map />
        <div className="pickup-tab__footer">
          <BtnSubmit mixes="pickup-tab" />
        </div>
      </div>
    )
  }
}

export default PickupTab
