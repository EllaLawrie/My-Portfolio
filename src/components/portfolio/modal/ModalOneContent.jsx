import React from 'react'

const ModalOneContent = () => {
  return (
    <div className='slideshow'>
      <figure>
        {/* Project Info Starts */}
        <figcaption>
          <h3>Image Project</h3>
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
              <span className='ft-wt-600 uppercase'>ReactJs</span>
            </div>

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-external-link pr-2'></i>
              <span className='project-label'>Preview </span>:{' '}
              <span className='ft-wt-600 uppercase'>
                <a
                  href='https://moviehive.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  www.mobilehive.netlify.app
                </a>
              </span>
            </div>
          </div>
        </figcaption>
        {/* Project Info Ends */}

        {/*  Main Content Starts */}
        <img src='img/projects/project-1.PNG' alt='Portfolio' />
        {/* Main Content Ends */}
      </figure>
    </div>
  )
}

export default ModalOneContent
