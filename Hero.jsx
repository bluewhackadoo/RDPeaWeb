/* global React, Icon, Button, Badge, Eyebrow, GlassCard */
const { useState } = React;

// TODO: swap with the real repo URL
const HERO_GITHUB_URL = 'https://github.com/bluewhackadoo/RDPea';

function Hero({ onDownload }) {
  const [os, setOs] = useState('windows');
  const options = [
    { id: 'windows', label: 'Windows', sub: '.exe · 64‑bit', icon: '🪟' },
    { id: 'mac',     label: 'macOS',   sub: 'Apple Silicon / Intel', icon: '' },
    { id: 'linux',   label: 'Linux',   sub: '.AppImage · .deb', icon: '' },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* pea radial + blue radial */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:
          'radial-gradient(45% 55% at 18% 30%, rgba(126,200,80,.14), transparent 65%),' +
          'radial-gradient(35% 45% at 85% 75%, rgba(37,99,235,.18), transparent 70%)',
      }} />
      {/* faint grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: .35,
        backgroundImage:
          'linear-gradient(rgba(51,65,85,.18) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(51,65,85,.18) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 80%)',
      }} />

      <div style={{
        position: 'relative', maxWidth: 1200, margin: '0 auto',
        padding: '88px 24px 96px',
      }}>
        <Badge tone="pea" dot>v1.0.10 · Electron 28 · MIT</Badge>

        <h1 style={{
          margin: '22px 0 18px', fontFamily: 'var(--font-display)',
          fontWeight: 700, fontSize: 'clamp(2.8rem, 5.6vw + 1rem, 5.6rem)',
          lineHeight: 1.02, letterSpacing: '-.028em', textWrap: 'balance',
          maxWidth: 920,
        }}>
          A remote desktop client that <span style={{ color: 'var(--pea-400)', fontStyle: 'italic' }}>feels right.</span>
        </h1>

        <p style={{
          maxWidth: 640, fontSize: 19, lineHeight: 1.55,
          color: 'var(--fg-2)', margin: 0,
        }}>
          RDPea is an open‑source Remote Desktop client — AES‑256‑GCM credentials, pinnable session windows, a redesigned protocol stack, and a dashboard that doesn't feel like it was written in 2003.
        </p>

        {/* CTA row */}
        <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', gap: 1, background: 'var(--primary-600)', borderRadius: 10, boxShadow: '0 10px 24px -10px rgb(37 99 235 / .6)' }}>
            <a
              href={`${HERO_GITHUB_URL}/releases/latest`}
              target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'var(--primary-600)', color: '#fff',
                border: 0, padding: '13px 22px', fontSize: 15, fontWeight: 600,
                borderRadius: '10px 0 0 10px', cursor: 'pointer', fontFamily: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Icon name="download" size={17} />
              Download for {options.find((o) => o.id === os).label}
            </a>
            <div style={{ position: 'relative' }}>
              <select
                value={os} onChange={(e) => setOs(e.target.value)}
                style={{
                  appearance: 'none', background: 'var(--primary-700)', color: '#fff',
                  border: 0, borderRadius: '0 10px 10px 0',
                  padding: '13px 36px 13px 12px', fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
              <Icon name="chevron-down" size={14} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
            </div>
          </div>
          <a href={`${HERO_GITHUB_URL}/releases`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="glass" size="lg" icon="github">
              All releases
            </Button>
          </a>
          <div style={{ fontSize: 13, color: 'var(--fg-4)' }}>
            Free · MIT · signed installers
          </div>
        </div>

        {/* mini product preview */}
        <div style={{ marginTop: 72, position: 'relative' }}>
          <GlassCard style={{ padding: 0, overflow: 'hidden', borderRadius: 16, boxShadow: '0 40px 100px -30px rgb(2 6 23 / .8), 0 0 0 1px rgb(51 65 85 / .5)' }}>
            {/* fake titlebar */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              height: 36, padding: '0 12px',
              background: 'rgb(15 23 42 / .8)',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <span style={{ width: 11, height: 11, borderRadius: 9999, background: '#ef4444' }} />
                <span style={{ width: 11, height: 11, borderRadius: 9999, background: '#f59e0b' }} />
                <span style={{ width: 11, height: 11, borderRadius: 9999, background: '#10b981' }} />
              </div>
              <img src="./assets/icon.png" style={{ width: 18, height: 18, marginLeft: 6 }} />
              <div style={{ fontSize: 12.5, color: 'var(--fg-3)' }}>
                <span style={{ color: 'var(--surface-200)', fontWeight: 600 }}>RDPea</span>
                <span style={{ color: 'var(--fg-4)', margin: '0 8px' }}>│</span>
                Dashboard
              </div>
              <div style={{ flex: 1 }} />
              <Badge tone="ok" dot>Connected</Badge>
            </div>
            {/* fake dashboard body */}
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 360 }}>
              <aside style={{ background: 'rgb(15 23 42 / .6)', borderRight: '1px solid var(--border-subtle)', padding: 16 }}>
                <Eyebrow>All connections</Eyebrow>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    ['Production Web', 4, true],
                    ['Lab VMs', 3, false],
                    ['Clients', 2, false],
                    ['Archive', 7, false],
                  ].map(([name, n, active]) => (
                    <div key={name} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '7px 10px', borderRadius: 8, fontSize: 13.5,
                      background: active ? 'rgb(59 130 246 / .15)' : 'transparent',
                      color: active ? 'var(--primary-300)' : 'var(--fg-2)',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Icon name="folder" size={14} /> {name}
                      </span>
                      <span style={{ fontSize: 11, color: 'var(--fg-4)' }}>{n}</span>
                    </div>
                  ))}
                </div>
              </aside>
              <div style={{ padding: 20, background: 'var(--surface-950)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignContent: 'start' }}>
                {[
                  ['Production Web',    '192.168.1.41',  'Connected',      'ok',      '#3b82f6', true],
                  ['Lab VM — Hyper‑V',  '10.0.0.12',     'Idle · 3h ago',  'neutral', '#10b981', false],
                  ['SQL bastion',       '10.0.0.44',     'Idle · 12m ago', 'neutral', '#a855f7', false],
                  ['Client A · RDS',    '203.0.113.8',   'Connected',      'ok',      '#f59e0b', true],
                  ['Staging',           '10.0.2.5',      'Idle',           'neutral', '#ef4444', false],
                  ['Builder',           '10.0.2.7',     'Connected',      'ok',      '#14b8a6', true],
                ].map(([title, ip, status, tone, color, live]) => (
                  <GlassCard key={title} style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ height: 3, background: color }} />
                    <div style={{ padding: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                        <span style={{ width: 7, height: 7, borderRadius: 9999, background: live ? '#34d399' : '#64748b', boxShadow: live ? '0 0 8px rgba(52,211,153,.6)' : 'none' }} />
                        <Icon name="pin" size={12} style={{ color: 'var(--fg-4)' }} />
                      </div>
                      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 3 }}>{title}</div>
                      <div style={{ fontSize: 11.5, color: 'var(--fg-4)', fontFamily: 'var(--font-mono)' }}>{ip}</div>
                      <div style={{ marginTop: 8 }}><Badge tone={tone} dot={live}>{status}</Badge></div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* supporters strip */}
          <div style={{
            marginTop: 40, display: 'flex', gap: 40, alignItems: 'center',
            justifyContent: 'center', color: 'var(--fg-4)', fontSize: 12.5,
            letterSpacing: '.14em', textTransform: 'uppercase', flexWrap: 'wrap',
          }}>
            <span>Trusted by sysadmins at</span>
            {['Foxtrot Systems', 'Neon Labs', 'Grayroot', 'Hyperkey', 'North Cloud'].map((n) => (
              <span key={n} style={{ color: 'var(--fg-3)', fontWeight: 600, letterSpacing: '.06em', textTransform: 'none', fontSize: 13 }}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
