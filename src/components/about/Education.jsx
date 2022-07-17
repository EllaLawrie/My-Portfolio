import React from 'react'

const educationContent = [
  {
    degree: 'BACHELOR DEGREE',
    institute: 'National Open University (Nigeria)',
  },
  {
    degree: 'ENGINEERING DEGREE',
    institute: 'Holberton school (Tulsa)',
  },
]

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <h5 className='poppins-font text-uppercase'>
            {val.degree}
            <span className='place open-sans-font'>{val.institute}</span>
          </h5>
        </li>
      ))}
    </ul>
  )
}

export default Education
