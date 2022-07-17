import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ModalThreeContent = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  }

  return (
    <div className='slideshow'>
      <figure>
        {/* Project Info Starts */}
        <figcaption>
          <h3>Gaming hub Project</h3>
          <div className='row open-sans-font'>
            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-file-text-o pr-2'></i>
              <span className='project-label'>Project </span>:{' '}
              <span className='ft-wt-600 uppercase'>Website</span>
            </div>

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-user-o pr-2'></i>
              <span className='project-label'>Client </span>:{' '}
              <span className='ft-wt-600 uppercase'>Null</span>
            </div>

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-code pr-2'></i>
              <span className='project-label'>Languages </span>:{' '}
              <span className='ft-wt-600 uppercase'>HTML, CSS, Javascript</span>
            </div>

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-external-link pr-2'></i>
              <span className='project-label'>Preview </span>:{' '}
              <span className='ft-wt-600 uppercase'>
                <a
                  href='https://ps4hub.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.gaming-hub.netlify.app
                </a>
              </span>
            </div>
          </div>
        </figcaption>
        {/* Project Info Ends */}

        {/* Main Content Starts */}
        <Slider {...settings}>
          <div className='slide_item'>
            <img src='img/projects/project-3.JPG' alt='slide 1' />
          </div>
        </Slider>
        {/* Main Content Ends */}
      </figure>
    </div>
  )
}

export default ModalThreeContent
