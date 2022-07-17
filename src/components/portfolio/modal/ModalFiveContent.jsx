import React from 'react'

const ModalFiveContent = () => {
  return (
    <div className='slideshow'>
      <figure>
        {/* Project info Starts */}
        <figcaption>
          <h3>Baby store Project</h3>
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
                  href='https://kind-varahamihira-a0ba78.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.babystore.netlify.app
                </a>
              </span>
            </div>
          </div>
        </figcaption>
        {/* Project info Ends */}

        {/*  Main Content Starts */}
        <img src='img/projects/project-5.JPG' alt='Portfolio' />
        {/* Main Content Ends */}
      </figure>
    </div>
  )
}

export default ModalFiveContent
