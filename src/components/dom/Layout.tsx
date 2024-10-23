'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()

  return (
    <div
      ref={ref}
      className='relative mx-auto mt-36 h-full w-3/4 touch-auto overflow-auto'
    >
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export { Layout }
