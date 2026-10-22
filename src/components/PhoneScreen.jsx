import { TONES } from '../tones.js';

const Line = ({ x, y, w, c, o = 1, h = 6 }) => (
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={c} opacity={o} />
);

export function Body({ kind, t }) {
  switch (kind) {
    case 'filters':
      return (
        <>
          <Line x={16} y={38} w={70} c={t.ink} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={16 + k * 44} y="60" width="38" height="22" rx="11" fill={k === 0 ? t.accent : t.soft} />
          ))}
          {[0, 1, 2, 3].map((k) => (
            <g key={k}>
              <rect x="16" y={98 + k * 68} width="168" height="58" rx="10" fill={t.soft} />
              <rect x="24" y={106 + k * 68} width="42" height="42" rx="8" fill={t.panel} />
              <Line x={76} y={116 + k * 68} w={70} c={t.ink} />
              <Line x={76} y={132 + k * 68} w={40} c={t.ink} o={0.4} />
            </g>
          ))}
        </>
      );
    case 'cart':
      return (
        <>
          <Line x={16} y={38} w={60} c={t.ink} />
          {[0, 1, 2].map((k) => (
            <g key={k}>
              <rect x="16" y={62 + k * 76} width="168" height="66" rx="10" fill={t.soft} />
              <rect x="24" y={70 + k * 76} width="50" height="50" rx="8" fill={t.panel} />
              <Line x={84} y={80 + k * 76} w={70} c={t.ink} />
              <rect x="84" y={100 + k * 76} width="58" height="16" rx="8" fill={t.panel} />
            </g>
          ))}
          <Line x={16} y={304} w={60} c={t.ink} />
          <rect x="16" y="326" width="168" height="44" rx="22" fill={t.accent} />
        </>
      );
    case 'menu':
      return (
        <>
          <circle cx="172" cy="48" r="10" fill={t.soft} />
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <g key={k}>
              <Line x={20} y={86 + k * 46} w={90 + (k % 3) * 24} c={t.ink} h={8} />
              <Line x={164} y={87 + k * 46} w={12} c={t.ink} o={0.4} />
              <rect x="16" y={110 + k * 46} width="168" height="1.5" fill={t.soft} />
            </g>
          ))}
        </>
      );
    case 'quiz':
      return (
        <>
          {[0, 1, 2].map((k) => (
            <rect key={k} x={16 + k * 58} y="40" width="52" height="6" rx="3" fill={k < 2 ? t.accent : t.soft} />
          ))}
          <Line x={16} y={78} w={150} c={t.ink} h={8} />
          <Line x={16} y={96} w={104} c={t.ink} o={0.4} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x="16" y={132 + k * 52} width="168" height="42" rx="12" fill={k === 1 ? t.accent : t.soft} />
          ))}
          <rect x="108" y="342" width="76" height="30" rx="15" fill={t.ink} />
        </>
      );
    case 'product':
      return (
        <>
          <rect x="16" y="36" width="168" height="170" rx="12" fill={t.soft} />
          {[0, 1, 2].map((k) => (
            <circle key={k} cx={88 + k * 12} cy="218" r="3" fill={k === 0 ? t.accent : t.soft} />
          ))}
          <Line x={16} y={240} w={110} c={t.ink} h={8} />
          <Line x={16} y={258} w={44} c={t.accent} h={8} />
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={16 + k * 44} y="284" width="38" height="26" rx="8" fill={k === 1 ? t.accent : t.soft} />
          ))}
          <rect x="16" y="328" width="168" height="44" rx="22" fill={t.accent} />
        </>
      );
    case 'checkout':
    default:
      return (
        <>
          <Line x={16} y={38} w={70} c={t.ink} />
          <rect x="16" y="62" width="168" height="38" rx="10" fill={t.ink} />
          <Line x={70} y={116} w={60} c={t.ink} o={0.4} />
          {[0, 1, 2].map((k) => (
            <rect key={k} x="16" y={140 + k * 54} width="168" height="42" rx="10" fill={t.soft} />
          ))}
          <Line x={16} y={310} w={50} c={t.ink} />
          <rect x="16" y="326" width="168" height="44" rx="22" fill={t.accent} />
        </>
      );
  }
}

export default function PhoneScreen({ kind, tone }) {
  const t = TONES[tone] || TONES.cobalt;
  return (
    <svg viewBox="0 0 200 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <rect width="200" height="400" fill={t.panel} />
      <rect x="72" y="10" width="56" height="8" rx="4" fill={t.soft} />
      <Body kind={kind} t={t} />
    </svg>
  );
}
