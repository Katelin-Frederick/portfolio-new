
import { Accordion, } from '@radix-ui/react-accordion'
import { Terminal, Code, } from 'lucide-react'
import React from 'react'

import { AccordionContent, AccordionTrigger, AccordionItem, } from '~/components/ui/accordion'


const Experience = () => (
  <section id='experience' className='mb-24 px-7'>
    <h2 className='text-3xl md:text-5xl text-center m-12'>Experience</h2>

    <h3 className='text-2xl md:text-3xl'>Accenture Federal Services</h3>

    <Accordion type='multiple' className='w-full' defaultValue={['afs-lead-developer']}>
      <AccordionItem value='afs-lead-developer'>
        <AccordionTrigger>
          <div className='flex items-center'>
            <Terminal className='inline mr-3' />
            <div>
              <h4 className='text-xl'>Lead Developer</h4>
              <span className='text-sm'>04/2023 - Present</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside ml-3 mt-5'>
            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Led an agile team of four developers, fostering a collaborative and productive work environment.
                  Supported team members by providing technical guidance and ensuring alignment with project
                  goals.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Oversaw the development and enhancement of a comprehensive suite of applications allowing
                  users to upload documents digitally with ease and efficiency. The suite had over 1 million
                  submissions in 2024 and saved over 4 million pages of paper.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Developed and enhanced accompanying suite of admin applications allowing over 20,000 users to
                  manage submissions, streamlining internal workflows and reducing processing times.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Directed the strategic migration of the codebase from JavaScript to TypeScript, significantly
                  enhancing error handling and code maintainability, leading to a more robust and scalable
                  application architecture.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Designed, implemented, and consumed RESTful APIs for seamless data exchange between
                  administrative and public applications, ensuring data consistency and integrity across different
                  platforms.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Provided guidance and mentorship to junior and mid-level developers, fostering a collaborative and
                  growth-oriented environment. Conducted code reviews, shared best practices, provided
                  performance feedback, and supported career development.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Delegated tickets and tasks to team members, ensuring work was distributed according to individual
                  strengths and project requirements.
                </p>
              </div>
            </li>

            <li>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Conducted comprehensive and interactive application demonstrations for clients, highlighting key
                  features, functionalities, and benefits of developed solutions.
                </p>
              </div>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='afs-full-stack-engineer'>
        <AccordionTrigger>
          <div className='flex items-center'>
            <Terminal className='inline mr-3' />
            <div>
              <h4 className='text-xl'>Full-Stack Engineer</h4>
              <span className='text-sm'>03/2021 - 03/2023</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside ml-3 mt-5'>
            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Designed, built, and implemented applications based on business requirements and design
                  wireframes.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Worked closely with design teams to meet and surpass user experience standards. Ensured visual
                  design and user interface were intuitive, accessible, and aligned with user needs.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Implemented serverless architecture using Serverless Framework and AWS resources, including
                  Lambda, API Gateway, S3, and DynamoDB. This approach increased application scalability,
                  reduced operational overhead, and optimized cost-efficiency.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Collaborated with testing teams to troubleshoot and resolve defects in a timely manner. Conducted
                  root cause analysis and implemented effective solutions ensuring stability and reliability of
                  applications.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Created and maintained comprehensive documentation, including technical specifications, API
                  documentation, user guides, and troubleshooting manuals.
                </p>
              </div>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='afs-full-application-developer'>
        <AccordionTrigger>
          <div className='flex items-center'>
            <Terminal className='inline mr-3' />
            <div>
              <h4 className='text-xl'>Application Developer</h4>
              <span className='text-sm'>07/2019 - 02/2021</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className='list-inside ml-3 mt-5'>
            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Worked as a developer re-writing several Java Spring Boot applications with React and Next.js,
                  delivering a modern user interface with improved user experience, application performance, and
                  maintainability.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Collaborated closely with design teams ensuring applications adhered to UI/UX standards, for
                  consistent and seamless user experience. Participated in design discussions to align technical
                  implementation with design goals.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Implemented multilingual functionality into applications, enabling users to view and interact with
                  applications in seven different languages. This enhancement expanded the user base and improved
                  accessibility for non-English speaking users.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Created application interfaces from wireframes provided by design teams, ensuring accurate
                  translation of design concepts into functional and visually appealing user interfaces.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Worked with the 508 testing team to ensure applications met accessibility standards.
                </p>
              </div>
            </li>

            <li className='mb-5'>
              <div className='flex'>
                <div className='mr-5'>
                  <Code size={18} className='text-gold-500 self-start' />
                </div>
                <p className=''>
                  Actively participated in agile ceremonies, activities, and planning, including daily stand-ups, sprint
                  reviews, retrospectives, and sprint planning sessions. Contributed to team discussions and
                  collaborative problem-solving to achieve project goals.
                </p>
              </div>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <h3 className='text-2xl md:text-3xl my-5'>Education</h3>
    <p>Associate&apos;s Degree in fine arts, Jackson College</p>
  </section>
)

export default Experience