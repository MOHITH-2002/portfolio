import { Spinner } from '@/components/spinner/Spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Spinner size="lg" />
    </div>
  )
}

export default Loading
