import React from 'react'
import 'normalize.css/normalize.css'
import './app.scss'

import TabContainer from '../tab-container/tab-container'
import DeliveryTab from '../delivery-tab/delivery-tab'
import PickupTab from '../pickup-tab/pickup-tab'

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Выберите способ доставки</h1>
      <TabContainer delivery={<DeliveryTab />} pickup={<PickupTab />} />
    </div>
  )
}

export default App
