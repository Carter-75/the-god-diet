import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { BUY, CONDIMENTS, ORDER_WEEK_OPTIONS, PRICE_BASIS, beefSavingsPerWeek, bulkOrder, ingredientsForTier, ingredientWeekCost, mealsForTier, poolForTier, weekCost, money } from '../data/godDiet';
import { useHead } from '../lib/store';
import { usePlanMeals, useSnack, useSnackPicks, useTier } from '../lib/plan';

export default function IngredientsPage() {
  useHead({ title: 'Ingredients - The God Diet', description: 'Every ingredient on The God Diet, its weekly amount in ounces, and the exact source that passes for it.' });
  const tier = useTier();
  const snack = useSnack();
  const picks = useSnackPicks();
  const { meals } = usePlanMeals(tier, snack, picks);
  const ingredients = ingredientsForTier(tier, snack, meals);
  const pool = poolForTier(tier, snack, meals);
  const wkCost = weekCost(meals);
  const [weeks, setWeeks] = useState(10);
  const [eggPackSize, setEggPackSize] = useState(12);
  const plan = bulkOrder(weeks, eggPackSize, tier, snack, meals);
  const totalOz = pool.filter((p) => p.oz !== null).reduce((s, p) => s + p.oz, 0);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">Ingredients</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Ten ingredients. That is the whole diet, plus a small condiment shelf below. Each one has an exact weekly amount in ounces and a source that passes the same ingredient checks the meals have always used here: verdicts follow the checked rulebook built from the Jake Tran video corpus, not personal preference. If a source does not pass, it is not swapped in.
      </p>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Amounts on this page are for the <strong className="text-ink">{tier.toLocaleString()} calorie plan</strong>. Use the plan switcher in the header to see the 1,500 and 2,000 sizes: the sources never change, only the amounts.
      </p>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        The weighed ingredients total <strong>{totalOz} oz a week</strong>, plus Celtic sea salt and water as needed.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {ingredients.map((ing) => (
          <article key={ing.name} className="rounded-2xl border border-ink/10 bg-cream p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-bold">{ing.name}</h2>
              <span className="font-display text-xl font-black text-pine-700">{ing.weeklyOz === null ? 'as needed' : `${ing.weeklyOz} oz / week`}</span>
            </div>
            <p className="mt-2 text-sm font-bold text-pine-700">{ing.source}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{ing.detail}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {BUY[ing.name] && <a href={BUY[ing.name].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-pine-700">Buy: {BUY[ing.name].label} <ExternalLink size={12} /></a>}
              <span className="text-sm font-bold text-ink/55">{ingredientWeekCost(ing.name, meals) ? `Est. ${money(ingredientWeekCost(ing.name, meals))} a week` : 'Est. $0 a week'}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-display text-3xl font-black">Condiments and seasonings</h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-ink/65">Outside the weekly pool, in set whole-spoon amounts on the meals that call for them. Each one passed the same checks as the pool ingredients.</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {CONDIMENTS.map((c) => (
            <article key={c.name} className="rounded-2xl border border-ink/10 bg-cream p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-2xl font-bold">{c.name}</h3>
                <span className="text-right font-display text-base font-black text-pine-700">{c.amount}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-pine-700">{c.source}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.detail}</p>
              {BUY[c.name] && <div className="mt-3"><a href={BUY[c.name].url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-pine-800 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-pine-700">Buy: {BUY[c.name].label} <ExternalLink size={12} /></a></div>}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-pine-800 p-6 text-pine-50">
        <h2 className="font-display text-2xl font-bold">Bulk shipping, built in whole weeks and whole packs</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-pine-50/80">Everything on this diet ships, and nothing is figured by the calendar month, because months change length and weeks never do. Pick a block of whole weeks: every source below repeats on its own whole-week rhythm, every package is a whole pack, and whatever a pack leaves over rolls into the next block instead of changing the diet.</p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-honey-400">Block length</span>
          {ORDER_WEEK_OPTIONS.map((w) => (
            <button key={w} onClick={() => setWeeks(w)} className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${weeks === w ? 'bg-honey-400 text-pine-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>{w} weeks</button>
          ))}
          <span className="ml-3 text-xs font-bold uppercase tracking-wide text-honey-400">Egg cartons</span>
          {[12, 18].map((n) => (
            <button key={n} onClick={() => setEggPackSize(n)} className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${eggPackSize === n ? 'bg-honey-400 text-pine-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>{n} count</button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-pine-900/60 p-5 ring-1 ring-pine-50/15">
          <h3 className="font-display text-lg font-bold">What {weeks} weeks actually uses</h3>
          <ul className="mt-2 grid gap-1.5 text-sm text-pine-50/85 sm:grid-cols-2">
            {plan.totals.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <p className="mt-3 text-sm text-pine-50/80">Estimated cost of the food actually used in this block: <strong className="text-white">{money(wkCost * weeks)}</strong> ({money(wkCost)} a week). That already counts the beef at the 25 lb bundle rate; single packs would add about {money(beefSavingsPerWeek(tier) * weeks)} over the block.</p>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {plan.sources.map((sp) => (
            <article key={sp.shipper} className="rounded-2xl bg-pine-900/60 p-5 ring-1 ring-pine-50/15">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-bold">{sp.shipper}</h3>
                <span className="text-right text-xs font-bold uppercase tracking-wide text-honey-400">{sp.cadence}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-pine-50/85">
                {sp.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href={sp.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-honey-400 px-3.5 py-1.5 text-xs font-bold text-pine-900 transition hover:bg-honey-300">Order from {sp.shipper} <ExternalLink size={12} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-ink/10 bg-cream p-6">
        <h2 className="font-display text-2xl font-bold">How the costs are figured</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/65">
          Every meal on this site carries an estimated cost built from these prices, checked November 5, 2026. The whole week totals about <strong className="text-ink">{money(wkCost)}</strong> at this plan size. Prices move, so treat these as planning estimates, not quotes.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ink/65">
          {PRICE_BASIS.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </section>
    </div>
  );
}
