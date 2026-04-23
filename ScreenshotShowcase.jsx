/* global React, Icon, Badge, Eyebrow, GlassCard */
const { useState } = React;

function ScreenshotShowcase() {
  const [tab, setTab] = useState('dashboard');
  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'session',   label: 'Session' },
    { id: 'form',      label: 'New connection' },
  ];

  return (
    <section id="screens" style={{
      background: 'rgb(15 23 42 / .4)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 24px' }}>
        <Eyebrow>What it looks like</Eyebrow>
        <h2 style={{
          marginTop: 12, marginBottom: 40,
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(2rem, 3vw + 1rem, 3.25rem)', letterSpacing: '-.022em',
          maxWidth: 720, lineHeight: 1.08,
        }}>
          The app you actually keep open.
        </h2>

        <div style={{ display: 'inline-flex', gap: 4, padding: 4, background: 'rgb(15 23 42 / .6)', border: '1px solid var(--border-subtle)', borderRadius: 10, marginBottom: 20 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                padding: '7px 14px', borderRadius: 7, border: 0,
                fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
                background: tab === t.id ? 'var(--primary-600)' : 'transparent',
                color: tab === t.id ? '#fff' : 'var(--fg-2)',
                transition: 'all 160ms var(--ease-out)',
              }}
            >{t.label}</button>
          ))}
        </div>

        <GlassCard style={{ padding: 0, overflow: 'hidden', borderRadius: 16 }}>
          {tab === 'dashboard' && <MockDashboard />}
          {tab === 'session'   && <MockSession />}
          {tab === 'form'      && <MockForm />}
        </GlassCard>
      </div>
    </section>
  );
}

function MockDashboard() {
  return (
    <div style={{ padding: 32, background: 'var(--surface-950)', minHeight: 380 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 21 }}>Good afternoon.</h3>
          <div style={{ fontSize: 13.5, color: 'var(--fg-3)', marginTop: 3 }}>4 connections · 2 active</div>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'var(--primary-600)', color: '#fff', border: 0, padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
          <Icon name="plus" size={15} /> New Connection
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {[1,2,3,4].map((i) => (
          <GlassCard key={i} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ height: 3, background: ['#3b82f6','#10b981','#a855f7','#f59e0b'][i-1] }} />
            <div style={{ padding: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: 9999, background: i<3?'#34d399':'#64748b', boxShadow: i<3?'0 0 8px rgba(52,211,153,.6)':'none' }} />
                <Icon name="pin" size={13} style={{ color: 'var(--fg-4)' }} />
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 600, marginBottom: 4 }}>
                {['Production Web','Lab VM','SQL bastion','Client A'][i-1]}
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--fg-4)', fontFamily: 'var(--font-mono)' }}>
                {['192.168.1.41','10.0.0.12','10.0.0.44','203.0.113.8'][i-1]}
              </div>
              <div style={{ marginTop: 10 }}><Badge tone={i<3?'ok':'neutral'} dot={i<3}>{i<3?'Connected':'Idle'}</Badge></div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}

function MockSession() {
  return (
    <div style={{ background: '#0a1128', minHeight: 420, padding: 0 }}>
      <div style={{ display: 'flex', height: 32, alignItems: 'center', padding: '0 12px', background: 'rgb(2 6 23 / .85)', borderBottom: '1px solid var(--border-subtle)', gap: 10 }}>
        <Icon name="monitor" size={13} style={{ color: 'var(--primary-400)' }} />
        <span style={{ fontSize: 12.5, fontWeight: 600 }}>Production Web</span>
        <span style={{ color: 'var(--fg-4)' }}>│</span>
        <span style={{ fontSize: 12, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>192.168.1.41:3389</span>
        <div style={{ flex: 1 }} />
        <Badge tone="ok" dot>Connected</Badge>
        <Icon name="pin" size={13} style={{ color: 'var(--primary-400)' }} />
        <Icon name="volume-2" size={13} style={{ color: 'var(--fg-3)' }} />
        <Icon name="maximize-2" size={13} style={{ color: 'var(--fg-3)' }} />
      </div>
      <div style={{
        height: 388, margin: 16, borderRadius: 8,
        background: 'linear-gradient(180deg, #0078d4 0%, #002050 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: .12, backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: 72, fontWeight: 200, letterSpacing: '-.04em' }}>3:14</div>
          <div style={{ fontSize: 15, opacity: .8, marginTop: 4 }}>Monday, April 20</div>
          <div style={{ marginTop: 30, fontSize: 13, opacity: .7 }}>Windows Server 2022 · rendered to &lt;canvas&gt;</div>
        </div>
      </div>
    </div>
  );
}

function MockForm() {
  const f = (label, val, mono) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--fg-3)' }}>{label}</label>
      <div style={{ background: 'var(--bg-input)', border: '1px solid var(--border-subtle)', borderRadius: 8, padding: '8px 12px', fontSize: 14, color: 'var(--fg-1)', fontFamily: mono ? 'var(--font-mono)' : 'inherit' }}>{val}</div>
    </div>
  );
  return (
    <div style={{ padding: 32, background: 'var(--surface-950)' }}>
      <h3 style={{ margin: '0 0 4px', fontSize: 19, fontWeight: 600 }}>New Connection</h3>
      <p style={{ margin: '0 0 22px', fontSize: 13.5, color: 'var(--fg-3)' }}>Credentials are encrypted locally with AES‑256‑GCM.</p>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginBottom: 12 }}>
        {f('Host / IP', '192.168.1.41', true)}
        {f('Port', '3389', true)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
        {f('Username', 'admin')}
        {f('Password', '••••••••')}
        {f('Domain', 'WORKGROUP')}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {f('Color bar', '● Blue')}
        {f('Group', 'Production Web')}
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 22, justifyContent: 'flex-end' }}>
        <button style={{ background: 'transparent', color: 'var(--fg-2)', border: 0, padding: '9px 16px', borderRadius: 8, fontSize: 14, cursor: 'pointer' }}>Cancel</button>
        <button style={{ background: 'var(--primary-600)', color: '#fff', border: 0, padding: '9px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>Save & Connect</button>
      </div>
    </div>
  );
}

window.ScreenshotShowcase = ScreenshotShowcase;
