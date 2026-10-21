import { Fragment, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Menu } from 'lucide-react';
import Motion from './Motion';
import Interactive from './Interactive';
import OpeningRitual from './OpeningRitual';
import DivineVeil from './DivineVeil';
import FabricVeil from './FabricVeil';
import HeroIntro from './HeroIntro';
import DivineFigure from './DivineFigure';
import { Rangoli, Halo } from './Sacred';
import Modal from './Modal';

function Lotus({ className = '' }: { className?: string }) { 
  return <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M32 8C15 24 23 41 32 49C41 41 49 24 32 8ZM32 49C16 49 7 36 9 23C22 25 31 36 32 49ZM32 49C48 49 57 36 55 23C42 25 33 36 32 49ZM13 51Q32 62 51 51" stroke="currentColor" strokeWidth="1.2"/></svg>; 
}
function TextLink({ href, children }: { href: string; children: React.ReactNode }) { 
  return <a className="text-link" href={href}>{children}<ArrowUpRight size={17}/></a>; 
}
function SplitWord({ text }: { text: string }) { 
  return <span aria-hidden="true">{text.split('').map((c, i) => <span key={i} className={c === ' ' ? 'char space' : 'char'}>{c === ' ' ? ' ' : c}</span>)}</span>; 
}

const nav = [['The Legend', '#story'], ['Rituals', '#craft'], ['Divine Essence', '#essence']];
const ribbonOne = 'VICTORY ✧ DHARMA ✧ TRIUMPH ✧ ';
const ribbonTwo = 'LIGHT ✧ COURAGE ✧ JOY ✧ PROSPERITY ✧ ';

function Ribbon({ text }: { text: string }) { 
  return <p className="ribbon-text">{text.repeat(2).split('✧').map((part, i, all) => <Fragment key={i}>{part}{i < all.length - 1 && <span>✧</span>}</Fragment>)}</p>; 
}

