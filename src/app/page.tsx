'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const easeOutExpo = [0.19, 1, 0.22, 1]
const easeInOutExpo = [0.87, 0, 0.13, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutExpo }
  }
}

function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handle = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])
  return mouse
}

function FloatingParticle({ delay = 0, size = 3, left = '50%', top = '50%', color = 'rgba(200,169,126,0.3)' }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left, top, width: size, height: size, background: color }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        opacity: [0, 0.8, 0],
      }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 250])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const scale = useTransform(scrollY, [0, 400], [1, 1.1])

  return (
    <section className="relative h-dvh min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div style={{ y: bgY, scale }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80)',
              filter: 'brightness(0.35) contrast(1.15) saturate(0.75) sepia(0.05)',
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(200,169,126,0.12) 0%, transparent 60%)' }} />
      </div>

      <FloatingParticle delay={0} size={4} left="20%" top="30%" />
      <FloatingParticle delay={1} size={3} left="70%" top="25%" />
      <FloatingParticle delay={2} size={5} left="40%" top="60%" />
      <FloatingParticle delay={0.5} size={3} left="80%" top="70%" />
      <FloatingParticle delay={1.5} size={4} left="15%" top="65%" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-10 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
          />
          <span className="text-[#C8A97E] tracking-[0.35em] text-[11px] font-sans uppercase font-medium">
            Islamabad, Pakistan
          </span>
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-10 bg-gradient-to-r from-transparent via-[#C8A97E] to-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F8F4EE] mb-6 leading-[1.05] tracking-tight">
            <span className="block">Thoughtfully curated.</span>
            <span className="block italic text-[#C8A97E] mt-1">Emotionally unforgettable.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-[#F8F4EE]/60 text-base sm:text-lg md:text-xl font-sans max-w-xl mx-auto mb-14 font-light leading-relaxed"
        >
          Luxury event styling, personalized gifting, and intimate celebrations crafted with heart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 py-4 overflow-hidden rounded-sm"
          >
            <span className="absolute inset-0 bg-[#C8A97E] transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-[#1a1714] font-sans text-xs tracking-[0.25em] uppercase font-medium">
              Book Your Experience
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-10 py-4 overflow-hidden rounded-sm border border-[#F8F4EE]/20"
          >
            <span className="absolute inset-0 bg-[#F8F4EE]/0 group-hover:bg-[#F8F4EE]/10 transition-colors duration-700" />
            <span className="relative text-[#F8F4EE] font-sans text-xs tracking-[0.25em] uppercase font-medium">
              Explore Our Work
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#F8F4EE]/30 text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#C8A97E]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [600, 1400], [50, -50])

  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#EFE7DA] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(90,62,43,0.03) 50px, rgba(90,62,43,0.03) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(90,62,43,0.03) 50px, rgba(90,62,43,0.03) 51px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: easeOutExpo }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img
                  src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=900&q=80"
                  alt="Curated by Ghina"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.92) contrast(1.08) saturate(0.85) sepia(0.03)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(200,169,126,0.05) 0%, transparent 50%, rgba(90,62,43,0.1) 100%)' }} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute -bottom-5 -left-5 bg-[#F8F4EE] p-6 rounded-sm shadow-2xl shadow-[#5A3E2B]/10 max-w-[220px]"
              >
                <p className="font-serif italic text-[#5A3E2B]/60 text-sm leading-relaxed">
                  &ldquo;Every detail tells a story&hellip;&rdquo;
                </p>
                <div className="mt-3 h-px w-10 bg-[#C8A97E]/50" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute -top-5 -right-5 w-24 h-24 rounded-full border border-[#C8A97E]/20 bg-[#C8A97E]/5"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
            className="relative"
          >
            <motion.span style={{ y }} className="block text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-8 font-sans font-medium">
              Our Story
            </motion.span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5A3E2B] mb-8 leading-[1.1] tracking-tight">
              Every celebration <span className="italic text-[#C8A97E]">tells a story.</span>
            </h2>

            <p className="text-[#5A3E2B]/60 font-sans text-base sm:text-lg leading-relaxed mb-5 font-light">
              At Curated by Ghina, every detail is intentionally chosen to create moments that feel deeply personal, warm, and unforgettable.
            </p>

            <p className="text-[#5A3E2B]/60 font-sans text-base sm:text-lg leading-relaxed mb-10 font-light">
              We believe in the magic of <span className="text-[#C8A97E] font-medium">thoughtful curation</span> — where every candle, every note, every carefully selected gift becomes part of a larger narrative: yours.
            </p>

            <div className="flex items-center gap-5 mb-10">
              <div className="h-px w-16 bg-gradient-to-r from-[#C8A97E] to-transparent" />
              <span className="font-serif italic text-[#5A3E2B]/45 text-lg">Emotionally invested in every detail</span>
            </div>

            <div className="relative pt-6 border-t border-[#C8A97E]/20">
              <span className="font-serif text-3xl text-[#5A3E2B]/25 italic">— Ghina</span>
              <div className="absolute top-0 left-0 h-[1px] w-16 bg-[#C8A97E]/60 -translate-y-[0.5px]" />
            </div>
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
  { icon: '◉', title: 'Memory Curation', desc: 'Preserving beautiful moments in ways that feel timeless' },
]

