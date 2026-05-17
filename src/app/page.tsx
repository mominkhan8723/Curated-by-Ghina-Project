'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/60 via-[#1a1714]/40 to-[#1a1714]/80" />
      </div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-[#C8A97E] tracking-[0.3em] text-sm mb-6 font-sans uppercase"
        >
          Islamabad, Pakistan
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F8F4EE] mb-8 leading-[1.1]"
        >
          Thoughtfully curated.{' '}
          <span className="italic text-[#C8A97E]">Emotionally unforgettable.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#F8F4EE]/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 font-light"
        >
          Luxury event styling, personalized gifting, and intimate celebrations crafted with heart.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-[#C8A97E] text-[#1a1714] font-sans text-sm tracking-wider uppercase hover:bg-[#F8F4EE] transition-all duration-500">
            Book Your Experience
          </button>
          <button className="px-8 py-4 border border-[#F8F4EE]/30 text-[#F8F4EE] font-sans text-sm tracking-wider uppercase hover:bg-[#F8F4EE]/10 transition-all duration-500">
            Explore Our Work
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border border-[#F8F4EE]/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#C8A97E] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [600, 1200], [50, -50])

  return (
    <section className="relative py-32 px-6 bg-[#EFE7DA]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="ambient-glow left-0 top-0" />
              <div className="relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80"
                    alt="Curated by Ghina"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C8A97E]/30" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C8A97E]/10 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.span 
              style={{ y }}
              className="block text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-6 font-sans"
            >
              Our Story
            </motion.span>
            
            <h2 className="font-serif text-4xl md:text-5xl text-[#5A3E2B] mb-8 leading-[1.2]">
              Every celebration tells a story.
            </h2>
            
            <p className="text-[#5A3E2B]/70 font-sans text-lg leading-relaxed mb-6 font-light">
              At Curated by Ghina, every detail is intentionally chosen to create moments that feel deeply personal, warm, and unforgettable.
            </p>
            
            <p className="text-[#5A3E2B]/70 font-sans text-lg leading-relaxed mb-8 font-light">
              We believe in the magic of <span className="text-[#C8A97E]">thoughtful curation</span> — where every candle, every note, every carefully selected gift becomes part of a larger narrative: yours.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#C8A97E]" />
              <span className="font-serif italic text-[#5A3E2B]/60">Emotionally invested in every detail</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const services = [
  { icon: '✦', title: 'Event Styling', desc: 'Transforming spaces into immersive experiences' },
  { icon: '◈', title: 'Birthday Setups', desc: 'Intimate celebrations with personal touches' },
  { icon: '◇', title: 'Luxury Hampers', desc: 'Bespoke gift baskets crafted with intention' },
  { icon: '✧', title: 'Personalized Gifts', desc: 'Meaningful presents that touch the heart' },
  { icon: '❂', title: 'Romantic Dinners', desc: 'Enchanting settings for memorable evenings' },
  { icon: '⬡', title: 'Celebration Planning', desc: 'Seamless execution of your vision' },
  { icon: '❖', title: 'Custom Decor', desc: 'Bespoke elements tailored to you' },
  { icon: '◉', title: 'Memory Curation', desc: 'Preserving moments beautifully' }
]

function Services() {
  return (
    <section className="relative py-32 px-6 bg-[#F8F4EE]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#5A3E2B]">
            Crafted with intention
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-8 glass rounded-sm border border-[#C8A97E]/20 hover:border-[#C8A97E]/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#C8A97E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
              
              <div className="relative z-10">
                <span className="text-[#C8A97E] text-2xl mb-4 block">{service.icon}</span>
                <h3 className="font-serif text-xl text-[#5A3E2B] mb-3">{service.title}</h3>
                <p className="text-[#5A3E2B]/60 font-sans text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-[#C8A97E]/30 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const galleryImages = [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  'https://images.unsplash.com/photo-1523438885200-e3ba54a0103e?w=600&q=80',
  'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?w=600&q=80',
  'https://images.unsplash.com/photo-1496843916299-590492c751f4?w=600&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  'https://images.unsplash.com/photo-1507504030503-55788d8dc6e4?w=600&q=80'
]

function Gallery() {
  return (
    <section className="relative py-32 px-6 bg-[#1a1714]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F8F4EE]">
            Warm memories captured
          </h2>
          <p className="text-[#F8F4EE]/50 mt-4 font-sans font-light">
            on film
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative overflow-hidden break-inside-avoid"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 border border-[#C8A97E]/30 text-[#C8A97E] font-sans text-sm tracking-wider uppercase hover:bg-[#C8A97E] hover:text-[#1a1714] transition-all duration-500">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  )
}

const experience = [
  { num: '01', title: 'Share Your Vision', desc: 'Tell us about your dream celebration' },
  { num: '02', title: 'We Curate Every Detail', desc: 'Hand-selecting elements that speak to you' },
  { num: '03', title: 'We Design The Experience', desc: 'Crafting a cohesive, immersive atmosphere' },
  { num: '04', title: 'You Celebrate Beautifully', desc: 'Step into a moment made for memory' }
]

function Experience() {
  const { scrollY } = useScroll()
  const x = useTransform(scrollY, [1500, 2500], [0, -300])

  return (
    <section className="relative py-32 px-6 bg-[#EFE7DA] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            The Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#5A3E2B]">
            Your experience with us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative z-10 p-8 border border-[#C8A97E]/20 bg-[#F8F4EE]/50 backdrop-blur-sm">
                <span className="block font-serif text-6xl text-[#C8A97E]/20 mb-4">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-[#5A3E2B] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5A3E2B]/60 font-sans text-sm font-light">
                  {item.desc}
                </p>
              </div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="absolute -inset-4 border border-[#C8A97E]/10 group-hover:border-[#C8A97E]/30 transition-colors duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  { text: "It felt like stepping into a dream.", author: "Sarah K." },
  { text: "Every detail was thought of before I could even think of it.", author: "Aisha M." },
  { text: "The most beautiful setup I've ever seen. Truly unforgettable.", author: "Fatima R." },
  { text: "Ghina understands the art of making moments meaningful.", author: "Nadia S." },
  { text: "Our celebration was more than we ever imagined.", author: "Hira L." }
]

function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-[#F8F4EE]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#5A3E2B]">
            Stories from the heart
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 glass border border-[#C8A97E]/20"
            >
              <p className="font-serif text-xl text-[#5A3E2B] italic mb-4">
                "{testimonial.text}"
              </p>
              <span className="text-[#C8A97E] font-sans text-sm tracking-wider uppercase">
                — {testimonial.author}
              </span>
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
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&q=80'
]

function Instagram() {
  return (
    <section className="relative py-32 px-6 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            @curatedbyghina
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#F8F4EE]">
            Moments We&apos;ve Curated
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt="Instagram"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-[#1a1714]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-[#F8F4EE] text-2xl">♥</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a 
            href="https://instagram.com/curatedbyghina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border border-[#C8A97E]/30 text-[#C8A97E] font-sans text-sm tracking-wider uppercase hover:bg-[#C8A97E] hover:text-[#1a1714] transition-all duration-500"
          >
            Follow Us On Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="relative py-32 px-6 bg-[#EFE7DA]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8A97E] tracking-[0.2em] text-xs uppercase mb-4 block font-sans">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#5A3E2B]">
            Let&apos;s create something beautiful together
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-6 py-4 bg-[#F8F4EE] border border-[#C8A97E]/30 text-[#5A3E2B] placeholder-[#5A3E2B]/40 font-sans focus:outline-none focus:border-[#C8A97E] transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-6 py-4 bg-[#F8F4EE] border border-[#C8A97E]/30 text-[#5A3E2B] placeholder-[#5A3E2B]/40 font-sans focus:outline-none focus:border-[#C8A97E] transition-colors duration-300"
            />
          </div>
          
          <textarea
            placeholder="Tell us about your vision..."
            rows={5}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full px-6 py-4 bg-[#F8F4EE] border border-[#C8A97E]/30 text-[#5A3E2B] placeholder-[#5A3E2B]/40 font-sans focus:outline-none focus:border-[#C8A97E] transition-colors duration-300 resize-none"
          />
          
          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-[#C8A97E] text-[#1a1714] font-sans text-sm tracking-wider uppercase hover:bg-[#5A3E2B] hover:text-[#F8F4EE] transition-all duration-500"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mt-16"
        >
          <a 
            href="https://instagram.com/curatedbyghina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#5A3E2B]/60 hover:text-[#C8A97E] transition-colors duration-300 font-sans text-sm tracking-wider uppercase"
          >
            Instagram
          </a>
          <a 
            href="https://wa.me/923000000000" 
            className="text-[#5A3E2B]/60 hover:text-[#C8A97E] transition-colors duration-300 font-sans text-sm tracking-wider uppercase"
          >
            WhatsApp
          </a>
          <span className="text-[#5A3E2B]/60 font-sans text-sm tracking-wider uppercase">
            Islamabad, Pakistan
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-[#F8F4EE] mb-4">
          Curated by Ghina
        </h2>
        <p className="text-[#F8F4EE]/40 font-sans text-sm mb-8 font-light">
          Emotionally invested in every detail
        </p>
        <div className="h-px w-24 bg-[#C8A97E]/30 mx-auto mb-8" />
        <p className="text-[#F8F4EE]/30 font-sans text-xs">
          © 2024 Curated by Ghina. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#1a1714]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-xl text-[#F8F4EE] tracking-wide">
          Curated by Ghina
        </a>
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#F8F4EE]"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>

        <div className="hidden md:flex gap-8">
          {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#F8F4EE]/70 hover:text-[#C8A97E] transition-colors duration-300 font-sans text-sm tracking-wider uppercase"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1a1714] py-8 px-6"
          >
            {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-[#F8F4EE] py-3 font-sans text-sm tracking-wider uppercase"
              >
                {item}
              </a>
            ))}
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