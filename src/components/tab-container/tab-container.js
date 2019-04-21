import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './tab-container.scss'

class TabContainer extends Component {
  static propTypes = {
    delivery: PropTypes.element.isRequired,
    pickup: PropTypes.element.isRequired
  }

  state = {
    activeTab: 'delivery'
  }

  toggleTab = tab => {
    this.setState({
      activeTab: tab
    })
  }

  render() {
    const { toggleTab } = this
    const { delivery, pickup } = this.props
    const { activeTab } = this.state

    const isDeliveryTabActive = activeTab === 'delivery'
    const isPickupTabActive = activeTab === 'pickup'

    const deliveryTabClass = cn('tab-container__tab', 'order-sm-2', {
      ['tab-container__tab--show']: isDeliveryTabActive
    })

    const pickupTabClass = cn('tab-container__tab', 'order-sm-4', {
      ['tab-container__tab--show']: isPickupTabActive
    })

    return (
      <div className="tab-container app__tab-container">
        <button
          className={`tab-container__btn order-sm-1 ${isDeliveryTabActive &&
            'tab-container__btn--active'}`}
          type="button"
          onClick={() => toggleTab('delivery')}
        >
          Доставка
          <span
            className={`tab-container__arrow-group ${isDeliveryTabActive &&
              'tab-container__arrow-group--show'}`}
          >
            <i className="tab-container__arrow-up" />
            <i className="tab-container__arrow-down" />
          </span>
        </button>
        <button
          className={`tab-container__btn order-sm-3 ${isPickupTabActive &&
            'tab-container__btn--active'}`}
          type="button"
          onClick={() => toggleTab('pickup')}
        >
          Самовывоз
          <span
            className={`tab-container__arrow-group ${isPickupTabActive &&
              'tab-container__arrow-group--show'}`}
          >
            <i className="tab-container__arrow-up" />
            <i className="tab-container__arrow-down" />
          </span>
        </button>
        <div className={deliveryTabClass}>{delivery}</div>
        <div className={pickupTabClass}>{pickup}</div>
      </div>
    )
  }
}

export default TabContainer
