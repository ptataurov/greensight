import ymaps from 'ymaps'
import iconPlacemark from './placemark-icon.svg'

export default class MapsService {
  API_KEY =
    'https://api-maps.yandex.ru/2.1/?apikey=c6aa3341-1a83-4e5c-9626-80e560755b99&lang=ru_RU'
  isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints

  placemarkOpt = {
    iconLayout: 'default#image',
    iconImageHref: iconPlacemark,
    iconImageSize: [32, 44]
  }

  ymaps = null
  map = null

  fitToViewport = () => {
    this.map.container.fitToViewport()
  }

  init = () => {
    const { API_KEY, placemarkOpt, isTouchDevice, fitToViewport } = this
    ymaps
      .load(API_KEY)
      .then(ymaps => {
        const map = new ymaps.Map('map', {
          center: [55.76, 37.56],
          zoom: 10,
          controls: ['zoomControl']
        })

        isTouchDevice && map.behaviors.disable('drag')
        this.ymaps = ymaps
        this.map = map

        fitToViewport()
      })
      .then(() => {
        const { ymaps } = this
        new ymaps.GeoObject()

        this.map.geoObjects.add(
          new ymaps.Placemark([55.801131, 37.508167], {}, placemarkOpt)
        )
        this.map.geoObjects.add(
          new ymaps.Placemark([55.757556, 37.651592], {}, placemarkOpt)
        )
      })
  }
}
