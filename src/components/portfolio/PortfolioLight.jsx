import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import DirectionReveal from 'direction-reveal'
import ModalOneContent from './modal/ModalOneContent'
import ModalThreeContent from './modal/ModalThreeContent'
import ModalFiveContent from './modal/ModalFiveContent'

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)

  function toggleModalOne() {
    setIsOpen(!isOpen)
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3)
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5)
  }

  useEffect(() => {
    DirectionReveal()

    DirectionReveal({
      selector: '.direction-reveal',
      itemSelector: '.direction-reveal__card',
      animationName: 'slide',
      animationPostfixEnter: 'enter',
      animationPostfixLeave: 'leave',
      touchThreshold: 500,
    })
  }, [])

  return (
    <ul className='row grid'>
      <li className='direction-reveal'>
        <figure className='direction-reveal__card' onClick={toggleModalOne}>
          <img src='img/projects/project-1.PNG' alt='Portfolio' />
          <div className=' direction-reveal__overlay direction-reveal__anim--enter'>
            <span className='direction-reveal__title'>Movie Project</span>
          </div>
        </figure>

        {/* <!-- Portfolio Starts --> */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel='My dialog'
          className='custom-modal dark green'
          overlayClassName='custom-overlay'
          closeTimeoutMS={500}
        >
          <div>
            <button className='close-modal' onClick={toggleModalOne}>
              <img src='/img/cancel.svg' alt='close icon' />
            </button>

            <div className='box_inner portfolio'>
              <ModalOneContent />
            </div>
          </div>
        </Modal>
      </li>

      <li className='direction-reveal'>
        <figure className='direction-reveal__card' onClick={toggleModalThree}>
          <img src='img/projects/project-3.JPG' alt='Portfolio' />
          <div className=' direction-reveal__overlay direction-reveal__anim--enter'>
            <span className='direction-reveal__title'>Gaming hub Project</span>
          </div>
        </figure>

        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel='My dialog'
          className='custom-modal dark green'
          overlayClassName='custom-overlay'
          closeTimeoutMS={500}
        >
          <div>
            <button className='close-modal' onClick={toggleModalThree}>
              <img src='/img/cancel.svg' alt='close icon' />
            </button>

            <div className='box_inner portfolio'>
              <ModalThreeContent />
            </div>
          </div>
        </Modal>
      </li>

      <li className='direction-reveal'>
        <figure className='direction-reveal__card' onClick={toggleModalFive}>
          <img src='img/projects/project-5.JPG' alt='Portfolio' />
          <div className='direction-reveal__overlay direction-reveal__anim--enter'>
            <span className='direction-reveal__title'>Baby-store Project</span>
          </div>
        </figure>

        <Modal
          isOpen={isOpen5}
          onRequestClose={toggleModalFive}
          contentLabel='My dialog'
          className='custom-modal dark green'
          overlayClassName='custom-overlay'
          closeTimeoutMS={500}
        >
          <div>
            <button className='close-modal' onClick={toggleModalFive}>
              <img src='/img/cancel.svg' alt='close icon' />
            </button>

            <div className='box_inner portfolio'>
              <ModalFiveContent />
            </div>
          </div>
        </Modal>
      </li>
      {/* <!-- Portfolio Ends --> */}
    </ul>
  )
}

export default PortfolioLight
