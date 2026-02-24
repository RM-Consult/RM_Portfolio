import { useState, useEffect } from 'react'
import './DeviceFrames.css'

/* ================================================================
   IPHONE FRAME — Mobile App Mockup
   ================================================================ */
export function IPhoneFrame({ children, title }) {
  return (
    <div className="device iphone">
      <div className="device-label">{title || 'iPhone'}</div>
      <div className="iphone-body">
        <div className="iphone-frame">
          <div className="iphone-dynamic-island" />
          <div className="iphone-screen">
            {children}
            <div className="screen-glare" />
          </div>
          <div className="iphone-bar" />
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   ANDROID FRAME — Mobile App Mockup
   ================================================================ */
export function AndroidFrame({ children, title }) {
  return (
    <div className="device android">
      <div className="device-label">{title || 'Android'}</div>
      <div className="android-frame">
        <div className="android-camera" />
        <div className="android-screen">
          {children}
        </div>
        <div className="android-nav">
          <span /><span /><span />
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   MACBOOK FRAME — Web App Mockup
   ================================================================ */
export function MacBookFrame({ children, title }) {
  return (
    <div className="device macbook">
      <div className="device-label">{title || 'MacBook'}</div>
      <div className="macbook-body">
        <div className="macbook-frame">
          <div className="macbook-toolbar">
            <div className="macbook-dots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="macbook-url">
              <span>rmconsult.com</span>
            </div>
          </div>
          <div className="macbook-screen">
            {children}
            <div className="screen-glare" />
          </div>
        </div>
        <div className="macbook-hinge" />
        <div className="macbook-base">
          <div className="macbook-notch" />
        </div>
      </div>
    </div>
  )
}

/* ================================================================
   MOBILE APP MOCKUP — Used inside iPhone/Android
   ================================================================ */
export function MobileAppMockup() {
  const [activeTab, setActiveTab] = useState('home')
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="mock-app">
      {/* Status bar */}
      <div className="mock-statusbar">
        <span>9:41</span>
        <div className="mock-statusbar-icons">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </div>
      </div>

      {/* Header */}
      <div className="mock-header">
        <div className="mock-avatar">
          <svg viewBox="0 0 76 76" width="18" height="18">
            <rect x="6" y="6" width="40" height="40" rx="10" fill="rgba(255,255,255,0.3)"/>
            <rect x="12" y="12" width="40" height="40" rx="10" fill="rgba(255,255,255,0.55)"/>
            <rect x="18" y="18" width="40" height="40" rx="10" fill="rgba(255,255,255,0.9)"/>
            <rect x="31" y="31" width="12" height="12" rx="3.5" fill="var(--primary)"/>
          </svg>
        </div>
        <div>
          <div className="mock-greeting">Welcome back</div>
          <div className="mock-username">Richard M.</div>
        </div>
        <button className="mock-notif" onClick={() => setShowModal(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          <span className="mock-notif-badge">3</span>
        </button>
      </div>

      {/* Content */}
      <div className="mock-content">
        {activeTab === 'home' && (
          <>
            {/* Quick Stats */}
            <div className="mock-stats">
              <div className="mock-stat">
                <div className="mock-stat-value">12</div>
                <div className="mock-stat-label">Projects</div>
              </div>
              <div className="mock-stat accent">
                <div className="mock-stat-value">98%</div>
                <div className="mock-stat-label">Uptime</div>
              </div>
              <div className="mock-stat">
                <div className="mock-stat-value">24/7</div>
                <div className="mock-stat-label">Support</div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="mock-section-title">Active Services</div>
            <div className="mock-card" onClick={() => setShowModal(true)}>
              <div className="mock-card-icon blue">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
              </div>
              <div className="mock-card-body">
                <div className="mock-card-title">Cloud Migration</div>
                <div className="mock-card-sub">In Progress - 78%</div>
              </div>
              <div className="mock-progress"><div className="mock-progress-fill" style={{width: '78%'}} /></div>
            </div>
            <div className="mock-card">
              <div className="mock-card-icon green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
              </div>
              <div className="mock-card-body">
                <div className="mock-card-title">Security Audit</div>
                <div className="mock-card-sub">Completed</div>
              </div>
              <svg className="mock-check" width="18" height="18" viewBox="0 0 24 24" fill="#22c55e"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
          </>
        )}
        {activeTab === 'projects' && (
          <>
            <div className="mock-section-title">My Projects</div>
            {['E-Commerce Platform', 'CRM Dashboard', 'Mobile Banking'].map((name, i) => (
              <div className="mock-card" key={name}>
                <div className="mock-card-icon blue" style={{opacity: 1 - i * 0.15}}>
                  <span style={{color:'#fff', fontSize:10, fontWeight:700}}>{i+1}</span>
                </div>
                <div className="mock-card-body">
                  <div className="mock-card-title">{name}</div>
                  <div className="mock-card-sub">{['Active','Review','Planning'][i]}</div>
                </div>
              </div>
            ))}
          </>
        )}
        {activeTab === 'chat' && (
          <div className="mock-chat-container">
            <div className="mock-section-title">Support Chat</div>
            <div className="mock-chat-messages">
              <div className="mock-chat-bubble them">Hi! How can we help you today?</div>
              <div className="mock-chat-bubble me">I need help with my cloud setup</div>
              <div className="mock-chat-bubble them">Sure! Let me connect you with our cloud team.</div>
            </div>
            <div className="mock-chat-input">
              <span>Type a message...</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="mock-tabbar">
        {[
          { id: 'home', icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', label: 'Home' },
          { id: 'projects', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z', label: 'Projects' },
          { id: 'chat', icon: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z', label: 'Chat' },
        ].map(tab => (
          <button
            key={tab.id}
            className={`mock-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={tab.icon}/></svg>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="mock-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="mock-modal" onClick={e => e.stopPropagation()}>
            <div className="mock-modal-header">
              <span>Project Details</span>
              <button onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="mock-modal-body">
              <div className="mock-modal-label">Cloud Migration</div>
              <div className="mock-modal-progress">
                <div className="mock-progress"><div className="mock-progress-fill" style={{width:'78%'}} /></div>
                <span>78%</span>
              </div>
              <div className="mock-modal-stats">
                <div><strong>8</strong><span>Tasks Done</span></div>
                <div><strong>3</strong><span>In Progress</span></div>
                <div><strong>1</strong><span>Pending</span></div>
              </div>
            </div>
            <button className="mock-modal-btn" onClick={() => setShowModal(false)}>View Full Report</button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ================================================================
   WEB APP MOCKUP — Used inside MacBook
   ================================================================ */
export function WebAppMockup() {
  const [activePage, setActivePage] = useState('dashboard')

  return (
    <div className="mock-webapp">
      {/* Sidebar */}
      <div className="mock-sidebar">
        <div className="mock-sidebar-logo">
          <svg viewBox="0 0 76 76" width="18" height="18">
            <rect x="6" y="6" width="40" height="40" rx="10" fill="rgba(255,255,255,0.3)"/>
            <rect x="12" y="12" width="40" height="40" rx="10" fill="rgba(255,255,255,0.55)"/>
            <rect x="18" y="18" width="40" height="40" rx="10" fill="rgba(255,255,255,0.9)"/>
            <rect x="31" y="31" width="12" height="12" rx="3.5" fill="var(--primary)"/>
          </svg>
        </div>
        {[
          { id: 'dashboard', icon: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', label: 'Dashboard' },
          { id: 'analytics', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z', label: 'Analytics' },
          { id: 'clients', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z', label: 'Clients' },
        ].map(item => (
          <button
            key={item.id}
            className={`mock-sidebar-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={item.icon}/></svg>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Main Area */}
      <div className="mock-main">
        {/* Top bar */}
        <div className="mock-topbar">
          <div className="mock-search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <span>Search projects, clients...</span>
          </div>
          <div className="mock-topbar-user">
            <div className="mock-topbar-avatar">
              <svg viewBox="0 0 76 76" width="14" height="14">
                <rect x="6" y="6" width="40" height="40" rx="10" fill="rgba(255,255,255,0.3)"/>
                <rect x="12" y="12" width="40" height="40" rx="10" fill="rgba(255,255,255,0.55)"/>
                <rect x="18" y="18" width="40" height="40" rx="10" fill="rgba(255,255,255,0.9)"/>
                <rect x="31" y="31" width="12" height="12" rx="3.5" fill="var(--primary)"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        {activePage === 'dashboard' && (
          <div className="mock-dashboard">
            <div className="mock-web-stats">
              <div className="mock-web-stat">
                <div className="mock-web-stat-icon blue">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                </div>
                <div><div className="stat-num">24</div><div className="stat-lbl">Projects</div></div>
              </div>
              <div className="mock-web-stat">
                <div className="mock-web-stat-icon green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/></svg>
                </div>
                <div><div className="stat-num">156</div><div className="stat-lbl">Clients</div></div>
              </div>
              <div className="mock-web-stat">
                <div className="mock-web-stat-icon orange">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                </div>
                <div><div className="stat-num">$2.4M</div><div className="stat-lbl">Revenue</div></div>
              </div>
            </div>
            {/* Chart mockup */}
            <div className="mock-chart">
              <div className="mock-chart-title">Revenue Overview</div>
              <div className="mock-chart-bars">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                  <div key={i} className="mock-bar-col">
                    <div className="mock-bar" style={{height: `${h}%`}} />
                    <span>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === 'analytics' && (
          <div className="mock-dashboard">
            <div className="mock-chart">
              <div className="mock-chart-title">Performance Metrics</div>
              <div className="mock-donut-row">
                <div className="mock-donut">
                  <svg viewBox="0 0 36 36">
                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--app-accent)" strokeWidth="3"/>
                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="95, 100"/>
                  </svg>
                  <div className="mock-donut-label">95%<span>Uptime</span></div>
                </div>
                <div className="mock-donut">
                  <svg viewBox="0 0 36 36">
                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--app-accent)" strokeWidth="3"/>
                    <path d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="87, 100"/>
                  </svg>
                  <div className="mock-donut-label">87%<span>Satisfaction</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === 'clients' && (
          <div className="mock-dashboard">
            <div className="mock-chart-title" style={{marginBottom: 8}}>Recent Clients</div>
            {['Acme Corp', 'TechFlow Inc', 'DataBridge Ltd'].map((name, i) => (
              <div className="mock-client-row" key={name}>
                <div className="mock-client-avatar">{name[0]}</div>
                <div className="mock-client-info">
                  <div className="mock-client-name">{name}</div>
                  <div className="mock-client-role">{['Enterprise','Startup','SMB'][i]}</div>
                </div>
                <div className={`mock-client-status ${['active','active','pending'][i]}`}>
                  {['Active','Active','Pending'][i]}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ================================================================
   AI APP MOCKUP — AI Chat/Agent Interface
   ================================================================ */
export function AIAppMockup() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I\'m your RM CONSULT AI assistant. How can I help you today?' },
    { role: 'user', text: 'Analyze our server performance for the last week' },
  ])
  const [typing, setTyping] = useState(true)
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setTyping(false)
      setShowResponse(true)
    }, 2000)
    return () => clearTimeout(t1)
  }, [])

  return (
    <div className="mock-ai">
      {/* AI Header */}
      <div className="mock-ai-header">
        <div className="mock-ai-logo">
          <svg viewBox="0 0 76 76" width="20" height="20">
            <rect x="6" y="6" width="40" height="40" rx="10" fill="rgba(255,255,255,0.3)"/>
            <rect x="12" y="12" width="40" height="40" rx="10" fill="rgba(255,255,255,0.55)"/>
            <rect x="18" y="18" width="40" height="40" rx="10" fill="rgba(255,255,255,0.9)"/>
            <rect x="31" y="31" width="12" height="12" rx="3.5" fill="var(--primary)"/>
          </svg>
        </div>
        <div>
          <div className="mock-ai-name">RM AI Assistant</div>
          <div className="mock-ai-status">
            <span className="mock-ai-dot" />
            Online
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="mock-ai-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`mock-ai-msg ${msg.role}`}>
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="mock-ai-msg ai">
            <div className="mock-typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        {showResponse && (
          <div className="mock-ai-msg ai analysis">
            <div className="mock-ai-analysis-title">Server Performance Report</div>
            <div className="mock-ai-metric-grid">
              <div className="mock-ai-metric">
                <div className="metric-val up">99.8%</div>
                <div className="metric-lbl">Uptime</div>
              </div>
              <div className="mock-ai-metric">
                <div className="metric-val">42ms</div>
                <div className="metric-lbl">Avg Response</div>
              </div>
              <div className="mock-ai-metric">
                <div className="metric-val up">+23%</div>
                <div className="metric-lbl">Throughput</div>
              </div>
              <div className="mock-ai-metric">
                <div className="metric-val down">-15%</div>
                <div className="metric-lbl">Error Rate</div>
              </div>
            </div>
            <div className="mock-ai-summary">All systems operating within optimal parameters. Recommendation: scale up Node 3 for anticipated traffic spike next Tuesday.</div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="mock-ai-input">
        <span>Ask anything...</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary)"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </div>
    </div>
  )
}
