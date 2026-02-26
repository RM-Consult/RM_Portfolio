import { useState, useEffect, useRef } from 'react'
import { useTheme } from './components/ThemeContext'
import './App.css'

export default function App() {
  const { theme, toggle } = useTheme()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleWaitlist(e) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <>
      <div className="bg-canvas">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <Particles />
      </div>

      {/* HEADER */}
      <header className="site-header">
        <div className="header-left">
          <div className="logo-mark">
            <svg viewBox="0 0 76 76"><rect x="16" y="10" width="10" height="54" rx="5" className="layer layer-1"/><path d="M21 10 H38 C54 10 54 36 38 36 H21 Z" className="layer layer-2"/><path d="M28 40 L34 32 L60 56 L52 64 Z" className="layer layer-3"/><circle cx="36" cy="36" r="6" className="layer-dot"/></svg>
          </div>
          <div className="logo-text">
            <h2>RM CONSULT</h2>
            <span>AI Research &amp; Engineering</span>
          </div>
        </div>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>
          )}
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="badge anim-up"><span className="badge-dot"/>Coming Soon</div>
        <h1 className="anim-up" style={{animationDelay:'0.1s'}}>Engineering the Future<br/><span className="highlight">of Intelligence</span></h1>
        <p className="hero-desc anim-up" style={{animationDelay:'0.2s'}}>We're building next-generation AI systems and software that empower businesses across Africa and beyond. Be the first to know when we launch.</p>

        {!submitted ? (
          <form className="waitlist-form anim-up" style={{animationDelay:'0.3s'}} onSubmit={handleWaitlist}>
            <div className="waitlist-input-wrapper">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <input
                className="waitlist-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="waitlist-btn" type="submit">Join Waitlist</button>
          </form>
        ) : (
          <div className="waitlist-success anim-up">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>Joined! We'll be in touch soon.</span>
          </div>
        )}
      </section>

      {/* SERVICES */}
      <section className="services-section anim-up" style={{animationDelay:'0.4s'}}>
        <div className="divider"/>
        <h2 className="section-title">What We Do</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
                <path d="M9 21h6"/>
                <path d="M10 17v4"/>
                <path d="M14 17v4"/>
                <circle cx="12" cy="9" r="2"/>
              </svg>
            </div>
            <div className="service-name">AI Research &amp; Innovation</div>
            <div className="service-desc">Pushing the boundaries of machine learning, NLP, and autonomous systems to solve real-world problems.</div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
                <line x1="14" y1="4" x2="10" y2="20"/>
              </svg>
            </div>
            <div className="service-name">Software Engineering</div>
            <div className="service-desc">Scalable web platforms, mobile apps, and cloud infrastructure built with modern best practices.</div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="service-name">Consultancy</div>
            <div className="service-desc">Strategic technology guidance to help organizations adopt AI and modernize their digital infrastructure.</div>
          </div>
        </div>
      </section>

      {/* CONTACT + SOCIAL */}
      <section className="contact-section anim-up" style={{animationDelay:'0.6s'}}>
        <div className="divider"/>
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-cards">
          <a href="mailto:info@rmconsult.rw" className="contact-card">
            <div className="contact-icon"><svg viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></div>
            <div className="contact-info"><div className="contact-label">Email</div><div className="contact-value">info@rmconsult.rw</div></div>
          </a>
        </div>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="#" className="social-link" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" className="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </a>
        </div>
      </section>

      <footer>&copy; 2026 RM CONSULT</footer>
    </>
  )
}

function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    for (let i = 0; i < 12; i++) {
      const p = document.createElement('div'); p.className = 'particle'
      p.style.left = `${Math.random()*100}%`; p.style.animationDuration = `${7+Math.random()*10}s`
      p.style.animationDelay = `${Math.random()*10}s`
      const s = 2+Math.random()*3; p.style.width=`${s}px`; p.style.height=`${s}px`
      el.appendChild(p)
    }
    return () => { el.innerHTML = '' }
  }, [])
  return <div className="particles" ref={ref} />
}
