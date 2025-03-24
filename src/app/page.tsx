import { HydrateClient, } from '~/trpc/server'

import Projects from './(mainPage)/_projects/Projects'
import Landing from './(mainPage)/_landing/Landing'

const Home = async () => (
  <HydrateClient>
    <main className='bg-gray-500'>
      <Landing />
      <Projects />
    </main>
  </HydrateClient>
)

export default Home
