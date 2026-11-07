import { useEffect } from 'react';
import { MEALS, POOL, INGREDIENTS, BUY, DAY_NUTRITION, SNACK_BY_ID, SNACK_TRIMS, TALLOW_TSP, TIER_TALLOW_OZ, dayNutrition, mealCost, mealsForTier, money, planRates } from '../data/godDiet';

export const SITE = 'The God Diet';
export const TAGLINE = 'One weekly pool. 21 meals. Nothing else.';
export const EMAIL = 'cartermoyer75@gmail.com';

export const allMeals = MEALS;
export const mealById = (id, tier = 2500, snack = 'off', meals) => (meals || mealsForTier(tier, snack)).find((m) => m.id === id) || null;
export const mealsForDay = (day, tier = 2500, snack = 'off', meals) => (meals || mealsForTier(tier, snack)).filter((m) => m.day === day);
export const getPool = () => POOL;
export const getIngredients = () => INGREDIENTS;

const EGG_PRACTICAL = { 1.75: '1 egg', 3.5: '2 eggs', 5.25: '3 eggs' };
const CHEESE_PRACTICAL = { 0.5: 'a thumb-sized piece', 1: 'two thumb-sized pieces' };
const FRUIT_PRACTICAL = {
  Banana: { 4: '1 banana', 3: '1 small banana', 2.5: 'about 2/3 of a banana, weighed', 2: 'about half a banana, weighed' },
  Kiwi: { 7.5: '3 kiwis', 5.5: 'about 2 kiwis', 5: '2 kiwis', 4.5: 'about 2 kiwis', 4: 'about 1 1/2 kiwis', 2.5: '1 kiwi', 2: '1 small kiwi' },
  Avocado: { 8: '2 small avocados', 5: '1 avocado and a half', 4: '1 avocado', 2: 'half an avocado', 1: 'a quarter of an avocado' },
};
const BEEF_PRACTICAL = { 4: '1/4 lb', 8: '1/2 lb' };

