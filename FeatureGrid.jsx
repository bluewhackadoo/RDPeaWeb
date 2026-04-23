/* global React, Icon, Eyebrow, GlassCard */

function FeatureGrid() {
  const features = [
    {
      icon: 'shield',
      title: 'Encrypted by default',
      body: 'All connections and credentials are encrypted with AES‑256‑GCM, derived from a machine‑specific scrypt key. Nothing leaves the device in plaintext.',
      accent: 'var(--primary-400)',
    },
    {
      icon: 'pin',
      title: 'Independently pinnable windows',
      body: 'Each session opens in its own window that can be pinned always‑on‑top. Work across five servers without the taskbar shuffle.',
      accent: 'var(--pea-400)',
    },
    {
      icon: 'zap',
      title: 'Pure‑TypeScript RDP stack',
      body: 'No bundled mstsc.exe, no RDP ActiveX. X224 / MCS / NLA / CredSSP rewritten in TypeScript so it works the same on macOS, Linux, and Windows.',
      accent: 'var(--primary-400)',
    },
    {
      icon: 'monitor',
      title: 'Native‑canvas rendering',
      body: 'Sessions render on an HTMLCanvas with ~60 fps mouse throttling. Audio is streamed via RDPSND and the clipboard redirects both ways.',
      accent: 'var(--pea-400)',
    },
    {
      icon: 'server',
      title: 'Hyper‑V resume on connect',
      body: 'If a connection points at a paused Hyper‑V VM, RDPea resumes it before dialing. Integrated status and a one‑click pause from the card.',
      accent: 'var(--primary-400)',
    },
    {
      icon: 'layers',
      title: 'Groups, tags, and colour',
      body: 'Organise by project, tag by environment, colour‑bar your cards. The dashboard scales from 3 connections to 300 without turning into a spreadsheet.',
      accent: 'var(--pea-400)',
    },
  ];

  return (
    <section id="features" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 24px' }}>
      <Eyebrow>Features</Eyebrow>
      <h2 style={{
        marginTop: 12, marginBottom: 12,
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 'clamp(2rem, 3vw + 1rem, 3.25rem)',
        lineHeight: 1.08, letterSpacing: '-.022em', maxWidth: 780,
      }}>
        Lightweight, fast, and consistent. Cross‑plat.
      </h2>
      <p style={{ fontSize: 17, color: 'var(--fg-2)', maxWidth: 640, lineHeight: 1.55, margin: '0 0 48px' }}>
        Six things RDPea does that your current client doesn't — and three it does better.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {features.map((f) => (
          <GlassCard key={f.title} style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'rgb(30 41 59 / .8)', border: '1px solid var(--border-subtle)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: f.accent,
            }}>
              <Icon name={f.icon} size={20} />
            </div>
            <h3 style={{ margin: '8px 0 0', fontSize: 17, fontWeight: 600 }}>{f.title}</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--fg-3)' }}>{f.body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

window.FeatureGrid = FeatureGrid;
