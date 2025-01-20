'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import { Container, UploadInput, Logotype } from '@/components'

interface Props {
  className?: string
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn('w-full my-32 flex flex-1 flex-col justify-center', className)}>
      <Logotype className="p-1.5 self-center" />

      <div className="mt-4 mb-10 p-4 text-center">
        <h1 className="text-5xl font-semibold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Unlimited open-source service for optimizing and size-shifting your images.
        </h1>
      </div>

      <div className="p-12 flex items-center justify-center">
        <UploadInput />
      </div>
    </Container>
  )
}
