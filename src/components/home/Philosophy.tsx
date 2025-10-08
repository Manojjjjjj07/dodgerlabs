'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const philosophyText = [
  'C:\\> init system...',
  'Loading core values...',
  '> Care for end-users',
  '> Respect for developers',
  '> Sustainable software',
  '> Open-source ethos',
  'Building intelligence that serves humanity.',
  'System ready.',
]

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayedLines, setDisplayedLines] = useState<string[]>([])

  useEffect(() => {
    if (isInView) {
      philosophyText.forEach((line, index) => {
        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line])
        }, index * 300)
      })
    }
  }, [isInView])

  return (
    <section ref={ref} id="philosophy" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 font-mono"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-muted-foreground text-sm ml-4">~/philosophy</span>
            </div>

            <div className="space-y-2 text-sm md:text-base">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    line.startsWith('C:') || line.startsWith('Loading')
                      ? 'text-primary'
                      : line.startsWith('>')
                      ? 'text-muted-foreground pl-4'
                      : 'text-foreground font-bold'
                  }`}
                >
                  {line}
                  {index === displayedLines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              For us, building software is an act of care. Care for the end-users, whose time, 
              privacy, and intelligence we deeply respect. Care for the developers who will 
              maintain and evolve the system long after it's built. We believe in creating 
              sustainable, human-centric solutions that stand the test of time—software that 
              doesn't just work today, but grows and evolves with the people who rely on it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
