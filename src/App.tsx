import { useState, useEffect, useRef } from 'react';
import type { FormEvent } from 'react';
import logo from './assets/logo.png';
import s1 from './assets/s1.webp';
import s2 from './assets/s2.webp';
import s3 from './assets/s3.webp';
import s4 from './assets/s4.webp';
import aboutus from './assets/aboutus.webp';

import karate from './assets/karate.webp';
import skating from './assets/skating.webp';
import dance from './assets/dance.webp';
import phonics from './assets/phonics.webp';
import abacus from './assets/abacus.webp';
import singing from './assets/singing.webp';

import review1 from './assets/review1.webp';
import review2 from './assets/review2.webp';
import review3 from './assets/review3.webp';
import review4 from './assets/review4.webp';
import review5 from './assets/review5.webp';
import review6 from './assets/review6.webp';
import review7 from './assets/review7.webp';
import review8 from './assets/review8.webp';
import review9 from './assets/review9.webp';
import review10 from './assets/review10.webp';

import g1 from './assets/g1.webp';
import g2 from './assets/g2.webp';
import g3 from './assets/g3.webp';
import g4 from './assets/g4.webp';
import g5 from './assets/g5.webp';
import g6 from './assets/g6.webp';
import g7 from './assets/g7.webp';
import g8 from './assets/g8.webp';
import g9 from './assets/g9.webp';
import g10 from './assets/g10.webp';
import g11 from './assets/g11.webp';


    

import {
  Menu, X, MapPin, Phone, Mail, ArrowRight,
  BookOpen, Heart, Shield, Lightbulb, Users, Clock, Music,
  CheckCircle, ChevronLeft, ChevronRight, GraduationCap, Sun, Leaf,
  Zap, Target, Smile, Globe, ChevronDown,
  Facebook, Instagram, Youtube, Award
} from 'lucide-react';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const NAV_LINKS = [
  { label: 'THE ELEGANCIA SCHOOL', id: 'home' },
  { label: 'ABOUT US', id: 'about' },
  { label: 'ACADEMICS', id: 'programs' },
  { label: 'ACTIVITIES', id: 'activities' },
  { label: 'PARENT SPEAKS', id: 'testimonials' },
  { label: 'CONTACT US', id: 'contact' },
];

const STATS = [
  { val: '2000', label: 'Students Impacted' },
  { val: '50+', label: 'Recognitions' },
  { val: '20+', label: 'Activities' },
  { val: '11', label: 'Years of Experience' },
];

const ABOUT_FIGURES = [
  { icon: Users, val: '2000+', label: 'Students Impacted' },
  { icon: Award, val: '50+', label: 'Recognitions' },
  { icon: Zap, val: '20+', label: 'Activities' },
  { icon: Clock, val: '11', label: 'Years of Experience' },
];

const PROGRAMS = [
  {
    icon: Sun,
    title: 'Play Group',
    age: '1.5 – 2.5 yrs',
    desc: 'A gentle introduction to school life through joyful play, music, and sensory activities.',
    color: 'from-amber-400 to-orange-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    icon: Leaf,
    title: 'Nursery',
    age: '2.5 – 3.5 yrs',
    desc: 'Encouraging curiosity, communication, and independence through structured play-based learning.',
    color: 'from-emerald-400 to-teal-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    icon: BookOpen,
    title: 'LKG',
    age: '3.5 – 4.5 yrs',
    desc: 'Building early literacy, numeracy, and social skills in a supportive classroom environment.',
    color: 'from-sky-400 to-blue-400',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    icon: GraduationCap,
    title: 'UKG',
    age: '4.5 – 5.5 yrs',
    desc: 'Preparing children for primary school with confidence, creativity, and strong foundations.',
    color: 'from-rose-400 to-pink-400',
    bg: 'bg-rose-50',
    border: 'border-rose-200',
  },
  {
    icon: Heart,
    title: 'Day Care',
    age: 'All ages',
    desc: 'A safe, caring, and comfortable space for children beyond school hours.',
    color: 'from-violet-400 to-purple-400',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    icon: Music,
    title: 'Evening Activities',
    age: 'All ages',
    desc: 'Fun-filled enrichment activities that develop creativity, movement, and life skills.',
    color: 'from-fuchsia-400 to-rose-400',
    bg: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
  },
];