export default function Experience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [info, setInfo] = useState<string | null>(null);
  const [motionPaused, setMotionPaused] = useState(false);
  const [replay, setReplay] = useState(0);

  return (
    <div className={motionPaused ? 'site motion-paused' : 'site'}>
      
      <style>{`
        .char { display: inline-block !important; }
        .char.space { width: 0.25em !important; }
        .footer-giant { display: flex !important; flex-direction: row !important; justify-content: center !important; opacity: 1 !important; visibility: visible !important; font-size: 10.5vw !important; white-space: nowrap !important; letter-spacing: -0.02em !important; }
        .footer-giant > span { display: block !important; }
      `}</style>

      <OpeningRitual replay={replay} />
      <Motion replay={replay} />
      <Interactive paused={motionPaused} />
      <FabricVeil paused={motionPaused} />
      <a href="#story" className="skip-link">Skip to celebrations</a>
      
      <header className="header">
        <a className="wordmark" href="#home" aria-label="Vijayadashami home">
          <Lotus />
          <span>VIJAYADASHAMI<small>CELEBRATING DIVINE VICTORY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([text, link]) => <a key={link} href={link}>{text}</a>)}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-haspopup="dialog" data-magnetic>
          <span>Explore</span><Menu size={19} />
        </button>
      </header>

      <main>
        <HeroIntro onReplay={() => { window.scrollTo({ top: 0, behavior: 'instant' }); setReplay(v => v + 1); }} paused={motionPaused} onToggleMotion={() => setMotionPaused(v => !v)} />
        
        <DivineVeil fabric="agni" verse="यत्र धर्मस्तत्र जयः" translit="Yatra Dharmastatra Jayah" meaning="Where there is Dharma, there is Victory." />

        <section className="editorial editorial-v2 section-pad" data-rise-chapter data-rise-start="top 45%" data-rise-end="top -25%" id="story" aria-labelledby="editorial-title">
          <div className="cursor-light divine-light" data-light aria-hidden="true" />
          <div className="section-topline"><span>01 / THE LEGEND</span><span>TRIUMPH OF LIGHT OVER DARKNESS</span></div>
          <div className="editorial-heading">
            <p className="script" data-reveal>A timeless celebration</p>
            <h2 className="editorial-title" id="editorial-title" aria-label="Triumph of Divine.">
              <SplitWord text="TRIUMPH" /><SplitWord text="OF DIVINE." />
            </h2>
          </div>
          <div className="editorial-composition">
            <div className="editorial-aside" data-reveal>
              <span className="mini-label">MORE THAN A FESTIVAL.</span>
              <p>The burning of ego.<br />The victory of truth.</p>
              <Lotus className="aside-lotus" />
            </div>
            <figure className="editorial-portrait">
              <div className="divine-halo" data-depth="-14"><div className="divine-halo-glow" /><Halo spin={80} /></div>
              <img src="/assets/generated/ramji1.png" alt="Lord Ram portrait" width={1024} height={1536} loading="eager" fetchPriority="high" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              <figcaption>THE DIVINE PRESENCE — A PORTRAIT OF GRACE</figcaption>
            </figure>
            <div className="editorial-note" data-reveal>
              <p>Rooted in ancient wisdom.</p>
              <p className="body-small">An exploration of Dashera rituals, the beauty of devotion, and the strength that conquers all inner demons.</p>
            </div>
          </div>
        </section>

        <section className="monochrome" id="her-story" aria-labelledby="monochrome-title" data-rise-chapter>
          <div className="monochrome-frame">
            <img className="monochrome-photo" data-rise-panel src="/assets/generated/ramji.png" alt="Devotional portrait" width="1672" height="941" loading="lazy" />
            <div className="cursor-light mono-light" data-light aria-hidden="true" />
            <p className="portrait-caption caption-left">HE DOES NOT<br />SIMPLY RULE.</p>
            <p className="portrait-caption caption-right">HE CARRIES<br />THE STRENGTH OF<br />THE ENTIRE<br />UNIVERSE.</p>
            <Lotus className="portrait-lotus" />
          </div>
          <div className="monochrome-story section-pad">
            <div className="monochrome-story-title">
              <h2 id="monochrome-title" data-reveal>HE CARRIES<br /><em>DHARMA.</em></h2>
              <span>[ THE DIVINE PROTECTOR ]</span>
            </div>
            <div className="monochrome-story-grid">
              <span className="eyebrow">THE POWER THAT PROTECTS US</span>
              <img src="/assets/generated/ram-5.png" alt="Devotional ritual details" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              <div>
                <p>A memory in the flame. The Lord's grace in the blessings. The quiet strength of generations, carried into a new beginning.</p>
                <p>Rooted. Fearless. Entirely victorious.</p>
                <TextLink href="#essence">The spirit of Dharma</TextLink>
            </div>
            </div>
          </div>
        </section>

        <section className="craft craft-v2 section-pad" data-rise-chapter id="craft" aria-labelledby="craft-title">
          <canvas className="thread-canvas" data-thread aria-hidden="true" />
          <div className="section-topline"><span>02 / THE RITUALS OF VICTORY</span><span>IN PRAISE OF THE SACRED FLAME</span></div>
          <div className="craft-grid">
            <div className="craft-visual">
              <img src="/assets/generated/ram-3.png" className="craft-rising-woman" alt="Ram" style={{objectFit:'contain', height:'100%', width:'100%', position:'absolute', left:'-9%', bottom:'30px', zIndex:2}}/>
              <figure className="craft-fabric">
                <img className="parallax-photo" data-parallax="" src="/assets/generated/ram-3.png" alt="Close-up" loading="lazy" />
                <figcaption>01 — A LANGUAGE WRITTEN IN FIRE</figcaption>
              </figure>
              <figure className="craft-inset" data-reveal>
                <img src="/assets/generated/laxman-2.png" alt="Lord Laxman" loading="lazy" style={{ width: '100%', height: 'auto', objectFit: 'contain', aspectRatio: 'auto' }} />
                <figcaption>THE BEAUTY OF DEVOTION</figcaption>
              </figure>
            </div>
            <div className="craft-copy">
              <p className="eyebrow" data-reveal>EVERY FLAME, A REMEMBRANCE.</p>
              <h2 id="craft-title" data-reveal>Some victories<br />are not fought.<br /><em>They are invoked.</em></h2>
              <div className="craft-copy-bottom" data-reveal>
                <span className="index">∞</span>
                <div>
                  <p>Every mantra carries a story. Every flame preserves a legacy. Every prayer becomes an expression of inner strength.</p>
                  <p className="body-small">From the rhythm of the aarti to the way the sacred fire catches the light, Dashera holds a beautiful conversation between the soul and the divine.</p>
                  <TextLink href="#essence">Discover our inspiration</TextLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DivineVeil fabric="vijay" verse="रामो विग्रहवान् धर्मः" translit="Ramo Vigrahavaan Dharmah" meaning="Lord Rama is the very embodiment of Dharma." />

        <section className="divine" id="essence" aria-labelledby="divine-title">
          <div className="divine-stage">
            <div className="divine-top"><span>03 / THE DIVINE SPIRIT</span><Lotus /><span>STRENGTH. BEAUTY. GRACE.</span></div>
            <h2 className="divine-title" id="divine-title">
              <span className="divine-word-one">JAI SHRI</span>
              <span className="divine-word-two">RAM</span>
            </h2>
            <div className="divine-colour-wipe" aria-hidden="true" />
            <div className="divine-aura" aria-hidden="true"><Rangoli spin={-90} /></div>
            <div className="divine-image" data-depth="10"><DivineFigure name="ramji2" className="ram-figure" /></div>
            <div className="divine-statement">
              <span className="eyebrow">IN REVERENCE TO LORD RAM.</span>
              <p>Lord Ram — the ultimate embodiment of courage, compassion, and dharma. A moment of devotion to the divine protector, and the strength that conquers all inner demons.</p>
              <a href="#manifesto" aria-label="Continue" data-magnetic><ArrowDown size={20} /></a>
            </div>
          </div>
        </section>

        <DivineVeil fabric="pushp" verse="विजया दशमी शुभं भवतु" translit="Vijaya Dashami Shubham Bhavatu" meaning="May this Vijayadashami bring eternal auspiciousness and triumph." />

        <section className="manifesto manifesto-v2 section-pad" data-rise-chapter data-rise-start="top 35%" data-rise-end="top -30%" id="manifesto" aria-labelledby="manifesto-title">
          <span className="eyebrow" data-reveal>06 / OUR BELIEF</span>
          <div className="manifesto-devotion">
            <div className="manifesto-mandala" data-depth="-16" aria-hidden="true"><Rangoli spin={50} /></div>
            <div className="manifesto-window"><DivineFigure name="ram-3" decorative /></div>
          </div>
          <p className="devotion-caption">WITH THE BLESSINGS OF LORD RAM</p>
          <h2 id="manifesto-title">
            <span className="mf-line mf-left">Not just a festival.</span>
            <span className="mf-line mf-right"><em>A spiritual awakening.</em></span>
          </h2>
          <p className="manifesto-copy" data-reveal>
            For the soul that carries its roots with it.<br />
            Who honours the past, and makes the present victorious.<br />
            Who does not just celebrate a story. They become it.
          </p>
          <div className="manifesto-rule" />
        </section>

        <div className="text-ribbon" aria-hidden="true">
          <div className="marquee-row" data-marquee="1"><div className="marquee-track"><Ribbon text={ribbonOne} /><Ribbon text={ribbonOne} /></div></div>
          <div className="marquee-row marquee-outline" data-marquee="-1"><div className="marquee-track"><Ribbon text={ribbonTwo} /><Ribbon text={ribbonTwo} /></div></div>
        </div>
      </main>

      <footer className="footer footer-v2">
        <div className="footer-mandala" data-depth="-24" aria-hidden="true"><Rangoli spin={110} /></div>
        <div className="footer-blessing section-pad">
          <Lotus className="footer-lotus" />
          <p>May every flame you light<br /><em>carry a blessing.</em></p>
        </div>
        <div className="footer-main section-pad">
          <div className="footer-col footer-about">
            <a href="#home" className="footer-brand">VIJAYADASHAMI<small>CELEBRATING DIVINE VICTORY.</small></a>
            <p>A devotional love letter to the festival, to heritage, and to the quiet strength of the divine spirit.</p>
          </div>
          <div className="footer-col footer-links-col">
            <span>EXPLORE</span>
            {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div className="footer-col footer-links-col">
            <span>THE TRADITION</span>
            <a href="#craft">The rituals of victory</a>
            <a href="#manifesto">Our philosophy</a>
            <button onClick={() => setInfo('Contact the house')}>Contact</button>
            <button onClick={() => setInfo('Our social journal')}>Instagram ↗</button>
          </div>
          <div className="footer-col footer-back">
            <a href="#home" className="back-top" aria-label="Back to top" data-magnetic>
              <svg className="back-top-ring" data-spin={18} viewBox="0 0 120 120" aria-hidden="true">
                <defs><path id="back-top-path" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
                <text><textPath href="#back-top-path" textLength="285">BACK TO TOP ✧ JAI SHRI RAM ✧ </textPath></text>
              </svg>
              <ArrowUp size={21} />
            </a>
          </div>
        </div>
        <div className="footer-giant" aria-hidden="true">
          {'VIJAYADASHAMI'.split('').map((c, i) => <span key={i}><b>{c}</b></span>)}
        </div>
        <div className="footer-bottom section-pad">
          <span>© 2026 VIJAYADASHAMI · A DEVOTIONAL CONCEPT</span>
          <div>
            <button onClick={() => setInfo('About this concept')}>About & credits</button>
            <button onClick={() => setInfo('Privacy')}>Privacy</button>
            <span>MADE OF FAITH.</span>
          </div>
        </div>
      </footer>

      <Modal open={menuOpen} onClose={() => setMenuOpen(false)} title="Navigation" className="menu-modal">
        <Lotus className="menu-lotus" /><span className="eyebrow">VIJAYADASHAMI</span>
        <nav aria-label="Expanded navigation">
          {[...nav, ['The rituals', '#craft']].map(([label, href], i) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight size={30} /></a>
          ))}
        </nav>
        <p>Rooted in ancient wisdom.</p>
      </Modal>

      <Modal open={info !== null} onClose={() => setInfo(null)} title={info || 'Information'} className="info-modal">
        <Lotus /><span className="eyebrow">VIJAYADASHAMI</span><h2>{info}</h2>
        {info === 'Contact the house' ? (
          <>
            <p>Our contact details will be announced here.</p>
            <p className="body-small">This is an independent devotional concept.</p>
          </>
        ) : info === 'Our social journal' ? (
          <>
            <p>A space for future stories.</p>
          </>
        ) : info === 'Privacy' ? (
          <p>This concept has no accounts, checkout, analytics or contact submissions. Inspiration selections are held only in the page’s memory and reset on reload.</p>
        ) : (
          <>
            <p>VIJAYADASHAMI is a proposed creative identity, exploring Indian festivals and the victory of dharma.</p>
            <p className="body-small">The animated figures, Lord Ram artwork and recreated portraits are AI-generated concept imagery.</p>
          </>
        )}
      </Modal>
    </div>
  );
}