'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
}

const fadeInUpSlow = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

function FloatingCandle({ delay = 0, left = '10%', top = '20%' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.6, y: 0 }}
      transition={{ delay, duration: 2 }}
      className="absolute pointer-events-none"
      style={{ left, top }}
    >
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="w-2 h-8 bg-gradient-to-t from-[#C8A97E]/40 to-transparent rounded-full blur-sm"
      />
    </motion.div>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80)',
            filter: 'brightness(0.4) contrast(1.1) saturate(0.8)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/70 via-[#1a1714]/30 to-[#1a1714]/90" />
        <div className="absolute inset-0 bg-[#C8A97E]/5 mix-blend-overlay" />
      </div>
      
      <FloatingCandle delay={0.5} left="15%" top="25%" />
      <FloatingCandle delay={1} left="80%" top="30%" />
      <FloatingCandle delay={1.5} left="50%" top="15%" />
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C8A97E]/50" />
            <span className="text-[#C8A97E] tracking-[0.4em] text-xs font-sans uppercase">
              Islamabad, Pakistan
            </span>
            <div className="h-px w-12 bg-[#C8A97E]/50" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F8F4EE] mb-8 leading-[1.05]"
        >
          Thoughtfully curated.{' '}
          <span className="italic text-[#C8A97E] block mt-2">Emotionally unforgettable.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[#F8F4EE]/70 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-14 font-light leading-relaxed"
        >
          Luxury event styling, personalized gifting, and intimate celebrations crafted with heart.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-[#C8A97E] text-[#1a1714] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#F8F4EE] transition-all duration-500 shadow-lg shadow-[#C8A97E]/20"
          >
            Book Your Experience
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 border border-[#F8F4EE]/20 text-[#F8F4EE] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#F8F4EE]/10 hover:border-[#F8F4EE]/40 transition-all duration-500"
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-7 h-12 border border-[#F8F4EE]/30 rounded-full flex justify-center pt-3"
        >
          <motion.div 
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-[#C8A97E] rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [600, 1400], [60, -60])

  return (
    <section className="relative py-40 px-6 bg-[#EFE7DA] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="ambient-glow -left-20 -top-20" />
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <motion.img
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80"
                  alt="Curated by Ghina"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.95) contrast(1.05) saturate(0.9)' }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-[#C8A97E]/20 rounded-sm" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#C8A97E]/5 rounded-full blur-xl" />
              
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                whileInView={{ opacity: 1, rotate: -2 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute -bottom-6 -left-6 bg-[#F8F4EE] p-6 rounded-sm shadow-xl max-w-[200px]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <p className="font-serif italic text-[#5A3E2B]/70 text-sm leading-relaxed">
                  "Every detail tells a story..."
                </p>
                <div className="mt-3 h-px w-12 bg-[#C8A97E]/40" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <motion.span 
              style={{ y }}
              className="block text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-8 font-sans"
            >
              Our Story
            </motion.span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A3E2B] mb-10 leading-[1.15]">
              Every celebration{' '}
              <span className="italic text-[#C8A97E]">tells a story.</span>
            </h2>
            
            <p className="text-[#5A3E2B]/60 font-sans text-lg leading-relaxed mb-6 font-light">
              At Curated by Ghina, every detail is intentionally chosen to create moments that feel deeply personal, warm, and unforgettable.
            </p>
            
            <p className="text-[#5A3E2B]/60 font-sans text-lg leading-relaxed mb-10 font-light">
              We believe in the magic of <span className="text-[#C8A97E] font-medium">thoughtful curation</span> — where every candle, every note, every carefully selected gift becomes part of a larger narrative: yours.
            </p>
            
            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-20 bg-gradient-to-r from-[#C8A97E] to-transparent" />
              <span className="font-serif italic text-[#5A3E2B]/50 text-lg">Emotionally invested in every detail</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="font-serif text-3xl text-[#5A3E2B]/30 italic" style={{ fontFamily: 'Cormorant Garamond, cursive' }}>
                — Ghina
              </div>
              <div className="mt-2 h-px w-24 bg-[#C8A97E]/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { icon: '✦', title: 'Event Styling', desc: 'Transforming spaces into immersive experiences that captivate the senses' },
  { icon: '◈', title: 'Birthday Setups', desc: 'Intimate celebrations with personal touches that make hearts smile' },
  { icon: '◇', title: 'Luxury Hampers', desc: 'Bespoke gift baskets crafted with intention and love' },
  { icon: '✧', title: 'Personalized Gifts', desc: 'Meaningful presents that touch the heart and create lasting memories' },
  { icon: '❂', title: 'Romantic Dinners', desc: 'Enchanting settings for memorable evenings under candlelight' },
  { icon: '⬡', title: 'Celebration Planning', desc: 'Seamless execution of your vision from concept to reality' },
  { icon: '❖', title: 'Custom Decor', desc: 'Bespoke elements tailored to reflect your unique story' },
  { icon: '◉', title: 'Memory Curation', desc: 'Preserving beautiful moments in ways that feel timeless' }
]

function Services() {
  return (
    <section className="relative py-40 px-6 bg-[#F8F4EE]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A3E2B]">
            Crafted with <span className="italic text-[#C8A97E]">intention</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5 }}
                className="relative p-8 glass border border-[#C8A97E]/15 hover:border-[#C8A97E]/40 transition-all duration-700 overflow-hidden rounded-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#C8A97E]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 shadow-[0_0_40px_rgba(200,169,126,0)] group-hover:shadow-[0_0_40px_rgba(200,169,126,0.15)] transition-shadow duration-700 rounded-sm" />
                
                <div className="relative z-10">
                  <motion.span 
                    className="text-[#C8A97E] text-3xl mb-6 block"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {service.icon}
                  </motion.span>
                  <h3 className="font-serif text-xl text-[#5A3E2B] mb-3">{service.title}</h3>
                  <p className="text-[#5A3E2B]/50 font-sans text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C8A97E]/50 via-[#C8A97E] to-[#C8A97E]/50 origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1523438885200-e3ba54a0103e?w=600&q=80', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&q=80', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', height: 'medium' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', height: 'tall' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', height: 'short' },
  { src: 'https://images.unsplash.com/photo-1507504030503-55788d8dc6e4?w=600&q=80', height: 'medium' }
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="relative py-40 px-6 bg-[#1a1714]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F8F4EE]">
            Warm memories <span className="italic text-[#C8A97E]">captured</span>
          </h2>
          <p className="text-[#F8F4EE]/40 mt-6 font-sans font-light text-lg italic">
            on film
          </p>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/30 mx-auto" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="group relative overflow-hidden break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full"
                  style={{ 
                    filter: 'brightness(0.9) contrast(1.05) saturate(0.85)',
                    transition: 'filter 0.5s ease'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/70 via-[#1a1714]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#C8A97E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="h-px w-12 bg-[#C8A97E]/60 mb-3" />
                  <p className="text-[#F8F4EE]/80 font-serif text-lg italic">View</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 border border-[#C8A97E]/30 text-[#C8A97E] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-[#1a1714] transition-all duration-500"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a1714]/95 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-[80vh] object-contain"
                style={{ filter: 'brightness(0.95) contrast(1.05) saturate(0.9)' }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-[#F8F4EE]/60 hover:text-[#F8F4EE] transition-colors text-sm tracking-wider uppercase"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const experience = [
  { num: '01', title: 'Share Your Vision', desc: 'Tell us about your dream celebration. We listen with heart.' },
  { num: '02', title: 'We Curate Every Detail', desc: 'Hand-selecting elements that speak to your story.' },
  { num: '03', title: 'We Design The Experience', desc: 'Crafting a cohesive, immersive atmosphere just for you.' },
  { num: '04', title: 'You Celebrate Beautifully', desc: 'Step into a moment made for memory. Just breathe.' }
]

function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })
  
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])

  return (
    <section ref={containerRef} className="relative py-40 bg-[#EFE7DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            The Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A3E2B]">
            Your experience <span className="italic text-[#C8A97E]">with us</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>
      </div>

      <motion.div 
        style={{ x }}
        className="flex gap-8 px-6"
      >
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="relative group flex-shrink-0 w-[320px] md:w-[380px]"
          >
            <div className="relative z-10 p-10 border border-[#C8A97E]/15 bg-[#F8F4EE]/60 backdrop-blur-sm rounded-sm">
              <span className="block font-serif text-7xl text-[#C8A97E]/15 mb-6 leading-none">
                {item.num}
              </span>
              <h3 className="font-serif text-2xl text-[#5A3E2B] mb-4">
                {item.title}
              </h3>
              <p className="text-[#5A3E2B]/50 font-sans text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="absolute -inset-3 border border-[#C8A97E]/8 group-hover:border-[#C8A97E]/25 transition-colors duration-700 rounded-sm"
            />
            
            {index < experience.length - 1 && (
              <div className="absolute top-1/2 -right-6 w-12 h-px bg-[#C8A97E]/20 hidden lg:block" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

const testimonials = [
  { text: "It felt like stepping into a dream. Every detail was pure magic.", author: "Sarah K.", role: "Birthday Celebration" },
  { text: "Every detail was thought of before I could even think of it. Truly extraordinary.", author: "Aisha M.", role: "Romantic Dinner" },
  { text: "The most beautiful setup I've ever seen. Our guests were in awe.", author: "Fatima R.", role: "Anniversary" },
  { text: "Ghina understands the art of making moments meaningful. A true artist.", author: "Nadia S.", role: "Custom Hampers" },
  { text: "Our celebration was more than we ever imagined. Pure perfection.", author: "Hira L.", role: "Intimate Gathering" },
  { text: "The attention to detail is unmatched. It felt so personal and warm.", author: "Zara T.", role: "Birthday Setup" }
]

function Testimonials() {
  return (
    <section className="relative py-40 px-6 bg-[#F8F4EE] overflow-hidden">
      <div className="absolute inset-0">
        <div className="ambient-glow left-1/4 top-1/4" />
        <div className="ambient-glow right-1/4 bottom-1/4" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A3E2B]">
            Stories from the <span className="italic text-[#C8A97E]">heart</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#C8A97E]/5 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-8 glass border border-[#C8A97E]/15 rounded-sm shadow-[0_10px_40px_rgba(90,62,43,0.06)]">
                <div className="text-[#C8A97E]/30 text-5xl font-serif mb-4">"</div>
                <p className="font-serif text-xl text-[#5A3E2B] italic mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-[#C8A97E]/40" />
                  <div>
                    <span className="text-[#C8A97E] font-sans text-xs tracking-wider uppercase block">
                      {testimonial.author}
                    </span>
                    <span className="text-[#5A3E2B]/40 font-sans text-xs">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const instagramImages = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&q=80',
  'https://images.unsplash.com/photo-1523438885200-e3ba54a0103e?w=400&q=80',
  'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=400&q=80'
]

function Instagram() {
  return (
    <section className="relative py-40 px-6 bg-[#1a1714]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            @curatedbyghina
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F8F4EE]">
            Moments We&apos;ve <span className="italic text-[#C8A97E]">Curated</span>
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative overflow-hidden cursor-pointer aspect-square"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full"
              >
                <img
                  src={src}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                  style={{ 
                    filter: 'brightness(0.85) contrast(1.1) saturate(0.8)',
                    transition: 'filter 0.5s ease'
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/80 via-[#1a1714]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 bg-[#C8A97E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="text-[#F8F4EE] text-2xl">♥</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a 
            href="https://instagram.com/curatedbyghina" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-5 border border-[#C8A97E]/30 text-[#C8A97E] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-[#1a1714] transition-all duration-500"
          >
            Follow Us On Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="relative py-40 px-6 bg-[#EFE7DA]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-xs uppercase mb-6 block font-sans">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#5A3E2B]">
            Let&apos;s create something{' '}
            <span className="italic text-[#C8A97E]">beautiful</span> together
          </h2>
          <div className="mt-6 h-px w-16 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={`w-full px-6 py-5 bg-[#F8F4EE] border text-[#5A3E2B] placeholder-[#5A3E2B]/30 font-sans focus:outline-none transition-all duration-500 rounded-sm ${focused === 'name' ? 'border-[#C8A97E] shadow-[0_0_30px_rgba(200,169,126,0.15)]' : 'border-[#C8A97E]/20'}`}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === 'name' ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A97E] origin-left"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={`w-full px-6 py-5 bg-[#F8F4EE] border text-[#5A3E2B] placeholder-[#5A3E2B]/30 font-sans focus:outline-none transition-all duration-500 rounded-sm ${focused === 'email' ? 'border-[#C8A97E] shadow-[0_0_30px_rgba(200,169,126,0.15)]' : 'border-[#C8A97E]/20'}`}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: focused === 'email' ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A97E] origin-left"
              />
            </div>
          </div>
          
          <div className="relative">
            <textarea
              placeholder="Tell us about your vision..."
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              className={`w-full px-6 py-5 bg-[#F8F4EE] border text-[#5A3E2B] placeholder-[#5A3E2B]/30 font-sans focus:outline-none transition-all duration-500 resize-none rounded-sm ${focused === 'message' ? 'border-[#C8A97E] shadow-[0_0_30px_rgba(200,169,126,0.15)]' : 'border-[#C8A97E]/20'}`}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: focused === 'message' ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A97E] origin-left"
            />
          </div>
          
          <div className="text-center pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-12 py-5 bg-[#C8A97E] text-[#1a1714] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#5A3E2B] hover:text-[#F8F4EE] transition-all duration-500 shadow-lg shadow-[#C8A97E]/20 rounded-sm"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-10 mt-20"
        >
          <a 
            href="https://instagram.com/curatedbyghina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[#5A3E2B]/50 hover:text-[#C8A97E] transition-colors duration-500"
          >
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center group-hover:border-[#C8A97E] transition-colors">
              <span className="text-sm">IG</span>
            </div>
            <span className="font-sans text-xs tracking-wider uppercase">Instagram</span>
          </a>
          <a 
            href="https://wa.me/923000000000" 
            className="group flex items-center gap-3 text-[#5A3E2B]/50 hover:text-[#C8A97E] transition-colors duration-500"
          >
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center group-hover:border-[#C8A97E] transition-colors">
              <span className="text-sm">WA</span>
            </div>
            <span className="font-sans text-xs tracking-wider uppercase">WhatsApp</span>
          </a>
          <div className="flex items-center gap-3 text-[#5A3E2B]/50">
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
              <span className="text-sm">ISB</span>
            </div>
            <span className="font-sans text-xs tracking-wider uppercase">Islamabad, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#F8F4EE] mb-4">
            Curated by Ghina
          </h2>
          <p className="text-[#F8F4EE]/30 font-sans text-sm mb-10 font-light italic">
            Emotionally invested in every detail
          </p>
          <div className="h-px w-20 bg-[#C8A97E]/20 mx-auto mb-10" />
          <div className="flex justify-center gap-8 mb-10">
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#F8F4EE]/40 hover:text-[#C8A97E] transition-colors duration-300 font-sans text-xs tracking-wider uppercase"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[#F8F4EE]/20 font-sans text-xs">
            © 2024 Curated by Ghina. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#1a1714]/95 backdrop-blur-md py-4 shadow-lg shadow-black/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-xl text-[#F8F4EE] tracking-wide">
          Curated by Ghina
        </a>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F8F4EE] p-2"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span 
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-full h-0.5 bg-current transition-transform"
            />
            <motion.span 
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-full h-0.5 bg-current"
            />
            <motion.span 
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-full h-0.5 bg-current transition-transform"
            />
          </div>
        </button>

        <div className="hidden md:flex gap-10">
          {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#F8F4EE]/60 hover:text-[#C8A97E] transition-colors duration-500 font-sans text-xs tracking-[0.15em] uppercase relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1a1714]/98 backdrop-blur-md overflow-hidden"
          >
            <div className="py-8 px-6 flex flex-col gap-6">
              {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#F8F4EE]/80 hover:text-[#C8A97E] transition-colors font-sans text-sm tracking-[0.15em] uppercase py-2"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Experience />
      <Testimonials />
      <Instagram />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}