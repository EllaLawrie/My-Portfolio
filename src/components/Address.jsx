import React from 'react'

const Address = () => {
  return (
    <>
      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>Address Point</span>Lagos , Nigeria.
      </p>

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>Email</span>{' '}
        <a href='mailto:lawrieella002@gmail.com'>lawrieella002@gmail.com</a>
      </p>
    </>
  )
}

export default Address
