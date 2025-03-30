import React from 'react'

import { CarouselPrevious, CarouselContent, CarouselItem, CarouselNext, Carousel, } from '~/components/ui/carousel'
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
  <section id='projects' className='mb-24'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Projects</h2>

    <div className='max-w-screen px-12'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {projectsCards.map((project, index) => (
            <CarouselItem key={index} className='xl:basis-1/2 2xl:basis-1/3'>
              <div className='flex justify-center items-center flex-col'>
                <ProjectCard {...project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
)

export default Projects