function Services() {
  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#F8F4EE] overflow-hidden">
      <div className="ambient-glow -left-48 top-0" />
      <div className="ambient-glow -right-48 bottom-0" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            What We Do
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5A3E2B] leading-tight">
            Crafted with <span className="italic text-[#C8A97E]">intention</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative p-8 h-full bg-[#F8F4EE] border border-[#C8A97E]/15 hover:border-[#C8A97E]/40 transition-all duration-500 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/0 via-[#C8A97E]/0 to-[#D9B6A3]/0 group-hover:from-[#C8A97E]/8 group-hover:via-transparent group-hover:to-[#D9B6A3]/8 transition-all duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: 'inset 0 0 30px rgba(200,169,126,0.08)' }} />

                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-sm bg-[#C8A97E]/5 border border-[#C8A97E]/10 group-hover:bg-[#C8A97E]/10 transition-all duration-500">
                    <motion.span
                      className="text-[#C8A97E] text-xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.span>
                  </div>
                  <h3 className="font-serif text-xl text-[#5A3E2B] mb-3 group-hover:tracking-wider transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[#5A3E2B]/50 font-sans text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C8A97E]/60 via-[#C8A97E] to-[#C8A97E]/60 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1523438885200-e3ba54a0103e?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80', span: 'row-span-1' },
  { src: 'https://images.unsplash.com/photo-1507504030503-55788d8dc6e4?w=600&q=80', span: 'row-span-1' },
]

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const mouse = useMousePosition()

  useEffect(() => {
    if (selected !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#1a1714] overflow-hidden">
      <motion.div
        className="absolute pointer-events-none w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(200,169,126,0.04) 0%, transparent 70%)',
          left: mouse.x - 128,
          top: mouse.y - 128,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F4EE] leading-tight">
            Warm memories <span className="italic text-[#C8A97E]">captured</span>
          </h2>
          <p className="text-[#F8F4EE]/30 mt-4 font-sans font-light text-base sm:text-lg italic">
            on film
          </p>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.03, ease: easeOutExpo }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => setSelected(index)}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: easeOutExpo }}
                className="relative h-full"
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.88) contrast(1.08) saturate(0.8)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#C8A97E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute bottom-6 left-6"
                >
                  <div className="h-px w-8 bg-[#C8A97E]/70 mb-2" />
                  <span className="text-[#F8F4EE]/80 font-serif text-lg">View</span>
                </motion.div>
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
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 overflow-hidden rounded-sm border border-[#C8A97E]/30"
          >
            <span className="absolute inset-0 bg-[#C8A97E] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            <span className="relative text-[#C8A97E] group-hover:text-[#1a1714] transition-colors duration-500 font-sans text-xs tracking-[0.25em] uppercase font-medium">
              View Full Portfolio
            </span>
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 text-[#F8F4EE]/60 hover:text-[#F8F4EE] text-xs tracking-[0.2em] uppercase font-sans z-10"
            >
              Close
            </motion.button>

            <div className="flex items-center gap-4 w-full max-w-5xl">
              {selected > 0 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => { e.stopPropagation(); setSelected(selected - 1) }}
                  className="text-[#F8F4EE]/40 hover:text-[#F8F4EE] text-2xl flex-shrink-0"
                >
                  ←
                </motion.button>
              )}

              <motion.div
                key={selected}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="flex-1 flex justify-center"
              >
                <img
                  src={galleryImages[selected].src}
                  alt="Full view"
                  className="max-h-[85vh] max-w-full object-contain"
                  style={{ filter: 'brightness(0.95) contrast(1.05) saturate(0.9)' }}
                />
              </motion.div>

              {selected < galleryImages.length - 1 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={(e) => { e.stopPropagation(); setSelected(selected + 1) }}
                  className="text-[#F8F4EE]/40 hover:text-[#F8F4EE] text-2xl flex-shrink-0"
                >
                  →
                </motion.button>
              )}
            </div>

            <div className="absolute bottom-8 text-[#F8F4EE]/30 text-xs font-sans">
              {selected + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

const experience = [
  { num: '01', title: 'Share Your Vision', desc: 'Tell us about your dream celebration. We listen with heart.', icon: '○' },
  { num: '02', title: 'We Curate Every Detail', desc: 'Hand-selecting elements that speak to your story.', icon: '◎' },
  { num: '03', title: 'We Design The Experience', desc: 'Crafting a cohesive, immersive atmosphere just for you.', icon: '◉' },
  { num: '04', title: 'You Celebrate Beautifully', desc: 'Step into a moment made for memory. Just breathe.', icon: '●' },
]

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  return (
    <section ref={ref} className="relative py-36 sm:py-48 bg-[#EFE7DA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            The Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5A3E2B] leading-tight">
            Your experience <span className="italic text-[#C8A97E]">with us</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-0 px-6" drag="x" dragConstraints={{ right: 0 }} dragElastic={0.05}>
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: easeOutExpo }}
            className="relative group flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] first:ml-6 last:mr-6"
          >
            <div className="relative z-10 p-8 sm:p-10 border border-[#C8A97E]/20 bg-[#F8F4EE]/70 backdrop-blur-sm rounded-sm h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="block font-serif text-6xl sm:text-7xl text-[#C8A97E]/20 leading-none">
                  {item.num}
                </span>
                <span className="text-[#C8A97E]/40 text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#5A3E2B] mb-4">{item.title}</h3>
              <p className="text-[#5A3E2B]/50 font-sans text-sm font-light leading-relaxed">{item.desc}</p>
            </div>

            {index < experience.length - 1 && (
              <div className="absolute top-1/2 -right-4 w-8 h-px bg-[#C8A97E]/20 hidden lg:block" />
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center px-6">
        <p className="text-[#5A3E2B]/30 font-sans text-xs tracking-[0.2em] uppercase">Swipe to explore →</p>
      </div>
    </section>
  )
}

const testimonials = [
  { text: 'It felt like stepping into a dream. Every detail was pure magic.', author: 'Sarah K.', role: 'Birthday Celebration' },
  { text: 'Every detail was thought of before I could even think of it. Truly extraordinary.', author: 'Aisha M.', role: 'Romantic Dinner' },
  { text: 'The most beautiful setup I\'ve ever seen. Our guests were in awe.', author: 'Fatima R.', role: 'Anniversary' },
  { text: 'Ghina understands the art of making moments meaningful. A true artist.', author: 'Nadia S.', role: 'Custom Hampers' },
  { text: 'Our celebration was more than we ever imagined. Pure perfection.', author: 'Hira L.', role: 'Intimate Gathering' },
  { text: 'The attention to detail is unmatched. It felt so personal and warm.', author: 'Zara T.', role: 'Birthday Setup' },
]

function Testimonials() {
  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#F8F4EE] overflow-hidden">
      <div className="ambient-glow left-1/3 top-0" />
      <div className="ambient-glow right-1/3 bottom-0" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center mb-24"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5A3E2B] leading-tight">
            Stories from the <span className="italic text-[#C8A97E]">heart</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: easeOutExpo }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-[#C8A97E]/5 to-[#D9B6A3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              <div className="relative p-8 rounded-sm bg-white/60 backdrop-blur-sm border border-[#C8A97E]/15 group-hover:border-[#C8A97E]/30 transition-all duration-500 shadow-sm">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C8A97E] text-xs">★</span>
                  ))}
                </div>
                <p className="font-serif text-lg text-[#5A3E2B] italic mb-6 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#C8A97E]/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C8A97E] to-[#D9B6A3] flex items-center justify-center text-[#F8F4EE] font-serif text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <span className="text-[#5A3E2B] font-sans text-xs tracking-wider uppercase block font-medium">
                      {t.author}
                    </span>
                    <span className="text-[#5A3E2B]/40 font-sans text-[11px]">
                      {t.role}
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
  'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=400&q=80',
]

