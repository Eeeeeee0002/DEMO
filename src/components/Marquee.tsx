import './Marquee.css';

const items = [
  { label: 'Лаваш каждое утро', arm: 'Լավաշ' },
  { label: 'Вина Арени', arm: 'Արենի' },
  { label: 'Бастурма ручной работы', arm: 'Բաստուրմա' },
  { label: 'Гранатовый соус', arm: 'Նռան շարաբ' },
  { label: 'Сыр Чечил', arm: 'Չեչիլ' },
  { label: 'Коньяк Арарат', arm: 'Արարատ' },
  { label: 'Сладкая чурчхела', arm: 'Չուրչխելա' },
  { label: 'Горный мёд', arm: 'Մեղր' },
];

export function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__dot">✦</span>
            <span>{it.label}</span>
            <em>{it.arm}</em>
          </span>
        ))}
      </div>
    </div>
  );
}
