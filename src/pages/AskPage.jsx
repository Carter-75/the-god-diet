import React, { useMemo, useRef, useState } from 'react';
import { Check, ExternalLink, RotateCcw, Send, X } from 'lucide-react';
import { dayNutrition, mealCost, mealFromSpec, mealNutrition, money, rebalanceMeals, weekCost, TIER_RANGES } from '../data/godDiet';
import { mealIngredients, useHead } from '../lib/store';
import { useCustomWeek, usePlanMeals, useSnack, useSnackPicks, useTier } from '../lib/plan';
import { CustomWeekBanner } from '../components/Chrome';

const STARTERS = [
  'Give me a meatball sub this week',
  'Swap one evening meal for something from the library',
  'Make Thursday cheaper',
  'What can replace the sardines at a meal?',
];

export default function AskPage() {
  useHead({ title: 'Ask - The God Diet', description: 'Ask about the diet or ask for a change to your week. The assistant picks from the meal database and the site checks every number itself.' });
  const tier = useTier();
  const snack = useSnack();
  const picks = useSnackPicks();
  const { meals, isCustom } = usePlanMeals(tier, snack, picks);
  const [, setCustom, clearCustom] = useCustomWeek(tier, snack, picks);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ask me anything about the diet, or tell me a change you want: a sandwich, a swap from the meal library, a cheaper day. I draft it, and the site checks the calories, the price, and the links itself before you apply anything.' },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [proposal, setProposal] = useState(null);
  const [error, setError] = useState('');
  const bottomRef = useRef(null);

  const computed = useMemo(() => {
    if (!proposal) return null;
    const candidate = meals.map((m) => ({ ...m }));
    const newMeals = [];
    for (const ch of proposal.changes) {
      const nm = mealFromSpec(ch.spec, ch.day, ch.slot);
      const idx = candidate.findIndex((m) => m.day === ch.day && m.slot === ch.slot);
      if (idx >= 0) candidate[idx] = nm; else candidate.push(nm);
      newMeals.push(nm);
    }
    const rb = rebalanceMeals(candidate, tier, snack, picks);
    return {
      ...rb, newMeals,
      beforeDay: dayNutrition(meals), beforeCost: weekCost(meals),
      afterDay: dayNutrition(rb.meals), afterCost: weekCost(rb.meals),
    };
  }, [proposal, meals, tier, snack, picks]);

  const scrollDown = () => setTimeout(() => bottomRef.current && bottomRef.current.scrollIntoView({ behavior: 'smooth' }), 60);

  async function send(text) {
    const question = (text || input).trim();
    if (!question || busy) return;
    setInput('');
    setError('');
    setProposal(null);
    const history = messages.slice(-8).map((m) => ({ role: m.role, content: m.content }));
    setMessages((ms) => [...ms, { role: 'user', content: question }]);
    setBusy(true);
    scrollDown();
    try {
      const r = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question, history,
          context: {
            tier, snack, dayKcal: dayNutrition(meals).kcal,
            meals: meals.filter((m) => m.slot !== 'Snack').map((m) => ({ day: m.day, slot: m.slot, name: m.name })),
          },
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(data.error || 'The assistant could not answer just now.');
      } else {
        setMessages((ms) => [...ms, { role: 'assistant', content: data.reply }]);
        if (data.proposal) setProposal(data.proposal);
      }
    } catch {
      setError('The assistant could not be reached. Check your connection and try again.');
    }
    setBusy(false);
    scrollDown();
  }

  function applyProposal() {
    if (!computed || !computed.inRange) return;
    setCustom(computed.meals);
    setMessages((ms) => [...ms, { role: 'assistant', content: 'Applied. Your week on the site now uses the new meals, and the pool, ingredients, and order pages follow them. You can reset to the fixed week any time from the banner on the Meals page.' }]);
    setProposal(null);
    scrollDown();
  }

  const [lo, hi] = TIER_RANGES[tier];

  return (
    <div className="mx-auto max-w-3xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">Ask</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        A smart assistant that knows this diet. It picks meals from the site's meal database (the fixed 21 plus the library)
        or drafts a new one from the same ingredients, and it never does the math itself: the site computes the calories,
        the cost, and the buy links, and rebalances the rest of your week into your {tier.toLocaleString()} range
        ({lo.toLocaleString()} to {hi.toLocaleString()}) before you can apply a change. Nothing changes until you tap Apply.
      </p>
      <div className="mt-6">
        <CustomWeekBanner />
      </div>

      <div className="flex flex-col gap-3">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${m.role === 'user' ? 'self-end bg-pine-800 text-white' : 'self-start border border-ink/10 bg-white text-ink/85'}`}>
            {m.content}
          </div>
        ))}
        {busy && <div className="self-start rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink/50">Thinking, and checking the database…</div>}
        {error && <div className="self-start rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">{error}</div>}
      </div>

      {computed && proposal && (
        <div className="mt-5 rounded-2xl border-2 border-pine-700 bg-white p-5">
          <p className="font-display text-lg font-bold">{proposal.summary}</p>
          <p className="mt-1 text-sm text-ink/60">Checked by the site, not by the assistant:</p>
          <div className="mt-3 grid gap-3">
            {computed.newMeals.map((m) => {
              const n = mealNutrition(m);
              return (
                <div key={m.id} className="rounded-xl bg-paper p-4">
                  <p className="font-display font-bold">{m.name} <span className="text-sm font-semibold text-ink/50">Day {m.day}, {m.slot}</span></p>
                  <p className="mt-0.5 text-sm text-ink/65">{m.description}</p>
                  <p className="mt-2 text-sm font-semibold">{n.kcal} cal · {n.protein}g protein · est. {money(mealCost(m))}</p>
                  <ul className="mt-2 flex flex-col gap-1 text-sm text-ink/75">
                    {mealIngredients(m).map((row) => (
                      <li key={row.item} className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold">{row.item}</span>
                        <span>{row.oz !== null ? `${row.oz} oz` : row.practical}</span>
                        {row.buy && <a className="inline-flex items-center gap-0.5 font-semibold text-pine-700 hover:underline" href={row.buy.url} target="_blank" rel="noreferrer">{row.buy.label} <ExternalLink size={12} /></a>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid gap-1 text-sm font-semibold">
            <p>Day average: {computed.beforeDay.kcal} cal → {computed.afterDay.kcal} cal {computed.inRange ? <span className="text-pine-700">(inside your {lo.toLocaleString()} to {hi.toLocaleString()} range)</span> : <span className="text-red-700">(outside your range, so this one cannot be applied)</span>}</p>
            <p>Week cost: {money(computed.beforeCost)} → {money(computed.afterCost)}</p>
            {computed.adjustments.length > 0 && <p className="text-ink/65">To make room, the site also: {computed.adjustments.join('; ').toLowerCase()}.</p>}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={applyProposal} disabled={!computed.inRange} className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-4 py-2 text-sm font-bold text-white hover:bg-pine-700 disabled:cursor-not-allowed disabled:bg-ink/20">
              <Check size={15} /> Apply to my week
            </button>
            <button onClick={() => setProposal(null)} className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-4 py-2 text-sm font-bold text-ink/70 hover:bg-ink/10">
              <X size={15} /> Discard
            </button>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
      <div className="sticky bottom-3 mt-6 rounded-2xl border border-ink/10 bg-cream/95 p-3 backdrop-blur">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {STARTERS.map((s) => (
            <button key={s} onClick={() => send(s)} disabled={busy} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-bold text-ink/70 hover:bg-ink/10 disabled:opacity-50">{s}</button>
          ))}
          {isCustom && (
            <button onClick={clearCustom} className="inline-flex items-center gap-1 rounded-full bg-pine-100 px-3 py-1 text-xs font-bold text-pine-800 hover:bg-pine-200">
              <RotateCcw size={12} /> Reset to the fixed week
            </button>
          )}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the diet, or name a change…"
            className="min-w-0 flex-1 rounded-xl border border-ink/15 bg-white px-3 py-2.5 text-[15px] outline-none focus:border-pine-600"
            maxLength={800}
          />
          <button type="submit" disabled={busy || !input.trim()} className="inline-flex items-center gap-1.5 rounded-xl bg-pine-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-pine-700 disabled:cursor-not-allowed disabled:bg-ink/20">
            <Send size={15} /> Send
          </button>
        </form>
      </div>
    </div>
  );
}
