'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Brain, 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Users,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, any> = {
  Brain,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Users,
}

const services = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    icon: 'Brain',
    description: 'Custom machine learning models, natural language processing, and computer vision solutions tailored to your business needs.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    description: 'High-performance web applications built with modern frameworks, optimized for speed, scalability, and user experience.',
    features: [
      'React & Next.js',
      'Node.js Backend',
      'Progressive Web Apps',
      'E-commerce Solutions'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    icon: 'Smartphone',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.',
    features: [
      'React Native',
      'iOS & Android',
      'Real-time Features',
      'App Store Optimization'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'Palette',
    description: 'Intent-driven design that prioritizes user needs, creating intuitive interfaces with stunning visual identities.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems'
    ]
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud & Deployment',
    icon: 'Cloud',
    description: 'Scalable cloud infrastructure with high availability, zero-downtime deployments, and 24/7 monitoring.',
    features: [
      'AWS & Azure',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'DevOps Consulting'
    ]
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    icon: 'Users',
    description: 'Strategic technology consulting to help you make informed decisions and build scalable, future-proof systems.',
    features: [
      'Technology Audits',
      'Architecture Design',
      'Team Training',
      'Digital Transformation'
    ]
  }
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="services" className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end solutions that transform ideas into intelligent, scalable products
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all relative overflow-hidden">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-primary transition-all">
                      <Icon size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
