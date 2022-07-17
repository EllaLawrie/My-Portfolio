import React from 'react'

const experienceContent = [
  {
    year: '   2021 - Present',
    position: ' Web Developer',
    details: ` Leveling up my development skills on the fundamental core web technologies. `,
  },
  {
    year: '2021 - Present',
    position: 'Freelance',
    details: `Working to ensure a positive and hassle-free customer experience, also replicated and implemented UI designs from tools like Figma for a variety of clients. `,
  },
]

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>{val.position}</h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  )
}

export default Experience
