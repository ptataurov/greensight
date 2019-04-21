import React, { Component } from 'react'
import './map.scss'
import MapsService from '../../services/yandex-maps-service'

class Map extends Component {
  state = {
    MapsService: new MapsService()
  }

  componentDidMount() {
    const { MapsService } = this.state
    MapsService.init()

    window.addEventListener('resize', MapsService.fitToViewport)
  }

  componentWillUnmount() {
    const { MapsService } = this.state

    window.removeEventListener('resize', MapsService.fitToViewport)
  }

  render() {
    return <div id="map" />
  }
}

export default Map
