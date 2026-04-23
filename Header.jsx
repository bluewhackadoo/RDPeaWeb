/* global React, Icon, Button */
const { useState } = React;

// TODO: swap these with the real URLs
const GITHUB_URL = 'https://github.com/bluewhackadoo/RDPea';
const SPONSORS_URL = 'https://github.com/sponsors/bluewhackadoo';

function Header({ onNav }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 'features', label: 'Features' },
    { id: 'screens', label: 'Screenshots' },
    { id: 'support', label: 'Support' },
    { id: 'faq', label: 'FAQ' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgb(2 6 23 / .72)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav('top'); }}
           style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="./assets/logo.svg" alt="" style={{ width: 34, height: 34 }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-.02em' }}>
            <span style={{ color: 'var(--surface-200)' }}>RD</span>
            <span style={{ color: 'var(--pea-400)', fontStyle: 'italic' }}>Pea</span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 20 }}>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`}
               onClick={(e) => { e.preventDefault(); onNav(l.id); }}
               style={{
                 padding: '7px 12px', borderRadius: 8,
                 color: 'var(--fg-2)', fontSize: 14, fontWeight: 500,
                 textDecoration: 'none', transition: 'all 160ms var(--ease-out)',
               }}
               onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--surface-800)'; e.currentTarget.style.color = 'var(--fg-1)'; }}
               onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--fg-2)'; }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ flex: 1 }} />
        <Button variant="ghost" size="sm" icon="github" as="a" href={GITHUB_URL} target="_blank" rel="noreferrer">
          Star on GitHub
        </Button>
        <Button variant="primary" size="sm" icon="download" as="a" href={`${GITHUB_URL}/releases/latest`} target="_blank" rel="noreferrer">
          Download
        </Button>
      </div>
    </header>
  );
}

window.Header = Header;
