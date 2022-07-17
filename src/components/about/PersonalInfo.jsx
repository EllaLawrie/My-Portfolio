import React from 'react'

const personalInfoContent = [
  { meta: 'first name', metaInfo: 'Ella' },
  { meta: 'last name', metaInfo: 'Amukwuo' },
  { meta: 'Nationality', metaInfo: 'Nigerian' },
  { meta: 'Freelance', metaInfo: 'Available' },
  { meta: 'Address', metaInfo: 'Lagos, Nigeria' },
  { meta: 'Email', metaInfo: 'lawrieella002@gmail.com' },
  { meta: 'language', metaInfo: 'English' },
]

const PersonalInfo = () => {
  return (
    <ul className='about-list list-unstyled open-sans-font'>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className='title'>{val.meta}: </span>
          <span className='value d-block d-sm-inline-block d-lg-block d-xl-inline-block'>
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default PersonalInfo
