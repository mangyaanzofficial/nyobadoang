 "use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Code2, Command,
  ExternalLink, Github, Globe2, Layers3, Menu, MessageCircle, Monitor,
  Send, Smartphone, Sparkles, Terminal, X, Zap
} from "lucide-react";

const CONFIG = {
  name: "Yaanz Official",
  role: "Developer & Digital Creator",
  brand: "SANTANIC STORE",
  team: "SANTANIC ENTERTAINMENT",
  telegram: "https://t.me/YaanzNotDev",
  whatsappChannel: "https://whatsapp.com/channel/0029VbDJyjCGk1Fzuy7Bkq2h",
  email: "hello@santanic.id", // Ganti dengan email aktif milikmu.
};

const projects = [
  {
    number: "01", type: "DIGITAL COMMERCE", title: "SANTANIC STORE",
    description: "Ekosistem toko digital untuk produk, layanan, dan kebutuhan digital.",
    tags: ["E-commerce", "Web Design", "Automation"], url: "https://santanicstore.yogz.web.id",
    visual: "store"
  },
  {
    number: "02", type: "PAYMENT & TOP UP", title: "SANTANIC PPOB",
    description: "Platform layanan top up dan pembayaran digital dengan pengalaman transaksi yang ringkas.",
    tags: ["PPOB", "API Integration", "Dashboard"], url: "https://santanic-store-ppob.vercel.app",
    visual: "ppob"
  },
  {
    number: "03", type: "WEB DEVELOPMENT", title: "SANTANIC PORTFOLIO",
    description: "Ruang digital untuk menampilkan karya, layanan, dan identitas SANTANIC.",
    tags: ["Portfolio", "Responsive", "UI/UX"], url: "https://portofolio-santanic.vercel.app",
    visual: "portfolio"
  },
  {
    number: "04", type: "DIGITAL PRODUCT", title: "SANTANIC SCRIPT FREE",
    description: "Kumpulan script dan resource digital untuk komunitas developer.",
    tags: ["Resources", "Community", "Web"], url: "https://santanicscriptfree.vercel.app",
    visual: "scripts"
  }
];

