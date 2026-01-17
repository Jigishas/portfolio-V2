import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion'

// Layered, blurred flowing gradients that translate downwards infinitely
const layerVariants = (distance = 100, delay = 0) => ({
  animate: {
    y: [ -distance, distance ],
    opacity: [0.15, 0.35, 0.15],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 18 + Math.random() * 12,
        ease: 'linear',
        delay,
      },
      opacity: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 8 + Math.random() * 6,
        ease: 'easeInOut',
        delay,
      }
    }
  }
})

const Layer = ({ className, distance, delay, style }) => (
  <motion.div
    className={className}
    variants={layerVariants(distance, delay)}
    animate="animate"
    style={style}
  />
)

const BackgroundRiver = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {/* Far layer - subtle slow flow */}
      <Layer
        distance={120}
        delay={0}
        className="absolute left-[-10%] w-[120%] h-[160%] rounded-full blur-3xl"
        style={{
          background: 'linear-gradient(180deg, rgba(70,22,120,0.16), rgba(0,0,0,0))',
          transform: 'rotate(-6deg)'
        }}
      />

      {/* Middle neon ribbons */}
      <Layer
        distance={220}
        delay={1}
        className="absolute left-[5%] w-[90%] h-[180%] rounded-full blur-2xl"
        style={{
          background: 'linear-gradient(180deg, rgba(120,60,255,0.18), rgba(88,20,140,0.06))',
          mixBlendMode: 'screen',
          transform: 'rotate(-3deg)'
        }}
      />

      <Layer
        distance={300}
        delay={2}
        className="absolute left-[20%] w-[60%] h-[200%] rounded-full blur-2xl"
        style={{
          background: 'linear-gradient(180deg, rgba(0,200,255,0.12), rgba(10,10,40,0.02))',
          mixBlendMode: 'screen',
          transform: 'rotate(2deg)'
        }}
      />

      {/* Foreground accent ribbon */}
      <Layer
        distance={420}
        delay={0.5}
        className="absolute left-0 w-[100%] h-[220%] rounded-full blur-xl"
        style={{
          background: 'linear-gradient(180deg, rgba(200,80,255,0.12), rgba(120,50,255,0.02))',
          mixBlendMode: 'overlay',
          transform: 'rotate(1deg)'
        }}
      />
    </div>
  )
}

export default BackgroundRiver
