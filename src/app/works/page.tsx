'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const categories = ['All', 'AI', 'Web', 'Mobile', 'E-commerce', 'Healthcare']

const allProjects = [
  {
    id: 'neural-insights',
    title: 'Neural Insights',
    category: 'AI',
    description: 'AI-powered analytics platform with real-time insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['AI', 'Machine Learning', 'Analytics'],
  },
  {
    id: 'streamline-commerce',
    title: 'StreamLine Commerce',
    category: 'E-commerce',
    description: 'Next-gen e-commerce with AI recommendations',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Web', 'E-commerce', 'AI'],
  },
  {
    id: 'healthpulse',
    title: 'HealthPulse',
    category: 'Healthcare',
    description: 'Telemedicine platform with video consultations',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['Mobile', 'Healthcare', 'AI'],
  },
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    category: 'Web',
    description: 'Real-time financial analytics dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Web', 'FinTech', 'Analytics'],
  },
  {
    id: 'social-connect',
    title: 'Social Connect',
    category: 'Mobile',
    description: 'Social networking app with AI matching',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['Mobile', 'Social', 'AI'],
  },
  {
    id: 'smart-logistics',
    title: 'Smart Logistics',
    category: 'AI',
    description: 'AI-powered supply chain optimization',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['AI', 'Logistics', 'Optimization'],
  },
]

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.tags.includes(selectedCategory))

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white glow-primary'
                  : 'bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/works/${project.id}`} className="group block">
                <div className="relative h-80 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-muted text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Case Study
                      <ExternalLink size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
