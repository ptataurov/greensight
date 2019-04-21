import React, { Component } from 'react'
import './delivery-tab.scss'
import MaskedInput from 'react-text-mask'
import BtnSubmit from '../btn-submit/btn-submit'

class DeliveryTab extends Component {
  fullNameRef = React.createRef()
  phoneRef = React.createRef()
  addressRef = React.createRef()
  commentRef = React.createRef()

  state = {
    fullName: '',
    phone: '',
    address: '',
    comment: ''
  }

  validationForm = () => {
    const { fullNameRef, phoneRef, addressRef, commentRef } = this
    const { fullName, phone, address, comment } = this.state
    const phoneRegex = /\+7 \(\d\d\d\) \d\d\d-\d\d-\d\d/
    const fullNameRegex = /[^а-яё -]+/i

    let hasError = false

    const addErrorClass = node => {
      node.classList.add('delivery-form__input--invalid')
      hasError = true
    }

    const removeErrorClass = node => {
      node.classList.contains('delivery-form__input--invalid') &&
        node.classList.remove('delivery-form__input--invalid')
    }

    !fullName || fullNameRegex.test(fullName)
      ? addErrorClass(fullNameRef.current)
      : removeErrorClass(fullNameRef.current)

    !phoneRegex.test(phone)
      ? addErrorClass(phoneRef.current.inputElement)
      : removeErrorClass(phoneRef.current.inputElement)

    !address
      ? addErrorClass(addressRef.current)
      : removeErrorClass(addressRef.current)

    !comment
      ? addErrorClass(commentRef.current)
      : removeErrorClass(commentRef.current)

    return hasError
  }

  resetForm = () => {
    this.setState({
      fullName: '',
      phone: '',
      address: '',
      comment: ''
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { validationForm, resetForm } = this

    if (!validationForm()) {
      resetForm()
    }
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    })
  }

  render() {
    const {
      onSubmit,
      handleChange,
      fullNameRef,
      phoneRef,
      addressRef,
      commentRef
    } = this
    const { fullName, phone, address, comment } = this.state

    return (
      <form className="delivery-form" onSubmit={onSubmit} noValidate>
        <div className="delivery-form__row">
          <div className="delivery-form__group mr-8px mr-sm-0">
            <label className="delivery-form__label">ФИО</label>
            <input
              className="delivery-form__input"
              value={fullName}
              onChange={e => handleChange(e, 'fullName')}
              ref={fullNameRef}
              type="text"
              placeholder="Только кирилица"
            />
            <span className="delivery-form__error-msg">
              Введите корректное имя
            </span>
          </div>
          <div className="delivery-form__group ml-8px ml-sm-0">
            <label className="delivery-form__label">Телефон</label>
            <MaskedInput
              mask={[
                '+',
                '7',
                ' ',
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/
              ]}
              className="delivery-form__input"
              value={phone}
              onChange={e => handleChange(e, 'phone')}
              ref={phoneRef}
              placeholder="+7 (___) ___-__-__"
            />
            <span className="delivery-form__error-msg">
              Введите корректный номер
            </span>
          </div>
        </div>
        <div className="delivery-form__row">
          <div className="delivery-form__group">
            <label className="delivery-form__label">Адрес доставки</label>
            <input
              className="delivery-form__input"
              value={address}
              onChange={e => handleChange(e, 'address')}
              ref={addressRef}
              type="text"
              placeholder="Город, улица, дом"
            />
            <span className="delivery-form__error-msg">
              Введите адрес доставки
            </span>
          </div>
        </div>
        <div className="delivery-form__row">
          <div className="delivery-form__group">
            <label className="delivery-form__label">Комментарий</label>
            <textarea
              rows="6"
              className="delivery-form__input"
              value={comment}
              onChange={e => handleChange(e, 'comment')}
              ref={commentRef}
            />
            <span className="delivery-form__error-msg">
              Введите комментарий
            </span>
          </div>
        </div>
        <div className="delivery-form__footer">
          <BtnSubmit mixes="delivery-form" />
        </div>
      </form>
    )
  }
}

export default DeliveryTab
