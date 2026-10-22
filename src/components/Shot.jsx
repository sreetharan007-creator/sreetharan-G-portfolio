import { useState } from 'react';
import { TONES } from '../tones.js';
import { Body as PhoneBody } from './PhoneScreen.jsx';

const Line = ({ x, y, w, c, o = 1 }) => (
  <rect x={x} y={y} width={w} height="6" rx="3" fill={c} opacity={o} />
);

function Scene({ kind, t, tone }) {
  if (kind.startsWith('phone:')) {
    const bezel = tone === 'ink' ? t.soft : t.ink;
    return (
      <>
        <rect x="26" y="40" width="96" height="86" rx="12" fill={t.panel} opacity="0.3" />
        <rect x="278" y="174" width="96" height="86" rx="12" fill={t.panel} opacity="0.3" />
        <rect x="130" y="8" width="140" height="284" rx="22" fill={bezel} />
        <clipPath id="phone-clip"><rect x="136" y="14" width="128" height="272" rx="17" /></clipPath>
        <g clipPath="url(#phone-clip)">
          <svg x="136" y="14" width="128" height="272" viewBox="0 0 200 400" preserveAspectRatio="xMidYMid slice">
            <rect width="200" height="400" fill={t.panel} />
            <rect x="72" y="10" width="56" height="8" rx="4" fill={t.soft} />
            <PhoneBody kind={kind.slice(6)} t={t} />
          </svg>
        </g>
      </>
    );
  }
  switch (kind) {
    case 'filter':
      return (
        <>
          <rect x="24" y="24" width="104" height="252" rx="12" fill={t.panel} />
          <Line x={38} y={40} w={48} c={t.ink} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x="38" y={62 + k * 30} width={k === 1 ? 64 : 76} height="20" rx="10" fill={k === 1 ? t.accent : t.soft} />
          ))}
          {[0, 1].flatMap((r) =>
            [0, 1, 2].map((c) => {
              const x = 140 + c * 84;
              const y = 24 + r * 130;
              return (
                <g key={`${r}-${c}`}>
                  <rect x={x} y={y} width="72" height="118" rx="10" fill={t.panel} />
                  <rect x={x + 6} y={y + 6} width="60" height="70" rx="8" fill={t.soft} />
                  <Line x={x + 8} y={y + 88} w={44} c={t.ink} />
                  <Line x={x + 8} y={y + 100} w={26} c={t.accent} />
                </g>
              );
            })
          )}
        </>
      );
    case 'cart':
      return (
        <>
          {[0, 1].map((k) => (
            <rect key={k} x="24" y={24 + k * 132} width="150" height="120" rx="12" fill={t.panel} opacity="0.4" />
          ))}
          <rect x="200" y="0" width="200" height="300" fill={t.panel} />
          <Line x={216} y={22} w={60} c={t.ink} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <rect x="216" y={48 + k * 62} width="44" height="44" rx="8" fill={t.soft} />
              <Line x={270} y={56 + k * 62} w={80} c={t.ink} />
              <Line x={270} y={70 + k * 62} w={44} c={t.ink} o={0.4} />
              <rect x="330" y={78 + k * 62} width="54" height="14" rx="7" fill={t.soft} />
            </g>
          ))}
          <Line x={216} y={240} w={50} c={t.ink} />
          <rect x="216" y="256" width="168" height="28" rx="14" fill={t.accent} />
        </>
      );
    case 'mobile':
      return (
        <>
          <rect x="128" y="14" width="144" height="272" rx="24" fill={t.panel} />
          <rect x="170" y="24" width="60" height="8" rx="4" fill={t.soft} />
          <Line x={144} y={48} w={60} c={t.ink} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <rect x="144" y={70 + k * 52} width="112" height="44" rx="8" fill={t.soft} />
              <rect x="150" y={76 + k * 52} width="32" height="32" rx="6" fill={t.panel} />
              <Line x={190} y={82 + k * 52} w={54} c={t.ink} />
              <Line x={190} y={96 + k * 52} w={32} c={t.ink} o={0.4} />
            </g>
          ))}
          <rect x="144" y="240" width="112" height="30" rx="15" fill={t.accent} />
        </>
      );
    case 'quick':
      return (
        <>
          {[0, 1, 2].map((k) => (
            <rect key={k} x={24 + k * 122} y="24" width="106" height="84" rx="10" fill={t.panel} opacity="0.35" />
          ))}
          <rect x="70" y="44" width="260" height="212" rx="14" fill={t.panel} />
          <rect x="86" y="60" width="104" height="180" rx="10" fill={t.soft} />
          <Line x={206} y={70} w={90} c={t.ink} />
          <Line x={206} y={86} w={56} c={t.ink} o={0.4} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x={206 + k * 34} y="112" width="28" height="22" rx="6" fill={k === 1 ? t.accent : t.soft} />
          ))}
          <rect x="206" y="206" width="108" height="30" rx="15" fill={t.accent} />
          <circle cx="318" cy="64" r="8" fill={t.soft} />
        </>
      );
    case 'menu':
      return (
        <>
          <rect x="24" y="24" width="352" height="34" rx="17" fill={t.panel} />
          <Line x={44} y={38} w={40} c={t.ink} />
          {[0, 1, 2].map((k) => (
            <Line key={k} x={140 + k * 60} y={38} w={36} c={t.ink} o={0.5} />
          ))}
          <rect x="24" y="70" width="352" height="206" rx="14" fill={t.panel} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <Line x={44 + k * 84} y={90} w={56} c={t.ink} />
              {[0, 1, 2, 3].map((j) => (
                <Line key={j} x={44 + k * 84} y={114 + j * 22} w={44} c={t.ink} o={0.3} />
              ))}
            </g>
          ))}
          <rect x="296" y="90" width="64" height="168" rx="8" fill={t.accent} />
        </>
      );
    case 'product':
      return (
        <>
          <rect x="24" y="24" width="170" height="252" rx="14" fill={t.panel} />
          <rect x="34" y="34" width="150" height="176" rx="10" fill={t.soft} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x={34 + k * 52} y="220" width="46" height="44" rx="8" fill={k === 0 ? t.accent : t.soft} />
          ))}
          <rect x="214" y="24" width="162" height="252" rx="14" fill={t.panel} />
          <Line x={230} y={44} w={110} c={t.ink} />
          <Line x={230} y={62} w={44} c={t.accent} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={230 + k * 34} y="88" width="28" height="22" rx="6" fill={k === 1 ? t.accent : t.soft} />
          ))}
          {[0, 1, 2].map((k) => (
            <circle key={k} cx={240 + k * 26} cy="136" r="9" fill={k === 0 ? t.accent : t.soft} />
          ))}
          {[0, 1, 2].map((k) => (
            <Line key={k} x={230} y={162 + k * 14} w={k === 2 ? 70 : 130} c={t.ink} o={0.3} />
          ))}
          <rect x="230" y="226" width="130" height="32" rx="16" fill={t.accent} />
        </>
      );
    case 'checkout':
      return (
        <>
          <rect x="24" y="24" width="214" height="252" rx="14" fill={t.panel} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <Line x={40} y={42 + k * 56} w={50} c={t.ink} o={0.5} />
              <rect x="40" y={54 + k * 56} width="182" height="30" rx="8" fill={t.soft} />
            </g>
          ))}
          <rect x="40" y="218" width="182" height="40" rx="20" fill={t.accent} />
          <rect x="254" y="24" width="122" height="252" rx="14" fill={t.soft} />
          {[0, 1].map((k) => (
            <g key={k}>
              <rect x="268" y={42 + k * 52} width="38" height="38" rx="8" fill={t.panel} />
              <Line x={314} y={50 + k * 52} w={46} c={t.ink} />
              <Line x={314} y={64 + k * 52} w={28} c={t.ink} o={0.4} />
            </g>
          ))}
          <Line x={268} y={170} w={50} c={t.ink} o={0.5} />
          <Line x={268} y={190} w={90} c={t.ink} />
        </>
      );
    case 'banner':
      return (
        <>
          <rect x="24" y="24" width="352" height="170" rx="14" fill={t.panel} />
          <rect x="48" y="52" width="170" height="16" rx="8" fill={t.ink} />
          <rect x="48" y="78" width="120" height="16" rx="8" fill={t.ink} />
          <Line x={48} y={110} w={150} c={t.ink} o={0.35} />
          <rect x="48" y="140" width="92" height="28" rx="14" fill={t.accent} />
          <circle cx="304" cy="108" r="56" fill={t.accent} opacity="0.9" />
          <circle cx="304" cy="108" r="32" fill={t.soft} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x={24 + k * 122} y="208" width="106" height="68" rx="10" fill={t.panel} opacity="0.55" />
          ))}
        </>
      );
    case 'quiz':
    default:
      return (
        <>
          <rect x="80" y="36" width="240" height="228" rx="16" fill={t.panel} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x={100 + k * 60} y="56" width="52" height="6" rx="3" fill={k < 2 ? t.accent : t.soft} />
          ))}
          <Line x={100} y={84} w={150} c={t.ink} />
          <Line x={100} y={100} w={100} c={t.ink} o={0.4} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x="100" y={120 + k * 34} width="200" height="28" rx="10" fill={k === 1 ? t.accent : t.soft} />
          ))}
          <rect x="224" y="228" width="76" height="24" rx="12" fill={t.ink} />
        </>
      );
  }
}

export function Mock({ kind, tone = 'cobalt' }) {
  const t = TONES[tone] || TONES.cobalt;
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <Scene kind={kind} t={t} tone={tone} />
    </svg>
  );
}

// Shows the image if one exists and loads, otherwise the drawn mock-up.
export default function Shot({ project, label, eager = false }) {
  const [failed, setFailed] = useState(false);
  const t = TONES[project.tone] || TONES.cobalt;
  const hasImage = project.image && !failed;
  return (
    <div className="shot" style={{ aspectRatio: project.ratio || '4 / 3', background: t.bg }}>
      {hasImage ? (
        <img
          src={project.image}
          alt={label || project.title}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <Mock kind={project.kind} tone={project.tone} />
      )}
    </div>
  );
}
