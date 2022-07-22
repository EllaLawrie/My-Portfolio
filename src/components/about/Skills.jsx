import React from 'react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { SiCss3, SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

const skillsContent = [
  { skillIcon: <AiFillHtml5 />, skillName: 'HTML' },
  { skillIcon: <SiCss3 />, skillName: 'CSS' },
  { skillIcon: <SiJavascript />, skillName: 'JAVASCRIPT' },
  { skillIcon: <FaReact />, skillName: 'REACT' },
  { skillIcon: <AiFillGithub />, skillName: 'GIT' },
]

const Skills = () => {
  return (
    <>
      <div className='skill-container'>
        {skillsContent.map(function (content, index) {
          return (
            <div key={index}>
              <div className='skill-item'>{content.skillIcon}</div>
              <div>{content.skillName}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Skills
