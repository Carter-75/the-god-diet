import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Beef, Menu, X } from 'lucide-react';
import { SITE, TAGLINE } from '../lib/store';
import { PLAN_TIERS, SNACK_MODES, setIceCream, setSnack, setSnackPicks, setTier, useCustomWeek, useIceCream, useSnack, useSnackPicks, useTier } from '../lib/plan';
import { SNACK_CATALOG, SNACK_GROUPS } from '../data/godDiet';

export function SnackSwitcher({ dark = false }) {
  const snack = useSnack();
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Snack">
      <span className={`text-[11px] font-bold uppercase tracking-wide ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>Snack</span>
      {SNACK_MODES.map((m) => (
        <button
          key={m.id}
          onClick={() => setSnack(m.id)}
          aria-pressed={snack === m.id}
          className={`rounded-full px-3 py-1 text-xs font-bold transition ${snack === m.id ? 'bg-pine-800 text-white' : dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

export function SnackKindPicker({ dark = false }) {
  const picks = useSnackPicks();
  const snack = useSnack();
  const iceCream = useIceCream();
  const [open, setOpen] = useState(false);
  const toggle = (id) => {
    setSnackPicks(picks.includes(id) ? picks.filter((p) => p !== id) : [...picks, id]);
  };
  const summary = picks.length === 0 ? 'None picked' : picks.length === 1 ? (SNACK_CATALOG.find((s) => s.id === picks[0]) || {}).name : `${picks.length} kinds picked`;
  return (
    <div className="relative flex items-center gap-1.5" role="group" aria-label="Snack kinds">
      <span className={`text-[11px] font-bold uppercase tracking-wide ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>Kinds</span>
      <button
        onClick={() => setOpen(!open)}
        disabled={snack === 'off'}
        aria-expanded={open}
        className={`max-w-[210px] truncate rounded-full px-3 py-1 text-xs font-bold transition disabled:opacity-40 ${dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-ink/5 text-ink/80 hover:bg-ink/10'}`}
      >
        {summary}
      </button>
      {open && snack !== 'off' && (
        <>
          <button className="fixed inset-0 z-40 cursor-default" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-2 max-h-[60vh] w-72 overflow-y-auto rounded-2xl border border-ink/10 bg-cream p-3 shadow-xl">
            <p className="px-1 pb-2 text-[11px] font-semibold leading-snug text-ink/55">Pick as many or as few as you want. They rotate across the snack days in the order you pick them.</p>
            <div className="mb-2 rounded-xl bg-pine-50 px-2 py-2">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-bold uppercase tracking-wide text-ink/55">Store-bought ice cream</p>
                <div className="flex gap-1" role="group" aria-label="Store-bought ice cream">
                  {['off', 'on'].map((v) => (
                    <button key={v} onClick={() => setIceCream(v)} aria-pressed={iceCream === v} className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold transition ${iceCream === v ? 'bg-pine-800 text-white' : 'bg-ink/5 text-ink/60 hover:bg-ink/10'}`}>{v === 'on' ? 'On' : 'Off'}</button>
                  ))}
                </div>
              </div>
              <p className="pt-1 text-[11px] font-medium leading-snug text-ink/55">The forgiveness shelf: bought ice cream that fails the checked rulebook but is allowed on this website. Off, the list below is the approved snacks only.</p>
            </div>
            {SNACK_GROUPS.filter((g) => iceCream === 'on' || g !== 'Ice cream').map((g) => (
              <div key={g} className="mb-2">
                <p className="px-1 pb-1 text-[11px] font-bold uppercase tracking-wide text-ink/45">{g}</p>
                {SNACK_CATALOG.filter((s) => s.group === g).map((s) => (
                  <label key={s.id} className="flex cursor-pointer items-center gap-2 rounded-lg px-1.5 py-1 text-sm font-medium text-ink/80 hover:bg-pine-50">
                    <input type="checkbox" checked={picks.includes(s.id)} onChange={() => toggle(s.id)} className="h-4 w-4 shrink-0 accent-pine-800" />
                    {s.name}
                  </label>
                ))}
              </div>
            ))}
            <button onClick={() => setOpen(false)} className="mt-1 w-full rounded-full bg-pine-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-pine-700">Done</button>
          </div>
        </>
      )}
    </div>
  );
}

export function PlanSwitcher({ dark = false }) {
  const tier = useTier();
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Plan size">
      <span className={`text-[11px] font-bold uppercase tracking-wide ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>Plan</span>
      {PLAN_TIERS.map((t) => (
        <button
          key={t}
          onClick={() => setTier(t)}
          aria-pressed={tier === t}
          className={`rounded-full px-3 py-1 text-xs font-bold transition ${tier === t ? 'bg-pine-800 text-white' : dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'}`}
        >
          {t.toLocaleString()}
        </button>
      ))}
      <span className={`hidden text-[11px] font-semibold sm:inline ${dark ? 'text-pine-50/70' : 'text-ink/50'}`}>cal / day</span>
    </div>
  );
}

const linkCls = ({ isActive }) =>
  `px-3 py-2 text-sm font-semibold rounded-lg transition ${isActive ? 'bg-pine-800 text-white' : 'text-ink/80 hover:bg-pine-50'}`;

const NAV = [
  { to: '/', label: 'The Week' },
  { to: '/meals', label: '21 Meals' },
  { to: '/ingredients', label: 'Ingredients' },
  { to: '/orders', label: 'Orders' },
  { to: '/ask', label: 'Ask' },
  { to: '/about', label: 'About' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-ink/10 bg-cream/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-pine-800 text-white"><Beef size={20} /></span>
            <span className="leading-none">
              <span className="block font-display text-xl font-black tracking-tight">{SITE}</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">{TAGLINE}</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} className={linkCls}>{n.label}</NavLink>)}
          </nav>
          <button className="ml-auto rounded-lg p-2 hover:bg-pine-50 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-ink/5 py-2">
          <span className="text-[11px] font-semibold text-ink/50">Same 21 meals, three sizes, and a snack you pick. Set yours:</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <SnackSwitcher />
            <SnackKindPicker />
            <PlanSwitcher />
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {NAV.map((n) => <NavLink key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>{n.label}</NavLink>)}
          </nav>
        )}
      </div>
    </header>
  );
}

export function CustomWeekBanner() {
  const tier = useTier();
  const snack = useSnack();
  const picks = useSnackPicks();
  const [custom, , clear] = useCustomWeek(tier, snack, picks);
  if (!custom) return null;
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 rounded-2xl border border-pine-200 bg-pine-50 px-4 py-3">
      <p className="text-sm font-semibold text-pine-900">This week is customized. The pool, meals, ingredients and orders on the site right now follow your saved changes.</p>
      <button onClick={clear} className="rounded-full bg-pine-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-pine-700">Reset to the fixed week</button>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-pine-900 text-pine-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-bold">{SITE}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-pine-100/80">
            One fixed weekly pool of ingredients, weighed in ounces, made into 21 different meals, then the week loops. Three sizes of the same week: about 1,500, 2,000, or 2,500 calories a day. A personal project by Carter Moyer.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">The diet</span>
          <Link to="/" className="text-pine-100/80 hover:text-white hover:underline">The weekly pool</Link>
          <Link to="/meals" className="text-pine-100/80 hover:text-white hover:underline">All 21 meals</Link>
          <Link to="/ingredients" className="text-pine-100/80 hover:text-white hover:underline">Ingredients and sources</Link>
          <Link to="/orders" className="text-pine-100/80 hover:text-white hover:underline">Order calendar</Link>
        </nav>
        <nav className="flex flex-col gap-2 text-sm">
          <span className="font-display font-bold">The project</span>
          <Link to="/about" className="text-pine-100/80 hover:text-white hover:underline">How it works</Link>
          <Link to="/privacy" className="text-pine-100/80 hover:text-white hover:underline">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
