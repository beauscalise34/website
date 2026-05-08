import { Link } from 'react-router-dom'

const GOLD = 'oklch(78% .14 85)'
const CARD = 'oklch(13% .006 260)'
const CARD_ALT = 'oklch(11% .005 260)'
const MUTED = 'oklch(55% .01 260)'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: '5rem 0 3.5rem', borderBottom: '1px solid oklch(100% 0 0 / 0.08)' }}>
        <div className="container">
          <span className="label-text">ABOUT APEX EPOXY</span>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', maxWidth: 700, marginBottom: '1.25rem', lineHeight: 1.1, textTransform: 'uppercase' }}>
            THE FOUNDERS OF APEX EPOXY
          </h1>
          <p style={{ color: 'oklch(95% .005 65 / 0.55)', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.7 }}>
            Two Cypress guys who got tired of seeing homeowners ripped off by DIY kits and high-pressure franchise companies.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                name: 'BEAU SCALISE',
                role: 'Founding Partner & Principal Installer',
                bio: 'Beau brings hands-on expertise and an obsessive attention to detail to every project. He personally oversees surface preparation and coating application on every job, ensuring the highest quality result.',
              },
              {
                name: 'HADEN MCDADE',
                role: 'Founding Partner & Operations',
                bio: 'Haden manages client relationships, project scheduling, and quality control. He\'s the first call you make and the last person to sign off on your finished floor — making sure you\'re 100% satisfied.',
              },
            ].map(f => (
              <div key={f.name} style={{ background: CARD, border: '1px solid oklch(100% 0 0 / 0.08)', padding: '2rem' }}>
                <div style={{ width: 64, height: 64, background: 'oklch(100% 0 0 / 0.05)', border: '1px solid oklch(100% 0 0 / 0.08)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  👤
                </div>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '1.4rem', color: GOLD, textTransform: 'uppercase', marginBottom: '0.35rem' }}>{f.name}</h2>
                <span className="label-text" style={{ marginBottom: '1rem' }}>{f.role}</span>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: MUTED, fontSize: '0.95rem', lineHeight: 1.7 }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: '5rem 0', background: CARD_ALT }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="label-text">OUR STORY</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            FOUNDED IN CYPRESS, BUILT FOR HOUSTON
          </h2>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Apex Epoxy was started by Beau Scalise and Haden McDade — two Cypress residents who saw firsthand how many homeowners were either paying premium prices to franchise companies (who then subcontracted the work) or getting burned by bargain-bin installers using watered-down epoxy that peeled within a year.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We decided to do it right. That means using only 100% solids industrial epoxy — not the diluted box-store stuff. It means diamond grinding every slab before we coat it, because a coating is only as good as the bond to the concrete. And it means one of us is on every single job, from the initial assessment through final coat. No foremen, no subcontractors, no franchisees.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We're based in Cypress (77429 &amp; 77433) and serve customers throughout the Greater Houston area — Katy, The Woodlands, Spring, Sugar Land, Tomball, and everywhere in between. When you call us, you reach one of the owners. When we show up, it's us doing the work.
          </p>
          <p style={{ color: MUTED, lineHeight: 1.8 }}>
            Our 10-year written warranty isn't a marketing gimmick — it's a reflection of how confident we are in the systems we install. We stand behind every job we do.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <span className="label-text">HOW WE OPERATE</span>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'white', textTransform: 'uppercase', marginBottom: '2rem' }}>
            OUR VALUES
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🏆', title: 'Quality Without Compromise', desc: 'We use only 100% solids industrial epoxy and proper surface preparation on every job. No shortcuts, no substitutions.' },
              { icon: '👤', title: 'Personal Accountability', desc: 'Beau and Haden put their name on every install. We stand behind every floor we coat — period.' },
              { icon: '🔨', title: 'Founder-Led Every Job', desc: 'The person you talk to on the phone is the same person installing your floor. No hand-offs, ever.' },
              { icon: '💬', title: 'Free Estimates Without Pressure', desc: 'We give honest assessments and written quotes. No pressure tactics, no bait-and-switch, no upsells on install day.' },
            ].map(v => (
              <div key={v.title} style={{ background: CARD, border: '1px solid oklch(100% 0 0 / 0.07)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'white', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{v.title}</h3>
                <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: GOLD }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#000', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            LET'S TALK ABOUT YOUR PROJECT
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', marginBottom: '2rem', maxWidth: 460, margin: '0 auto 2rem' }}>
            Reach out directly — you'll talk to Beau or Haden, not a call center.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:7132014005" style={{ display: 'inline-flex', alignItems: 'center', background: '#000', color: GOLD, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', textDecoration: 'none' }}>
              CALL (713) 201-4005
            </a>
            <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', background: 'transparent', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.85rem 2rem', border: '2px solid #000', textDecoration: 'none' }}>
              FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
