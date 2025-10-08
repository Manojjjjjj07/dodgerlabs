'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const featuredProjects = [
  {
    id: 'neural-insights',
    title: 'Neural Insights',
    category: 'AI Platform',
    description: 'An AI-powered analytics platform that provides real-time insights from unstructured data using advanced NLP and machine learning.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['AI', 'Machine Learning', 'Analytics'],
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 'streamline-commerce',
    title: 'StreamLine Commerce',
    category: 'E-commerce',
    description: 'A next-generation e-commerce platform with AI-powered recommendations and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Web', 'E-commerce', 'AI'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'healthpulse',
    title: 'HealthPulse',
    category: 'Healthcare',
    description: 'A comprehensive telemedicine platform connecting patients with healthcare providers through video consultations and AI triage.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['Mobile', 'Healthcare', 'AI'],
    color: 'from-green-500 to-teal-500',
  },
]

export default function FeaturedWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="works" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Showcasing our latest projects and success stories
            </p>
          </div>
          <Link 
            href="/works"
            className="hidden md:flex items-center text-primary font-medium hover:gap-2 transition-all group"
          >
            View All Projects
            <ArrowUpRight size={20} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Large Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:row-span-2"
          >
            <Link href={`/works/${featuredProjects[0].id}`} className="group block h-full">
              <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-primary text-sm font-medium mb-2">
                    {featuredProjects[0].category}
                  </span>
                  <h3 className="text-3xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredProjects[0].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProjects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    View Case Study
                    <ExternalLink size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Projects */}
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link href={`/works/${project.id}`} className="group block h-full">
                <div className="relative h-full min-h-[290px] rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all">
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
                    <span className="text-primary text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Link */}
        <Link 
          href="/works"
          className="md:hidden flex items-center justify-center text-primary font-medium hover:gap-2 transition-all group"
        >
          View All Projects
          <ArrowUpRight size={20} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