export function mealIngredients(meal) {
  const rows = [];
  if (meal.fixedNutrition) {
    const entry = SNACK_BY_ID[meal.snackPick];
    rows.push({ item: meal.name, oz: null, practical: entry ? entry.portionText : '1 serving', buy: entry ? entry.buy : undefined });
    return rows;
  }
  if (meal.beef > 0) rows.push({ item: 'Beef organ blend', oz: meal.beef, practical: BEEF_PRACTICAL[meal.beef] || 'weighed', buy: BUY['Beef organ blend'] });
  if (meal.egg > 0) rows.push({ item: 'Egg', oz: meal.egg, practical: EGG_PRACTICAL[meal.egg] || 'weighed', buy: BUY['Egg'] });
  if (meal.sardines > 0) rows.push({ item: 'Sardines', oz: meal.sardines, practical: '1/3 of a tin, 4 fish', buy: BUY['Sardines'] });
  if (meal.salmon) rows.push({ item: 'Wild sockeye salmon', oz: meal.salmon, practical: '1 oz of canned wild sockeye', buy: BUY['Wild sockeye salmon'] });
  if (meal.cheese > 0) rows.push({ item: 'Cheese', oz: meal.cheese, practical: CHEESE_PRACTICAL[meal.cheese] || 'weighed', buy: BUY['Cheese'] });
  if (meal.chips) rows.push({ item: 'Potato chips', oz: meal.chips, practical: 'about 20 thin chips, a sixth of the bag', buy: BUY['Potato chips'] });
  if (meal.bread) rows.push({ item: 'Einkorn sourdough', oz: meal.bread, practical: '2 slices, or a small roll, homemade', buy: BUY['Einkorn sourdough'] });
  if (meal.wrap) rows.push({ item: 'Cassava wraps', oz: meal.wrap, practical: '2 tortillas', buy: BUY['Cassava wraps'] });
  rows.push({ item: meal.fruit, oz: meal.fruitOz, practical: meal.chips ? 'mashed into guacamole with salt and lemon' : ((FRUIT_PRACTICAL[meal.fruit] || {})[meal.fruitOz] || 'weighed'), buy: BUY[meal.fruit] });
  if (meal.blueberries) rows.push({ item: 'Wild blueberries', oz: meal.blueberries, practical: 'a small handful', buy: BUY['Wild blueberries'] });
  if (meal.broccoli) rows.push({ item: 'Broccoli (cooked)', oz: meal.broccoli, practical: 'a small pile, steamed', buy: BUY['Broccoli (cooked)'] });
  if (meal.flax) rows.push({ item: 'Ground flaxseed', oz: meal.flax, practical: '2 tablespoons, ground', buy: BUY['Ground flaxseed'] });
  if (meal.broth) rows.push({ item: 'Beef bone broth', oz: meal.broth, practical: '2 cups, the soup base', buy: BUY['Beef bone broth'] });
  if (meal.ketchup) rows.push({ item: 'Ketchup', oz: null, practical: meal.ketchup === 1 ? '1 tablespoon' : `${meal.ketchup} tablespoons`, buy: BUY['Ketchup'] });
  if (meal.mayo) rows.push({ item: 'Mayo (homemade)', oz: null, practical: meal.mayo === 1 ? '1 tablespoon' : `${meal.mayo} tablespoons`, buy: BUY['Mayo (homemade)'] });
  if (meal.mustard) rows.push({ item: 'Mustard', oz: null, practical: meal.mustard === 1 ? '1 teaspoon' : `${meal.mustard} teaspoons`, buy: BUY['Mustard'] });
  if (meal.honey) rows.push({ item: 'Raw honey', oz: null, practical: meal.honey === 1 ? '1 teaspoon' : `${meal.honey} teaspoons, drizzled over`, buy: BUY['Raw honey'] });
  if (meal.oliveOil) rows.push({ item: 'Olive oil', oz: null, practical: '1 teaspoon', buy: BUY['Olive oil'] });
  if (meal.coconutWater) rows.push({ item: 'Coconut water', oz: meal.coconutWater, practical: 'a glass, to drink', buy: BUY['Coconut water'] });
  if (meal.pickles) rows.push({ item: 'Pickles', oz: null, practical: `${meal.pickles} spears`, buy: BUY['Pickles'] });
  if (meal.psyllium) rows.push({ item: 'Psyllium husk', oz: null, practical: meal.coconutWater ? '1 tablespoon, stirred into the coconut water' : '1 tablespoon, whisked into the batter', buy: BUY['Psyllium husk'] });
  if (meal.seasoning) rows.push({ item: meal.seasoning, oz: null, practical: 'to taste', buy: BUY[meal.seasoning] || BUY['Seasonings'] });
  return rows;
}

export { mealCost, money, TALLOW_TSP, BUY };

export function recipeText(meal, tier = 2500, snack = 'off', pick = 'guac') {
  const dn = dayNutrition(mealsForTier(tier, snack, pick));
  const tallowTotal = snack !== 'off' && pick === 'guac' && SNACK_TRIMS[tier] && SNACK_TRIMS[tier][snack] ? SNACK_TRIMS[tier][snack].tallowOz : Math.round(planRates(tier, snack, undefined, pick).tallowOz * 10) / 10;
  const L = [`${meal.name} (Day ${meal.day}, ${meal.slot}) - the ${tier.toLocaleString()} calorie plan`, meal.description, '', 'Ingredients (ounces first, then the rounded amount to actually use):'];
  for (const i of mealIngredients(meal)) L.push(i.oz !== null ? `- ${i.item}: ${i.oz} oz (${i.practical})` : `- ${i.item}: ${i.practical}`);
  L.push(`- Beef tallow: ${TALLOW_TSP[meal.tallow]}${meal.tallow === 'no' ? '' : `, from the week's ${tallowTotal} oz`}`);
  L.push('- Celtic sea salt: a pinch, on the beef as it cooks', '- Water: to drink', '', 'Steps:');
  meal.steps.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  L.push('', `Estimated cost of this meal: ${money(mealCost(meal))} (estimates, prices checked Nov 5, 2026).`, '', `From ${SITE}: one of 21 meals that together use exactly the weekly pool. Daily average across the week at this plan size: about ${dn.kcal} cal, ${dn.protein}g protein, ${dn.fat}g fat, ${dn.carbs}g carbs, ${dn.fiber}g fiber (counted from the products' labels, USDA reference for produce).`);
  return L.join('\n');
}

export function useHead({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('name', 'description'); document.head.appendChild(tag); }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