const ACTIVITIES = [
  {
    title: 'Karate',
    desc: 'Building discipline, focus, and physical strength through martial arts training.',
    img: karate,
    color: 'from-orange-600/80 to-orange-900/80',
  },
  {
    title: 'Skating',
    desc: 'Developing balance, coordination, and confidence on wheels in a safe environment.',
    img: skating,
    color: 'from-sky-600/80 to-sky-900/80',
  },
  {
    title: 'Western Dance',
    desc: 'Expressing creativity and rhythm through energetic and joyful dance forms.',
    img: dance,
    color: 'from-rose-600/80 to-rose-900/80',
  },
  {
    title: 'Music',
    desc: 'Nurturing a love for melody, rhythm, and musical expression from an early age.',
    img: singing,
    color: 'from-violet-600/80 to-violet-900/80',
  },
  {
    title: 'Phonics',
    desc: 'Building strong reading foundations through proven phonics-based literacy techniques.',
    img: phonics,
    color: 'from-emerald-600/80 to-emerald-900/80',
  },
  {
    title: 'Abacus',
    desc: 'Developing mental arithmetic and concentration skills with the ancient abacus method.',
    img: abacus,
    color: 'from-amber-600/80 to-amber-900/80',
  },
];

const CORE_VALUES = [
  {
    icon: Users,
    title: 'RESPECT',
    desc: 'We foster respect for self, others, and the environment. Students learn to value diversity, listen with empathy, and treat everyone with dignity, creating a safe and nurturing learning space.',
  },
  {
    icon: Shield,
    title: 'INTEGRITY',
    desc: 'Honesty and strong moral values are central to our culture. Students are encouraged to act with fairness and integrity, developing trust, character, and inner strength.',
  },
  {
    icon: Heart,
    title: 'INCLUSIVITY & BELONGING',
    desc: 'Every child belongs. We celebrate individuality and ensure that all students feel seen, heard, and accepted, empowering them to grow with confidence.',
  },
  {
    icon: Target,
    title: 'PERSEVERANCE',
    desc: 'We teach students to face challenges with resilience and determination. Through perseverance, they learn that effort and growth matter more than perfection.',
  },
  {
    icon: Smile,
    title: 'EMOTIONAL WELL-BEING',
    desc: 'We support emotional awareness, self-control, and balance. These skills help students manage challenges, build healthy relationships, and maintain well-being.',
  },
  {
    icon: Zap,
    title: 'COURAGE',
    desc: 'We empower students to speak up, stand for what is right, and believe in themselves. Courage helps them lead with kindness, confidence, and honesty.',
  },
  {
    icon: CheckCircle,
    title: 'RESPONSIBILITY',
    desc: 'We guide students to take ownership of their actions, learning, and choices. Responsibility builds independence, accountability, and confidence for life beyond school.',
  },
  {
    icon: Lightbulb,
    title: 'LOVE OF LEARNING',
    desc: 'Curiosity in learning is encouraged every day. By making education engaging and meaningful, we inspire students to explore, question, and develop a lifelong passion for knowledge.',
  },
  {
    icon: Globe,
    title: 'SOCIAL RESPONSIBILITY',
    desc: 'Students are encouraged to care for others and contribute to the community. Service helps them develop empathy, social awareness, and responsibility toward society.',
  },
];

const GALLERY_IMAGES = [
  { src: g1, alt: 'Children learning in classroom' },
  { src: g2, alt: 'Kids playing together' },
  { src: g3, alt: 'Art and creativity' },
  { src: g4, alt: 'Story time' },
  { src: g5, alt: 'Outdoor play' },
  { src: g6, alt: 'Science exploration' },
  { src: g7, alt: 'Music and movement' },
  { src: g8, alt: 'Sports and games' },
  { src: g9, alt: 'Field trip fun' },
  { src: g10, alt: 'Graduation day' },
  { src: g11, alt: 'Celebrating diversity' }
];