const skills = [
  { title: "FRONTEND", items: ["HTML & CSS", "JavaScript", "Responsive UI", "Tailwind CSS"] },
  { title: "BACKEND & TOOLS", items: ["Node.js", "REST API", "Git & GitHub", "Vercel"] },
  { title: "DIGITAL SYSTEM", items: ["Bot Automation", "API Integration", "Pterodactyl", "Deployment"] }
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={`project-visual ${kind}`}>
      <div className="visual-top"><span className="visual-dot" /><span className="visual-dot" /><span className="visual-dot" /><span className="visual-address">santanic.id / preview</span></div>
      {kind === "store" && <div className="visual-store"><span className="mini-label">SANTANIC / DIGITAL STORE</span><strong>Everything<br />Digital.</strong><div className="visual-pill">EXPLORE PRODUCTS <ArrowUpRight size={12}/></div><div className="visual-orb" /></div>}
      {kind === "ppob" && <div className="visual-dashboard"><div className="dash-side">S<span>•</span><span>⌂</span><span>▦</span><span>◈</span></div><div className="dash-main"><span className="mini-label">DASHBOARD / 01</span><strong>Top up, simplified.</strong><div className="dash-balance"><small>YOUR BALANCE</small><b>Rp 250.000</b></div><div className="dash-tiles"><i/><i/><i/></div></div></div>}
      {kind === "portfolio" && <div className="visual-profile"><div className="profile-circle">Y.</div><span className="mini-label">INDEPENDENT DEVELOPER</span><strong>Ideas into<br/>digital reality<span>.</span></strong><div className="profile-line"/></div>}
      {kind === "scripts" && <div className="visual-code"><div className="mini-label">SANTANIC / RESOURCES</div><strong>Build something<br/>useful<span>.</span></strong><div className="code-lines"><i/><i/><i/><i/></div><span className="code-chip">{"</>"} SCRIPT LIBRARY</span></div>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 550);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const fade = reduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 }, variants: reveal };

  return (
    <main>
      <div className={`loader ${loaded ? "loader-done" : ""}`} aria-hidden="true">
        <div className="loader-mark">S<span>.</span></div><div className="loader-track"><i/></div><small>INITIALIZING EXPERIENCE</small>
      </div>

      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" aria-label="SANTANIC home"><span className="brand-symbol">S<span>.</span></span><span className="brand-copy">SANTANIC<small>ENTERTAINMENT</small></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Works</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-contact">Let&apos;s talk <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-grid">
          <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .65 }}>
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS <span className="eyebrow-line"/></div>
            <h1>Crafting digital<br/>experiences<span className="outline-word"> that matter.</span></h1>
            <p className="hero-description">I&apos;m <b>Yaanz Official</b> — developer and digital creator behind <b>SANTANIC</b>. I turn ideas into functional, thoughtful digital experiences.</p>
            <div className="hero-actions"><a className="button button-light" href="#work">Explore my work <ArrowUpRight size={16}/></a><a className="text-link" href="#about">More about me <ArrowDownRight size={16}/></a></div>
            <div className="hero-meta"><span>BASED IN INDONESIA</span><span className="meta-divider"/><span>BUILDING ON THE INTERNET <Asterisk size={13}/></span></div>
          </motion.div>
          <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: .92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .8 }}>
            <div className="art-grid"/>
            <div className="art-ring ring-one"/><div className="art-ring ring-two"/>
            <div className="art-core"><span className="core-top">SANTANIC / 001</span><strong>Y<span>.</span></strong><span className="core-bottom">DEVELOPER<br/>MINDSET</span></div>
            <div className="art-float float-code"><Terminal size={15}/><span>const idea = build();</span></div>
            <div className="art-float float-status"><span className="status-dot"/> SYSTEM ONLINE</div>
            <div className="art-index">FIG. 01 — DIGITAL IDENTITY</div>
          </motion.div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><div className="scroll-line"><i/></div><span>01 / 08</span></div>
      </section>

      <div className="marquee" aria-label="SANTANIC Entertainment"><div className="marquee-track">{Array.from({length: 4}).map((_, i) => <span key={i}>DESIGN <Asterisk/> DEVELOP <Asterisk/> DEPLOY <Asterisk/> REPEAT <Asterisk/></span>)}</div></div>

      <section className="section section-wrap about-section" id="about">
        <motion.div {...fade} className="section-heading"><span className="section-index">01 / ABOUT</span><span className="section-kicker">A LITTLE INTRODUCTION</span></motion.div>
        <motion.div {...fade} className="about-grid">
          <h2>Curiosity is where<br/>every <span>great build</span><br/>begins.</h2>
          <div className="about-text"><p className="large-copy">I&apos;m a developer who enjoys exploring technology, building useful digital products, and learning by creating.</p><p>Through SANTANIC STORE and SANTANIC ENTERTAINMENT, I work across websites, digital services, automation, and connected systems. My focus is simple: make technology feel useful, clear, and accessible.</p><a href="#contact" className="under-link">Have a project in mind? <ArrowUpRight size={15}/></a></div>
        </motion.div>
        <div className="about-stats">
          <div><strong>01<span>+</span></strong><small>CREATIVE ECOSYSTEM</small></div>
          <div><strong>WEB<span>/</span>API</strong><small>AREAS OF INTEREST</small></div>
          <div><strong>∞</strong><small>ROOM TO EXPLORE</small></div>
        </div>
      </section>

      <section className="section section-wrap work-section" id="work">
        <motion.div {...fade} className="section-heading"><span className="section-index">02 / SELECTED WORK</span><span className="section-kicker">A FEW THINGS I&apos;VE BUILT</span></motion.div>
        <motion.div {...fade} className="work-intro"><h2>Selected works<span>.</span></h2><p>Digital products and experiments shaped by curiosity, iteration, and a love for building.</p></motion.div>
        <div className="projects-grid">
          {projects.map((project, index) => <motion.article key={project.number} {...fade} transition={{ duration: .55, delay: index * .07 }} className="project-card">
            <a href={project.url} target="_blank" rel="noreferrer" className="project-link" aria-label={`Open ${project.title}`}>
              <ProjectVisual kind={project.visual}/>
              <div className="project-info"><div className="project-overline"><span>{project.number} / {project.type}</span><ArrowUpRight size={17}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </a>
          </motion.article>)}
        </div>
        <div className="work-foot"><span>MORE IDEAS ARE ALWAYS IN PROGRESS.</span><span>SELECTED PROJECTS / 2024—2026</span></div>
      </section>

      <section className="section section-wrap skills-section" id="skills">
        <motion.div {...fade} className="section-heading"><span className="section-index">03 / CAPABILITIES</span><span className="section-kicker">TOOLS ARE JUST THE BEGINNING</span></motion.div>
        <motion.div {...fade} className="skills-intro"><h2>Built with the<br/><span>right tools.</span></h2><p>I keep learning, testing, and refining my workflow. These are some of the technologies and areas I explore while bringing ideas to life.</p></motion.div>
        <div className="skills-grid">{skills.map((group, i) => <motion.div {...fade} key={group.title} className="skill-card"><div className="skill-card-top"><span>0{i+1}</span>{i === 0 ? <Code2/> : i === 1 ? <Layers3/> : <Zap/>}</div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><span className="skill-bullet"/> {item}</li>)}</ul></motion.div>)}</div>
      </section>

      <section className="section section-wrap journey-section" id="journey">
        <motion.div {...fade} className="section-heading"><span className="section-index">04 / THE JOURNEY</span><span className="section-kicker">ALWAYS IN PROGRESS</span></motion.div>
        <motion.div {...fade} className="journey-grid"><div><h2>Learn by doing.<br/><span>Grow by building.</span></h2><p>Every project is a chance to understand something new. The journey is less about having all the answers and more about staying curious enough to find better ones.</p></div>
          <div className="timeline">
            <div className="timeline-item"><span className="timeline-year">THE BEGINNING</span><div><h3>Curiosity turned into code</h3><p>Started exploring web development, digital tools, and how things work behind the screen.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">BUILDING</span><div><h3>Growing SANTANIC</h3><p>Developing digital services, websites, and tools while learning through real projects.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">WHAT&apos;S NEXT</span><div><h3>More to create</h3><p>Exploring better systems, stronger interfaces, and new ideas worth bringing to life.</p></div></div>
          </div>
        </motion.div>
      </section>

      <section className="section section-wrap services-section" id="services">
        <motion.div {...fade} className="section-heading"><span className="section-index">05 / WHAT I DO</span><span className="section-kicker">FROM CONCEPT TO LAUNCH</span></motion.div>
        <motion.div {...fade} className="services-head"><h2>Turning ideas<br/>into <span>something real.</span></h2><p>Practical digital solutions, built with attention to detail and a focus on usability.</p></motion.div>
        <div className="service-list">
          <div><span>01</span><Monitor/><h3>Website Development</h3><p>Responsive websites and landing pages with a clear visual identity.</p><ArrowUpRight/></div>
          <div><span>02</span><Command/><h3>Bot & Automation</h3><p>Useful automated workflows and bot-based digital experiences.</p><ArrowUpRight/></div>
          <div><span>03</span><Globe2/><h3>API Integration</h3><p>Connecting services and systems to make digital processes work together.</p><ArrowUpRight/></div>
          <div><span>04</span><Smartphone/><h3>Digital Solutions</h3><p>Exploring practical tools and services for everyday digital needs.</p><ArrowUpRight/></div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <motion.div {...fade} className="contact-panel"><div className="contact-orbit orbit-a"/><div className="contact-orbit orbit-b"/>
          <div className="contact-content"><span className="section-index">06 / GET IN TOUCH</span><span className="contact-overline"><Sparkles size={14}/> HAVE AN IDEA?</span><h2>Let&apos;s make<br/>it <span>happen.</span></h2><p>Have a project, collaboration, or just want to say hello? My inbox is open.</p>
            <a className="button button-light contact-button" href={CONFIG.telegram} target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight size={16}/></a>
          </div>
          <div className="contact-side"><span>DIRECT CHANNELS</span><a href={CONFIG.telegram} target="_blank" rel="noreferrer"><Send size={16}/> Telegram <ArrowUpRight size={14}/></a><a href={CONFIG.whatsappChannel} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp Channel <ArrowUpRight size={14}/></a><a href={`mailto:${CONFIG.email}`}><Globe2 size={16}/> {CONFIG.email} <ArrowUpRight size={14}/></a><small>For business inquiries and collaborations.</small></div>
        </motion.div>
      </section>

      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-symbol">S<span>.</span></span><span className="brand-copy">SANTANIC<small>ENTERTAINMENT</small></span></a><span className="footer-note">DESIGNED & BUILT WITH CURIOSITY.</span><div className="footer-right"><span>© {new Date().getFullYear()} YAANZ OFFICIAL</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
