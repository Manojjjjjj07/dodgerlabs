'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],
  Services: [
    { label: 'AI Solutions', href: '/services/ai' },
    { label: 'Web Development', href: '/services/web' },
    { label: 'Mobile Apps', href: '/services/mobile' },
    { label: 'Consulting', href: '/services/consulting' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Case Studies', href: '/works' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/dodgerlabs', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/dodgerlabs', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/dodgerlabs', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@dodgerlabs.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-xl font-bold">
                  Dodger<span className="text-gradient">Labs</span>
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Engineering intelligence at scale. We design, develop, and deploy cutting-edge AI solutions that transform businesses.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DodgerLabs. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
