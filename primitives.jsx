/* global React */
const { useState, useEffect } = React;

// ── Icon helper ─────────────────────────────────────────────────
function Icon({ name, size = 16, stroke = 1.5, className = '', style = {} }) {
  const src = `https://unpkg.com/lucide-static@0.344.0/icons/${name}.svg`;
  return (
    <span
      className={`icon ${className}`}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        background: 'currentColor',
        ...style,
      }}
    />
  );
}

// ── Button ──────────────────────────────────────────────────────
function Button({ children, variant = 'primary', size = 'md', icon, iconRight, onClick, href, as, ...rest }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    borderRadius: 8,
    border: 0,
    cursor: 'pointer',
    transition: 'all 160ms var(--ease-out)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { fontSize: 13, padding: '6px 12px' },
    md: { fontSize: 14, padding: '9px 16px' },
    lg: { fontSize: 15, padding: '12px 22px' },
  };
  const variants = {
    primary:   { background: 'var(--primary-600)', color: '#fff' },
    pea:       { background: 'var(--pea-500)', color: '#041a00' },
    ghost:     { background: 'transparent', color: 'var(--fg-2)' },
    outline:   { background: 'transparent', color: 'var(--fg-1)', border: '1px solid var(--border-strong)' },
    glass:     { background: 'rgb(30 41 59 / .8)', color: 'var(--fg-1)', border: '1px solid var(--border-subtle)' },
  };
  const style = { ...base, ...sizes[size], ...variants[variant] };
  const Tag = as || (href ? 'a' : 'button');
  return (
    <Tag
      className={`btn btn-${variant}`}
      style={style}
      onClick={onClick}
      href={href}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === 'lg' ? 18 : 15} />}
      {children}
      {iconRight && <Icon name={iconRight} size={size === 'lg' ? 18 : 15} />}
    </Tag>
  );
}

// ── Badge ───────────────────────────────────────────────────────
function Badge({ children, tone = 'info', dot = false, className = '' }) {
  const tones = {
    ok:      { bg: 'rgb(16 185 129 / .2)', fg: '#34d399', bd: 'rgb(16 185 129 / .3)' },
    warn:    { bg: 'rgb(245 158 11 / .2)', fg: '#fbbf24', bd: 'rgb(245 158 11 / .3)' },
    info:    { bg: 'rgb(59 130 246 / .15)', fg: '#60a5fa', bd: 'rgb(59 130 246 / .3)' },
    pea:     { bg: 'rgb(126 200 80 / .15)', fg: '#a7d88b', bd: 'rgb(126 200 80 / .3)' },
    neutral: { bg: 'rgb(51 65 85 / .6)', fg: '#94a3b8', bd: 'rgb(71 85 105 / .4)' },
  };
  const c = tones[tone];
  return (
    <span
      className={`badge ${className}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: 9999,
        fontSize: 11.5, fontWeight: 500,
        background: c.bg, color: c.fg,
        border: `1px solid ${c.bd}`,
      }}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'currentColor', boxShadow: '0 0 8px currentColor' }} />}
      {children}
    </span>
  );
}

// ── Eyebrow label ───────────────────────────────────────────────
function Eyebrow({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: 11, fontWeight: 600,
        letterSpacing: '.16em', textTransform: 'uppercase',
        color: 'var(--fg-4)', ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Glass card shell ────────────────────────────────────────────
function GlassCard({ children, style = {}, className = '', onClick }) {
  return (
    <div
      className={`glass-card ${className}`}
      onClick={onClick}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 12,
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

Object.assign(window, { Icon, Button, Badge, Eyebrow, GlassCard });
