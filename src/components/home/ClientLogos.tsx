'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  { name: 'TechCorp', logo: 'T' },
  { name: 'InnovateLabs', logo: 'I' },
  { name: 'DataFlow', logo: 'D' },
  { name: 'CloudNine', logo: 'C' },
  { name: 'NeuralWorks', logo: 'N' },
  { name: 'QuantumTech', logo: 'Q' },
]

export default function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-xl bg-muted hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 flex items-center justify-center transition-all group cursor-pointer">
                <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {client.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something <span className="text-gradient">Amazing?</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help transform your ideas into reality
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-full font-medium glow-primary hover:glow-primary-strong transition-all"
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
