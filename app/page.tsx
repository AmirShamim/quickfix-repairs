'use client';

import { motion } from 'motion/react';
import { 
  Wrench, Zap, ShieldCheck, IndianRupee, Award, 
  Snowflake, RefreshCw, Thermometer, Microwave, Droplets, Settings,
  CheckCircle2, XCircle, Star, Clock, Phone, MapPin, MessageCircle, Menu, X, ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const FADE_UP = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

const STAGGER = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05050A] selection:bg-blue-500/30">
      {/* Emergency/Booking Banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[44px] bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center px-4 shadow-lg">
        <a href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20book%20an%20appointment!" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white font-medium text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Fastest response time on WhatsApp —</span>
          <span className="font-bold">Message Us Now</span>
        </a>
      </div>

      {/* 1. Background Orbs & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[140px] animate-[pulse_20s_ease-in-out_infinite]" />
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-indigo-600/20 blur-[140px] animate-[pulse_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[40%] rounded-full bg-slate-600/20 blur-[140px] animate-[pulse_30s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />
      </div>

      {/* Emergency Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[44px] bg-gradient-to-r from-[#DC2626] to-[#F97316] flex items-center justify-center px-4">
        <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20have%20an%20Emergency%20Repair%20request!%20Can%20you%20help%3F" className="flex items-center gap-2 text-white font-medium text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" />
          <span>24/7 Emergency Repairs — Call Now</span>
        </a>
      </div>

      {/* 2. Navbar */}
      <header className={`fixed top-[44px] left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-[#05050A]/80 backdrop-blur-2xl border-b border-white/[0.07]' : 'py-5 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">QuickFix</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Why Us', 'Pricing', 'Testimonials'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20website%20and%20need%20a%20quick%20AC/Appliance%20repair.%20Can%20you%20help%20me%20out%3F" className="px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-4 h-4" /> Message on WhatsApp
            </a>
          </div>

          <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 top-[44px] bg-[#05050A]/95 backdrop-blur-3xl pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {['Services', 'Why Us', 'Pricing', 'Testimonials'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white border-b border-white/[0.07] pb-4">
                {item}
              </a>
            ))}
            <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20website%20and%20need%20a%20quick%20AC/Appliance%20repair.%20Can%20you%20help%20me%20out%3F" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.3)]">
              <MessageCircle className="w-5 h-5" /> Message on WhatsApp
            </a>
          </nav>
        </div>
      )}

      <main className="relative z-10 pt-[44px]">
        {/* 3. Hero */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 z-[-2]">
            <Image 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80" 
              alt="Professional AC technician performing maintenance repair" 
              fill 
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#05050A]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/80 via-[#05050A]/40 to-[#05050A]" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div {...FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white/90">Same-Day Repairs in Bandra & Khar</span>
            </motion.div>
            
            <motion.h1 {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.1 }} className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Expert Appliance Repair <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">You Can Count On.</span>
            </motion.h1>
            
            <motion.p {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.2 }} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              AC, washing machine, refrigerator, and microwave repair. Certified technicians at your doorstep within 2 hours.
            </motion.p>
            
            <motion.div {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20website%20and%20need%20a%20quick%20AC/Appliance%20repair.%20Can%20you%20help%20me%20out%3F" className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                <MessageCircle className="w-5 h-5" /> Book via WhatsApp
              </a>
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-full backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] text-white font-semibold text-base hover:bg-white/[0.08] transition-colors flex items-center justify-center">
                View Pricing
              </a>
            </motion.div>

            <motion.div {...FADE_UP} transition={{ ...FADE_UP.transition, delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-white/60">
              {['Same-Day Service', '90-Day Warranty', 'Certified Technicians', 'Transparent Pricing'].map((trust) => (
                <div key={trust} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>{trust}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. Services */}
        <section id="services" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Complete Appliance Care</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">From cooling issues to motor replacements, we handle it all with precision.</p>
            </motion.div>

            <motion.div variants={STAGGER} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Snowflake, title: "AC Repair & Service", desc: "Expert diagnosis and gas refilling for all brands.", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80" },
                { icon: RefreshCw, title: "Washing Machine Repair", desc: "Front-load, top-load, and semi-automatic.", img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80" },
                { icon: Thermometer, title: "Refrigerator Service", desc: "Cooling issues, compressor repair, thermostat fixes.", img: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=600&q=80" },
                { icon: Microwave, title: "Microwave & Oven Repair", desc: "Magnetron, turntable, and control panel repair.", img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80" },
                { icon: Droplets, title: "Water Purifier Service", desc: "Filter replacement and annual maintenance.", img: "https://images.unsplash.com/photo-1585518419759-8f4ee4a46845?auto=format&fit=crop&w=600&q=80" },
                { icon: Settings, title: "Installation & AMC Plans", desc: "New appliance setup and annual maintenance contracts.", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" }
              ].map((service, i) => (
                <motion.div key={i} variants={FADE_UP} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 z-0 bg-[#05050A]">
                    <Image src={service.img} alt={service.title} fill className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/30 to-transparent opacity-100 transition-opacity duration-700 mix-blend-multiply" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors mt-auto">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. Bento Grid */}
        <section id="why-us" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Why Choose QuickFix?</h2>
              <p className="text-white/60 max-w-2xl text-lg">We don't just fix appliances; we restore your peace of mind.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-auto md:auto-rows-[280px]">
              {/* Large Card (Spans 2 rows on desktop) */}
              <motion.div {...FADE_UP} className="md:row-span-2 p-8 md:p-12 rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-blue-900/40 to-indigo-900/20 border border-blue-500/20 relative overflow-hidden flex flex-col justify-end group min-h-[320px] md:min-h-auto">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" alt="Fast Service" fill className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-blue-950/20 to-transparent mix-blend-multiply" />
                </div>
                <div className="absolute hidden md:flex top-8 left-8 w-16 h-16 rounded-2xl bg-blue-500/20 items-center justify-center backdrop-blur-md z-10 transition-transform group-hover:scale-110">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 md:mt-20">Same-Day Guaranteed</h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-md">Diagnosed and fixed within 4 hours or your visit is free. No exceptions.</p>
                </div>
              </motion.div>

              {/* Wide Card */}
              <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center gap-8 relative overflow-hidden">
                <div className="flex-1 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                    <ShieldCheck className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-3">90-Day Warranty on Every Repair</h3>
                  <p className="text-white/60">Factory-certified parts. If it breaks again, we fix it free.</p>
                </div>
                <div className="w-full sm:w-1/3 h-32 sm:h-full relative rounded-xl overflow-hidden opacity-80">
                  <Image src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80" alt="Tools" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>

              {/* Regular Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col justify-center relative overflow-hidden group min-h-[240px] md:min-h-[280px]">
                  <div className="absolute inset-0 z-0 bg-[#05050A]">
                    <Image src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" alt="Calculator" fill className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] to-transparent mix-blend-multiply border border-white/[0.07] rounded-3xl" />
                  </div>
                  <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                    <IndianRupee className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Transparent Pricing</h3>
                    <p className="text-white/60 text-sm">Upfront quotes before any work begins. Zero hidden charges.</p>
                  </div>
                </motion.div>
                
                <motion.div {...FADE_UP} transition={{ delay: 0.3 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col justify-center relative overflow-hidden group min-h-[240px] md:min-h-[280px]">
                  <div className="absolute inset-0 z-0 bg-[#05050A]">
                    <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" alt="Handshake" fill className="object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] to-transparent mix-blend-multiply border border-white/[0.07] rounded-3xl" />
                  </div>
                  <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                    <Award className="w-8 h-8 text-indigo-400 mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">5,000+ Repairs Completed</h3>
                    <p className="text-white/60 text-sm">Trusted by families and businesses across Mumbai.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Before/After */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">The QuickFix Difference</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">Don't settle for subpar repairs. Experience professional service.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div {...FADE_UP} className="rounded-3xl overflow-hidden border border-red-500/20 bg-red-950/10">
                <div className="h-64 relative">
                  <Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80" alt="Broken AC" fill className="object-cover opacity-60 grayscale" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-200 text-sm font-bold tracking-wide uppercase">
                    Before
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {['Unknown repair costs', 'Days without cooling', 'Unqualified technicians'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/70">
                        <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* After */}
              <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="rounded-3xl overflow-hidden border border-blue-500/30 bg-blue-900/10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 pointer-events-none" />
                <div className="h-64 relative">
                  <Image src="https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?auto=format&fit=crop&w=800&q=80" alt="Working AC" fill className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-200 text-sm font-bold tracking-wide uppercase">
                    After QuickFix
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {['Transparent pricing upfront', 'Fixed within 4 hours', 'Factory-certified parts'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Pricing */}
        <section id="pricing" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Simple, Honest Pricing</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">No hidden fees. You approve the quote before we start working.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Basic */}
              <motion.div {...FADE_UP} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1544485556-91e84a2754c0?auto=format&fit=crop&w=600&q=80" alt="Basic tools" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] to-transparent mix-blend-multiply" />
                </div>
                <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                  <h3 className="text-xl font-medium text-white/70 mb-2">Basic Repair</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-heading font-bold">₹1560</span>
                    <span className="text-white/50">/visit</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Diagnosis + single appliance</li>
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Standard parts</li>
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Same-day service</li>
                  </ul>
                  <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20website%20and%20need%20a%20quick%20AC/Appliance%20repair.%20Can%20you%20help%20me%20out%3F" className="w-full py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors font-bold text-center block shadow-[0_0_15px_rgba(37,211,102,0.3)]">Message on WhatsApp</a>
                </div>
              </motion.div>

              {/* Full Service (Most Popular) */}
              <motion.div {...FADE_UP} transition={{ delay: 0.1 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-gradient-to-b from-blue-900/20 to-[#05050A] border border-blue-500/30 relative md:-translate-y-4 shadow-2xl shadow-blue-900/20 group">
                <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80" alt="Premium service" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-[#05050A]/70 to-[#05050A] mix-blend-multiply" />
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-xs font-bold tracking-wider uppercase z-20">
                  Most Popular
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-blue-200 mb-2">Full Service</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-heading font-bold">₹3560</span>
                    <span className="text-white/50">/repair</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Multi-appliance diagnosis</li>
                    <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Premium factory parts</li>
                    <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Priority dispatch</li>
                    <li className="flex items-center gap-3 text-white/90"><CheckCircle2 className="w-4 h-4 text-blue-400" /> 90-day warranty included</li>
                  </ul>
                  <a href="https://wa.me/919999999999?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20website%20and%20need%20PRIORITY%20AC/Appliance%20repair.%20Can%20you%20help%2me%20out%3F" className="w-full py-3 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors font-bold text-center block shadow-[0_0_20px_rgba(37,211,102,0.5)]">Get Priority via WhatsApp</a>
                </div>
              </motion.div>

              {/* AMC */}
              <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80" alt="AMC Support" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] to-transparent mix-blend-multiply" />
                </div>
                <div className="relative z-10 transition-transform group-hover:-translate-y-1">
                  <h3 className="text-xl font-medium text-white/70 mb-2">AMC Plan</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-heading font-bold">₹7960</span>
                    <span className="text-white/50">/year</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Quarterly servicing</li>
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Priority repairs</li>
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Extended warranty</li>
                    <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="w-4 h-4 text-blue-500" /> 20% off all parts</li>
                  </ul>
                  <button className="w-full py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors font-medium">Subscribe Now</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. Trust Stats */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.02] border border-white/[0.05] flex flex-wrap justify-around gap-8">
              {[
                { icon: Star, label: "4.9/5", sub: "Google Rating" },
                { icon: Wrench, label: "5,000+", sub: "Repairs" },
                { icon: Clock, label: "Same Day", sub: "Service" },
                { icon: ShieldCheck, label: "90-Day", sub: "Warranty" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                  <span className="font-heading text-2xl font-bold">{stat.label}</span>
                  <span className="text-sm text-white/50 uppercase tracking-wider">{stat.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 9. Testimonials */}
        <section id="testimonials" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Loved by Mumbai</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">Don't just take our word for it.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Sarah Jenkins", role: "Bandra West", quote: "My AC broke down in the middle of May. QuickFix had a technician here in 90 minutes. Lifesavers!", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
                { name: "Rahul Desai", role: "Khar", quote: "Very honest pricing. They told me exactly what was wrong with the fridge and didn't try to upsell unnecessary parts.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
                { name: "Priya Sharma", role: "Santacruz", quote: "The 90-day warranty is real. My washing machine had a minor hiccup a month later, and they fixed it same-day, zero charge.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" }
              ].map((t, i) => (
                <motion.div key={i} {...FADE_UP} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07]">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-blue-500 text-blue-500" />)}
                  </div>
                  <p className="text-white/80 text-lg mb-8 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-white/50">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contact */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div {...FADE_UP} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Ready for a Fix?</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">Our technicians are standing by.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" {...FADE_UP} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] transition-colors flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80" alt="Chat" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/60 to-[#05050A] mix-blend-multiply" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">WhatsApp Us</h3>
                  <p className="text-white/60 mb-4">Fastest response time</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-[#25D366] justify-center">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
                    </span>
                    Available 24/7
                  </div>
                </div>
              </motion.a>

              <motion.a href="https://wa.me/919999999999" {...FADE_UP} transition={{ delay: 0.1 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] transition-colors flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1520923642038-b4259acebf7b?auto=format&fit=crop&w=600&q=80" alt="Call" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/60 to-[#05050A] mix-blend-multiply" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Call Directly</h3>
                  <p className="text-white/60 mb-4">Speak to an expert</p>
                  <div className="text-blue-400 font-medium">+91 98765 43210</div>
                </div>
              </motion.a>

              <motion.div {...FADE_UP} transition={{ delay: 0.2 }} className="p-8 rounded-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.07] flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-[#05050A]">
                  <Image src="https://images.unsplash.com/photo-1522749444007-4f6c44dd3924?auto=format&fit=crop&w=600&q=80" alt="Mumbai Map" fill className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-[#05050A]/40 mix-blend-multiply border border-white/[0.07] rounded-3xl" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Service Area</h3>
                  <p className="text-white/60">Bandra West, Khar, Santacruz</p>
                  <div className="mt-4 text-sm text-white/40">Mumbai, Maharashtra</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] bg-[#05050A]/80 backdrop-blur-xl py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-500" />
            <span className="font-heading font-bold tracking-tight">QuickFix Repairs</span>
            <span className="text-white/30 hidden md:inline">|</span>
            <span className="text-white/50 text-sm">Expert Appliance Repair You Can Count On.</span>
          </div>
          <div className="text-white/40 text-sm">
            Website by WebCraft Studio
          </div>
        </div>
      </footer>
    </div>
  );
}
