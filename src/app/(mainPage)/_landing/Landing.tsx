import { Linkedin, Twitter, Github, } from 'lucide-react'
import React from 'react'

import { Button, } from '~/components/ui/button'
import { montserrat, } from '~/fonts'
import { cn, } from '~/lib/utils'

const backgroundStyles = {
  backgroundImage: 'url(/images/background.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const Landing = () => (
  <section
    id='landing'
    className='h-screen desktop-nav:h-[80vh] flex justify-center items-center overflow-hidden text-center border-b-6 border-gold-500'
    style={backgroundStyles}
  >
    <div id='landingOverlay' className='bg-black/50 w-full h-full flex justify-center items-center'>
      <header>
        <h1 id='title' className='text-[2.5em] md:text-[56px] text-white m-5'>Katelin Frederick</h1>

        <p id='subTitle' className={cn('text-3xl md:text-[40px] text-white mb-10', montserrat.className)}>Web Developer</p>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <Button size='lg' className='mb-5 md:mr-6 md:mb-0'>View Projects</Button>
          <Button size='lg'>View Resume</Button>
        </div>

        <ul className='flex justify-around items-center list-none my-10'>
          <li>
            <Button className='rounded-full h-auto p-3' size='lg'>
              <Github color='#9E95B7' size={32} />
            </Button>
          </li>

          <li>
            <Button className='rounded-full h-auto p-3' size='lg'>
              <Linkedin color='#0D597F' size={32} />
            </Button>
          </li>

          <li>
            <Button className='rounded-full h-auto p-3' size='lg'>
              <Twitter color='#40AEF0' size={32} />
            </Button>
          </li>
        </ul>

        <span className='sm:text-lg md:text-xl'>Email: <a className='text-white underline hover:text-gold-500' href='mailto:k.frederick94@gmail.com'>k.frederick94@gmail.com</a></span>
      </header>
    </div>
  </section>
)

export default Landing