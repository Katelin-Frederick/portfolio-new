import { HydrateClient, } from '~/trpc/server'

import Experience from './(mainPage)/_experience/Experience'
import Projects from './(mainPage)/_projects/Projects'
import Landing from './(mainPage)/_landing/Landing'
import Contact from './(mainPage)/_contact/Contact'
import Skills from './(mainPage)/_skills/Skills'
import About from './(mainPage)/_about/About'

const Home = async () => (
  <HydrateClient>
    <main className='bg-gray-500'>
      <Landing />
      <div className='sm:container mx-auto'>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  </HydrateClient>
)

export default Home
