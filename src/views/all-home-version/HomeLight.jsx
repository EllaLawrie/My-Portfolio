import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Hero from '../../components/hero/HeroLight'
import Index from '../../components/about/index'
import Address from '../../components/Address'
import Portfolio from '../../components/portfolio/PortfolioLight'
import Contact from '../../components/Contact'
import Social from '../../components/Social'
import AnimatedCursor from 'react-animated-cursor'

const menuItem = [
  { icon: 'fa-home', menuName: 'Home' },
  { icon: 'fa-user', menuName: 'About' },
  { icon: 'fa-briefcase', menuName: 'Portfolio' },
  { icon: 'fa-envelope-open', menuName: 'Contact' },
]

const HomeLight = () => {
  const [mode, setMode] = useState(false)
  // document.body.classList.add('light')

  const changeMode = () => {
    setMode(!mode)
  }

  return (
    <div className={mode && 'dark-mode'}>
      <div className={mode ? 'yellow' : 'green'}>
        <div onClick={changeMode} className='demo-sticker'>
          <i
            className={`fa  ${mode ? 'fa-moon-o' : 'fa-lightbulb-o'}`}
            aria-hidden='true'
          ></i>
        </div>
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color='114, 182, 38'
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.2}
        />
        <Tabs>
          <div className='header'>
            <TabList className=' icon-menu  revelator-slideup revelator-once revelator-delay1'>
              {menuItem.map((item, i) => (
                <Tab className='icon-box' key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>

          <div className='tab-panel_list'>
            <TabPanel className='home '>
              <div
                className='container-fluid main-container container-home p-0 '
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                {/* Ella this what is responsible for that side color */}
                <div className='color-block d-none d-lg-block'></div>

                <Hero />
              </div>
            </TabPanel>

            <TabPanel className='about'>
              <div data-aos='fade-up' data-aos-duration='1200'>
                <div className='title-section text-left text-sm-center'>
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className='title-bg'>Resume</span>
                </div>
                <Index />
              </div>
            </TabPanel>

            <TabPanel className='portfolio'>
              <div
                className='title-section text-left text-sm-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className='title-bg'>works</span>
              </div>

              <div
                className='container grid-gallery main-content'
                data-aos='fade-up'
                data-aos-duration='1200'
                data-aos-delay='100'
              >
                <Portfolio />
              </div>
            </TabPanel>

            <TabPanel className='contact'>
              <div
                className='title-section text-left text-sm-center'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className='title-bg'>contact</span>
              </div>
              <div
                className='container'
                data-aos='fade-up'
                data-aos-duration='1200'
              >
                <div className='row'>
                  <div className='col-12 col-lg-4'>
                    <h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>
                      hi there!
                    </h3>
                    <p className='open-sans-font mb-4'>
                      Interested in working together? Feel free to contact me
                      for any project or collaboration.
                    </p>
                    <Address />

                    <Social />
                  </div>

                  <div className='col-12 col-lg-8'>
                    <Contact />
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default HomeLight