function Instagram() {
  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#1a1714] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            @curatedbyghina
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F8F4EE] leading-tight">
            Moments We&apos;ve <span className="italic text-[#C8A97E]">Curated</span>
          </h2>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/30 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {instagramImages.map((src, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/curatedbyghina"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: easeOutExpo }}
              className="group relative overflow-hidden aspect-square"
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.7, ease: easeOutExpo }}
                className="w-full h-full"
              >
                <img
                  src={src}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.82) contrast(1.12) saturate(0.75)',
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-0 ring-1 ring-[#C8A97E]/0 group-hover:ring-[#C8A97E]/30 transition-all duration-500" />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-[#F8F4EE] flex flex-col items-center gap-1">
                  <span className="text-lg">♥</span>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase opacity-60">View</span>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://instagram.com/curatedbyghina"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-block px-10 py-4 overflow-hidden rounded-sm border border-[#C8A97E]/30"
          >
            <span className="absolute inset-0 bg-[#C8A97E] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            <span className="relative text-[#C8A97E] group-hover:text-[#1a1714] transition-colors duration-500 font-sans text-xs tracking-[0.25em] uppercase font-medium">
              Follow Us On Instagram
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focus, setFocus] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault() }

  return (
    <section className="relative py-36 sm:py-48 px-6 bg-[#EFE7DA] overflow-hidden">
      <div className="ambient-glow left-1/4 top-0" />
      <div className="ambient-glow right-1/4 bottom-0" />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A97E] tracking-[0.3em] text-[11px] uppercase mb-6 block font-sans font-medium">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5A3E2B] leading-tight">
            Let&apos;s create something
            <span className="italic block text-[#C8A97E] mt-2">beautiful</span> together
          </h2>
          <div className="mt-6 h-px w-12 bg-[#C8A97E]/40 mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOutExpo }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {(['name', 'email'] as const).map((field) => (
              <div key={field} className="relative">
                <motion.label
                  animate={{ y: focus === field ? -28 : 0, opacity: focus === field ? 1 : 0 }}
                  className="absolute left-5 top-5 text-[#C8A97E] text-xs tracking-wider uppercase font-sans pointer-events-none"
                >
                  {field === 'name' ? 'Your Name' : 'Your Email'}
                </motion.label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={`${field === 'name' ? 'Your Name' : 'Your Email'}`}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  onFocus={() => setFocus(field)}
                  onBlur={() => setFocus(null)}
                  className={`w-full px-5 py-5 bg-[#F8F4EE] border text-[#5A3E2B] placeholder-[#5A3E2B]/25 font-sans text-sm focus:outline-none transition-all duration-500 ${focus === field ? 'border-[#C8A97E] shadow-lg shadow-[#C8A97E]/10' : 'border-[#C8A97E]/15'}`}
                />
                <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A97E] origin-left transition-transform duration-500 ${focus === field ? 'scale-x-100' : 'scale-x-0'}`} />
              </div>
            ))}
          </div>

          <div className="relative">
            <motion.label
              animate={{ y: focus === 'message' ? -28 : 0, opacity: focus === 'message' ? 1 : 0 }}
              className="absolute left-5 top-5 text-[#C8A97E] text-xs tracking-wider uppercase font-sans pointer-events-none"
            >
              Your Message
            </motion.label>
            <textarea
              placeholder="Tell us about your vision..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocus('message')}
              onBlur={() => setFocus(null)}
              className={`w-full px-5 py-5 bg-[#F8F4EE] border text-[#5A3E2B] placeholder-[#5A3E2B]/25 font-sans text-sm focus:outline-none transition-all duration-500 resize-none ${focus === 'message' ? 'border-[#C8A97E] shadow-lg shadow-[#C8A97E]/10' : 'border-[#C8A97E]/15'}`}
            />
            <div className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C8A97E] origin-left transition-transform duration-500 ${focus === 'message' ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>

          <div className="text-center pt-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="group relative px-12 py-4 overflow-hidden rounded-sm"
            >
              <span className="absolute inset-0 bg-[#C8A97E] transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-[#1a1714] font-sans text-xs tracking-[0.25em] uppercase font-medium">
                Send Message
              </span>
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-20"
        >
          {[
            { label: 'Instagram', href: 'https://instagram.com/curatedbyghina' },
            { label: 'WhatsApp', href: 'https://wa.me/923000000000' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[#5A3E2B]/50 hover:text-[#C8A97E] transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-xs font-medium">{link.label.slice(0, 2)}</span>
              </div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase">{link.label}</span>
            </a>
          ))}
          <div className="flex items-center gap-3 text-[#5A3E2B]/50">
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
              <span className="text-xs font-medium">ISB</span>
            </div>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase">Islamabad, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl text-[#F8F4EE] mb-3 tracking-tight">
            Curated by Ghina
          </h2>
          <p className="text-[#F8F4EE]/25 font-sans text-sm mb-10 font-light italic">
            Emotionally invested in every detail
          </p>
          <div className="h-px w-16 bg-[#C8A97E]/15 mx-auto mb-10" />
          <div className="flex justify-center gap-8 mb-10">
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#F8F4EE]/35 hover:text-[#C8A97E] transition-colors duration-500 font-sans text-[11px] tracking-[0.2em] uppercase"
              >
                {item}
              </a>
            ))}
          </div>
          <p className="text-[#F8F4EE]/15 font-sans text-xs">
            © 2024 Curated by Ghina. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const links = ['About', 'Services', 'Gallery', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#1a1714]/90 backdrop-blur-xl py-4 shadow-xl shadow-black/10' : 'bg-transparent py-5 sm:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-xl text-[#F8F4EE] tracking-tight">
          Curated by Ghina
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 relative z-50"
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <motion.span
              animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] bg-current w-full"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block h-[1.5px] bg-current w-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="block h-[1.5px] bg-current w-4/5"
            />
          </div>
        </button>

        <div className="hidden md:flex items-center gap-12">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#F8F4EE]/60 hover:text-[#C8A97E] transition-colors duration-500 font-sans text-[11px] tracking-[0.2em] uppercase relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C8A97E] group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#1a1714]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {links.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(false)}
                className="text-[#F8F4EE]/80 hover:text-[#C8A97E] transition-colors font-serif text-4xl"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default function Home() {
  return (
    <main className="bg-[#F8F4EE]">
      <Nav />
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="gallery"><Gallery /></div>
      <Experience />
      <Testimonials />
      <Instagram />
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  )
}