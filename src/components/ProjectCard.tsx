'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { cn, } from '~/lib/utils'

import { CardDescription, CardContent, CardHeader, CardAction, CardTitle, Card, } from './ui/card'
import { Button, } from './ui/button'

type ProjectCardProps = {
  image: {
    src: string,
    alt: string,
  },
  title: string,
  description: string,
  btnLinks: {
    demo: string,
    code: string,
  },
  skills: string[],
}

const ProjectCard = ({
  image,
  title,
  description,
  btnLinks,
  skills,
}: ProjectCardProps) => (
  <>
    <div className={cn('relative w-[240px] h-[240px] sm:w-[384px] sm:h-[384px]')}>
      <Image
        src={image.src}
        fill
        alt={image.alt}
        className='rounded-t-sm border-b-gold-500 border-b-4'
      />
    </div>

    <Card className='w-60 sm:w-96 p-1.5 rounded-t-none border-t-0'>
      <CardHeader className='p-0'>
        <CardTitle className='text-center text-2xl py-3'>{title}</CardTitle>

        <CardDescription className='text-center'>
          {description}
        </CardDescription>
      </CardHeader>

      <CardAction className='flex justify-around items-center w-full px-1'>
        <Button size='sm' className='mr-3.5'>
          <Link tabIndex={-1} href={btnLinks.demo}>View Demo</Link>
        </Button>
        <Button size='sm'>
          <Link tabIndex={-1} href={btnLinks.code}>View Code</Link>
        </Button>
      </CardAction>

      <CardContent className='p-0'>
        <p>Skills Used:</p>

        <ul className='mt-1.5 list-none'>
          {skills.map((skill, index) => (
            <li
              key={index}
              className='border border-gray-500 bg-gray-100 p-3'
            >
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </>
)

export default ProjectCard