import { HydrateClient, } from '~/trpc/server'

import Projects from './(mainPage)/_projects/Projects'
import Landing from './(mainPage)/_landing/Landing'
import Contact from './(mainPage)/_contact/Contact'
import About from './(mainPage)/_about/About'

const Home = async () => (
  <HydrateClient>
    <main className='bg-gray-500'>
      <Landing />
      <div className='container mx-auto'>
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  </HydrateClient>
)

export default Home
