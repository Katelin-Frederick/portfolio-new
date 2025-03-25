import React from 'react'

import ProjectCard from '~/components/ProjectCard'

const projectsCards = [
  {
    image: {
      src: '/images/weightTracker.png',
      alt: '',
    },
    title: 'Weight Tracker',
    description: 'Site that tracks and charts users fitness aspects',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'MongoDB',
      'Express',
      'React',
      'Node.js'
    ],
  },
  {
    image: {
      src: '/images/siteSaver.png',
      alt: 'Site Saver Screenshot',
    },
    title: 'Site Saver',
    description: 'Site that allows the user to save bookmarked sites',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'MongoDB',
      'Express',
      'React',
      'Node.js'
    ],
  },
  {
    image: {
      src: '/images/movie.png',
      alt: '',
    },
    title: 'Movie Search',
    description: 'Site that allows the user to search the IMDb API',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'React',
      'Javascript',
      'Bootstrap',
      'IMDb API'
    ],
  },
  {
    image: {
      src: '/images/itunes.png',
      alt: '',
    },
    title: 'iTunes Search',
    description: 'Site that allows the user to search the iTunes API',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'iTunes API'
    ],
  },
  {
    image: {
      src: '/images/threejs.png',
      alt: '',
    },
    title: 'Three.js Nav Demo',
    description: 'Site that uses the three.js library to create a navigation element',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'SASS',
      'Javascript',
      'Three.js',
      'jQuery'
    ],
  },
  {
    image: {
      src: '/images/universitySite.png',
      alt: '',
    },
    title: 'University Site',
    description: 'Mock-up website for a mock university',
    btnLinks: {
      demo: '/',
      code: '/',
    },
    skills: [
      'HTML',
      'CSS',
      'SASS',
      'Javascript'
    ],
  }
]

const Projects = () => (
  <section id='myWork' className='mb-24'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Projects</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12'>
      {projectsCards.map((project, index) => (
        <div key={index} className='flex justify-center items-center flex-col'>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </section>
)

export default Projects