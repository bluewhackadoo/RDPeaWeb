/* global React, Icon, Button, Badge, Eyebrow, GlassCard */
const { useState: useStateSupport } = React;

// TODO: replace with real sponsors URL when provided
const SPONSORS_URL = 'https://github.com/sponsors/bluewhackadoo';

const MONTHLY_TIERS = [
  {
    price: '$5',
    priceSub: '/mo',
    title: 'Sponsor',
    body: 'A Sponsor badge on your GitHub profile and a spot in the project credits.',
    perks: ['Sponsor badge on your profile', 'Listed in CREDITS.md'],
    cta: 'Sponsor $5 / mo',
    accent: 'var(--primary-400)',
  },
  {
    price: '$25',
    priceSub: '/mo',
    title: 'Backer',
    body: 'Your logo or name goes in the project README. Keeps the lights on.',
    perks: ['Logo or name in project README', 'Everything in Sponsor', 'Early builds two weeks ahead'],
    cta: 'Back $25 / mo',
    accent: 'var(--pea-400)',
    featured: true,
  },
];

const ONETIME_TIERS = [
  {
    price: '$10',
    priceSub: 'one‑time',
    title: 'Shoutout',
    body: 'A one‑off tip and a shoutout on Twitter. Small but appreciated.',
    perks: ['Shoutout on Twitter', 'Thank‑you note'],
    cta: 'Tip $10',
    accent: '#f87171',
  },
  {
    price: '$350',
    priceSub: 'one‑time',
    title: 'Bug or small feature',
    body: 'Prioritise one bug fix or a small feature of your choosing. Scope agreed up front.',
    perks: ['One bug or small feature', 'Direct contact during work', 'Public changelog mention'],
    cta: 'Fund $350',
    accent: 'var(--primary-400)',
  },
];

function SupportSection() {
  const [mode, setMode] = useStateSupport('monthly');
  const tiers = mode === 'monthly' ? MONTHLY_TIERS : ONETIME_TIERS;

  return (
    <section id="support" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Eyebrow style={{ display: 'inline-block' }}>Keep it alive</Eyebrow>
        <h2 style={{
          marginTop: 14, marginBottom: 14,
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2rem, 3vw + 1rem, 3.25rem)',
          letterSpacing: '-.022em', lineHeight: 1.1, textWrap: 'balance',
        }}>
          RDPea is free. It isn't free to make.
        </h2>
        <p style={{ margin: '0 auto 28px', maxWidth: 580, fontSize: 17, color: 'var(--fg-2)', lineHeight: 1.55, textWrap: 'pretty' }}>
          GitHub Sponsors funds the signing certs, domain, Azure bills, and the evenings spent on NLA bugs. Pick what fits.
        </p>

        <div style={{ display: 'inline-flex', gap: 4, padding: 4, background: 'rgb(15 23 42 / .6)', border: '1px solid var(--border-subtle)', borderRadius: 10 }}>
          {[['monthly', 'Monthly'], ['onetime', 'One‑time']].map(([id, label]) => (
            <button
              key={id}
              onClick={() => setMode(id)}
              style={{
                padding: '7px 16px', borderRadius: 7, border: 0,
                fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                background: mode === id ? 'var(--primary-600)' : 'transparent',
                color: mode === id ? '#fff' : 'var(--fg-2)',
                transition: 'all 160ms var(--ease-out)',
              }}
            >{label}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, alignItems: 'stretch', maxWidth: 820, margin: '0 auto' }}>
        {tiers.map((t) => (
          <GlassCard key={t.title} style={{
            padding: 26, display: 'flex', flexDirection: 'column', gap: 12,
            ...(t.featured ? {
              border: '1px solid rgb(126 200 80 / .35)',
              background: 'linear-gradient(180deg, rgb(126 200 80 / .08), rgb(15 23 42 / .6))',
              boxShadow: '0 20px 40px -20px rgb(126 200 80 / .2)',
            } : {}),
          }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minHeight: 20 }}>
              {t.featured && <Badge tone="pea">Popular</Badge>}
            </div>
            <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-.015em' }}>{t.title}</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: 44, fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-.03em', color: t.accent }}>{t.price}</span>
              <span style={{ fontSize: 14, color: 'var(--fg-3)' }}>{t.priceSub}</span>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--fg-3)' }}>{t.body}</p>
            <ul style={{ margin: '4px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
              {t.perks.map((p) => (
                <li key={p} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--fg-2)' }}>
                  <Icon name="check" size={14} style={{ color: t.accent, marginTop: 3, flexShrink: 0 }} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a href={SPONSORS_URL} target="_blank" rel="noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: t.featured ? 'var(--pea-500)' : 'transparent',
              color: t.featured ? '#041a00' : 'var(--fg-1)',
              border: t.featured ? 0 : '1px solid var(--border-strong)',
              borderRadius: 9, padding: '12px 16px',
              fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
              textDecoration: 'none', marginTop: 4,
            }}>
              <Icon name="heart" size={15} />
              {t.cta}
            </a>
          </GlassCard>
        ))}
      </div>

      <div style={{ marginTop: 28, textAlign: 'center', fontSize: 13, color: 'var(--fg-4)' }}>
        All tiers go through <a href={SPONSORS_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-300)' }}>GitHub Sponsors</a>. Need an invoice, crypto, or open‑collective? <a href="mailto:hello@rdpea.com" style={{ color: 'var(--primary-300)' }}>Get in touch</a>.
      </div>
    </section>
  );
}

window.SupportSection = SupportSection;
