import React, { useState } from 'react'
import { Tabs, TabPanel } from 'react-tabs'
import Modal from 'react-modal'
import ModalOneContent from './modal/ModalOneContent'
import ModalThreeContent from './modal/ModalThreeContent'
import ModalFiveContent from './modal/ModalFiveContent'

const Portfolio = () => {
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

  return (
    <Tabs>
      <div className='portfolio-tab-content'>
        <TabPanel>
          <ul className='row grid justify-content-center'>
            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='0'
            >
              {/* <!-- Portfolio Starts --> */}
              <figure onClick={toggleModalOne}>
                <img src='img/projects/project-1.PNG' alt='Portfolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>Movie Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
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

            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='200'
            >
              <figure onClick={toggleModalThree}>
                <img src='img/projects/project-3.JPG' alt='Portfolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'> Gaming hub Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
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

            <li
              className='direction-reveal'
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='100'
            >
              <figure
                className='direction-reveal__card'
                onClick={toggleModalFive}
              >
                <img src='img/projects/project-5.JPG' alt='Portfolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'> Baby-store Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
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
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className='row grid justify-content-center'>
            <li
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='0'
            >
              <figure onClick={toggleModalOne}>
                <img src='img/projects/project-1.PNG' alt='Portfolio' />
                <div className=' hover-content-wrapper'>
                  <span className='content-title'>React Project</span>
                </div>
              </figure>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel='My dialog'
                className='custom-modal dark'
                overlayClassName='custom-overlay dark'
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
            {/* <!-- Portfolio Ends --> */}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default Portfolio
