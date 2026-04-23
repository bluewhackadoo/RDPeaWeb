/* global React, Icon */
const { useState } = React;

function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'Does RDPea work with Windows 11 and Windows Server 2022?', a: 'Yes. RDP 10.x with NLA + CredSSP is tested against Server 2019, 2022, and Windows 10/11 hosts. Hyper‑V resume works against 2019+ with PowerShell Remoting enabled.' },
    { q: 'How are my credentials stored?', a: 'AES‑256‑GCM with a key derived via scrypt from a machine‑specific identifier. Nothing is ever uploaded — it\'s all local, in the Electron app\'s encrypted store.' },
    { q: 'Does it work on macOS and Linux?', a: 'Yes. The protocol stack is pure TypeScript, so it runs the same anywhere Electron does. Signed builds for Apple Silicon, Intel Mac, and .AppImage / .deb for Linux.' },
    { q: 'What\'s on the roadmap?', a: 'Pro tier with device‑sync over end‑to‑end encryption, Azure Bastion / RD Gateway wrappers, and a session recording / audit mode for on‑call teams.' },
    { q: 'Is there a keyboard‑shortcut for everything?', a: 'Yes — Cmd/Ctrl+N for new connection, Cmd/Ctrl+K for quick‑switcher, and Cmd/Ctrl+Shift+P to pin / unpin the focused window. Full list in the app under Help → Shortcuts.' },
  ];
  return (
    <section id="faq" style={{
      background: 'rgb(15 23 42 / .4)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '88px 24px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--fg-4)' }}>FAQ</div>
        <h2 style={{ margin: '14px 0 36px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.8rem, 2vw + 1rem, 2.6rem)', letterSpacing: '-.018em' }}>
          Common questions.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {items.map((item, i) => (
            <div key={i} style={{
              background: open === i ? 'rgb(15 23 42 / .6)' : 'transparent',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10, overflow: 'hidden',
            }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: 'transparent', color: 'var(--fg-1)', border: 0,
                  padding: '16px 18px', fontSize: 15, fontWeight: 500, textAlign: 'left',
                  cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                {item.q}
                <Icon name={open === i ? 'minus' : 'plus'} size={16} style={{ color: 'var(--fg-3)' }} />
              </button>
              {open === i && (
                <div style={{ padding: '0 18px 18px', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-3)' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-950)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <img src="./assets/icon.png" alt="" style={{ width: 32, height: 32 }} />
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-.02em' }}>
              <span style={{ color: 'var(--surface-200)' }}>RD</span>
              <span style={{ color: 'var(--pea-400)', fontStyle: 'italic' }}>Pea</span>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 13.5, color: 'var(--fg-3)', lineHeight: 1.6, maxWidth: 320 }}>
            An open‑source RDP client by <span style={{ color: 'var(--fg-2)' }}>bluewhackadoo</span>. MIT licensed. Built with TypeScript, Electron and the patience of a thousand NLA handshakes.
          </p>
        </div>
        <FooterCol title="Product" links={['Features', 'Screenshots', 'Changelog', 'Roadmap']} />
        <FooterCol title="Support" links={['GitHub Sponsors', 'Paid setup', 'Report a bug', 'Contact']} />
        <FooterCol title="Project" links={['GitHub', 'License (MIT)', 'Security', 'Press kit']} />
      </div>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '20px 24px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: 'var(--fg-4)',
      }}>
        <div>© 2026 bluewhackadoo · RDPea v1.0.10</div>
        <div style={{ display: 'flex', gap: 14 }}>
          <span>MIT</span>
          <span>·</span>
          <span>Built with care in TypeScript</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--fg-4)', marginBottom: 14 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {links.map((l) => (
          <li key={l}><a href="#" style={{ fontSize: 13.5, color: 'var(--fg-2)', textDecoration: 'none' }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

window.FAQ = FAQ;
window.Footer = Footer;
