import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Check, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useHead } from '../lib/store';
import { usePlanMeals, useSnack, useSnackPick, useTier } from '../lib/plan';
import { ORDER_WEEK_OPTIONS, orderSchedule } from '../data/godDiet';

const SETTINGS_KEY = 'goddiet-orders-v2';
const DONE_KEY = 'goddiet-ordered-v1';

function loadJSON(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch { return fallback; }
}
function saveJSON(key, value) {
  try { window.localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ }
}
const isoOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parseISO = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
const fmtDay = (d) => d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
const fmtShort = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const SHIPPER_DOT = {
  'US Wellness Meats': 'bg-red-500',
  'Dutch Meadows': 'bg-amber-500',
  'Seven Sons Farms': 'bg-orange-600',
  'Fresh shipments': 'bg-emerald-500',
  'Pantry bulk shipment': 'bg-sky-500',
};

export default function OrdersPage() {
  const tier = useTier();
  const snack = useSnack();
  const pick = useSnackPick();
  const { meals } = usePlanMeals(tier, snack, pick);
  useHead({ title: 'Order Calendar - The God Diet', description: 'Exactly what to order, from which company, on exactly which day: the 2-week fresh cycle, the beef bundle, the cheese pack, and the pantry block order, sized to your plan.' });
  const todayISO = isoOf(new Date());
  const [settings, setSettings] = useState(() => loadJSON(SETTINGS_KEY, { start: todayISO, blockWeeks: 10, eggPackSize: 12 }));
  const [done, setDone] = useState(() => loadJSON(DONE_KEY, {}));
  const [view, setView] = useState(() => { const d = parseISO(settings.start || todayISO); return { y: d.getFullYear(), m: d.getMonth() }; });
  const [selected, setSelected] = useState(null);

  const start = useMemo(() => parseISO(settings.start || todayISO), [settings.start, todayISO]);
  const events = useMemo(() => orderSchedule(settings.blockWeeks, settings.eggPackSize, tier, snack, 52, meals).map((e) => {
    const date = addDays(start, e.weekOffset * 7);
    return { ...e, date, dateISO: isoOf(date), uid: `${e.id}|${settings.start}|${settings.blockWeeks}|${settings.eggPackSize}|${tier}` };
  }), [settings, start, tier, snack, pick, meals]);

  const byDate = useMemo(() => {
    const map = new Map();
    for (const e of events) {
      if (!map.has(e.dateISO)) map.set(e.dateISO, []);
      map.get(e.dateISO).push(e);
    }
    return map;
  }, [events]);

  const update = (patch) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveJSON(SETTINGS_KEY, next);
    if (patch.start) { const d = parseISO(patch.start); setView({ y: d.getFullYear(), m: d.getMonth() }); }
  };
  const toggleDone = (uid) => {
    const next = { ...done, [uid]: !done[uid] };
    setDone(next);
    saveJSON(DONE_KEY, next);
  };

  const firstOfMonth = new Date(view.y, view.m, 1);
  const gridStart = addDays(firstOfMonth, -firstOfMonth.getDay());
  const cells = Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
  const monthName = firstOfMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const shownEvents = selected
    ? events.filter((e) => e.dateISO === selected)
    : events.filter((e) => e.dateISO >= todayISO).slice(0, 10);
  const upcomingCount = events.filter((e) => e.dateISO >= todayISO).length;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-flame-600">Never run out, never over-order</p>
      <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">The order calendar</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink/70">Every order this diet ever needs, on its exact day, with the exact contents of that one order. Fresh food lands every 2 weeks, the beef bundle and the cheese pack land on their own whole-week rhythms (the bundle stretches further at the smaller plan sizes), and the pantry once per block. This calendar is sized to the <strong>{tier.toLocaleString()} calorie plan</strong> picked in the header. Set the day you start, and the whole year lays itself out.</p>

      <div className="mt-6 flex flex-wrap items-end gap-4 rounded-2xl border border-ink/10 bg-cream p-5">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wide text-ink/55">Start date (first order day)</span>
          <input type="date" value={settings.start} onChange={(e) => update({ start: e.target.value })} className="mt-1 block rounded-xl border border-ink/15 bg-white px-3 py-2 text-sm font-semibold" />
        </label>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-ink/55">Pantry block</span>
          <div className="mt-1 flex gap-1.5">
            {ORDER_WEEK_OPTIONS.map((w) => (
              <button key={w} onClick={() => update({ blockWeeks: w })} className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${settings.blockWeeks === w ? 'bg-pine-700 text-white' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'}`}>{w} weeks</button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-ink/55">Egg cartons</span>
          <div className="mt-1 flex gap-1.5">
            {[12, 18].map((n) => (
              <button key={n} onClick={() => update({ eggPackSize: n })} className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${settings.eggPackSize === n ? 'bg-pine-700 text-white' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'}`}>{n} count</button>
            ))}
          </div>
        </div>
        <p className="text-sm text-ink/60">{upcomingCount} orders left in this 52-week run.</p>
      </div>

      <section className="mt-8 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-xl font-bold"><CalendarDays size={20} className="text-pine-700" /> {monthName}</h2>
          <div className="flex gap-1.5">
            <button aria-label="Previous month" onClick={() => setView((v) => { const d = new Date(v.y, v.m - 1, 1); return { y: d.getFullYear(), m: d.getMonth() }; })} className="rounded-full bg-ink/5 p-2 hover:bg-ink/10"><ChevronLeft size={16} /></button>
            <button aria-label="Next month" onClick={() => setView((v) => { const d = new Date(v.y, v.m + 1, 1); return { y: d.getFullYear(), m: d.getMonth() }; })} className="rounded-full bg-ink/5 p-2 hover:bg-ink/10"><ChevronRight size={16} /></button>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[11px] font-bold uppercase tracking-wide text-ink/45">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-1">
          {cells.map((d) => {
            const iso = isoOf(d);
            const dayEvents = byDate.get(iso) || [];
            const inMonth = d.getMonth() === view.m;
            const isToday = iso === todayISO;
            const isSelected = iso === selected;
            return (
              <button key={iso} onClick={() => setSelected(isSelected ? null : iso)}
                className={`min-h-[52px] rounded-xl border p-1.5 text-left align-top transition ${isSelected ? 'border-pine-600 bg-pine-50 ring-1 ring-pine-600' : 'border-transparent hover:bg-ink/[0.04]'} ${inMonth ? '' : 'opacity-35'}`}>
                <span className={`text-xs font-bold ${isToday ? 'rounded-full bg-flame-600 px-1.5 py-0.5 text-white' : ''}`}>{d.getDate()}</span>
                <span className="mt-1 flex flex-wrap gap-1">
                  {dayEvents.map((e) => <span key={e.id} title={e.shipper} className={`h-2 w-2 rounded-full ${SHIPPER_DOT[e.shipper]}`} />)}
                </span>
                {dayEvents.length > 0 && <span className="mt-0.5 hidden text-[10px] font-semibold leading-tight text-ink/60 sm:block">{dayEvents.length === 1 ? dayEvents[0].shipper.split(' ')[0] : `${dayEvents.length} orders`}</span>}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-ink/65">
          {Object.entries(SHIPPER_DOT).map(([name, dot]) => (
            <span key={name} className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${dot}`} />{name}</span>
          ))}
        </div>
        {selected && (
          <p className="mt-3 text-sm text-ink/60">Showing the orders for {fmtDay(parseISO(selected))}. <button className="font-bold text-pine-700 hover:underline" onClick={() => setSelected(null)}>Back to upcoming orders</button></p>
        )}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">{selected ? `Orders for ${fmtShort(parseISO(selected))}` : 'Coming up'}</h2>
        {shownEvents.length === 0 && <p className="mt-3 text-ink/60">No orders on that day. Days with a dot on the calendar are order days.</p>}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {shownEvents.map((e) => {
            const isDone = !!done[e.uid];
            const isPast = e.dateISO < todayISO;
            return (
              <article key={e.uid} className={`rounded-2xl border p-5 shadow-sm ${isDone ? 'border-pine-200 bg-pine-50' : 'border-ink/10 bg-white'} ${isPast && !isDone ? 'opacity-70' : ''}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold">{e.shipper}</h3>
                  <span className="text-xs font-bold uppercase tracking-wide text-flame-600">{e.cadence}</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-ink/60">{fmtDay(e.date)}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink/80">
                  {e.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-pine-700 px-4 py-2 text-xs font-bold text-white transition hover:bg-pine-800">Order from {e.shipper} <ExternalLink size={12} /></a>
                  <button onClick={() => toggleDone(e.uid)} className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${isDone ? 'bg-pine-600 text-white' : 'bg-ink/5 text-ink/75 hover:bg-ink/10'}`}>
                    <Check size={13} /> {isDone ? 'Ordered' : 'Mark as ordered'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/55">How the button works: it opens that company's own store with this exact list in front of you. The site cannot place the order itself, because none of these companies lets an outside website order or pay for you. So the tap takes you to the right store, you check out there in under a minute, and you mark it ordered here so the calendar stays honest. Quantities come from the same plan as the <Link to="/ingredients" className="font-bold text-pine-700 hover:underline">bulk order planner</Link>.</p>
      </section>
    </div>
  );
}
