'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Lightbulb, 
  Search, 
  Target, 
  Palette, 
  Code, 
  Rocket, 
  BarChart 
} from 'lucide-react'

const workflowSteps = [
  {
    icon: Lightbulb,
    title: 'Ideation',
    description: 'Transforming concepts into actionable plans',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Search,
    title: 'Research',
    description: 'Deep-diving into market insights and user needs',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'Crafting roadmaps for success',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Creating stunning, intuitive interfaces',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building robust, scalable solutions',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'Launching with zero downtime',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Measuring impact and optimizing performance',
    color: 'from-indigo-500 to-purple-500',
  },
]

export default function Workflow() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Workflow</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-all">
                {/* Step Number */}
                <div className="text-6xl font-bold text-muted/20 absolute top-4 right-4">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:glow-primary transition-all`}>
                  <step.icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
