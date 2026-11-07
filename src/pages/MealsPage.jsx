import React from 'react';
import MealTile from '../components/MealTile';
import { SNACK_BY_ID, dayNutrition, mealsForTier, planRates, weekCost, money } from '../data/godDiet';
import { mealsForDay, useHead } from '../lib/store';
import { usePlanMeals, useSnack, useSnackPick, useTier } from '../lib/plan';
import { CustomWeekBanner } from '../components/Chrome';

export default function MealsPage() {
  const tier = useTier();
  const snack = useSnack();
  const pick = useSnackPick();
  const { meals } = usePlanMeals(tier, snack, pick);
  const r = planRates(tier, snack, meals);
  const wkCost = weekCost(meals);
  useHead({ title: 'The 21 Meals - The God Diet', description: 'All 21 meals of The God Diet: 7 days, morning, midday and evening, built only from the weekly pool.' });
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10">
      <h1 className="font-display text-4xl font-black md:text-5xl">The 21 meals</h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Seven days, three meals a day, never the same plate twice in the week. Every meal is built only from the weekly pool, and together the 21 drain it exactly. On the {tier.toLocaleString()} plan shown here that pool is {r.beefOz} oz beef organ blend, {r.eggOz} oz egg, {r.sardineOz} oz sardines, {r.cheeseOz} oz cheese, {r.bananaOz} oz banana, {r.kiwiOz} oz kiwi, {r.avocadoOz} oz avocado, and {Math.round(r.tallowOz * 10) / 10} oz tallow. Finish Day 7 and the week loops back to Day 1.
      </p>
      <CustomWeekBanner />
      {snack !== 'off' && pick === 'guac' && (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
          The snack is on, {snack === 'daily' ? 'every day' : 'on Days 1, 3, 5 and 7'}: guac and chips between the midday and evening meals. The guacamole is that evening's avocado served early, and the portions on this page already make room for the chips, so the day still averages about {dayNutrition(meals).kcal.toLocaleString()} calories.
        </p>
      )}
      {snack !== 'off' && pick !== 'guac' && (
        <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
          The snack is on, {snack === 'daily' ? 'every day' : 'on Days 1, 3, 5 and 7'}: {(SNACK_BY_ID[pick] || {}).name || 'the picked snack'} between the midday and evening meals. The portions on this page already make room for it, so the day still averages about {dayNutrition(meals).kcal.toLocaleString()} calories.
        </p>
      )}
      <p className="mt-3 max-w-2xl leading-relaxed text-ink/65">
        Every meal page shows what to use in ounces and in rounded amounts (how many eggs, how many fish, how many pieces of fruit), how to make it, where to buy each ingredient, and its estimated cost. The whole week runs about <strong>{money(wkCost)}</strong>, roughly <strong>{money(wkCost / 7)} a day</strong>, at the prices checked Nov 5, 2026.
      </p>
      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
        <div key={day} className="mt-10">
          <h2 className="font-display text-2xl font-bold">Day {day}</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mealsForDay(day, tier, snack, meals).map((m) => <MealTile key={m.id} meal={m} />)}
          </div>
        </div>
      ))}
    </div>
  );
}