const REVIEW_IMAGES = [
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
  review8,
  review9,
  review10,
];

const SCHOOL_ADDRESS = 'Bus Stop, Phase 2, B near, Rd Number 16, Kukatpally Housing Board Colony, IDPL Staff Cooperative Housing Society, Vasanth Nagar, Hyderabad, Telangana 500085';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(SCHOOL_ADDRESS)}&output=embed`;

const HERO_SLIDES = [s1, s2, s3, s4];
const ADMISSIONS_POPUP_DISMISSED_KEY = 'admissions_popup_dismissed_v2';
const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/TheEleganciaSchool',
  instagram: 'https://www.instagram.com/the_elegancia_school',
  youtube: 'https://www.youtube.com/@theelegancia5729',
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeReviewSlide, setActiveReviewSlide] = useState(0);
  const [showAdmissionsPopup, setShowAdmissionsPopup] = useState(false);
  const [isSendingHomeForm, setIsSendingHomeForm] = useState(false);
  const [isSendingPopupForm, setIsSendingPopupForm] = useState(false);
  const [homeFormStatus, setHomeFormStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);
  const [popupFormStatus, setPopupFormStatus] = useState<null | { type: 'success' | 'error'; message: string }>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isDismissed = window.localStorage.getItem(ADMISSIONS_POPUP_DISMISSED_KEY) === '1';
    if (!isDismissed) {
      setShowAdmissionsPopup(true);
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReviewSlide(prev => (prev + 1) % REVIEW_IMAGES.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const openAdmissionsPopup = () => {
    setPopupFormStatus(null);
    setShowAdmissionsPopup(true);
  };

  const nextReviewSlide = () => {
    setActiveReviewSlide(prev => (prev + 1) % REVIEW_IMAGES.length);
  };

  const prevReviewSlide = () => {
    setActiveReviewSlide(prev => (prev - 1 + REVIEW_IMAGES.length) % REVIEW_IMAGES.length);
  };

  const closeAdmissionsPopup = () => {
    setShowAdmissionsPopup(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ADMISSIONS_POPUP_DISMISSED_KEY, '1');
    }
  };

  const handleFormSubmit = (formType: 'home' | 'popup') => async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const action = form.getAttribute('action') || 'https://formsubmit.co/smartkennedyschoolteam@gmail.com';
    const ajaxEndpoint = action.includes('/ajax/')
      ? action
      : action.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');

    if (formType === 'home') {
      setIsSendingHomeForm(true);
      setHomeFormStatus(null);
    } else {
      setIsSendingPopupForm(true);
      setPopupFormStatus(null);
    }

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch(ajaxEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      form.reset();
      const successMessage = 'Message sent successfully. We will contact you soon.';
      if (formType === 'home') {
        setHomeFormStatus({ type: 'success', message: successMessage });
      } else {
        setPopupFormStatus({ type: 'success', message: successMessage });
      }
    } catch {
      const errorMessage = 'Unable to send message right now. Please try again in a moment.';
      if (formType === 'home') {
        setHomeFormStatus({ type: 'error', message: errorMessage });
      } else {
        setPopupFormStatus({ type: 'error', message: errorMessage });
      }
    } finally {
      if (formType === 'home') {
        setIsSendingHomeForm(false);
      } else {
        setIsSendingPopupForm(false);
      }
    }
  };

  const heroVis = useInView(0.1);
  const statsVis = useInView(0.1);
  const aboutVis = useInView(0.1);
  const philVis = useInView(0.1);
  const valuesVis = useInView(0.1);
  const progVis = useInView(0.1);
  const actVis = useInView(0.1);
  const galVis = useInView(0.1);
  const testVis = useInView(0.1);
  const ctaVis = useInView(0.1);
  const contactVis = useInView(0.1);
  const footerVis = useInView(0.1);

  return (
    <div className="font-sans antialiased text-slate-800 overflow-x-hidden">

      {/* ── Navbar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#e6e4d2] shadow-md py-2' : 'bg-[#e6e4d2]/95 backdrop-blur-sm py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <a href="#home" onClick={() => scrollTo('home')} className="flex-shrink-0">
            <img src={logo} alt="Elegancia School" className="h-12 w-auto sm:h-14" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-amber-100 text-amber-700'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social + Mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors text-slate-500 hover:text-blue-600">
                <Facebook size={18} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors text-slate-500 hover:text-rose-500">
                <Instagram size={18} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors text-slate-500 hover:text-red-600">
                <Youtube size={18} />
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-lg transition-colors text-slate-700"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="xl:hidden bg-[#e6e4d2] border-t border-amber-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 rounded-xl text-slate-700 hover:bg-amber-50 hover:text-amber-700 font-semibold text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 px-4 pt-3 pb-1 border-t border-amber-200 mt-2">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-rose-500 transition-colors"><Instagram size={20} /></a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-red-600 transition-colors"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt="The Elegancia School campus moments"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === activeHeroSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e]/85 via-[#0e7490]/70 to-[#065f46]/80" />
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />

        <div
          ref={heroVis.ref}
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${heroVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Admissions Open for 2026-27
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Adopting{' '}
            <span className="text-amber-400">Finland-Based</span>
            <br />Education System
          </h1>

          <p className="text-lg sm:text-xl text-white/80 font-light italic mb-4">
            Unleashing potential in childhood
          </p>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A world-class preschool in Vasanth Nagar, Hyderabad where every child learns through joy,
            curiosity, and play — inspired by the best education system in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openAdmissionsPopup}
              className="group px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Apply for Admission
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('programs')}
              className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Programs
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#2f377f] text-white py-8">
        <div
          ref={statsVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${statsVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label} className="border-r border-white/10 last:border-0 px-4">
                <div className="text-4xl font-bold text-[#ffbf4d]">{s.val}</div>
                <div className="text-white/75 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about" className="py-20 sm:py-28 bg-[#fffdf7]">
        <div
          ref={aboutVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${aboutVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl" />
              <img
                src={aboutus}
                alt="Students and teachers at The Elegancia School"
                className="relative rounded-3xl shadow-2xl w-full h-[420px] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-[#1e2a6e] rounded-2xl shadow-xl px-6 py-4 text-white">
                <div className="text-2xl font-bold text-amber-400">11+</div>
                <div className="text-white/70 text-sm">Years of Excellence</div>
              </div>
            </div>

            <div>
              <span className="inline-block bg-[#f9ecd8] text-[#c87512] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">About Us</span>
              <h2 className={`section-heading text-3xl sm:text-4xl font-bold text-[#2f377f] mb-3 leading-tight ${aboutVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>
                Nurturing Young Minds<br />
                <span className="text-[#d07a14]">at The Elegancia School</span>
              </h2>
              <div className={`section-underline mb-6 ${aboutVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
              <p className="text-slate-600 mb-5 leading-relaxed">
                At The Elegancia School, we believe in providing a well-designed, child-friendly environment
                that fosters learning through an integrated curriculum. Our approach combines activity-based
                learning, explicit instruction, play-based activities, and project-based experiences.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                These techniques encourage the development of young minds, with a focus on advanced concepts
                like phonics and abacus. Beyond the classroom, our students enjoy a range of extracurricular
                activities, including dance, karate, music, and sports, ensuring a well-rounded education.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_FIGURES.map(item => (
                  <div key={item.label} className="rounded-2xl border border-[#eadfc6] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2ebff] text-[#4f2db7]">
                      <item.icon size={20} />
                    </div>
                    <div className="text-2xl font-bold text-[#2f377f]">{item.val}</div>
                    <div className="text-sm font-medium text-slate-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div
            ref={philVis.ref}
            className={`transition-all duration-700 ${philVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start bg-[#fff8ec] rounded-3xl p-10 border border-[#efe0c7] shadow-sm">
              <div>
                <span className="inline-block bg-[#f2ebff] text-[#4f2db7] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Philosophy</span>
                <h3 className={`section-heading text-2xl sm:text-3xl font-bold text-[#2f377f] mb-3 ${philVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>Our Philosophy</h3>
                <div className={`section-underline ${philVis.inView ? 'w-24 opacity-100' : 'w-0 opacity-0'}`} />
              </div>
              <div className="space-y-5">
                <p className="text-slate-600 leading-relaxed border-l-4 border-amber-400 pl-5">
                  At our school, we believe education is about more than academic success. The true purpose
                  of schooling is to nurture confident, compassionate, and responsible individuals who are
                  prepared for life.
                </p>
                <p className="text-slate-600 leading-relaxed border-l-4 border-teal-400 pl-5">
                  We focus on the holistic development of every child — intellectual, emotional, social, and
                  moral. Learning is designed to be meaningful, engaging, and respectful of each child's
                  unique abilities and pace.
                </p>
                <p className="text-slate-600 leading-relaxed border-l-4 border-sky-400 pl-5">
                  Through strong values, caring relationships, and a supportive environment, we guide students
                  to grow into lifelong learners and good human beings who contribute positively to society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 sm:py-28 bg-[#2f377f]">
        <div
          ref={valuesVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${valuesVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <div className="inline-block border-2 border-[#ffbf4d] text-white font-bold tracking-widest text-lg px-8 py-3 rounded-full mb-4 bg-white/5">
              OUR CORE VALUES
            </div>
            <div className={`section-underline mx-auto mb-4 ${valuesVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
            <p className="text-white/60 max-w-xl mx-auto">
              The principles that guide every interaction, lesson, and relationship at our school.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((val, i) => (
              <div
                key={val.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/40 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 bg-[#ffbf4d]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#ffbf4d]/25 transition-colors">
                  <val.icon size={22} className="text-[#ffbf4d]" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wider mb-2">{val.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Programs ── */}
      <section id="programs" className="py-20 sm:py-28 bg-white">
        <div
          ref={progVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${progVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-[#f2ebff] text-[#4f2db7] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Academics</span>
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold text-[#2f377f] mb-3 ${progVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>Programs Offered</h2>
            <div className={`section-underline mx-auto mb-4 ${progVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
            <p className="text-slate-500 max-w-xl mx-auto">
              Thoughtfully designed programs for every stage of early childhood, from 1.5 to 6 years.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((prog, i) => (
              <div
                key={prog.title}
                className={`${prog.bg} ${prog.border} border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${prog.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <prog.icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{prog.title}</h3>
                    <span className="text-xs font-semibold bg-white/80 text-slate-600 px-2.5 py-1 rounded-full ml-2 flex-shrink-0">
                      {prog.age}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{prog.desc}</p>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-slate-900 group/btn transition-colors"
                  >
                    Enquire now <ChevronRight size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Co-Curricular Activities ── */}
      <section id="activities" className="py-20 sm:py-28 bg-slate-50">
        <div
          ref={actVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${actVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-[#f9ecd8] text-[#c87512] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Co-Curricular</span>
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold text-[#2f377f] mb-3 ${actVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>Our Co-Curricular Activities</h2>
            <div className={`section-underline mx-auto mb-4 ${actVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
            <p className="text-slate-500 max-w-xl mx-auto">
              Beyond academics, we nurture talent, discipline, and creativity through a rich range of activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACTIVITIES.map((act, i) => (
              <div
                key={act.title}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group cursor-default"
                style={{ height: '220px', transitionDelay: `${i * 70}ms` }}
              >
                <img
                  src={act.img}
                  alt={act.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${act.color}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-bold mb-1">{act.title}</h3>
                  <p className="text-white/75 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {act.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-20 sm:py-28 bg-white">
        <div
          ref={galVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${galVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-[#f2ebff] text-[#4f2db7] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Life at Elegancia</span>
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold text-[#2f377f] mb-3 ${galVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>A Glimpse Into Our World</h2>
            <div className={`section-underline mx-auto mb-4 ${galVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
            <p className="text-slate-500 max-w-xl mx-auto">
              See the joy, creativity, and learning that fills every corner of our school.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group ${i === 0 ? 'col-span-2' : ''}`}
                style={{ aspectRatio: i === 0 ? '16/7' : '4/3' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parent Speaks ── */}
      <section id="testimonials" className="py-20 sm:py-28 bg-slate-50">
        <div
          ref={testVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${testVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-14">
            <span className="inline-block bg-[#f9ecd8] text-[#c87512] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">Parent Speaks</span>
            <h2 className={`section-heading text-3xl sm:text-4xl font-bold text-[#2f377f] mb-3 ${testVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>What Parents Say</h2>
            <div className={`section-underline mx-auto mb-4 ${testVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="relative h-[300px] sm:h-[420px] md:h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              {REVIEW_IMAGES.map((image, index) => (
                <img
                  key={`${image}-${index}`}
                  src={image}
                  alt={`Parent review ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-contain p-3 sm:p-4 md:p-5 transition-opacity duration-700 ${index === activeReviewSlide ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              <button
                type="button"
                aria-label="Previous review"
                onClick={prevReviewSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2 text-slate-700 shadow-md ring-1 ring-slate-200 transition hover:bg-white"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={nextReviewSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/95 p-2 text-slate-700 shadow-md ring-1 ring-slate-200 transition hover:bg-white"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {REVIEW_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to review ${index + 1}`}
                  onClick={() => setActiveReviewSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeReviewSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Admissions CTA ── */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#2f377f] to-[#4f2db7] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div
          ref={ctaVis.ref}
          className={`relative z-10 max-w-3xl mx-auto text-center px-4 transition-all duration-700 ${ctaVis.inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <span className="inline-block bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Admissions Open for 2026-27
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Give Your Child the Gift of<br />Joyful Learning
          </h2>
          <p className="text-white/70 text-base mb-9 max-w-xl mx-auto leading-relaxed">
            Limited seats available. Visit us today at Road No 15, Vasanth Nagar, KPHB, Hyderabad
            and experience firsthand how we're shaping the future of early childhood education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openAdmissionsPopup}
              className="group px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Schedule a Visit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:7331136094"
              className="px-8 py-4 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              7331136094
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Us ── */}
      <section id="contact" className="py-20 sm:py-28 bg-white">
        <div
          ref={contactVis.ref}
          className={`max-w-7xl mx-auto px-4 transition-all duration-700 ${contactVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-5">
            <div className="inline-block bg-[#d07a14] text-white font-bold tracking-widest text-xl px-12 py-4 rounded-full mb-6 shadow-lg">
              CONTACT US
            </div>
            <p className="text-slate-500 text-base">For Queries regarding Admissions / For feedback</p>
            <h3 className={`section-heading text-2xl font-bold text-[#2f377f] mt-2 tracking-widest ${contactVis.inView ? 'section-heading-active' : 'opacity-0 translate-y-4'}`}>GET IN TOUCH</h3>
            <div className={`section-underline mx-auto mt-4 ${contactVis.inView ? 'w-28 opacity-100' : 'w-0 opacity-0'}`} />
          </div>

          {/* Contact Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm mb-12 mt-10">
            {[
              {
                icon: MapPin,
                title: 'Address',
                lines: ['Bus Stop, Phase 2, B near, Rd Number 16,', 'Kukatpally Housing Board Colony, Vasanth Nagar,', 'Hyderabad, Telangana 500085'],
                color: 'text-[#1e2a6e]',
                bg: 'bg-slate-50',
              },
              {
                icon: Phone,
                title: 'Phone',
                lines: ['7331136094', '040-4024 6094'],
                color: 'text-[#1e2a6e]',
                bg: 'bg-white',
              },
              {
                icon: Mail,
                title: 'Email',
                lines: ['theeleganciaschool', '@gmail.com'],
                color: 'text-[#1e2a6e]',
                bg: 'bg-slate-50',
              },
              {
                icon: Clock,
                title: 'Hours',
                lines: ['Monday – Friday:', '9:00 AM to 5:00 PM', 'Saturday, Sunday: Closed'],
                color: 'text-[#1e2a6e]',
                bg: 'bg-white',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`${item.bg} p-8 text-center flex flex-col items-center gap-3 ${i < 3 ? 'border-r border-slate-200' : ''} sm:border-b-0 border-b`}
              >
                <div className="w-14 h-14 bg-[#1e2a6e]/10 rounded-full flex items-center justify-center">
                  <item.icon size={24} className={item.color} />
                </div>
                <div className="w-10 h-0.5 bg-[#1e2a6e]/20 rounded-full" />
                <div className="space-y-0.5">
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-slate-700 text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="bg-slate-50 px-5 py-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Map:</span> {SCHOOL_ADDRESS}
            </div>
            <iframe
              title="The Elegancia School location"
              src={MAP_EMBED_URL}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Franchise & Resume */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <p className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase mb-2">Need More Info?</p>
                <h4 className="text-2xl font-bold text-[#1e2a6e] leading-tight">Choose the right contact option</h4>
                <p className="text-slate-600 text-sm mt-3">
                  Reach us directly for franchise opportunities or career applications.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h5 className="text-[#1e2a6e] font-bold text-base tracking-wide mb-2">FOR FRANCHISE</h5>
                <p className="text-slate-600 text-sm mb-4">Discuss partnership and expansion opportunities with our team.</p>
                <a
                  href="mailto:theeleganciaschool@gmail.com?subject=Franchise Enquiry"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#1e2a6e] hover:bg-[#162058] text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Contact Here
                </a>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h5 className="text-[#1e2a6e] font-bold text-base tracking-wide mb-2">FOR SENDING RESUME</h5>
                <p className="text-slate-600 text-sm mb-4">Share your profile and become part of our teaching community.</p>
                <a
                  href="mailto:theeleganciaschool@gmail.com?subject=Resume Submission"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#1e2a6e] hover:bg-[#162058] text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Click Here
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us an Enquiry</h3>
              <form
                action="https://formsubmit.co/smartkennedyschoolteam@gmail.com"
                method="POST"
                onSubmit={handleFormSubmit('home')}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Admission Form - Home" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Parent Name</label>
                    <input
                      required
                      name="parent_name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Child's Name</label>
                    <input
                      required
                      name="child_name"
                      type="text"
                      placeholder="Child's name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 placeholder:text-slate-400 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    required
                    name="mobile_number"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 placeholder:text-slate-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 placeholder:text-slate-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Program of Interest</label>
                  <select
                    required
                    name="class"
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 transition-all"
                  >
                    <option value="">Select a program</option>
                    <option>Play Group (1.5 – 2.5 yrs)</option>
                    <option>Nursery (2.5 – 3.5 yrs)</option>
                    <option>LKG (3.5 – 4.5 yrs)</option>
                    <option>UKG (4.5 – 5.5 yrs)</option>
                    <option>Day Care</option>
                    <option>Evening Activities</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Any questions or special requests..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 text-slate-800 placeholder:text-slate-400 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSendingHomeForm}
                  className="w-full py-4 bg-[#1e2a6e] hover:bg-[#162058] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {isSendingHomeForm ? 'Sending...' : 'Submit Enquiry'}
                  <ArrowRight size={18} />
                </button>
                {homeFormStatus && (
                  <p className={`text-center text-sm ${homeFormStatus.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
                    {homeFormStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 text-white">
        <div
          ref={footerVis.ref}
          className={`max-w-7xl mx-auto px-4 py-14 transition-all duration-700 ${footerVis.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
             
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
                A Finland-inspired preschool in Vasanth Nagar, Hyderabad dedicated to nurturing curious,
                confident, and joyful learners from 1.5 to 6 years of age.
              </p>
              <p className="text-slate-500 text-xs italic mb-5">Unleashing potential in childhood</p>
              <div className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={16} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={16} />
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-slate-400 hover:text-amber-400 text-sm transition-colors text-left capitalize"
                    >
                      {link.label.charAt(0) + link.label.slice(1).toLowerCase().replace(' us', ' Us')}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 text-slate-400 text-sm">
                  <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  Road No 15, Vasanth Nagar, KPHB, Hyderabad, India, 500072
                </li>
                <li className="flex gap-3 text-slate-400 text-sm">
                  <Phone size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div>7331136094</div>
                    <div>040-4024 6094</div>
                  </div>
                </li>
                <li className="flex gap-3 text-slate-400 text-sm">
                  <Mail size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  theeleganciaschool@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              Copyright &copy; 2026 The Elegancia School | Powered by The Elegancia School
            </p>
            <p className="text-slate-600 text-xs">Vasanth Nagar, Hyderabad</p>
          </div>
        </div>
      </footer>

      {showAdmissionsPopup && (
        <div
          className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/45 p-3 sm:items-center sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeAdmissionsPopup();
          }}
        >
          <div
            className="relative w-full max-w-[680px] max-h-[calc(100vh-1.5rem)] overflow-y-auto bg-[#e6e4d2] px-4 py-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] sm:max-h-[calc(100vh-2rem)] sm:px-7 sm:py-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeAdmissionsPopup}
              className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center text-4xl leading-none text-gray-700"
            >
              ×
            </button>

            <h4 className="pr-10 text-left text-3xl font-bold text-[#1e2a6e] sm:text-3xl">Admissions Open 2026-27</h4>

            <form
              action="https://formsubmit.co/smartkennedyschoolteam@gmail.com"
              method="POST"
              onSubmit={handleFormSubmit('popup')}
              className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <input type="hidden" name="_subject" value="New Admission Form - Popup" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Parent Name *
                <input required name="parent_name" className="h-10 border border-gray-400 bg-white px-3 text-slate-900 outline-none" />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Child Name *
                <input required name="child_name" className="h-10 border border-gray-200 bg-white px-3 text-slate-900 outline-none" />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Mobile Number *
                <div className="flex h-10 items-center border border-gray-200 bg-white px-3">
                  <span className="mr-2">IN</span>
                  <input required name="mobile_number" type="tel" className="flex-1 bg-transparent text-slate-900 outline-none" />
                </div>
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Email *
                <input required name="email" type="email" className="h-10 border border-gray-200 bg-white px-3 text-slate-900 outline-none" />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700 md:col-span-2">
                Class *
                <select required name="class" defaultValue="" className="h-10 border border-gray-200 bg-white px-3 text-slate-900 outline-none">
                  <option value="" disabled>Select class</option>
                    <option>Play Group (1.5 – 2.5 yrs)</option>
                    <option>Nursery (2.5 – 3.5 yrs)</option>
                    <option>LKG (3.5 – 4.5 yrs)</option>
                    <option>UKG (4.5 – 5.5 yrs)</option>
                    <option>Day Care</option>
                    <option>Evening Activities</option>
                </select>
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700 md:col-span-2">
                Message *
                <textarea required name="message" rows={4} className="border border-gray-200 bg-white px-3 py-2 text-slate-900 outline-none" />
              </label>

              <div className="mt-2 flex flex-col items-center gap-3 md:col-span-2">
                <button
                  type="submit"
                  disabled={isSendingPopupForm}
                  className="h-11 min-w-40 rounded-full border border-gray-500 bg-transparent px-8 text-xl font-semibold text-[#1e2a6e]"
                >
                  {isSendingPopupForm ? 'Sending...' : 'Submit'}
                </button>
                {popupFormStatus && (
                  <p className={`text-center text-sm ${popupFormStatus.type === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
                    {popupFormStatus.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
