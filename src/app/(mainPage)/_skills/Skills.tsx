
import { HoverCardContent, } from '@radix-ui/react-hover-card'
import React from 'react'

import { HoverCardTrigger, HoverCard, } from '~/components/ui/hover-card'
import { Badge, } from '~/components/ui/badge'

const Skills = () => (
  <section id='skills' className='mb-24 px-7'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Skills</h2>

    {/* <h3 className='text-xl'>Frontend</h3>
    <div className='flex flex-wrap items-center mt-3 mb-8'> */}
    <h3 className='text-xl text-center'>Frontend</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* HTML5 */}
          <Badge className='bg-html5/15 border border-html5 m-3'>
            <svg width='24px' fill='#E34F26' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>HTML5</title><path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' /></svg>
            HTML5
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* JavaScript */}
          <Badge className='bg-javaScript/15 border border-javaScript m-3'>
            <svg width={24} fill='#F7DF1E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>JavaScript</title><path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' /></svg>
            JavaScript
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* TypeScript */}
          <Badge className='bg-typeScript/15 border border-typeScript m-3'>
            <svg width={24} fill='#3178C6' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>TypeScript</title><path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z' /></svg>
            TypeScript
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2023</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* CSS3 */}
          <Badge className='bg-css3/15 border border-css3 m-3'>
            <svg width={24} fill='#1572B6' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>CSS3</title><path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z' /></svg>
            CSS3
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Tailwind */}
          <Badge className='bg-tailwind/15 border border-tailwind m-3'>
            <svg width={24} fill='#06B6D4' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Tailwind CSS</title><path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z' /></svg>
            Tailwind
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <h3 className='text-xl text-center'>Libraries and Frameworks</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* React */}
          <Badge className='bg-react/15 border border-react m-3'>
            <svg width={24} fill='#61DAFB' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>React</title><path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' /></svg>
            React
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Next */}
          <Badge className='bg-next/15 border border-next m-3'>
            <svg width={24} fill='#000000' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Next.js</title><path d='M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z' /></svg>
            Next
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <h3 className='text-xl text-center'>Backend</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* Node */}
          <Badge className='bg-node/15 border border-node m-3'>
            <svg width={24} fill='#5FA04E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Node.js</title><path d='M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' /></svg>
            Node
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Express */}
          <Badge className='bg-express/15 border border-express m-3'>
            <svg width={24} fill='#000000' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Express</title><path d='M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z' /></svg>
            Express
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p><span className='font-bold'>Used Since:</span> 2019</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <h3 className='text-xl text-center'>AWS</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* DynamoDB */}
          <Badge className='bg-dynamo/15 border border-dynamo m-3'>
            <svg width={24} fill='#4053D6' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Amazon DynamoDB</title><path d='M16.606 20.705v-2.371c-1.263 1.082-3.884 1.795-7.066 1.795-3.184 0-5.805-.714-7.068-1.797v2.369c0 1.168 2.903 2.47 7.068 2.47 4.16 0 7.06-1.3 7.066-2.466zm.001-6.765l.817-.005v.005c0 .517-.258.998-.75 1.441.601.54.75 1.071.75 1.449a1661.7 1661.7 0 0 0 0 3.87c0 1.881-3.389 3.3-7.884 3.3-4.471 0-7.846-1.404-7.88-3.27a583.119 583.119 0 0 1-.003-3.909c.001-.375.15-.9.745-1.437-.592-.538-.743-1.062-.746-1.435v-3.892c.002-.377.153-.903.747-1.438-.593-.54-.744-1.062-.747-1.435 0-1.357-.002-2.735.002-3.897C1.674 1.412 5.056 0 9.54 0c2.159 0 4.233.356 5.689.974l-.315.766c-1.36-.58-3.319-.91-5.374-.91-4.165 0-7.067 1.3-7.067 2.47 0 1.168 2.902 2.47 7.067 2.47.115 0 .222 0 .334-.005l.033.828c-.122.006-.245.006-.367.006-3.184 0-5.805-.714-7.068-1.798v2.38c.005.45.45.843.821 1.093 1.116.736 3.114 1.239 5.34 1.342l-.037.829c-2.254-.105-4.23-.59-5.5-1.332-.318.245-.623.573-.623.952 0 1.168 2.902 2.47 7.067 2.47.411 0 .812-.014 1.203-.042l.06.826c-.41.03-.833.045-1.263.045-3.184 0-5.805-.713-7.068-1.797v2.368c.005.462.449.855.821 1.104 1.275.842 3.67 1.366 6.247 1.366h.182v.83H9.54c-2.62 0-4.99-.507-6.444-1.359-.317.245-.623.574-.623.954 0 1.168 2.902 2.47 7.067 2.47 4.159 0 7.058-1.298 7.066-2.465v-.007c0-.377-.303-.705-.62-.948a5.732 5.732 0 0 1-.662.336l-.316-.764c.3-.128.56-.266.776-.412.376-.254.823-.651.823-1.1zm4.377-6.915h-2.717a.406.406 0 0 1-.332-.173.42.42 0 0 1-.055-.375l1.204-3.597h-5.403l-2.583 4.974h2.623c.128 0 .248.06.325.164a.418.418 0 0 1 .069.36l-2.249 8.365zm1.249-.128l-10.89 11.608a.408.408 0 0 1-.498.075.418.418 0 0 1-.192-.471l2.534-9.426h-2.766a.407.407 0 0 1-.349-.2.418.418 0 0 1-.012-.407l3.014-5.804a.408.408 0 0 1 .36-.222h6.22c.132 0 .256.065.332.174a.422.422 0 0 1 .055.374l-1.204 3.598h3.1c.164 0 .31.099.375.251a.422.422 0 0 1-.08.45zM3.085 20.723a8.107 8.107 0 0 0 1.72.72l.233-.794a7.32 7.32 0 0 1-1.546-.645zm1.72-5.984l.233-.795a7.262 7.262 0 0 1-1.546-.646l-.407.72a8.051 8.051 0 0 0 1.72.72zm-1.72-7.427l.407-.719c.418.244.939.462 1.546.646l-.232.794a8.046 8.046 0 0 1-1.72-.72Z' /></svg>
            Amazon DynamoDB
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* S3 */}
          <Badge className='bg-s3/15 border border-s3 m-3'>
            <svg width={24} fill='#569A31' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Amazon S3</title><path d='M20.913 13.147l.12-.895c.947.576 1.258.922 1.354 1.071-.16.031-.562.046-1.474-.176zm-2.174 7.988a.547.547 0 0 0-.005.073c0 .084-.207.405-1.124.768a10.28 10.28 0 0 1-1.438.432c-1.405.325-3.128.504-4.853.504-4.612 0-7.412-1.184-7.412-1.704a.547.547 0 0 0-.005-.073L1.81 5.602c.135.078.28.154.432.227.042.02.086.038.128.057.134.062.272.122.417.18l.179.069c.154.058.314.114.478.168.043.013.084.029.13.043.207.065.423.127.646.187l.176.044c.175.044.353.087.534.127a23.414 23.414 0 0 0 .843.17l.121.023c.252.045.508.085.768.122.071.011.144.02.216.03.2.027.4.053.604.077l.24.027c.245.026.49.05.74.07l.081.009c.275.022.552.04.83.056l.233.012c.21.01.422.018.633.025a33.088 33.088 0 0 0 2.795-.026l.232-.011c.278-.016.555-.034.83-.056l.08-.008c.25-.02.497-.045.742-.072l.238-.026c.205-.024.408-.05.609-.077.07-.01.141-.019.211-.03.261-.037.519-.078.772-.122l.111-.02c.215-.04.427-.082.634-.125l.212-.047c.186-.041.368-.085.546-.13l.166-.042c.225-.06.444-.122.654-.189.04-.012.077-.026.115-.038a10.6 10.6 0 0 0 .493-.173c.058-.021.114-.044.17-.066.15-.06.293-.12.43-.185.038-.017.079-.034.116-.052.153-.073.3-.15.436-.228l-.976 7.245c-2.488-.78-5.805-2.292-7.311-3a1.09 1.09 0 0 0-1.088-1.085c-.6 0-1.088.489-1.088 1.088 0 .6.488 1.089 1.088 1.089.196 0 .378-.056.537-.148 1.72.812 5.144 2.367 7.715 3.15zm-7.42-20.047c5.677 0 9.676 1.759 9.75 2.736l-.014.113c-.01.033-.031.067-.048.101-.015.028-.026.057-.047.087-.024.033-.058.068-.09.102-.028.03-.051.06-.084.09-.038.035-.087.07-.133.105-.04.03-.074.06-.119.091-.053.036-.116.071-.177.107-.05.03-.095.06-.15.09-.068.036-.147.073-.222.11-.059.028-.114.057-.177.085-.084.038-.177.074-.268.111-.068.027-.13.054-.203.082-.097.036-.205.072-.31.107-.075.026-.148.053-.228.079-.111.035-.233.069-.35.103-.085.024-.165.05-.253.073-.124.034-.258.065-.389.098-.093.022-.181.046-.278.068-.139.032-.287.061-.433.091-.098.02-.191.041-.293.06-.155.03-.32.057-.482.084-.1.018-.198.036-.302.052-.166.026-.342.048-.515.072-.11.014-.213.03-.325.044-.181.023-.372.041-.56.06-.11.012-.218.025-.332.036-.188.016-.386.029-.58.043-.122.009-.24.02-.364.028-.207.012-.422.02-.635.028-.12.005-.234.012-.354.016a35.605 35.605 0 0 1-2.069 0c-.12-.004-.234-.011-.352-.016-.214-.008-.43-.016-.637-.028-.122-.008-.238-.02-.36-.027-.195-.015-.394-.028-.584-.044-.11-.01-.215-.024-.324-.035-.19-.02-.384-.038-.568-.06l-.315-.044c-.176-.024-.355-.046-.525-.073-.1-.015-.192-.033-.29-.05-.167-.028-.335-.055-.494-.086-.096-.018-.183-.038-.276-.056-.151-.032-.305-.062-.45-.095-.09-.02-.173-.043-.26-.064-.138-.034-.277-.067-.407-.102-.082-.022-.157-.046-.235-.069a11.75 11.75 0 0 1-.368-.108c-.075-.024-.141-.049-.213-.073-.11-.037-.223-.075-.325-.113-.067-.025-.125-.051-.188-.077-.096-.038-.195-.076-.282-.115-.06-.027-.11-.054-.166-.08-.08-.039-.162-.077-.233-.116-.052-.028-.094-.055-.142-.084-.063-.038-.13-.075-.185-.113-.043-.029-.075-.058-.113-.086-.048-.037-.098-.073-.139-.11-.032-.029-.054-.057-.08-.087-.033-.035-.069-.07-.093-.104-.02-.03-.031-.058-.046-.086-.018-.035-.039-.068-.049-.102l-.015-.113c.076-.977 4.074-2.736 9.748-2.736zm12.182 12.124c-.118-.628-.84-1.291-2.31-2.128l.963-7.16a.531.531 0 0 0 .005-.073C22.16 1.581 16.447 0 11.32 0 6.194 0 .482 1.581.482 3.851a.58.58 0 0 0 .005.072L2.819 21.25c.071 2.002 5.236 2.75 8.5 2.75 1.805 0 3.615-.188 5.098-.531.598-.138 1.133-.3 1.592-.48 1.18-.467 1.789-1.053 1.813-1.739l.945-7.018c.557.131 1.016.197 1.389.197.54 0 .902-.137 1.134-.413a.956.956 0 0 0 .21-.804Z' /></svg>
            Amazon S3
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Lambda */}
          <Badge className='bg-lambda/15 border border-lambda m-3'>
            <svg width={24} fill='#FF9900' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>AWS Lambda</title><path d='M4.9855 0c-.2941.0031-.5335.2466-.534.5482L4.446 5.456c0 .1451.06.2835.159.3891a.5322.5322 0 0 0 .3806.1562h3.4282l8.197 17.6805a.5365.5365 0 0 0 .4885.3181h5.811c.2969 0 .5426-.2448.5426-.5482V18.544c0-.3035-.2392-.5482-.5425-.5482h-2.0138L12.7394.3153C12.647.124 12.4564 0 12.2452 0h-7.254Zm.5397 1.0907h6.3678l8.16 17.6804a.5365.5365 0 0 0 .4885.3181h1.8178v3.8173H17.437L9.2402 5.226a.536.536 0 0 0-.4885-.318H5.5223Zm2.0137 8.2366c-.2098.0011-.3937.1193-.4857.3096L.6002 23.2133a.5506.5506 0 0 0 .0313.5282.5334.5334 0 0 0 .4544.25h6.169a.5468.5468 0 0 0 .497-.3096l3.38-7.166a.5405.5405 0 0 0-.0029-.4686L8.036 9.637a.5468.5468 0 0 0-.4942-.3096Zm.0057 1.8036 2.488 5.1522-3.1214 6.6206H1.9465Z' /></svg>
            AWS Lambda
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Cloudwatch */}
          <Badge className='bg-cloudwatch/15 border border-cloudwatch m-3'>
            <svg width={24} fill='#FF4F8B' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Amazon CloudWatch</title><path d='M18.454 14.905c0-1.676-1.372-3.039-3.059-3.039-1.686 0-3.058 1.363-3.058 3.039 0 1.675 1.372 3.038 3.058 3.038 1.687 0 3.059-1.363 3.059-3.038Zm.862 0c0 2.147-1.759 3.894-3.92 3.894-2.162 0-3.92-1.747-3.92-3.894 0-2.148 1.758-3.895 3.92-3.895 2.161 0 3.92 1.747 3.92 3.895Zm3.617 5.87-3.004-2.688c-.242.34-.523.649-.834.926l2.999 2.687c.256.23.654.208.885-.046a.623.623 0 0 0-.046-.88Zm-7.538-1.206c2.59 0 4.696-2.092 4.696-4.664 0-2.573-2.106-4.665-4.696-4.665-2.589 0-4.696 2.092-4.696 4.665 0 2.572 2.107 4.664 4.696 4.664Zm8.224 2.658c-.293.323-.7.487-1.107.487a1.49 1.49 0 0 1-.995-.378L18.399 19.542a5.543 5.543 0 0 1-3.004.883c-3.064 0-5.557-2.476-5.557-5.52 0-3.044 2.493-5.521 5.557-5.521 3.065 0 5.558 2.477 5.558 5.52 0 .874-.21 1.697-.576 2.432l3.133 2.803c.608.546.657 1.482.11 2.088ZM3.977 7.454c0 .222.014.444.04.659a.426.426 0 0 1-.352.473C2.605 8.858.862 9.681.862 12.148c0 1.863 1.034 2.892 1.902 3.427.297.185.647.284 1.017.288l5.195.005v.856l-5.2-.005a2.815 2.815 0 0 1-1.469-.418C1.447 15.77 0 14.524 0 12.148c0-2.864 1.971-3.923 3.129-4.297a6.093 6.093 0 0 1-.013-.397c0-2.34 1.598-4.767 3.716-5.645 2.478-1.031 5.104-.52 7.022 1.367a7.048 7.048 0 0 1 1.459 2.116 2.79 2.79 0 0 1 1.78-.644c1.287 0 2.735.97 2.993 3.092 1.205.276 3.751 1.24 3.751 4.441 0 1.278-.403 2.333-1.199 3.137l-.614-.6c.632-.638.952-1.491.952-2.537 0-2.8-2.36-3.495-3.374-3.664a.43.43 0 0 1-.353-.496c-.141-1.738-1.18-2.517-2.156-2.517-.616 0-1.193.298-1.584.818a.431.431 0 0 1-.75-.111c-.353-.971-.861-1.788-1.511-2.426-1.663-1.636-3.936-2.079-6.084-1.186-1.787.74-3.187 2.873-3.187 4.855Z' /></svg>
            Amazon CloudWatch
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Cognito */}
          <Badge className='bg-cognito/15 border border-cognito m-3'>
            <svg width={24} fill='#DD344C' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Amazon Cognito</title><path d='M2.127 10.203h5.531v-.85h-5.53zm19.034 6.181.602.601-3.16 3.155a.426.426 0 0 1-.601 0l-1.59-1.587.602-.6 1.289 1.286zm1.958 2.341a4.05 4.05 0 0 1-2.288 3.181c-.688.326-1.45.45-2.211.357a4 4 0 0 1-2.017-.842 4.04 4.04 0 0 1-1.507-3.675 4.06 4.06 0 0 1 2.167-3.12 4 4 0 0 1 2.332-.417 4.04 4.04 0 0 1 3.111 2.18c.369.722.511 1.53.413 2.336m.346-2.721a4.888 4.888 0 0 0-9.214 1.64 4.89 4.89 0 0 0 1.823 4.442 4.88 4.88 0 0 0 5.122.587 4.95 4.95 0 0 0 1.629-1.247 4.9 4.9 0 0 0 1.139-2.599 4.9 4.9 0 0 0-.5-2.823M6.382 12.752h1.701v-.85H6.382zm-4.255 0h3.404v-.85H2.127zM1.76 1.706h19.03c.5 0 .908.496.908 1.105v3.143h-1.276V3.83a.425.425 0 0 0-.426-.425H10.21a.425.425 0 0 0-.425.425v2.124H.85V2.811c0-.6.417-1.105.91-1.105zM15.11 5.83c.988 0 1.792.794 1.792 1.77a1.76 1.76 0 0 1-.927 1.547 1.82 1.82 0 0 1-1.733 0 1.76 1.76 0 0 1-.923-1.546c0-.977.803-1.771 1.792-1.771zM.85 15.046V6.804h8.935v7.222c0 .235.19.425.425.425h4.448v-.85h-3.553A3.865 3.865 0 0 1 13.9 9.963c.752.352 1.65.355 2.414 0a3.9 3.9 0 0 1 2.24 1.716l.728-.44a4.76 4.76 0 0 0-2.206-1.9 2.6 2.6 0 0 0 .676-1.737c0-1.445-1.186-2.62-2.643-2.62s-2.642 1.175-2.642 2.62c0 .65.247 1.261.67 1.733a4.7 4.7 0 0 0-2.501 2.481V4.255h8.934v6.797h.851V6.804h1.276v6.372h.852V2.811c0-1.077-.79-1.954-1.76-1.954H1.759C.79.857 0 1.734 0 2.81v12.235c0 1.078.79 1.955 1.76 1.955h11.43v-.85H1.759c-.492 0-.908-.506-.908-1.105z' /></svg>
            Amazon Cognito
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2021</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <h3 className='text-xl text-center'>Code Management and Collaboration</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* Git */}
          <Badge className='bg-git/15 border border-git m-3'>
            <svg width={24} fill='#F05032' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Git</title><path d='M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187' /></svg>
            Git
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Github */}
          <Badge className='bg-github/15 border border-black m-3'>
            <svg width={24} fill='#ffffff' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>GitHub</title><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' /></svg>
            GitHub
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p><span className='font-bold'>Used Since:</span> 2019</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Bitbucket */}
          <Badge className='bg-bitbucket/15 border border-bitbucket m-3'>
            <svg width={24} fill='#0052CC' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Bitbucket</title><path d='M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z' /></svg>
            Bitbucket
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <h3 className='text-xl text-center'>Tools</h3>
    <div className='flex flex-wrap justify-center items-center mt-3 mb-8'>
      <HoverCard>
        <HoverCardTrigger>
          {/* JIRA */}
          <Badge className='bg-jira/15 border border-jira m-3'>
            <svg width={24} fill='#0052CC' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Jira</title><path d='M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z' /></svg>
            JIRA
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger>
          {/* Confluence */}
          <Badge className='bg-confluence/15 border border-confluence m-3'>
            <svg width={24} fill='#172B4D' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Confluence</title><path d='M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z' /></svg>
            Confluence
          </Badge>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className='border-2 border-gray-100 p-3 bg-gray-500 rounded-sm'>
            <p className='mb-3'><span className='font-bold'>Used Since:</span> 2019</p>

            <p className='font-bold'>Experience:</p>
            <ul className='list-inside ml-3'>
              <li>Accenture Federal Services</li>
              <ol className='list-decimal list-inside ml-3'>
                <li>Lead Developer</li>
                <li>Full-Stack Engineer</li>
                <li>Application Developer</li>
              </ol>
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  </section>
)

export default Skills