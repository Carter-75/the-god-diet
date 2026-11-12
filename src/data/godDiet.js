// The God Diet: one weekly pool, 21 meals, nothing else.
// All amounts are ounces, weighed. The week is the lock: individual meals
// swing, but the 21 meals together drain the pool exactly.

export const POOL = [
  { item: 'Beef organ blend', oz: 84, note: 'US Wellness 75% lean ground beef with heart, kidney and liver. About 5.25 lb.' },
  { item: 'Egg', oz: 73.5, note: 'Exactly 42 eggs at 1.75 oz out of shell. Certified organic and pasture-raised.' },
  { item: 'Sardines', oz: 19, note: 'About 6 1/3 tins, about 3 oz drained each. 1 oz at 19 of the 21 meals; wild salmon covers the other 2.' },
  { item: 'Wild sockeye salmon', oz: 2, note: 'Wild Planet canned wild sockeye. 1 oz at 2 meals, swapped in for the sardines. Farmed salmon is banned; wild is the pass.' },
  { item: 'Wild blueberries', oz: 4, note: 'Wyman\'s frozen wild blueberries. 2 oz at 2 morning meals.' },
  { item: 'Broccoli (cooked)', oz: 6, note: 'Cooked only, always: raw crucifers are denied on this diet, they can block the thyroid. 3 oz at 2 evening meals.' },
  { item: 'Coconut water', oz: 24, note: 'Harmless Harvest plain. 8 oz to drink at 3 midday meals.' },
  { item: 'Beef bone broth', oz: 32, note: 'Homemade from Seven Sons Farms beef soup bones. The base of both soups, 16 oz each. It brings the glycine and collagen that muscle meat is short on.' },
  { item: 'Ground flaxseed', oz: 2, note: 'Evidence add, not a video verdict: the Oct 25, 2026 literature check in the database found flax very good (richest plant ALA source, richest lignan source, about 27% fiber). 0.5 oz in 4 meals.' },
  { item: 'Banana', oz: 28, note: 'About 7 bananas. The morning fruit, 4 oz per morning meal.' },
  { item: 'Kiwi', oz: 52.5, note: 'About 21 kiwis. The midday fruit, 7.5 oz per midday meal. Raised Nov 5, 2026 for fiber.' },
  { item: 'Avocado', oz: 56, note: 'About 14 avocados. The evening fruit, 8 oz per evening meal. Doubled Nov 5, 2026 for fiber: avocado carries most of the diet\'s fiber.' },
  { item: 'Cheese', oz: 10, note: 'Raw aged cheddar, 100% grass-fed: Dutch Meadows Dutch Reserve, the approved cheese in the database. See the cheese note on the Ingredients page.' },
  { item: 'Beef tallow', oz: 2.5, note: 'US Wellness. The only cooking fat, and only at meals where the beef cooks.' },
  { item: 'Einkorn sourdough', oz: 4, note: 'Homemade from Jovial organic einkorn flour. The only bread that passes: an old wheat leavened by a sourdough starter (einkorn flour and spring water), never commercial yeast. Every store bread checked is banned. 2 oz at each of the two subs.' },
  { item: 'Cassava wraps', oz: 1.76, note: 'Siete cassava flour tortillas, approved in the checked database. 2 tortillas (1.76 oz) at the egg salad wraps.' },
  { item: 'Celtic sea salt', oz: null, note: 'On the beef while it cooks. No set weight.' },
  { item: 'Water', oz: null, note: 'Spring water in glass bottles only, still or sparkling. No set weight.' },
];

export const INGREDIENTS = [
  {
    name: 'Beef organ blend',
    weeklyOz: 84,
    source: 'US Wellness Meats',
    detail: '75% lean ground beef blended with heart, kidney and liver. This is the base of 20 of the 21 meals. Nothing else is substituted for it.',
  },
  {
    name: 'Eggs',
    weeklyOz: 73.5,
    source: 'OrgaNICK Pastures at Woodman\'s, $5.39 a dozen',
    detail: 'Certified organic and pasture-raised, with no exceptions. Always whole eggs in every meal, never halves: 42 eggs a week at the 2,500 size, 24 at the 2,000 size, 23 at the 1,500 size. They ship in whole cartons only, never fractional packs; the order plan sizes each shipment to whole weeks and lets any extra eggs roll forward. Whatever brand ships, the carton must carry both certifications.',
  },
  {
    name: 'Sardines',
    weeklyOz: 19,
    source: 'King Oscar sardines in water, shipped in 12-tin cases',
    detail: '1 oz, a third of a tin, 4 fish, at 19 of the 21 meals: on the side, mashed into fillings, or crisped into cakes. Wild sockeye salmon takes the sardines\' place at the other 2 meals. This is the in-water tin that passes in the checked database (ingredients: sardines, water). Wild Planet\'s passing tin is packed in olive oil, which is not part of this diet, and the lightly smoked versions fail, so neither is used here.',
  },
  {
    name: 'Wild sockeye salmon',
    weeklyOz: 2,
    source: 'Wild Planet canned wild sockeye salmon',
    detail: 'Wild-caught Alaskan sockeye, approved in the checked database. Farmed salmon is banned (fed synthetic dye to color the meat), so canned wild salmon is the form that passes. It swaps in for the sardines at 2 meals: the salmon pate and the salmon and beef cakes, 1 oz each.',
  },
  {
    name: 'Wild blueberries',
    weeklyOz: 4,
    source: "Wyman's frozen wild blueberries",
    detail: 'Single ingredient, approved in the checked database. 2 oz folded into the banana pancakes and 2 oz with the egg muffins. They also carry fiber, about 1.2g an ounce on the Wyman\'s label.',
  },
  {
    name: 'Broccoli (cooked)',
    weeklyOz: 6,
    source: 'Shipped in the fresh box',
    detail: 'Only cooked crucifers are used on this diet. Raw kale and raw broccoli are denied here: raw crucifers can block the thyroid, and the best diet does not carry a food that fights a gland. Cooking removes the problem completely, so the broccoli is always steamed. 3 oz, at the meatloaf and the diner plate.',
  },
  {
    name: 'Coconut water',
    weeklyOz: 24,
    source: 'Harmless Harvest Organic Coconut Water, plain original',
    detail: 'Single ingredient and approved in the checked database. 8 oz to drink at 3 of the midday meals. Only the plain original passes; flavored versions were not checked and are not assumed to pass.',
  },
  {
    name: 'Ground flaxseed',
    weeklyOz: 2,
    source: 'Bob\'s Red Mill Organic Golden Flaxseed Meal',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule: a food with no video verdict can join when real-world evidence shows it is very good for you. Flax was literature-checked on Oct 25, 2026 in Carter\'s own database: among the richest plant sources of ALA omega-3, the richest common lignan source, about 27% fiber, with meta-analyses showing modest LDL, blood pressure, and blood sugar improvements. It must be ground: whole seeds pass through undigested. ALA complements the sardines and salmon, it does not replace marine omega-3. 0.5 oz (2 tablespoons) in the pancakes, egg muffins, omelet, and meatballs.',
  },
  {
    name: 'Beef bone broth',
    weeklyOz: 32,
    source: 'Homemade from Seven Sons Farms beef soup bones',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule. Both soups used to cook in salted water; bone broth is strictly better in the same slot: it brings collagen, gelatin, and glycine, the amino acid a muscle-meat-heavy diet runs short on, plus minerals from the bones. The honest limit: broth itself has modest trial evidence, it earns its place as the nutrient-carrying base of the soups, not as a miracle. Bones simmer with water and salt, nothing else; the broth is jarred and frozen in soup-sized portions. A bottled broth would have to be bones, water, and salt only to take its place.',
  },
  {
    name: 'Cheese',
    weeklyOz: 10,
    source: 'Dutch Meadows Dutch Reserve Raw Cheddar',
    detail: 'The approved cheese in the checked database, and the best one in it: raw whole milk from Dutch Meadows\' own Dutch Belted herd, verified 100% grass-fed with no grain ever, aged 12 to 14 months, made with Celtic sea salt, traditional animal rennet, and live cultures. This is the only cheese on the diet. An earlier build of this site used a pasteurized mozzarella that was never in the database at all; that was wrong and it is gone. The other approved raw cheddar, Organic Valley Grassmilk Raw Sharp, is the backup if Dutch Meadows is ever out of stock.',
  },
  {
    name: 'Potato chips',
    weeklyOz: null,
    source: 'Boulder Canyon Thin & Crispy Classic Sea Salt, 6 oz bag, $2.99 at Woodman\'s',
    detail: 'The snack chip, and an approved one in the checked database: potatoes, avocado oil, sea salt, nothing else. One snack is 1 oz, about 20 thin chips, a sixth of the bag, so one bag covers six snacks. On the diet only when the snack switcher is on; the guacamole it dips into is that evening\'s avocado, mashed early. The kettle-cooked Boulder Canyon and Siete sea salt chips carry the same clean three-ingredient label and stand as backups.',
  },
  {
    name: 'Einkorn sourdough',
    weeklyOz: 4,
    source: 'Homemade from Jovial Organic Einkorn All-Purpose Flour',
    detail: 'The bread rule from the checked database: wheat passes only as an old wheat (einkorn, emmer, spelt), and a wheat bread needs a sourdough base, never commercial yeast. Every store bread checked fails (enriched flour, seed oils, cane sugar, soy), so the bread is baked at home: Jovial organic einkorn flour, spring water, a starter of just flour and water, and Celtic sea salt. Bake one small loaf a week; 2 oz (two slices or a small roll) carries the guac burger sub and the meatball sub.',
  },
  {
    name: 'Cassava wraps',
    weeklyOz: 1.76,
    source: 'Siete Cassava Flour Tortillas, 8 ct',
    detail: 'Approved in the checked database: cassava flour, water, coconut flour, coconut oil, apple cider vinegar, sea salt, xanthan gum. Two tortillas (1.76 oz together) wrap the egg salad meal. The burrito-size version of the same brand is banned for coconut sugar, so it is the regular tortillas only.',
  },
  {
    name: 'Beef tallow',
    weeklyOz: 2.5,
    source: 'US Wellness Meats',
    detail: 'The only cooking fat on the diet. Used only where the beef cooks. Soups, the baked meatloaf, and the one no-beef meal use none.',
  },
  {
    name: 'Banana',
    weeklyOz: 28,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The morning fruit, at each of the 7 morning meals, on the side or cooked into the meal, like the banana pancakes. Weighed: 4 oz at the 2,500 size, 2.5 oz at the 2,000 size, 3 oz at the 1,500 size. The smaller servings at the two smaller sizes are part of how those plans hold their calorie ranges.',
  },
  {
    name: 'Kiwi',
    weeklyOz: 52.5,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The midday fruit, at each of the 7 midday meals, always on the side. 7.5 oz (3 kiwis) at the 2,500 size, 4 oz at the 2,000 size, 4.5 oz at the 1,500 size. Raised from 5 oz on Nov 5, 2026 to lift the day\'s fiber at the full size, then trimmed a little at the smaller sizes when the sandwiches joined.',
  },
  {
    name: 'Avocado',
    weeklyOz: 56,
    source: 'Shipped in the fresh box, weighed',
    detail: 'The evening fruit, at each of the 7 evening meals, sliced, mashed as a sauce, or folded into a filling. 8 oz (2 avocados) at the 2,500 size, 5 oz at the 2,000 size, 4 oz (1 avocado) at the 1,500 size. Doubled from 4 oz on Nov 5, 2026: avocado is the diet\'s biggest fiber source at 1.9g per ounce.',
  },
  {
    name: 'Celtic sea salt',
    weeklyOz: null,
    source: 'Celtic sea salt',
    detail: 'Goes on the beef while it cooks, and on avocado or eggs when the meal calls for it. The separate spice shelf (paprika, cinnamon, garlic powder, onion powder, black pepper) is listed with the condiments below.',
  },
  {
    name: 'Water',
    weeklyOz: null,
    source: 'Glass-bottle spring water: Mountain Valley, Saratoga, S.Pellegrino, Lauretana',
    detail: 'The drink at every meal. The soups cook in bone broth, not water.  Glass bottles only: plastic does not pass, and aluminum bottles are resin-lined, so the water sits against a liner instead of the bottle. The accepted waters: Mountain Valley still (the water Carter settled on Oct 21, 2026, and one of the three brands the videos name as passing, with S.Pellegrino and Lauretana), and Saratoga spring water in the 28 oz glass bottle, still or sparkling (the bottle from Carter\'s photo; it passes by the same spring-water-in-glass rule and he ruled both versions fine on Nov 1, 2026). Nothing flavored, nothing sweetened, nothing added.',
  },
];

// tallow: 'yes' | 'double' | 'light' | 'no'
// Amounts are ounces for this meal. fruitOz is banana 4 / kiwi 5 / avocado 4 by slot.
export const MEALS = [
  { id: 'smash-patties-fried-eggs', day: 1, slot: 'Morning', name: 'Smash Patties and Fried Eggs', minutes: 20,
    description: 'Beef patties smashed thin and crisped in tallow, cheese melted over, eggs fried in the same pan. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', ketchup: 1, pickles: 2,
    steps: ['Heat tallow in a heavy pan. Smash the beef into two thin patties, salt them, and fry until the edges crisp.', 'Lay the cheese over the patties to melt. Fry the eggs in the same pan in the beef fat.', 'Plate the patties and eggs with the sardines, the pickle spears, and the banana on the side, and the ketchup for the patties.'] },
  { id: 'beef-egg-scramble', day: 1, slot: 'Midday', name: 'Beef and Egg Scramble', minutes: 15,
    description: 'Beef crumbled and scrambled with eggs in tallow, cheese folded in at the end. Sardines and kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Brown the beef crumbles in tallow with salt, breaking them small.', 'Pour in the beaten eggs and scramble soft. Fold the cheese in off the heat.', 'Serve with the sardines and the kiwi on the side.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'guac-burger-plate', day: 1, slot: 'Evening', name: 'Guac Burger Sub', minutes: 20,
    description: 'A tallow-fried patty on homemade einkorn sourdough with avocado mashed with salt as the sauce, soft eggs over the top, sardines on the side. No cheese at this meal. The bread is the diet\'s own: einkorn flour, spring water, sourdough starter, salt.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, oliveOil: 1, bread: 2,
    steps: ['Mash the avocado with salt and the olive oil into a rough guacamole.', 'Toast the einkorn sourdough (2 oz, two slices or a small roll). Fry the beef as one patty in tallow, salted as it cooks.', 'Cook the eggs soft in the same pan. Set the patty on the bread, spoon the avocado over, top with the eggs, sardines on the side, and the ketchup for the patty.'] },
  { id: 'scotch-eggs', day: 2, slot: 'Morning', name: 'Scotch Eggs', minutes: 30,
    description: 'Eggs wrapped in beef and fried in tallow, a double tallow meal, with cheese melted over. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'double',
    steps: ['Boil the eggs until just set, cool and peel them.', 'Flatten the beef into sheets, salt, and wrap each egg fully. Fry in a double share of tallow, turning until crisp all over.', 'Melt the cheese over the top. Serve with the sardines and the banana.'] },
  { id: 'egg-wrap-burrito', day: 2, slot: 'Midday', name: 'Egg Wrap Burrito', minutes: 20,
    description: 'A thin omelet is the wrap. Inside: tallow-seared beef, cheese, and sardine pieces. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    steps: ['Cook the beaten eggs as one thin omelet sheet in tallow and set it flat.', 'Sear the beef strips in tallow with salt. Break the sardines into pieces.', 'Fill the omelet with beef, cheese and sardines, roll it tight, and serve with the kiwi.'] },
  { id: 'meatballs-avocado', day: 2, slot: 'Evening', name: 'Meatball Sub', minutes: 25,
    description: 'Beef meatballs on homemade einkorn sourdough with the cheese melted over them and the ketchup as the sauce, avocado slices tucked in, sardines on the side. The one sub of the week with no egg.',
    beef: 4, egg: 0, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, flax: 0.5, bread: 2,
    steps: ['Mix the ground flax into the beef, roll it into meatballs with salt, and fry them in tallow until browned through.', 'Toast the einkorn sourdough (2 oz, a small roll or two slices). Set the meatballs on it and lay the cheese over them so it melts in.', 'Spoon the ketchup over as the sauce, tuck in the avocado slices, and serve with the sardines.'] },
  { id: 'banana-pancakes-breakfast-patties', day: 3, slot: 'Morning', name: 'Banana Pancakes and Breakfast Patties', minutes: 25,
    description: 'Pancakes made from just banana and egg with wild blueberries folded in and raw honey drizzled over, griddled in tallow, next to beef breakfast patties with cheese melted on. Sardines on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', blueberries: 2, honey: 2, flax: 0.5, psyllium: 1,
    seasoning: 'Cinnamon', steps: ['Mash the banana with the eggs and the cinnamon into a batter, whisk in the ground flax and the psyllium, and fold in the blueberries. Griddle small pancakes in tallow.', 'Form the beef into breakfast patties, salt, and fry in tallow. Melt the cheese on them.', 'Drizzle the honey over the pancakes. Serve the pancakes and patties together with the sardines on the side.'] },
  { id: 'beef-pizza', day: 3, slot: 'Midday', name: 'Beef Pizza', minutes: 25,
    description: 'Beef pressed flat and crisped in tallow is the crust. Cheese, sardine pieces, and an egg on top. Kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Press the beef into a thin round in a hot tallow pan and crisp it like a crust, salted.', 'Top with the cheese and sardine pieces and let the cheese melt.', 'Fry or bake the egg and set it on top. Serve with the kiwi.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'deviled-eggs-patty', day: 3, slot: 'Evening', name: 'Deviled Eggs and a Cheese Patty', minutes: 30,
    description: 'Deviled eggs with the yolks mashed with sardines and avocado, next to a tallow beef patty with cheese.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes',
    mayo: 1, mustard: 1, seasoning: 'Paprika', steps: ['Boil the eggs, halve them, and mash the yolks with the sardines, avocado, homemade mayo and mustard and a pinch of salt. Fill the whites.', 'Fry the beef patty in tallow and melt the cheese over it.', 'Dust the deviled eggs with paprika and plate them next to the patty.'] },
  { id: 'egg-drop-beef-soup', day: 4, slot: 'Morning', name: 'Egg Drop Beef Soup', minutes: 20,
    description: 'No tallow. Beef simmered in beef bone broth, egg ribbons stirred through, sardines in the bowl, cheese grated over. Banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no', broth: 16,
    seasoning: 'Turmeric', steps: ['Simmer the beef in the bone broth until it gives up its flavor, breaking it into small pieces.', 'Swirl the water and drizzle in the beaten eggs so they set as ribbons. Add the sardines.', 'Ladle into a bowl, grate the cheese over, and serve with the banana.'] },
  { id: 'cheese-crisps-sardine-pate', day: 4, slot: 'Midday', name: 'Cheese Crisps with Salmon Pate', minutes: 20,
    description: 'A double cheese meal: crisps from half the cheese, wild salmon mashed as a pate to scoop with them, plus a tallow beef patty and fried eggs. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 0, salmon: 1, cheese: 1, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    mayo: 1, steps: ['Bake or fry small piles of the cheese until crisp and golden. Mash the salmon with the homemade mayo and a pinch of salt into a pate.', 'Fry the beef patty in tallow and fry the eggs in the same pan.', 'Serve the crisps and pate with the patty and eggs, kiwi on the side.'] },
  { id: 'open-face-egg-salad-stack', day: 4, slot: 'Evening', name: 'Egg Salad Wraps', minutes: 25,
    description: 'Two cassava wraps filled with tallow-seared beef slices, chopped egg and sardine salad, melted cheese, and avocado. A big plate to balance the light soup morning, in the approved wrap.',
    beef: 4, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', wrap: 1.76,
    mayo: 1, mustard: 1, steps: ['Sear the beef in tallow with salt and slice it thick. Melt the cheese over the slices.', 'Chop the cooked eggs and mash with the sardines, avocado, homemade mayo and mustard into an egg salad.', 'Warm the two cassava wraps until soft, fill them with the beef, cheese, and egg salad, roll them tight, and serve.'] },
  { id: 'the-no-beef-meal', day: 5, slot: 'Morning', name: 'The No-Beef Meal', minutes: 15,
    description: 'The one meal with no beef and no tallow: eggs, sardines, and cheese crisps, with banana. Its beef moves to tonight\'s meatloaf.',
    beef: 0, egg: 5.25, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'no',
    steps: ['Crisp the cheese into crisps in a dry pan.', 'Cook the eggs any way you like, in a dry or lightly beef-fat-free pan, salted.', 'Serve the eggs, sardines and cheese crisps with the banana.'] },
  { id: 'cheese-stuffed-beef-rolls', day: 5, slot: 'Midday', name: 'Cheese-Stuffed Beef Rolls', minutes: 25,
    description: 'Beef rolled around cheese and seared in tallow, with poached eggs. Sardines and kiwi on the side, coconut water to drink.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes', coconutWater: 8, psyllium: 1,
    steps: ['Flatten the beef, lay the cheese in the middle, roll tight and pin with a toothpick if needed. Salt the outside.', 'Sear the rolls in tallow, turning until browned and the cheese melts inside.', 'Poach the eggs. Serve the rolls and eggs with the sardines and kiwi.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
  { id: 'mini-meatloaf', day: 5, slot: 'Evening', name: 'Mini Meatloaf', minutes: 40,
    description: 'Double beef, including the beef the no-beef morning gave up. Baked in its own fat, no tallow, with avocado mash, eggs, sardines, and steamed broccoli. No cheese at this meal.',
    beef: 8, egg: 3.5, sardines: 1, cheese: 0, fruit: 'Avocado', fruitOz: 8, tallow: 'no', broccoli: 3,
    ketchup: 1, steps: ['Form the beef into a small loaf with salt, spread the ketchup over the top as a glaze, and bake it in its own fat until cooked through. Rest it before slicing.', 'Mash the avocado with salt. Steam the broccoli until tender. Cook the eggs to go with it.', 'Slice the meatloaf and serve with the avocado mash, eggs, sardines and broccoli.'] },
  { id: 'loaded-omelet', day: 6, slot: 'Morning', name: 'Loaded Omelet', minutes: 15,
    description: 'An omelet cooked in tallow with beef crumbles and cheese folded in, sardines on top. Banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'yes', flax: 0.5,
    seasoning: 'Turmeric', steps: ['Brown the beef crumbles in tallow with salt.', 'Stir the ground flax and turmeric into the beaten eggs, add them, cook the omelet around the beef, and fold the cheese inside.', 'Slide it out, lay the sardines on top, and serve with the banana.'] },
  { id: 'sardine-beef-cakes', day: 6, slot: 'Midday', name: 'Salmon and Beef Cakes', minutes: 25,
    description: 'Wild salmon and beef mixed into cakes and fried crisp in tallow, a double tallow meal, with a fried egg on top and cheese melted over. Kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 0, salmon: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'double',
    steps: ['Mash the salmon into the beef with salt and form flat cakes.', 'Fry the cakes in a double share of tallow until deeply crisp on both sides.', 'Fry the egg, set it on the cakes, and melt the cheese over everything. Serve with the kiwi.'] },
  { id: 'meatball-soup', day: 6, slot: 'Evening', name: 'Meatball Soup', minutes: 30,
    description: 'No tallow. Meatballs simmered in beef bone broth with egg ribbons, cheese stirred in, sardines in the bowl. Avocado on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'no', broth: 16,
    seasoning: 'Ginger', steps: ['Roll small meatballs from the salted beef and simmer them in the bone broth.', 'Swirl in the beaten eggs as ribbons, add the sardines, and stir the cheese in until it melts.', 'Serve in bowls with the avocado on the side.'] },
  { id: 'egg-muffins', day: 7, slot: 'Morning', name: 'Egg Muffins', minutes: 30,
    description: 'Beef pressed into muffin cups with eggs baked inside, the tin greased with tallow, cheese on top. Sardines and banana on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Banana', fruitOz: 4, tallow: 'light', blueberries: 2, flax: 0.5,
    steps: ['Grease a muffin tin with tallow. Press the beef into cups, salt them, stir the ground flax into the beaten eggs, and pour the eggs into the cups.', 'Bake until the eggs are set. Put the cheese on top for the last minutes so it melts.', 'Serve with the sardines, the banana, and the blueberries.'] },
  { id: 'fried-rice-plate', day: 7, slot: 'Midday', name: 'Fried "Rice" Plate', minutes: 20,
    description: 'Beef crumbled small and fried hard in tallow until it eats like rice, eggs scrambled in pieces through it, cheese folded in. Sardines and kiwi on the side.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Kiwi', fruitOz: 7.5, tallow: 'yes',
    steps: ['Crumble the beef very small and fry it hard in tallow with salt until browned and rice-like.', 'Scramble the eggs in pieces through the beef.', 'Fold the cheese in off the heat. Serve with the sardines and kiwi.'] },
  { id: 'the-diner-plate', day: 7, slot: 'Evening', name: 'The Diner Plate', minutes: 25,
    description: 'A thick beef slab seared in tallow like a steak, sunny eggs cooked in the same fat, cheese on the beef, sardines on the side, avocado sliced with salt and olive oil, pickle spears and steamed broccoli. Then the week loops back to Day 1.',
    beef: 4, egg: 3.5, sardines: 1, cheese: 0.5, fruit: 'Avocado', fruitOz: 8, tallow: 'yes', ketchup: 1, oliveOil: 1, pickles: 2, broccoli: 3,
    steps: ['Sear the thick beef slab in tallow with salt like a steak, resting it a few minutes.', 'Fry the eggs sunny in the same fat. Melt the cheese over the beef.', 'Steam the broccoli. Plate with the sardines, the avocado sliced with salt and the olive oil drizzled over, the pickle spears, the broccoli, and the ketchup for the beef.'] },
];

// ---------------------------------------------------------------------------
// Three sizes of the same week (added Nov 5, 2026 at Carter's request).
// The 21 meals above are the 2,500-calorie plan, Carter's own. Every meal
// keeps the same ingredients at every size; only the amounts change.
// Carter's ranges: a plan is on target anywhere in 1,350-1,650 (the 1,500),
// 1,850-2,150 (the 2,000), or 2,350-2,650 (the 2,500) calories a day.
// Beef rule (Carter, Nov 5, 2026): beef is portioned raw in quarter-pound
// multiples at EVERY size, 0.25 lb (4 oz) a meal and 0.5 lb (8 oz) for the
// double meatloaf, never odd ounces. The 2,500 and 2,000 plans both run the
// full 84 oz beef pool that way (the 2,000 scales eggs, fruit, and tallow
// instead of beef). At the 1,500 size, 20 beef meals at a 0.25 lb minimum
// would floor the day around 1,930 calories, outside the range, so Carter
// directed the fix himself: keep the beef in quarter pounds (40 oz a week,
// at 9 meals) and adjust the other 11 beef recipes at this size to run on
// their eggs, sardines, salmon, and cheese, with their own names,
// descriptions, and steps in the overrides below.
// Label-checked daily averages (rebuilt Nov 6, 2026 with the approved raw
// cheddar in place of the never-approved mozzarella, Bob's Red Mill flax
// label values, and exact product prices; rebalanced the same day when the
// sandwiches joined: two subs on homemade einkorn sourdough, one meal in
// cassava wraps): 2,500 plan: 2,614 cal, 145g protein, 183g fat, 112g
// carbs, 32.1g fiber. 2,000 plan: 2,127 cal, 126g protein, 149g fat, 81g
// carbs, 22.3g fiber. 1,500 plan: 1,578 cal, 94g protein, 102g fat, 81g
// carbs, 21.1g fiber. The carriers' calories are offset by smaller tallow
// pools (2.5 oz at 2,500, 0.5 oz at the two smaller sizes) and, at the
// smaller sizes, a small banana and kiwi trim (TIER_FRUIT_TRIM).
export const PLAN_TIERS = [1500, 2000, 2500];
export const TIER_TALLOW_OZ = { 1500: 0.5, 2000: 0.5, 2500: 2.5 };

// The snack (Carter's addition, Nov 6, 2026): guac and chips, on its own
// switcher in the header, daily or every other day (Days 1, 3, 5, 7). One
// serving is 1 oz of Boulder Canyon Thin & Crispy chips (the label serving,
// about 20 chips, a sixth of the 6 oz bag) and 3 oz of guacamole. The
// guac's avocado is not extra: it comes out of that day's evening meal,
// which keeps the rest of its avocado, so the avocado pool and the fresh
// orders never change. The chips add 170 calories a snack, and the day
// stays inside Carter's ranges because of the trims below, solved against
// the label data for each plan size and frequency: a smaller tallow pool,
// less banana and kiwi, and at the daily setting on the two smaller sizes,
// a quarter ounce less cheese at some meals and one egg fewer at three
// two-egg meals. With the trims, the snack days land at 2,616 every other
// day and 2,614 daily (2,500), 2,128 and 2,132 (2,000), and 1,580 at both
// frequencies (1,500), against snack-off days of 2,614, 2,127, and 1,578.
// The trims were re-solved Nov 6, 2026 when the sandwiches joined the week.
export const SNACK_DAYS = { eod: [1, 3, 5, 7], daily: [1, 2, 3, 4, 5, 6, 7] };
export const SNACK = {
  chipsOz: 1,
  guacOz: 3,
  bagOz: 6,
  name: 'Guac and Chips',
  description: 'The original snack: fresh guacamole and a label serving of the chips that pass. The guacamole is tonight\'s avocado served early, 3 oz of the evening avocado mashed with salt and lemon, so the avocado pool never changes. The chips are Boulder Canyon Thin & Crispy, the approved bag: potatoes, avocado oil, sea salt.',
  steps: [
    'Scoop 3 oz of avocado (about three quarters of one avocado) into a bowl. That avocado comes out of tonight\'s evening meal, which keeps the rest of its avocado.',
    'Mash it rough with a fork, Celtic sea salt, and a squeeze of lemon. That is the whole guacamole: nothing in it that is not already in the diet.',
    'Weigh out 1 oz of chips, about 20 thin chips, a sixth of the 6 oz bag. Put the bag away before you sit down.',
    'Eat it between the midday and evening meals. On the every-other-day setting it lands on Days 1, 3, 5 and 7.',
  ],
};
export const SNACK_TRIMS = {
  2500: {
    eod: { tallowOz: 2.5, fruitTrim: 2, eggCuts: ['smash-patties-fried-eggs'], cheeseCuts: [] },
    daily: { tallowOz: 1, fruitTrim: 2, eggCuts: ['smash-patties-fried-eggs', 'beef-egg-scramble', 'guac-burger-plate'], cheeseCuts: [] },
  },
  2000: {
    eod: { tallowOz: 0.5, fruitTrim: 2, eggCuts: ['scotch-eggs', 'deviled-eggs-patty', 'open-face-egg-salad-stack', 'the-no-beef-meal'], cheeseCuts: ['smash-patties-fried-eggs', 'beef-egg-scramble'] },
    daily: { tallowOz: 0.5, fruitTrim: 2, eggCuts: ['scotch-eggs', 'deviled-eggs-patty', 'open-face-egg-salad-stack', 'the-no-beef-meal'], cheeseCuts: ['smash-patties-fried-eggs', 'beef-egg-scramble', 'scotch-eggs', 'egg-wrap-burrito', 'meatballs-avocado', 'banana-pancakes-breakfast-patties', 'beef-pizza', 'deviled-eggs-patty', 'egg-drop-beef-soup', 'cheese-crisps-sardine-pate', 'open-face-egg-salad-stack', 'the-no-beef-meal', 'cheese-stuffed-beef-rolls', 'loaded-omelet', 'sardine-beef-cakes', 'meatball-soup', 'egg-muffins', 'fried-rice-plate', 'the-diner-plate'] },
  },
  1500: {
    eod: { tallowOz: 0.5, fruitTrim: 2, eggCuts: ['deviled-eggs-patty', 'open-face-egg-salad-stack', 'the-no-beef-meal'], cheeseCuts: ['smash-patties-fried-eggs'] },
    daily: { tallowOz: 0.5, fruitTrim: 2, eggCuts: ['deviled-eggs-patty', 'open-face-egg-salad-stack', 'the-no-beef-meal'], cheeseCuts: ['smash-patties-fried-eggs', 'beef-egg-scramble', 'scotch-eggs', 'egg-wrap-burrito', 'meatballs-avocado', 'banana-pancakes-breakfast-patties', 'beef-pizza', 'deviled-eggs-patty', 'egg-drop-beef-soup', 'cheese-crisps-sardine-pate', 'open-face-egg-salad-stack', 'the-no-beef-meal', 'cheese-stuffed-beef-rolls', 'loaded-omelet', 'sardine-beef-cakes', 'meatball-soup', 'egg-muffins', 'fried-rice-plate', 'the-diner-plate'] },
  },
};

function snackMeal(day) {
  return {
    id: `guac-and-chips-d${day}`, day, slot: 'Snack', name: SNACK.name,
    description: SNACK.description, steps: SNACK.steps, minutes: 5,
    beef: 0, egg: 0, sardines: 0, salmon: 0, cheese: 0,
    fruit: 'Avocado', fruitOz: SNACK.guacOz, chips: SNACK.chipsOz,
    blueberries: 0, broccoli: 0, flax: 0, broth: 0, bread: 0, wrap: 0, tallow: 'no',
    coconutWater: 0, ketchup: 0, mayo: 0, mustard: 0, honey: 0, oliveOil: 0, pickles: 0, psyllium: 0,
    snackPick: 'guac',
  };
}

// The snack picker (added Nov 7, 2026 at Carter's direction): guac and chips
// is no longer the only snack. Every snack below passed the checked database
// the same way the meals did: whole fruit blended with nothing added for the
// packs and purees (hard seeds out, per Carter's seed rule; the tiny soft
// berry kind of seed does not count), the two Pitaya pops whose only extra is
// ascorbic acid (vitamin C itself, ruled into the approved preservative class
// on Nov 7, 2026), one applesauce that is literally just apples, and homemade
// snacks built from the pool's own ingredients. Product nutrition is USDA
// reference for the fruit itself, since a puree pack is the whole fruit and
// nothing else; costs are per serving from the checked prices, estimates
// where the seller sells by the case or the box. Picking a snack other than
// guac runs the week through balanceSnackWeek below, which makes room with
// the same levers the plan trims use (tallow pool, banana and kiwi, then egg
// and cheese) until the day average lands back inside Carter's range.
const pureeSteps = (fruit) => [
  'Thaw one serving in the fridge overnight, or under cool water for a few minutes.',
  `Pour it into a glass and drink it as it is. This is Carter's juice: the whole ${fruit} blended, everything in it, nothing added.`,
  'Eat it between the midday and evening meals, on the snack days your setting picks.',
];
const frozenSteps = (fruit) => [
  'Thaw one serving in the fridge for a few hours, or eat the pieces half-frozen straight from the bag.',
  `For juice, blend the pieces plain until smooth: no water, no ice, nothing added. Blended whole ${fruit} is Carter's juice.`,
  'Eat it between the midday and evening meals, on the snack days your setting picks.',
];
export const SNACK_CATALOG = [
  { id: 'guac', name: 'Guac and Chips', group: 'The original', special: true },
  { id: 'dragon-fruit-pack', name: 'Dragon Fruit Juice Pack', group: 'Frozen juice packs',
    description: 'One ingredient: organic red dragon fruit puree, seeds in (the tiny soft kind, strawberry class). A frozen pack from Pitaya Foods, the cleanest juice found anywhere: the whole fruit blended, nothing removed, nothing added.',
    steps: pureeSteps('dragon fruit'), minutes: 2,
    fixedNutrition: { kcal: 60, protein: 1, fat: 0, carbs: 13, fiber: 2.9 }, fixedCost: 1.50,
    portionText: '1 frozen pack (3.5 oz)', unitLabel: '4-pack of 3.5 oz packs', servingsPerUnit: 4,
    poolItem: 'Dragon fruit puree packs', poolText: 'Pitaya Foods frozen packs, one ingredient. They ship frozen from pitayafoods.com (8 frozen items minimum per order).',
    buy: { label: 'Good Eggs (Pitaya Foods dragon fruit smoothie packs)', url: 'https://www.goodeggs.com/pitayafoods/organic-dragon-fruit-smoothie-packs/65f08e0d20c1530012f2b5f4' } },
  { id: 'coconut-pack', name: 'Coconut Juice Pack', group: 'Frozen juice packs',
    description: 'Organic coconut puree: coconut meat and coconut water, the whole coconut blended and frozen by Pitaya Foods. The pack twin of the approved Harmless Harvest coconut smoothie bottle.',
    steps: pureeSteps('coconut'), minutes: 2,
    fixedNutrition: { kcal: 186, protein: 2, fat: 17, carbs: 10, fiber: 5 }, fixedCost: 1.50,
    portionText: '1 frozen pack (3.5 oz)', unitLabel: '4-pack of 3.5 oz packs', servingsPerUnit: 4,
    poolItem: 'Coconut puree packs', poolText: 'Pitaya Foods frozen packs: coconut meat and coconut water, nothing else. They ship frozen from pitayafoods.com.',
    buy: { label: 'Pitaya Foods (organic coconut smoothie packs)', url: 'https://www.pitayafoods.com/products/organic-coconut-smoothie-packs' } },
  { id: 'acai-pack', name: 'Acai Puree Pack', group: 'Frozen juice packs',
    description: 'Unsweetened acai puree with a pinch of citric acid, the lemon class of preservative. Only the Pitaya and Amafruits packs: the famous Sambazon unsweetened pack adds sunflower lecithin and is banned in the checked database.',
    steps: pureeSteps('acai'), minutes: 2,
    fixedNutrition: { kcal: 65, protein: 2, fat: 5, carbs: 4, fiber: 4.5 }, fixedCost: 2.00,
    portionText: '1 frozen pack (3.5 oz)', unitLabel: 'bag of 3.5 oz packs', servingsPerUnit: 20,
    poolItem: 'Acai puree packs (unsweetened)', poolText: 'Pitaya Foods or Amafruits pure unsweetened packs only. Never the Sambazon pack: it carries sunflower lecithin.',
    buy: { label: 'Amafruits (pure and unsweetened acai packs)', url: 'https://amafruits.com' } },
  { id: 'acerola-pack', name: 'Acerola Juice Pack', group: 'Frozen juice packs',
    description: 'One ingredient: organic acerola puree from Amafruits, who strain the seeds out and add nothing. Acerola is one of the most vitamin C rich fruits there is.',
    steps: pureeSteps('acerola cherry'), minutes: 2,
    fixedNutrition: { kcal: 32, protein: 0, fat: 0, carbs: 8, fiber: 1.1 }, fixedCost: 2.50,
    portionText: '1 frozen pack (3.5 oz)', unitLabel: 'bag of 3.5 oz packs', servingsPerUnit: 20,
    poolItem: 'Acerola puree packs', poolText: 'Amafruits packs, shipped frozen from their Illinois warehouse by FedEx, about $49.98 for 20 packs.',
    buy: { label: 'Amafruits (acerola pure and unsweetened packs)', url: 'https://amafruits.com' } },
  { id: 'guava-pack', name: 'Pink Guava Juice Pack', group: 'Frozen juice packs',
    description: 'One ingredient: organic pink guava puree from Amafruits, deseeded (guava seeds are the hard kind, so they come out before the pack is made) and nothing added.',
    steps: pureeSteps('pink guava'), minutes: 2,
    fixedNutrition: { kcal: 68, protein: 3, fat: 1, carbs: 14, fiber: 5.4 }, fixedCost: 2.50,
    portionText: '1 frozen pack (3.5 oz)', unitLabel: 'bag of 3.5 oz packs', servingsPerUnit: 20,
    poolItem: 'Pink guava puree packs', poolText: 'Amafruits packs, shipped frozen from Illinois by FedEx, about $49.98 for 20 packs.',
    buy: { label: 'Amafruits (pink guava purees)', url: 'https://amafruits.com/products/pink-guava-purees' } },
  { id: 'mango-pieces', name: 'Mango Pieces (Pitaya)', group: 'Organic fruit, frozen',
    description: 'Pitaya Foods organic mango pieces: organic mango and nothing else, peeled and seeded, frozen in a bag. Eat them thawed or blend them plain: blended whole fruit is the juice. This replaces the old mango pulps, which were conventional fruit and are banned under the organic rule.',
    steps: frozenSteps('mango'), minutes: 2,
    fixedNutrition: { kcal: 68, protein: 1, fat: 0, carbs: 17, fiber: 1.8 }, fixedCost: 3.00,
    portionText: '4 oz of frozen pieces (from the 12 oz bag)', unitLabel: '12 oz bag', servingsPerUnit: 3,
    poolItem: 'Mango pieces (Pitaya, organic)', poolText: 'Pitaya Foods organic and regenerative mango pieces, about $8.99 per 12 oz bag at Thrive Market.',
    buy: { label: 'Pitaya Foods (organic mango pieces)', url: 'https://www.pitayafoods.com' } },
  { id: 'passion-fruit-cubes', name: 'Passion Fruit Cubes (Pitaya)', group: 'Organic fruit, frozen',
    description: 'Pitaya Foods organic passion fruit, pureed and frozen into seedless cubes. Seedless is the point: passion fruit seeds are the hard kind, and every other passion fruit product sat conditional on them. This one is organic and the seeds are already out. Buy the bag that says Organic; the same brand sells a conventional foodservice version.',
    steps: frozenSteps('passion fruit'), minutes: 2,
    fixedNutrition: { kcal: 97, protein: 2, fat: 1, carbs: 23, fiber: 10.4 }, fixedCost: 1.72,
    portionText: '3.5 oz of cubes (from the 12 oz bag)', unitLabel: '12 oz bag', servingsPerUnit: 3,
    poolItem: 'Passion fruit cubes (Pitaya, organic)', poolText: 'Pitaya Foods organic seedless passion fruit cubes, about $5.89 per 12 oz bag at Thrive Market.',
    buy: { label: 'Pitaya Foods (organic passion fruit cubes, seedless)', url: 'https://www.pitayafoods.com' } },
  { id: 'immunity-blend', name: 'Tropical Immunity Blend (Pitaya)', group: 'Organic fruit, frozen',
    description: 'Pitaya Foods organic bite-sized pieces: organic dragon fruit, organic mango, organic passion fruit, and nothing else. Three of the passing fruits in one bag. Blend plain for juice or eat the pieces thawed.',
    steps: frozenSteps('fruit'), minutes: 2,
    fixedNutrition: { kcal: 65, protein: 1, fat: 0, carbs: 16, fiber: 4 }, fixedCost: 2.60,
    portionText: '4 oz of pieces (from the 12 oz bag)', unitLabel: '12 oz bag', servingsPerUnit: 3,
    poolItem: 'Tropical Immunity Blend (Pitaya, organic)', poolText: 'Pitaya Foods organic pieces, about $7.79 per 12 oz bag at Thrive Market; 32 oz bags exist too.',
    buy: { label: 'Ralphs (Pitaya Foods organic immunity pieces)', url: 'https://www.ralphs.com/p/pitaya-foods-organic-100-fruit-immunity-bite-size-pieces/0085368700480' } },
  { id: 'pineapple-chunks', name: 'Pineapple Chunks (Woodstock)', group: 'Organic fruit, frozen',
    description: 'Woodstock Farms organic pineapple chunks: the ingredient list is organic pineapple, full stop. Frozen chunks to eat thawed or blend plain. This is the organic answer to the pineapple question; every pineapple puree and pulp checked was conventional or carried juice, and all of them are banned.',
    steps: frozenSteps('pineapple'), minutes: 2,
    fixedNutrition: { kcal: 57, protein: 1, fat: 0, carbs: 15, fiber: 1.6 }, fixedCost: 1.60,
    portionText: '4 oz of chunks (from the 10 oz bag)', unitLabel: '10 oz bag', servingsPerUnit: 2,
    poolItem: 'Pineapple chunks (Woodstock, organic)', poolText: 'Woodstock Farms organic pineapple chunks, 10 oz bags; FoodServiceDirect ships cases of 12 frozen.',
    buy: { label: 'FoodServiceDirect (Woodstock organic pineapple chunks, case of 12)', url: 'https://www.foodservicedirect.com/stock-farms-organic-pineapple-chunk-10-ounce-12-per-case-217467.html' } },
  { id: 'strawberry-earthbound', name: 'Strawberries (Earthbound Farm)', group: 'Organic fruit, frozen',
    description: 'Earthbound Farm frozen organic sliced strawberries: organic strawberries, nothing added. The strawberry that fully passes: the Great Value bag in the car was conventional, and conventional is denied under the organic rule. These are at Woodman\'s, $11.49 for the 2 lb bag.',
    steps: frozenSteps('strawberry'), minutes: 2,
    fixedNutrition: { kcal: 36, protein: 1, fat: 0, carbs: 9, fiber: 2.3 }, fixedCost: 1.44,
    portionText: '4 oz of berries (from the 2 lb bag)', unitLabel: '2 lb bag', servingsPerUnit: 8,
    poolItem: 'Strawberries (Earthbound Farm, organic)', poolText: 'Earthbound Farm frozen organic sliced strawberries, $11.49 per 2 lb bag at Woodman\'s.',
    buy: { label: "Woodman's (Earthbound Farm organic strawberries)", url: 'https://shopwoodmans.com/store/woodmans-food-markets/s?k=Earthbound+Farm+Strawberries' } },
  { id: 'raspberry-woodstock', name: 'Raspberries (Woodstock)', group: 'Organic fruit, frozen',
    description: 'Woodstock Farms organic red raspberries: one ingredient, USDA Organic, frozen whole. Berry seeds are the tiny soft kind, so they ride along. Eat thawed or blend plain.',
    steps: frozenSteps('raspberry'), minutes: 2,
    fixedNutrition: { kcal: 59, protein: 1, fat: 1, carbs: 14, fiber: 7.4 }, fixedCost: 1.80,
    portionText: '4 oz of berries (from the 10 oz bag)', unitLabel: '10 oz bag', servingsPerUnit: 2,
    poolItem: 'Raspberries (Woodstock, organic)', poolText: 'Woodstock Farms organic red raspberries, 10 oz bags at grocery stores and by mail.',
    buy: { label: 'ShopRite (Woodstock organic red raspberries)', url: 'https://www.shoprite.com' } },
  { id: 'blackberry-woodstock', name: 'Blackberries (Woodstock)', group: 'Organic fruit, frozen',
    description: 'Woodstock Farms organic whole blackberries: one ingredient, USDA Organic, frozen whole. Eat thawed or blend plain; the seeds are the tiny soft berry kind.',
    steps: frozenSteps('blackberry'), minutes: 2,
    fixedNutrition: { kcal: 49, protein: 2, fat: 1, carbs: 11, fiber: 6 }, fixedCost: 1.80,
    portionText: '4 oz of berries (from the 10 oz bag)', unitLabel: '10 oz bag', servingsPerUnit: 2,
    poolItem: 'Blackberries (Woodstock, organic)', poolText: 'Woodstock Farms organic whole blackberries, 10 oz bags at grocery stores and by mail.',
    buy: { label: 'ShopRite (Woodstock organic whole blackberries)', url: 'https://www.shoprite.com' } },
  { id: 'cherry-woodstock', name: 'Dark Sweet Cherries (Woodstock)', group: 'Organic fruit, frozen',
    description: 'Woodstock Farms organic dark sweet cherries, pitted: the label reads pitted organic dark sweet cherries and nothing else. Eat thawed or blend plain.',
    steps: frozenSteps('cherry'), minutes: 2,
    fixedNutrition: { kcal: 71, protein: 1, fat: 0, carbs: 18, fiber: 2.4 }, fixedCost: 1.80,
    portionText: '4 oz of cherries (from the 10 oz bag)', unitLabel: '10 oz bag', servingsPerUnit: 2,
    poolItem: 'Dark sweet cherries (Woodstock, organic)', poolText: 'Woodstock Farms organic dark sweet cherries, 10 oz bags at grocery stores and by mail.',
    buy: { label: 'ShopRite (Woodstock organic dark sweet cherries)', url: 'https://www.shoprite.com/sm/planning/rsid/434/product/woodstock-dark-sweet-cherries-organic-10-oz-id-00042563007935' } },
  { id: 'pitaya-pops-dragon-mango', name: 'Dragon Fruit Mango Pops (Pitaya)', group: 'Popsicles',
    description: 'Pitaya Foods smoothie pops: fruit purees only, dragon fruit and mango, with under 0.5% ascorbic acid (vitamin C) as the antioxidant. Vitamin C is the fruit\'s own molecule and was ruled into the approved class on Nov 7, 2026.',
    steps: ['Take one pop from the freezer and let it sit a minute so it releases from the mold.', 'Eat it between the midday and evening meals, on the snack days your setting picks.'], minutes: 1,
    fixedNutrition: { kcal: 55, protein: 1, fat: 0, carbs: 14, fiber: 1.5 }, fixedCost: 1.50,
    portionText: '1 pop', unitLabel: null, servingsPerUnit: null,
    poolItem: 'Dragon fruit mango pops (Pitaya)', poolText: 'Pitaya Foods smoothie pops, sold by the case at FoodServiceDirect.',
    buy: { label: 'FoodServiceDirect (Pitaya smoothie pops)', url: 'https://www.foodservicedirect.com' } },
  { id: 'pitaya-pops-passion-peach', name: 'Passion Fruit Peach Pops (Pitaya)', group: 'Popsicles',
    description: 'Pitaya Foods smoothie pops: fruit purees only, passion fruit and peach, with under 0.5% ascorbic acid (vitamin C). The passion fruit is the brand\'s seedless puree, so the hard seeds are already out.',
    steps: ['Take one pop from the freezer and let it sit a minute so it releases from the mold.', 'Eat it between the midday and evening meals, on the snack days your setting picks.'], minutes: 1,
    fixedNutrition: { kcal: 55, protein: 1, fat: 0, carbs: 14, fiber: 1.5 }, fixedCost: 1.50,
    portionText: '1 pop', unitLabel: null, servingsPerUnit: null,
    poolItem: 'Passion fruit peach pops (Pitaya)', poolText: 'Pitaya Foods smoothie pops, sold by the case at FoodServiceDirect.',
    buy: { label: 'FoodServiceDirect (Pitaya smoothie pops)', url: 'https://www.foodservicedirect.com' } },
  { id: 'north-coast-applesauce', name: 'Applesauce (North Coast)', group: 'From the jar',
    description: 'North Coast organic applesauce: organic apples, and the brand states it adds nothing else, not even ascorbic acid, and never uses concentrate. Applesauce is peeled and cooked by its nature; Carter approved this jar anyway on Nov 7, 2026.',
    steps: ['Spoon 4 oz (about half a cup) into a bowl.', 'Eat it cold, between the midday and evening meals, on the snack days your setting picks.'], minutes: 2,
    fixedNutrition: { kcal: 48, protein: 0, fat: 0, carbs: 13, fiber: 1.2 }, fixedCost: 0.75,
    portionText: '4 oz (about half a cup)', unitLabel: 'jar (about 24 oz)', servingsPerUnit: 6,
    poolItem: 'Applesauce (North Coast)', poolText: 'North Coast organic applesauce jars: organic apples and nothing else.',
    buy: { label: 'Amazon (North Coast organic applesauce)', url: 'https://www.amazon.com/s?k=North+Coast+organic+applesauce' } },
  { id: 'creami-banana-honey', name: 'Banana Honey CREAMi', group: 'Homemade', homemade: true,
    description: 'A Ninja CREAMi pint built from the pool: banana blended with coconut water, raw manuka honey, pure vanilla and a pinch of Celtic sea salt, frozen hard and spun. Real ice cream texture with nothing in it that is not already in the diet.',
    steps: [
      'The day before: blend the banana with the coconut water, the honey, a drop of pure vanilla extract and a pinch of Celtic sea salt until smooth.',
      'Pour it into a CREAMi pint, freeze it flat for 24 hours, uncovered lid on.',
      'Spin on Lite Ice Cream. If it comes out powdery, add a splash of coconut water and re-spin once.',
      'Eat the pint (about 8 oz) between the midday and evening meals. Its banana, honey and coconut water are counted in the pool above.',
    ], minutes: 10, fruitName: 'Banana', fruitOz: 4, honey: 2, coconutWater: 4 },
  { id: 'creami-blueberry', name: 'Wild Blueberry CREAMi', group: 'Homemade', homemade: true,
    description: 'A Ninja CREAMi pint of wild blueberries and banana blended with coconut water, frozen and spun. The blueberries are the diet\'s own frozen wild ones.',
    steps: [
      'The day before: blend the blueberries and banana with the coconut water and a pinch of Celtic sea salt until smooth.',
      'Pour it into a CREAMi pint and freeze it flat for 24 hours.',
      'Spin on Sorbet or Lite Ice Cream. Re-spin once with a splash of coconut water if it is powdery.',
      'Eat the pint (about 8 oz) between the midday and evening meals. Its fruit and coconut water are counted in the pool above.',
    ], minutes: 10, fruitName: 'Banana', fruitOz: 2, blueberries: 4, coconutWater: 4 },
  { id: 'smoothie-banana-berry', name: 'Banana Berry Smoothie (Homemade)', group: 'Homemade', homemade: true,
    description: 'Carter\'s smoothie, his way: whole banana and wild blueberries blended plain, nothing added, no lemon, no freezing. Blend and drink.',
    steps: [
      'Put the banana and the frozen wild blueberries in the blender. No liquid, no ice, nothing else.',
      'Blend until completely smooth, about a minute.',
      'Drink it right away, between the midday and evening meals.',
    ], minutes: 5, fruitName: 'Banana', fruitOz: 4, blueberries: 2 },
  { id: 'pops-kiwi-coconut', name: 'Kiwi Coconut Pops (Homemade)', group: 'Homemade', homemade: true,
    description: 'Homemade popsicles: kiwi blended with coconut water and frozen in molds. One batch of double the amounts below makes 8 pops; a snack is 2.',
    steps: [
      'Blend double the listed kiwi and coconut water (5 oz kiwi, 4 oz coconut water) with a pinch of Celtic sea salt until smooth.',
      'Pour into 8 popsicle molds and freeze at least 6 hours.',
      'A snack is 2 pops, between the midday and evening meals.',
    ], minutes: 10, fruitName: 'Kiwi', fruitOz: 2.5, coconutWater: 2 },
  { id: 'pops-blueberry-banana', name: 'Blueberry Banana Pops (Homemade)', group: 'Homemade', homemade: true,
    description: 'Homemade popsicles: banana and wild blueberries blended plain and frozen in molds. One batch of double the amounts below makes 8 pops; a snack is 2.',
    steps: [
      'Blend double the listed banana and blueberries (4 oz banana, 2 oz blueberries) until completely smooth. Nothing added.',
      'Pour into 8 popsicle molds and freeze at least 6 hours.',
      'A snack is 2 pops, between the midday and evening meals.',
    ], minutes: 10, fruitName: 'Banana', fruitOz: 2, blueberries: 1 },
  { id: 'ice-cream-bears', name: 'Queen & Bean Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'Carter\'s convenience pick for the website (Nov 12, 2026): a French-style vanilla bean ice cream whose whole label is milk, cream, raw honey, skim milk, egg yolk, vanilla. The brand states grass-fed dairy and adds the honey raw after pasteurizing. In the checked database this pint is banned under the best standard because the dairy is pasteurized, not raw; for the website Carter trusts it as close enough, since a raw-dairy ice cream is effectively impossible to buy.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 270, protein: 6, fat: 17, carbs: 24, fiber: 0 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Queen & Bean ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Queen & Bean pints, about $8.99 at Kroger-family stores (Mariano\'s lists $8.99); the brand sells direct at $12 a pint.',
    buy: { label: 'Mariano\'s (Ice Cream for Bears Queen & Bean pint)', url: 'https://www.marianos.com/p/queen-bean-vanilla-bean-french-ice-cream/0085007502403' } },
  { id: 'ice-cream-bears-basic-bear', name: 'Basic Bear Pumpkin Spice Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'The fall seasonal pint from the same trusted brand: milk, cream, raw honey, pumpkin, skim milk, egg yolk, and whole warming spices (cinnamon, nutmeg, ginger, allspice). Nothing else. Same website standing as the Queen & Bean pint: a Carter convenience pick, pasteurized dairy and all.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 240, protein: 5, fat: 14, carbs: 23, fiber: 0 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Basic Bear ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Basic Bear pints (seasonal), about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-churro', name: 'Churro & Burrow Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'The cinnamon pint from the same trusted brand: the base formula (milk, cream, raw honey, skim milk, egg yolk) plus cinnamon and vanilla extract. Same website standing as the Queen & Bean pint: a Carter convenience pick.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 280, protein: 6, fat: 17, carbs: 24, fiber: 0 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Churro & Burrow ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Churro & Burrow pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-mint', name: 'Mint to Bee Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'Mint chip from the same trusted brand: the base formula plus chocolate chips made of only cacao, dates, and coconut oil, and pure peppermint oil. No lecithin, no refined sugar, no green dye. Same website standing as the Queen & Bean pint: a Carter convenience pick.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 310, protein: 6, fat: 19, carbs: 28, fiber: 1 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Mint to Bee ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Mint to Bee pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-chocturnal', name: 'Chocturnal Triple Chocolate Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'The triple chocolate pint from the same trusted brand: the base formula plus cocoa in the base and a honey fudge swirl (honey, cream, butter, cocoa, skim milk, salt). The brand states its cocoa is non-alkalized organic. Same website standing as the Queen & Bean pint: a Carter convenience pick.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 340, protein: 6, fat: 21, carbs: 28, fiber: 1 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Chocturnal ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Chocturnal pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-honey-honey', name: 'Honey Honey Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'The honey swirl pint: milk, cream, raw honey, skim milk, egg yolk, and nothing else, not even vanilla. The purest formula the brand makes. On the website forgiveness shelf: the dairy is pasteurized, forgiven because the brand states grass-fed.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 290, protein: 5, fat: 16, carbs: 29, fiber: 0 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Honey Honey ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Honey Honey pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-salted-caramaul', name: 'Salted Caramaul Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'Salted caramel on the base formula, sweetened with honey and dates, with butter, coconut oil, and salt. Its label says Honey where the rest of the line says Raw Honey. On the website forgiveness shelf: pasteurized dairy, honey not labeled raw, and dates, all forgiven by Carter for this brand.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 290, protein: 6, fat: 19, carbs: 22, fiber: 0 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Salted Caramaul ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Salted Caramaul pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-cubbies', name: 'Cubbies & Cream Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'Cookies and cream where the cookie is baked from dates, egg, butter, and cocoa: no wheat anywhere on the scanned pint label. On the website forgiveness shelf: pasteurized dairy, dates, and cocoa, all forgiven by Carter for this brand.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 310, protein: 6, fat: 19, carbs: 27, fiber: 1 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Cubbies & Cream ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Cubbies & Cream pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'ice-cream-bears-dough-bear', name: 'Dough Bear Ice Cream (Ice Cream for Bears)', group: 'Ice cream', storeBought: true,
    description: 'Chocolate chip cookie dough where the dough is dates, butter, skim milk, honey, and egg, and the chips are cacao, dates, and coconut oil. No wheat on the label. On the website forgiveness shelf: pasteurized dairy, dates, and cocoa, all forgiven by Carter for this brand.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 330, protein: 6, fat: 21, carbs: 29, fiber: 1 }, fixedCost: 3.60,
    portionText: '2/3 cup (one label serving)', unitLabel: '14 fl oz pint', servingsPerUnit: 2.5,
    poolItem: 'Dough Bear ice cream (Ice Cream for Bears)', poolText: 'Ice Cream for Bears Dough Bear pints, about $8.99 at Kroger-family stores; the brand sells direct at $12 a pint.',
    buy: { label: 'Ice Cream for Bears (brand store)', url: 'https://icecreamforbears.com' } },
  { id: 'fronen-pineapple-creme-bars', name: 'Pineapple Creme Bars (Fronen)', group: 'Ice cream', storeBought: true,
    description: 'A dairy-free bar with a three-ingredient label: pineapple, coconut cream, honey. No dairy at all, so the only forgiveness it needs is the honey, which Fronen never labels raw. On the website forgiveness shelf by Carter\'s ruling that honey not stated raw passes.',
    steps: ['Take one bar from the box and unwrap it.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 1,
    fixedNutrition: { kcal: 100, protein: 0, fat: 6, carbs: 13, fiber: 0 }, fixedCost: 2.00,
    portionText: '1 bar (2.5 oz)', unitLabel: 'box of 4 bars', servingsPerUnit: 4,
    poolItem: 'Pineapple Creme bars (Fronen)', poolText: 'Fronen Pineapple Creme bars, $7.99 per box of 4 at Sprouts.',
    buy: { label: 'Fronen (brand site)', url: 'https://eatfronen.com' } },
  { id: 'fronen-tropical-bars', name: 'Tropical Bars (Fronen)', group: 'Ice cream', storeBought: true,
    description: 'A dairy-free bar: coconut cream, mango, guava, honey, passionfruit, and nothing else on the label. On the website forgiveness shelf by Carter\'s ruling that honey not stated raw passes.',
    steps: ['Take one bar from the box and unwrap it.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 1,
    fixedNutrition: { kcal: 110, protein: 0, fat: 7, carbs: 13, fiber: 1 }, fixedCost: 2.00,
    portionText: '1 bar (2.5 oz)', unitLabel: 'box of 4 bars', servingsPerUnit: 4,
    poolItem: 'Tropical bars (Fronen)', poolText: 'Fronen Tropical bars, $7.99 per box of 4 at Sprouts.',
    buy: { label: 'Fronen (brand site)', url: 'https://eatfronen.com' } },
  { id: 'straus-vanilla-bean', name: 'Vanilla Bean Ice Cream (Straus)', group: 'Ice cream', storeBought: true,
    description: 'Straus Family Creamery organic vanilla bean: pasteurized organic cream and nonfat milk, organic cane sugar, organic egg yolks, organic vanilla. The brand raises its dairy on pasture. On the website forgiveness shelf under Carter\'s two rulings: pasteurized dairy passes when it is at least grass-fed, and cane sugar passes when it is organic.',
    steps: ['Scoop 2/3 cup (one label serving) into a bowl.', 'Eat it as the snack, between the midday and evening meals.'], minutes: 2,
    fixedNutrition: { kcal: 270, protein: 4, fat: 19, carbs: 22, fiber: 0 }, fixedCost: 2.66,
    portionText: '2/3 cup (one label serving)', unitLabel: '1 pint', servingsPerUnit: 3,
    poolItem: 'Vanilla Bean ice cream (Straus, organic)', poolText: 'Straus organic Vanilla Bean pints, $7.99 suggested retail at Whole Foods and Sprouts.',
    buy: { label: 'Straus Family Creamery (brand site)', url: 'https://www.strausfamilycreamery.com' } },
];
export const SNACK_BY_ID = Object.fromEntries(SNACK_CATALOG.map((s) => [s.id, s]));
export const SNACK_GROUPS = [...new Set(SNACK_CATALOG.map((s) => s.group))];

// Snack picks arrive as a list (Carter can select as many or as few as he
// wants); this keeps only real catalog ids, in his order.
export function normPicks(picks) {
  if (!Array.isArray(picks)) return ['guac'];
  return picks.filter((id) => SNACK_BY_ID[id]);
}

// Guac and chips inside a mix: when guac is the ONLY pick it keeps its
// bespoke build (the evening avocado relocates). In a mix it is a full
// snack of its own: 3 oz of avocado counted in the pool, plus the chips.
function mixGuacMeal(day) {
  return {
    id: `snack-guac-d${day}`, day, slot: 'Snack', name: SNACK.name,
    description: 'Guac and chips as one of the picked snacks in the mix: fresh guacamole from its own 3 oz of avocado (counted in the pool above) and a label serving of the chips that pass, Boulder Canyon Thin & Crispy: potatoes, avocado oil, sea salt.',
    steps: [
      'Scoop 3 oz of avocado (about three quarters of one avocado) into a bowl. In a mix this avocado is the snack\'s own, counted in the weekly pool.',
      'Mash it rough with a fork, Celtic sea salt, and a squeeze of lemon. That is the whole guacamole.',
      'Weigh out 1 oz of chips, about 20 thin chips, a sixth of the 6 oz bag. Put the bag away before you sit down.',
      'Eat it between the midday and evening meals.',
    ],
    minutes: 5,
    beef: 0, egg: 0, sardines: 0, salmon: 0, cheese: 0,
    fruit: 'Avocado', fruitOz: SNACK.guacOz, chips: SNACK.chipsOz,
    blueberries: 0, broccoli: 0, flax: 0, broth: 0, bread: 0, wrap: 0, tallow: 'no',
    coconutWater: 0, ketchup: 0, mayo: 0, mustard: 0, honey: 0, oliveOil: 0, pickles: 0, psyllium: 0,
    snackPick: 'guac',
  };
}

function catalogSnackMeal(entry, day) {
  return {
    id: `snack-${entry.id}-d${day}`, day, slot: 'Snack', name: entry.name,
    description: entry.description, steps: entry.steps, minutes: entry.minutes || 5,
    beef: 0, egg: 0, sardines: 0, salmon: 0, cheese: 0,
    fruit: entry.fruitName || 'Banana', fruitOz: entry.fruitOz || 0, chips: 0,
    blueberries: entry.blueberries || 0, broccoli: 0, flax: 0, broth: 0, bread: 0, wrap: 0, tallow: 'no',
    coconutWater: entry.coconutWater || 0, ketchup: 0, mayo: 0, mustard: 0, honey: entry.honey || 0, oliveOil: 0, pickles: 0, psyllium: 0,
    snackPick: entry.id, homemade: !!entry.homemade,
    ...(entry.fixedNutrition ? { fixedNutrition: entry.fixedNutrition, fixedCost: entry.fixedCost } : {}),
  };
}

// Make room for a catalog snack: same levers as the plan trims, in the same
// order (tallow pool first, then banana and kiwi, then whole eggs, then
// cheese in quarter ounces), applied to the 21 meals only, until the day
// average is back at the snack-off target or inside Carter's range.
function balanceSnackWeek(meals, tier) {
  const [lo, hi] = TIER_RANGES[tier] || TIER_RANGES[2500];
  const target = dayNutrition(mealsForTier(tier, 'off')).kcal;
  const cap = Math.min(hi, target + 6);
  if (dayNutrition(meals).kcal <= cap) return meals;
  let poolOz = meals.reduce((s, m) => s + (m.tallowOz || 0), 0);
  const applyPool = () => {
    const units = meals.reduce((s, m) => s + TALLOW_UNIT_MAP[m.tallow], 0);
    for (const m of meals) m.tallowOz = units ? (TALLOW_UNIT_MAP[m.tallow] / units) * poolOz : 0;
  };
  const cuttable = (m) => m.slot !== 'Snack';
  let fruitTrim = 0;
  let guard = 0;
  while (dayNutrition(meals).kcal > cap && guard++ < 300) {
    if (poolOz > 0.5) { poolOz = Math.max(0.5, Math.round((poolOz - 0.5) * 10) / 10); applyPool(); continue; }
    if (fruitTrim < 2) {
      let touched = false;
      for (const m of meals) if (cuttable(m) && (m.fruit === 'Banana' || m.fruit === 'Kiwi') && m.fruitOz > 2) { m.fruitOz = Math.max(2, Math.round((m.fruitOz - 0.5) * 10) / 10); touched = true; }
      if (touched) { fruitTrim += 0.5; continue; }
    }
    const em = meals.find((m) => cuttable(m) && m.egg >= 3.5);
    if (em) { em.egg = 1.75; continue; }
    const cm = meals.find((m) => cuttable(m) && m.cheese > 0);
    if (cm) { cm.cheese = Math.round((cm.cheese - 0.25) * 100) / 100; continue; }
    break;
  }
  return meals;
}
export const TIER_OVERRIDES = {
  // The 2,000 plan keeps the beef exactly as the 2,500 plan (quarter-pound
  // portions, meatloaf double) and scales eggs, fruit, and tallow instead:
  // 24 eggs instead of 42, avocado 5 oz, kiwi 5 oz, banana 3.5 oz.
  2000: {
    'smash-patties-fried-eggs': { egg: 1.75, fruitOz: 3.5 },
    'beef-egg-scramble': { egg: 1.75, fruitOz: 5 },
    'guac-burger-plate': { egg: 1.75, fruitOz: 5 },
    'scotch-eggs': { fruitOz: 3.5 },
    'egg-wrap-burrito': { egg: 1.75, fruitOz: 5 },
    'meatballs-avocado': { fruitOz: 5 },
    'banana-pancakes-breakfast-patties': { egg: 1.75, fruitOz: 3.5 },
    'beef-pizza': { egg: 1.75, fruitOz: 5 },
    'deviled-eggs-patty': { fruitOz: 5 },
    'egg-drop-beef-soup': { egg: 1.75, fruitOz: 3.5 },
    'cheese-crisps-sardine-pate': { egg: 1.75, fruitOz: 5 },
    'open-face-egg-salad-stack': { egg: 3.5, fruitOz: 5 },
    'the-no-beef-meal': { egg: 3.5, fruitOz: 3.5 },
    'cheese-stuffed-beef-rolls': { egg: 1.75, fruitOz: 5 },
    'mini-meatloaf': { egg: 1.75, fruitOz: 5 },
    'loaded-omelet': { egg: 1.75, fruitOz: 3.5 },
    'sardine-beef-cakes': { egg: 1.75, fruitOz: 5 },
    'meatball-soup': { egg: 1.75, fruitOz: 5 },
    'egg-muffins': { egg: 1.75, fruitOz: 3.5 },
    'fried-rice-plate': { egg: 1.75, fruitOz: 5 },
    'the-diner-plate': { egg: 1.75, fruitOz: 5 },
  },
  // The 1,500 plan (rebuilt Nov 5, 2026 at Carter's direction): beef stays
  // in quarter-pound multiples here too, 0.25 lb at 8 meals and 0.5 lb at
  // the meatloaf, 40 oz for the week. That only fits the 1,350-1,650 range
  // if the other 11 beef recipes run without beef at this size, so those
  // meals are adjusted below with their own names, descriptions, and steps
  // (egg, sardine, salmon, and cheese plates). Everything else follows the
  // same scaling: whole eggs only, fruit and tallow scaled, sardines still
  // 1 oz at the same 19 meals, condiment shelf identical.
  1500: {
    'smash-patties-fried-eggs': { beef: 4, egg: 1.75, fruitOz: 3.5,
      description: 'Beef patties smashed thin and crisped in tallow, cheese melted over, an egg fried in the same pan. Sardines and banana on the side.' },
    'beef-egg-scramble': { beef: 0, egg: 1.75, fruitOz: 5, tallow: 'no', name: 'Egg and Cheese Scramble',
      description: 'Eggs scrambled soft with cheese folded in at the end. Sardines and kiwi on the side, coconut water to drink.',
      steps: ['Cook the beaten eggs in a dry pan, stirring soft, with salt.', 'Fold the cheese in off the heat.', 'Serve with the sardines and the kiwi on the side.', 'Stir the psyllium into the coconut water and drink it with the meal.'] },
    'guac-burger-plate': { beef: 0, egg: 1.75, fruitOz: 4, tallow: 'no', name: 'Guac and Egg Sub',
      description: 'Avocado mashed with salt and olive oil as the sauce, spread on homemade einkorn sourdough under a soft egg, sardines on the side. No cheese at this meal.',
      steps: ['Toast the einkorn sourdough (2 oz, two slices or a small roll).', 'Mash the avocado with salt and the olive oil into a rough guacamole and spread it thick on the toast.', 'Cook the egg soft in a dry pan, set it over the guac, sardines on the side, and the ketchup for the egg.'] },
    'scotch-eggs': { beef: 4, egg: 1.75, fruitOz: 3.5, name: 'Scotch Egg',
      description: 'An egg wrapped in beef and fried in tallow, a double tallow meal, with cheese melted over. Sardines and banana on the side.',
      steps: ['Boil the egg until just set, cool and peel it.', 'Flatten the beef into a sheet, salt, and wrap the egg fully. Fry in a double share of tallow, turning until crisp all over.', 'Melt the cheese over the top. Serve with the sardines and the banana.'] },
    'egg-wrap-burrito': { beef: 0, egg: 1.75, fruitOz: 5, tallow: 'no',
      description: 'A thin omelet is the wrap. Inside: cheese and sardine pieces. Kiwi on the side.',
      steps: ['Cook the beaten eggs as one thin omelet sheet in a dry pan and set it flat.', 'Break the sardines into pieces.', 'Fill the omelet with cheese and sardines, roll it tight, and serve with the kiwi.'] },
    'meatballs-avocado': { beef: 4, fruitOz: 4 },
    'banana-pancakes-breakfast-patties': { beef: 0, egg: 1.75, fruitOz: 3.5, tallow: 'no', name: 'Banana Pancakes',
      description: 'Pancakes made from just banana and egg with wild blueberries folded in and raw honey drizzled over. Sardines on the side.',
      steps: ['Mash the banana with the egg and the cinnamon into a batter, whisk in the ground flax and the psyllium, and fold in the blueberries. Griddle small pancakes in a dry pan.', 'Drizzle the honey over the pancakes and serve with the sardines on the side.'] },
    'beef-pizza': { beef: 4, egg: 1.75, fruitOz: 5 },
    'deviled-eggs-patty': { beef: 0, tallow: 'no', fruitOz: 4, name: 'Deviled Eggs and Cheese Crisps',
      description: 'Deviled eggs with the yolks mashed with sardines and avocado, cheese crisps on the side.',
      steps: ['Boil the eggs, halve them, and mash the yolks with the sardines, avocado, homemade mayo and mustard and a pinch of salt. Fill the whites.', 'Crisp the cheese into crisps in a dry pan.', 'Dust the deviled eggs with paprika and plate them with the crisps.'] },
    'egg-drop-beef-soup': { beef: 0, egg: 1.75, fruitOz: 3.5, name: 'Egg Drop Soup',
      description: 'No tallow. Egg ribbons stirred through beef bone broth, sardines in the bowl, cheese grated over. Banana on the side.',
      steps: ['Heat the bone broth and swirl it, then drizzle in the beaten egg so it sets as ribbons. Add the sardines.', 'Ladle into a bowl, grate the cheese over, and serve with the banana.'] },
    'cheese-crisps-sardine-pate': { beef: 0, egg: 1.75, fruitOz: 5, tallow: 'no',
      description: 'A double cheese meal: crisps from half the cheese, wild salmon mashed as a pate to scoop with them, plus fried eggs. Kiwi on the side.',
      steps: ['Bake or fry small piles of the cheese until crisp and golden. Mash the salmon with the homemade mayo and a pinch of salt into a pate.', 'Fry the eggs in a dry pan.', 'Serve the crisps and pate with the eggs, kiwi on the side.'] },
    'open-face-egg-salad-stack': { beef: 0, egg: 3.5, fruitOz: 4, tallow: 'no',
      description: 'Chopped eggs and sardines mashed with avocado in two cassava wraps, cheese crisps on the side. A big plate to balance the light soup morning.',
      steps: ['Crisp the cheese into crisps in a dry pan.', 'Chop the cooked eggs and mash with the sardines, avocado, homemade mayo and mustard into an egg salad.', 'Warm the two cassava wraps until soft, fill them with the egg salad, roll them, and serve with the cheese crisps.'] },
    'the-no-beef-meal': { egg: 3.5, fruitOz: 3.5 },
    'cheese-stuffed-beef-rolls': { beef: 4, egg: 1.75, fruitOz: 5 },
    'mini-meatloaf': { beef: 8, egg: 1.75, fruitOz: 4,
      description: 'Double beef, including the beef the no-beef morning gave up. Baked in its own fat, no tallow, with avocado mash, an egg, sardines, and steamed broccoli. No cheese at this meal.',
      steps: ['Form the beef into a small loaf with salt, spread the ketchup over the top as a glaze, and bake it in its own fat until cooked through. Rest it before slicing.', 'Mash the avocado with salt. Steam the broccoli until tender. Cook the egg to go with it.', 'Slice the meatloaf and serve with the avocado mash, egg, sardines and broccoli.'] },
    'loaded-omelet': { beef: 0, egg: 1.75, fruitOz: 3.5, tallow: 'no',
      description: 'An omelet with cheese folded in, sardines on top. Banana on the side.',
      steps: ['Stir the ground flax and turmeric into the beaten egg, cook the omelet in a dry pan, and fold the cheese inside.', 'Slide it out, lay the sardines on top, and serve with the banana.'] },
    'sardine-beef-cakes': { beef: 0, egg: 1.75, fruitOz: 5, tallow: 'no', name: 'Salmon Cakes',
      description: 'Wild salmon mixed with egg into cakes and fried crisp in a dry pan, with cheese melted over. Kiwi on the side.',
      steps: ['Mash the salmon with the beaten egg and salt and form flat cakes.', 'Fry the cakes in a dry pan until deeply crisp on both sides.', 'Melt the cheese over the cakes. Serve with the kiwi.'] },
    'meatball-soup': { beef: 0, egg: 1.75, fruitOz: 4, name: 'Egg Ribbon Soup',
      description: 'No tallow. Egg ribbons simmered in beef bone broth with ginger, cheese stirred in, sardines in the bowl. Avocado on the side.',
      steps: ['Simmer the bone broth with the ginger.', 'Swirl in the beaten egg as ribbons, add the sardines, and stir the cheese in until it melts.', 'Serve in bowls with the avocado on the side.'] },
    'egg-muffins': { beef: 4, egg: 1.75, fruitOz: 3.5,
      steps: ['Grease a muffin tin with tallow. Press the beef into cups, salt them, stir the ground flax into the beaten egg, and pour the egg over the cups.', 'Bake until the egg is set. Put the cheese on top for the last minutes so it melts.', 'Serve with the sardines, the banana, and the blueberries.'] },
    'fried-rice-plate': { beef: 4, egg: 1.75, fruitOz: 5 },
    'the-diner-plate': { beef: 4, egg: 1.75, fruitOz: 4,
      description: 'A beef slab seared in tallow like a steak, a sunny egg cooked in the same fat, cheese on the beef, sardines on the side, avocado sliced with salt and olive oil, pickle spears and steamed broccoli. Then the week loops back to Day 1.',
      steps: ['Sear the beef slab in tallow with salt like a steak, resting it a few minutes.', 'Fry the egg sunny in the same fat. Melt the cheese over the beef.', 'Steam the broccoli. Plate with the sardines, the avocado sliced with salt and the olive oil drizzled over, the pickle spears, the broccoli, and the ketchup for the beef.'] },
  },
};

const TALLOW_UNIT_MAP = { yes: 1, double: 2, light: 0.5, no: 0 };

// The sandwiches (added Nov 6, 2026 at Carter's request): two evening meals
// ride on homemade einkorn sourdough and one on cassava wraps. The carriers
// add about 376 calories a week, so the base plans trim banana and kiwi a
// little (avocado is never trimmed, it carries the fiber) to hold the same
// daily averages. Values solved against the label data; see the solver note
// in the plan comment above.
export const TIER_FRUIT_TRIM = { 1500: 0.5, 2000: 1, 2500: 0 };

// The 21 meals at one plan size, with each meal's tallow share in ounces
// resolved from that size's tallow pool. A snack pick other than guac takes
// the catalog path: the base week, the picked snack on the snack days, and
// balanceSnackWeek making the room.
export function mealsForTier(tier = 2500, snack = 'off', picks = ['guac']) {
  const pickList = normPicks(picks);
  const overrides = TIER_OVERRIDES[tier] || {};
  const merged = MEALS.map((m) => ({ ...m, ...(overrides[m.id] || {}) }));
  const baseFruitTrim = TIER_FRUIT_TRIM[tier] || 0;
  if (baseFruitTrim) {
    for (const m of merged) {
      if (m.fruit === 'Banana' || m.fruit === 'Kiwi') m.fruitOz = Math.max(2, m.fruitOz - baseFruitTrim);
    }
  }
  // The catalog path: any pick list that is not exactly guac alone. The
  // picked snacks rotate across the snack days in pick order, and
  // balanceSnackWeek makes the room.
  if (snack !== 'off' && pickList.length && !(pickList.length === 1 && pickList[0] === 'guac')) {
    const baseTallowOz = TIER_TALLOW_OZ[tier] ?? 4;
    const units0 = merged.reduce((s, m) => s + TALLOW_UNIT_MAP[m.tallow], 0);
    for (const m of merged) m.tallowOz = (TALLOW_UNIT_MAP[m.tallow] / units0) * baseTallowOz;
    SNACK_DAYS[snack].forEach((day, i) => {
      const entry = SNACK_BY_ID[pickList[i % pickList.length]];
      merged.push(entry.id === 'guac' ? mixGuacMeal(day) : catalogSnackMeal(entry, day));
    });
    balanceSnackWeek(merged, tier);
    return merged;
  }
  let tallowOz = TIER_TALLOW_OZ[tier] ?? 4;
  const bespokeGuac = pickList.length === 1 && pickList[0] === 'guac';
  if (snack !== 'off' && bespokeGuac && SNACK_TRIMS[tier] && SNACK_TRIMS[tier][snack]) {
    const trims = SNACK_TRIMS[tier][snack];
    tallowOz = trims.tallowOz;
    const eggSet = new Set(trims.eggCuts);
    const cheeseSet = new Set(trims.cheeseCuts);
    const days = SNACK_DAYS[snack];
    for (const m of merged) {
      if (eggSet.has(m.id)) m.egg = 1.75;
      if (cheeseSet.has(m.id)) m.cheese -= 0.25;
      if ((m.fruit === 'Banana' || m.fruit === 'Kiwi') && trims.fruitTrim) m.fruitOz = Math.max(2, m.fruitOz - trims.fruitTrim);
      if (m.slot === 'Evening' && days.includes(m.day)) m.fruitOz -= SNACK.guacOz;
    }
    for (const day of days) merged.push(snackMeal(day));
  }
  const totalUnits = merged.reduce((s, m) => s + TALLOW_UNIT_MAP[m.tallow], 0);
  for (const m of merged) m.tallowOz = (TALLOW_UNIT_MAP[m.tallow] / totalUnits) * tallowOz;
  return merged;
}


// ---------------------------------------------------------------------------
// Dynamic meals (added Nov 6, 2026 at Carter's request): the site's chat
// assistant drafts changes to the week, but it never does math and never
// invents ingredients. A proposal arrives as a meal spec (ingredient keys
// and ounces); mealFromSpec below validates and clamps it into a real meal
// object under the diet's own rules (quarter-pound beef, whole eggs, the
// condiment shelf's set amounts), and rebalanceMeals then adjusts the rest
// of the week with the same levers the plan trims use until the day lands
// back inside Carter's calorie range for the size. Every number a proposal
// shows still comes from mealNutrition and mealCost, never from the model.
export const TIER_RANGES = { 1500: [1350, 1650], 2000: [1850, 2150], 2500: [2350, 2650] };
const SPEC_CLAMPS = {
  blueberries: [0, 2], broccoli: [0, 3], broth: [0, 16], coconutWater: [0, 8],
  ketchup: [0, 2], mayo: [0, 2], mustard: [0, 2], honey: [0, 2], oliveOil: [0, 2], psyllium: [0, 1],
};
const nearestOf = (v, options) => options.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a), options[0]);

export function mealFromSpec(spec, day, slot) {
  const it = (spec && spec.items) || {};
  const num = (v) => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? v : 0);
  const meal = {
    id: `custom-d${day}-${String(slot).toLowerCase()}`,
    day, slot, custom: true,
    name: String(spec.name || 'Custom meal').slice(0, 60),
    description: String(spec.description || '').slice(0, 400),
    steps: Array.isArray(spec.steps) ? spec.steps.slice(0, 6).map((s) => String(s).slice(0, 300)) : [],
    minutes: Math.min(60, Math.max(5, Math.round(num(spec.minutes) || 20))),
    beef: nearestOf(num(it.beef), [0, 4, 8]),
    egg: Math.min(5.25, Math.round(num(it.egg) / 1.75) * 1.75),
    sardines: num(it.sardines) >= 0.5 ? 1 : 0,
    salmon: nearestOf(num(it.salmon), [0, 1, 2]),
    cheese: nearestOf(num(it.cheese), [0, 0.5, 1]),
    fruit: ['Banana', 'Kiwi', 'Avocado'].includes(spec.fruit) ? spec.fruit : (['Banana', 'Kiwi', 'Avocado'].includes(it.fruit) ? it.fruit : (slot === 'Morning' ? 'Banana' : slot === 'Midday' ? 'Kiwi' : 'Avocado')),
    fruitOz: Math.min(8, Math.round(num(it.fruitOz) * 4) / 4),
    blueberries: nearestOf(num(it.blueberries), SPEC_CLAMPS.blueberries),
    broccoli: nearestOf(num(it.broccoli), SPEC_CLAMPS.broccoli),
    flax: nearestOf(num(it.flax), [0, 0.5, 1]),
    broth: nearestOf(num(it.broth), SPEC_CLAMPS.broth),
    chips: Math.min(2, Math.round(num(it.chips) * 2) / 2),
    bread: Math.min(4, Math.round(num(it.bread) * 2) / 2),
    wrap: nearestOf(num(it.wrap), [0, 0.88, 1.76, 2.64]),
    tallow: ['yes', 'double', 'light', 'no'].includes(spec.tallow) ? spec.tallow : (['yes', 'double', 'light', 'no'].includes(it.tallow) ? it.tallow : 'no'),
    coconutWater: nearestOf(num(it.coconutWater), SPEC_CLAMPS.coconutWater),
    ketchup: Math.min(2, Math.round(num(it.ketchup))), mayo: Math.min(2, Math.round(num(it.mayo))),
    mustard: Math.min(2, Math.round(num(it.mustard))), honey: Math.min(2, Math.round(num(it.honey))),
    oliveOil: Math.min(2, Math.round(num(it.oliveOil))), pickles: Math.min(4, Math.round(num(it.pickles) / 2) * 2),
    psyllium: Math.min(1, Math.round(num(it.psyllium))),
  };
  if (typeof spec.seasoning === 'string' && ['Paprika', 'Cinnamon', 'Turmeric', 'Ginger'].includes(spec.seasoning)) meal.seasoning = spec.seasoning;
  return meal;
}

// Adjust a modified week back into the size's calorie range using the plan
// levers, protecting the meals flagged custom until everything else is used.
export function rebalanceMeals(inputMeals, tier = 2500, snack = 'off', picks = ['guac']) {
  const [lo, hi] = TIER_RANGES[tier] || TIER_RANGES[2500];
  const target = dayNutrition(mealsForTier(tier, snack, picks)).kcal;
  const meals = inputMeals.map((m) => ({ ...m }));
  const dayOf = () => dayNutrition(meals).kcal;
  const dayBefore = dayOf();
  let poolOz = planRates(tier, snack, undefined, picks).tallowOz;
  const applyPool = () => {
    const units = meals.reduce((s, m) => s + TALLOW_UNIT_MAP[m.tallow], 0);
    for (const m of meals) m.tallowOz = units ? (TALLOW_UNIT_MAP[m.tallow] / units) * poolOz : 0;
  };
  applyPool();
  const notes = [];
  let fruitTrim = 0;
  const eggCutIds = [], cheeseCutIds = [];
  const ordered = [...meals].sort((a, b) => (a.custom ? 1 : 0) - (b.custom ? 1 : 0) || a.day - b.day);
  const over = () => dayOf() > Math.min(hi, target + 6);
  const under = () => dayOf() < Math.max(lo, target - 6);
  let guard = 0;
  while ((over() || under()) && guard++ < 60) {
    const d = dayOf();
    if (d > target) {
      if (poolOz > Math.max(0.5, planRates(tier, snack).tallowOz / 2)) { poolOz = Math.round((poolOz - 0.5) * 10) / 10; applyPool(); continue; }
      const fm = ordered.find((m) => (m.fruit === 'Banana' || m.fruit === 'Kiwi') && m.fruitOz - fruitTrim > 2 && !m._trimmed);
      if (fruitTrim < 2) {
        let touched = false;
        for (const m of meals) if ((m.fruit === 'Banana' || m.fruit === 'Kiwi') && m.fruitOz > 2) { m.fruitOz = Math.max(2, Math.round((m.fruitOz - 0.5) * 10) / 10); touched = true; }
        if (touched) { fruitTrim += 0.5; continue; }
      }
      const em = ordered.find((m) => m.egg >= 3.5 && !eggCutIds.includes(m.id));
      if (em) { em.egg = 1.75; eggCutIds.push(em.id); continue; }
      const cm = ordered.find((m) => m.cheese >= 0.5 && !cheeseCutIds.includes(m.id));
      if (cm) { cm.cheese -= 0.25; cheeseCutIds.push(cm.id); continue; }
      break;
    } else {
      if (poolOz < (TIER_TALLOW_OZ[tier] ?? 4)) { poolOz = Math.round((poolOz + 0.5) * 10) / 10; applyPool(); continue; }
      const cm = ordered.find((m) => m.cheese > 0 && m.cheese < 1 && cheeseCutIds.includes(m.id));
      if (cm) { cm.cheese += 0.25; cheeseCutIds.splice(cheeseCutIds.indexOf(cm.id), 1); continue; }
      const em = ordered.find((m) => m.egg === 1.75 && eggCutIds.includes(m.id));
      if (em) { em.egg = 3.5; eggCutIds.splice(eggCutIds.indexOf(em.id), 1); continue; }
      break;
    }
  }
  const basePool = planRates(tier, snack, undefined, picks).tallowOz;
  if (poolOz !== basePool) notes.push(`Tallow pool ${Math.round(basePool * 10) / 10} oz to ${Math.round(poolOz * 10) / 10} oz`);
  if (fruitTrim) notes.push(`Banana and kiwi trimmed ${fruitTrim} oz at each meal that had room`);
  if (eggCutIds.length) notes.push(`One egg fewer at ${eggCutIds.length} meal${eggCutIds.length === 1 ? '' : 's'}`);
  if (cheeseCutIds.length) notes.push(`Cheese trimmed a quarter ounce at ${cheeseCutIds.length} meal${cheeseCutIds.length === 1 ? '' : 's'}`);
  const dayAfter = dayOf();
  return { meals, adjustments: notes, dayBefore, dayAfter, inRange: dayAfter >= lo && dayAfter <= hi };
}

// Weekly totals for one plan size, summed from its meals. Single source for
// the pool table, the ingredient cards, and both order planners.
export function planRates(tier = 2500, snack = 'off', mealsOverride, picks = ['guac']) {
  const meals = mealsOverride || mealsForTier(tier, snack, picks);
  const sum = (f) => meals.reduce((s, m) => s + (f(m) || 0), 0);
  return {
    tier,
    meals,
    beefOz: sum((m) => m.beef),
    eggOz: sum((m) => m.egg),
    eggs: sum((m) => m.egg) / 1.75,
    sardineOz: sum((m) => m.sardines),
    salmonOz: sum((m) => m.salmon),
    cheeseOz: sum((m) => m.cheese),
    blueberriesOz: sum((m) => m.blueberries),
    broccoliOz: sum((m) => m.broccoli),
    flaxOz: sum((m) => m.flax),
    brothOz: sum((m) => m.broth),
    bananaOz: sum((m) => (m.fruit === 'Banana' ? m.fruitOz : 0)),
    kiwiOz: sum((m) => (m.fruit === 'Kiwi' ? m.fruitOz : 0)),
    avocadoOz: sum((m) => (m.fruit === 'Avocado' ? m.fruitOz : 0)),
    bananaPerMeal: (meals.find((m) => m.fruit === 'Banana') || {}).fruitOz,
    kiwiPerMeal: (meals.find((m) => m.fruit === 'Kiwi') || {}).fruitOz,
    avocadoPerMeal: (meals.find((m) => m.fruit === 'Avocado') || {}).fruitOz,
    tallowOz: sum((m) => m.tallowOz),
    chipsOz: sum((m) => m.chips),
    snackServings: sum((m) => (m.slot === 'Snack' ? 1 : 0)),
    snackPicks: [...new Set(meals.filter((m) => m.slot === 'Snack' && m.snackPick).map((m) => m.snackPick))],
    snackServingsByPick: Object.fromEntries([...new Set(meals.filter((m) => m.slot === 'Snack' && m.snackPick).map((m) => m.snackPick))].map((pid) => [pid, meals.filter((m) => m.snackPick === pid).length])),
    snackBespokeGuac: meals.some((m) => m.id.startsWith('guac-and-chips-')),
    breadOz: sum((m) => m.bread),
    wrapOz: sum((m) => m.wrap),
    coconutOz: sum((m) => m.coconutWater),
    ketchup: sum((m) => m.ketchup),
    mayo: sum((m) => m.mayo),
    mustard: sum((m) => m.mustard),
    honey: sum((m) => m.honey),
    oliveOil: sum((m) => m.oliveOil),
    pickles: sum((m) => m.pickles),
    psyllium: sum((m) => m.psyllium),
  };
}

const fmtOz = (n) => {
  const r = Math.round(n * 10) / 10;
  return Number.isInteger(r) ? String(r) : r.toFixed(1);
};

// The pool row for a catalog snack pick: the product itself, how many
// servings a week the setting calls for, and where it comes from. Homemade
// picks draw their ingredients from the pool rows themselves, so their note
// says so instead of adding a product.
function snackPoolRow(pickId, snack, servings) {
  const entry = SNACK_BY_ID[pickId];
  if (!entry) return { item: 'Snack', oz: null, note: '' };
  const freq = snack === 'daily' ? 'in the weekly rotation' : 'in the rotation on Days 1, 3, 5 and 7';
  if (entry.homemade) {
    return { item: entry.poolItem || entry.name, oz: null, note: `${entry.name}, ${servings} servings a week, ${freq}. It is homemade from the pool's own fruit, honey and coconut water, which are already counted in the rows above.` };
  }
  return { item: entry.poolItem || entry.name, oz: null, note: `${entry.name}: ${servings} servings a week, ${freq}, ${entry.portionText} each. ${entry.poolText || ''}` };
}

// The weekly pool table for one plan size, same shape as POOL.
export function poolForTier(tier = 2500, snack = 'off', mealsOverride, picks = ['guac']) {
  const r = planRates(tier, snack, mealsOverride, picks);
  const base = Object.fromEntries(POOL.map((p) => [p.item, p]));
  const row = (item, oz, note) => ({ item, oz, note: note ?? base[item].note });
  return [
    row('Beef organ blend', r.beefOz, `US Wellness 75% lean ground beef with heart, kidney and liver. About ${fmtOz(r.beefOz / 16)} lb.`),
    row('Egg', r.eggOz, `Exactly ${r.eggs} eggs at 1.75 oz out of shell. Certified organic and pasture-raised.`),
    row('Sardines', r.sardineOz),
    row('Wild sockeye salmon', r.salmonOz),
    row('Wild blueberries', r.blueberriesOz),
    row('Broccoli (cooked)', r.broccoliOz),
    row('Coconut water', r.coconutOz),
    row('Beef bone broth', r.brothOz),
    row('Ground flaxseed', r.flaxOz),
    row('Banana', r.bananaOz, `About ${Math.round(r.bananaOz / 4)} bananas. The morning fruit, ${fmtOz(r.bananaPerMeal)} oz per morning meal.`),
    row('Kiwi', r.kiwiOz, `About ${Math.round(r.kiwiOz / 2.5)} kiwis. The midday fruit, ${fmtOz(r.kiwiPerMeal)} oz per midday meal.`),
    row('Avocado', r.avocadoOz, `About ${Math.round(r.avocadoOz / 4)} avocados. The evening fruit, ${fmtOz(r.avocadoPerMeal)} oz per evening meal. Avocado carries most of the diet's fiber.`),
    row('Cheese', r.cheeseOz),
    row('Beef tallow', r.tallowOz),
    { item: 'Einkorn sourdough', oz: r.breadOz, note: 'Homemade from Jovial organic einkorn flour. The only bread that passes: an old wheat leavened by a sourdough starter, never commercial yeast. Every store bread checked is banned. 2 oz at each of the two subs.' },
    { item: 'Cassava wraps', oz: r.wrapOz, note: 'Siete cassava flour tortillas, approved in the checked database. 2 tortillas at the egg salad wraps.' },
    ...(snack !== 'off' && r.snackBespokeGuac ? [{ item: 'Potato chips', oz: r.chipsOz, note: `Boulder Canyon Thin & Crispy Classic Sea Salt. The snack: 1 oz (about 20 chips) with 3 oz of guacamole, ${snack === 'daily' ? 'every day' : 'on Days 1, 3, 5 and 7'}. The guacamole avocado comes out of that day's evening meal, so the avocado row above does not change.` }] : []),
    ...(snack !== 'off' && !r.snackBespokeGuac && r.snackPicks.includes('guac') ? [{ item: 'Potato chips', oz: r.chipsOz, note: `Boulder Canyon Thin & Crispy Classic Sea Salt. For the guac and chips in the snack mix: 1 oz (about 20 chips) per guac snack. In a mix the guacamole has its own avocado, which is counted in the avocado row above.` }] : []),
    ...(snack !== 'off' && !r.snackBespokeGuac ? r.snackPicks.filter((pid) => pid !== 'guac').map((pid) => snackPoolRow(pid, snack, r.snackServingsByPick[pid] || 0)) : []),
    row('Celtic sea salt', null),
    row('Water', null),
  ];
}

// The ingredient cards for one plan size: same sources and details, with the
// weekly amount for that size.
export function ingredientsForTier(tier = 2500, snack = 'off', mealsOverride, picks = ['guac']) {
  const r = planRates(tier, snack, mealsOverride, picks);
  const ozByName = {
    'Beef organ blend': r.beefOz, 'Eggs': r.eggOz, 'Sardines': r.sardineOz,
    'Wild sockeye salmon': r.salmonOz, 'Wild blueberries': r.blueberriesOz,
    'Broccoli (cooked)': r.broccoliOz, 'Coconut water': r.coconutOz,
    'Ground flaxseed': r.flaxOz, 'Beef bone broth': r.brothOz, 'Cheese': r.cheeseOz,
    'Beef tallow': r.tallowOz, 'Banana': r.bananaOz, 'Kiwi': r.kiwiOz, 'Avocado': r.avocadoOz,
    'Einkorn sourdough': r.breadOz, 'Cassava wraps': r.wrapOz,
  };
  return INGREDIENTS
    .filter((ing) => (snack !== 'off' && r.chipsOz > 0) || ing.name !== 'Potato chips')
    .map((ing) => ({ ...ing, weeklyOz: ing.name === 'Potato chips' ? r.chipsOz : (ing.weeklyOz === null ? null : (ozByName[ing.name] ?? ing.weeklyOz)) }));
}

export const SLOTS = ['Morning', 'Midday', 'Evening'];
export const TALLOW_LABEL = { yes: 'Tallow', double: 'Double tallow', light: 'Tallow (greased tin)', no: 'No tallow' };
export const TALLOW_TSP = { yes: '1 teaspoon', double: '2 teaspoons', light: '1 teaspoon, to grease the tin', no: 'none' };

// Where to buy each ingredient. Woodman's links use the storefront search
// pattern the Woodman's (Onalaska) online store itself uses.
const wm = (term) => `https://shopwoodmans.com/store/woodmans-food-markets/s?k=${encodeURIComponent(term).replace(/%20/g, '+')}`;
export const BUY = {
  'Beef organ blend': { label: 'US Wellness Meats (Organ Blend bundle, 25 lb)', url: 'https://grasslandbeef.com/products/organ-blend-burger-bundle-25-lbs' },
  'Beef tallow': { label: 'US Wellness Meats (beef tallow, small pail)', url: 'https://grasslandbeef.com/products/beef-tallow-small-pail' },
  'Egg': { label: 'Misfits Market (organic pasture-raised eggs)', url: 'https://www.misfitsmarket.com/imperfect-foods-organic-large-pasture-raised-eggs-1-dz/p' },
  'Eggs': { label: 'Misfits Market (organic pasture-raised eggs)', url: 'https://www.misfitsmarket.com/imperfect-foods-organic-large-pasture-raised-eggs-1-dz/p' },
  'Sardines': { label: 'Restaurant & More (King Oscar 12-tin case)', url: 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html' },
  'Cheese': { label: 'Dutch Meadows (Dutch Reserve raw cheddar, 8 oz)', url: 'https://dutchmeadowsfarm.com/store/product/8-oz-raw-dutch-reserve-cheddar' },
  'Banana': { label: 'Amazon Fresh (organic banana bunch)', url: 'https://www.amazon.com/dp/B07ZLF9G83' },
  'Kiwi': { label: 'Misfits Market (organic kiwis)', url: 'https://www.misfitsmarket.com/organic-kiwis/p' },
  'Avocado': { label: 'Misfits Market (organic large Hass avocados)', url: 'https://www.misfitsmarket.com/organic-large-hass-avocados/p' },
  'Celtic sea salt': { label: 'iHerb (Celtic Sea Salt fine ground, 5 lb)', url: 'https://www.iherb.com/pr/celtic-sea-salt-fine-ground-vital-mineral-blend-5-lb-2-268-g/156801' },
  'Ketchup': { label: 'Primal Kitchen (organic unsweetened ketchup)', url: 'https://www.primalkitchen.com/products/organic-unsweetened-ketchup' },
  'Mustard': { label: 'Lowensenf Extra Hot (mustard seed, vinegar, water, salt only)', url: 'https://realprimedeals.com/products/lowensenf-extra-scharf-german-mustard-9-3-oz' },
  'Mayo (homemade)': { label: 'Chosen Foods (100% pure avocado oil, for homemade mayo)', url: 'https://chosenfoods.com/products/100-pure-avocado-oil-500ml-glass-bottle' },
  'Seasonings': { label: 'Simply Organic (paprika)', url: 'https://www.simplyorganic.com/simply-organic-paprika-ground-2-96-oz' },
  'Paprika': { label: 'Simply Organic (paprika)', url: 'https://www.simplyorganic.com/simply-organic-paprika-ground-2-96-oz' },
  'Cinnamon': { label: 'Simply Organic (cinnamon)', url: 'https://www.simplyorganic.com/products/simply-organic-cinnamon-ground-2-45-oz' },
  'Turmeric': { label: 'Simply Organic (turmeric)', url: 'https://www.simplyorganic.com/products/simply-organic-turmeric-root-ground-2-38-oz' },
  'Ginger': { label: 'Simply Organic (ginger)', url: 'https://www.simplyorganic.com/products/simply-organic-ginger-root-ground-1-64-oz' },
  'Water': { label: 'WebstaurantStore (Mountain Valley spring water, 1 L glass, case of 12)', url: 'https://www.webstaurantstore.com/mountain-valley-spring-water-1-liter-glass-bottle-case/103MVSPG100G.html' },
  'Wild sockeye salmon': { label: 'Wild Planet (wild sockeye salmon)', url: 'https://wildplanetfoods.com/products/wild-sockeye-salmon' },
  'Wild blueberries': { label: "Wyman's (frozen wild blueberries)", url: 'https://www.wymans.com/products/wild-blueberries' },
  'Broccoli (cooked)': { label: 'Misfits Market (organic bunched broccoli)', url: 'https://www.misfitsmarket.com/organic-bunched-broccoli/p' },
  'Coconut water': { label: 'Harmless Harvest (organic coconut water)', url: 'https://harmlessharvest.com/products/organic-coconut-water' },
  'Raw honey': { label: 'Wedderspoon (USDA organic raw manuka, MGO 50+)', url: 'https://wedderspoon.com/products/raw-organic-manuka-multifloral-honey-mgo-50-250g' },
  'Olive oil': { label: 'World Market (California Olive Ranch 100% California)', url: 'https://www.worldmarket.com/p/california-olive-ranch-california-extra-virgin-olive-oil-591964.html' },
  'Pickles': { label: 'Bubbies (kosher dill pickles, 33 oz)', url: 'https://buybubbies.com/products/bubbies-kosher-dill-pickles-33-oz' },
  'Ground flaxseed': { label: "Vitacost (Bob's Red Mill organic golden flaxseed meal)", url: 'https://www.vitacost.com/products/bob-s-red-mill-organic-golden-flaxseed-meal-16-oz-453-g-77011' },
  'Psyllium husk': { label: 'Swanson (Yerba Prima psyllium husks powder)', url: 'https://www.swansonvitamins.com/p/yerba-prima-psyllium-husks-powder-12-oz-pwdr' },
  'Beef bone broth': { label: 'Seven Sons Farms (beef soup bones)', url: 'https://sevensons.net/store/product/beef-soup-bones' },
  'Potato chips': { label: "Woodman's (Boulder Canyon Thin & Crispy, 6 oz bag)", url: wm('Boulder Canyon Thin & Crispy') },
  'Einkorn sourdough': { label: 'Vitacost (Jovial organic einkorn flour, 32 oz)', url: 'https://www.vitacost.com/products/jovial-organic-einkorn-all-purpose-flour-32-oz-907-g-156950' },
  'Cassava wraps': { label: "Woodman's (Siete cassava flour tortillas, 8 ct)", url: wm('Siete Cassava Flour Tortillas') },
};

// Estimated costs. Prices checked November 6, 2026 against the exact
// product pages linked on this site. These are estimates for planning, not
// quotes: store prices move. Dutch Meadows shows its cheese price only
// after a free signup, so cheese is priced from the other approved raw
// cheddar's verified retail price (Organic Valley, $9.99 per 8 oz).
export const PRICE = {
  beefPerOz: 285.25 / (25 * 16), // US Wellness Organ Blend 25 lb bundle, $285.25 on sale ($11.41/lb)
  eggPerOz: (5.39 / 12) / 1.75, // OrgaNICK Pastures, $5.39/dozen at Woodman's
  sardinesPerOz: 4.59 / 3,      // King Oscar in water, $4.59 per tin, about 3 oz drained
  salmonPerOz: 1.0,             // Wild Planet canned wild sockeye, about $6 per 6 oz can, estimated
  blueberriesPerOz: 0.29,       // Wyman's frozen wild, $13.99 per 3 lb bag at the Wyman's store
  flaxPerOz: 0.44,              // Bob's Red Mill organic golden flaxseed meal, $7.06 per 16 oz at Vitacost
  brothPerOz: 0.16,             // homemade: one 3 lb pack of Seven Sons soup bones ($25.50) simmers into about 160 oz of broth
  broccoliPerOz: 0.15,          // fresh broccoli, estimated
  cheesePerOz: 1.25,            // raw cheddar priced from Organic Valley Grassmilk raw sharp, $9.99 per 8 oz at retail (Dutch Meadows price is account-only)
  tallowPerOz: 17.46 / 27.2,    // US Wellness small pail, $17.46 per 1.7 lb
  chipsPerOz: 2.99 / 6,         // Boulder Canyon Thin & Crispy, $2.99 per 6 oz bag at Woodman's
  breadPerOz: (10.59 / 32) * 0.68, // Jovial organic einkorn flour, $10.59 per 32 oz at Vitacost; finished sourdough is about 68% flour by weight
  wrapPerOz: 9.17 / 7,          // Siete cassava tortillas, about $9.17 per 7 oz pack (the Siete store 6-pack is $55)
  fruitPerOz: { Banana: 0.35 / 4, Kiwi: 0.70 / 2.5, Avocado: 1.25 / 4 }, // typical Woodman's piece prices
};
export const PRICE_BASIS = [
  'Beef organ blend: costs use the US Wellness Organ Blend 25 lb bundle at $285.25 on sale ($11.41/lb). At the 2,500 and 2,000 sizes one bundle covers about 4.8 weeks of beef; at the 1,500 size, about 10 weeks. Single 1 lb packs are $13.42/lb and would add about $10.55 a week at the 2,500 size.',
  'Eggs: $5.39 a dozen for OrgaNICK Pastures at Woodman\'s.',
  'Sardines: ordered in 12-tin cases, but the estimate still uses $4.59 a tin (the single-tin price on record) until a delivered case price is locked, so the bulk saving is not overstated.',
  'Beef tallow: $17.46 for the 1.7 lb small pail at US Wellness.',
  'Cheese: Dutch Meadows Dutch Reserve raw cheddar. Dutch Meadows shows its price only after a free signup, so costs use the other approved raw cheddar\'s verified retail price: Organic Valley Grassmilk Raw Sharp at $9.99 per 8 oz ($1.25/oz).',
  'Banana, kiwi and avocado: typical Woodman\'s piece prices (about $0.35, $0.70 and $1.25 each).',
  'Celtic sea salt and water: a few cents a week, counted as $0.',
  'Ketchup: Primal Kitchen Organic Unsweetened, $6.99 for the 11.3 oz glass bottle at the Primal Kitchen store, about $0.32 a tablespoon. 5 tablespoons a week.',
  'Homemade mayo: about $11 a batch (a cup of Chosen Foods 100% pure avocado oil at $21.59 per 500 ml bottle, one of the diet\'s own egg yolks, lemon, mustard, salt) making about 17 tablespoons, about $0.65 a tablespoon. 3 tablespoons a week.',
  'Mustard: Lowensenf Extra Hot, $6.99 for a 9.3 oz jar, about $0.13 a teaspoon. Its ingredient list is exactly mustard seed, vinegar, water, salt. 2 teaspoons a week.',
  'Wild sockeye salmon: about $6 for a 6 oz can of Wild Planet, estimated. 2 oz a week.',
  'Wild blueberries: Wyman\'s frozen wild, $13.99 for a 3 lb bag at the Wyman\'s store, about $0.29 an ounce. 4 oz a week.',
  'Broccoli: fresh, estimated at $0.15 an ounce. 6 oz a week, always cooked.',
  'Coconut water: Harmless Harvest plain, about $0.31 an ounce. 24 oz a week.',
  'Raw honey: Wedderspoon USDA Organic raw manuka MGO 50+, $22.99 for a 250 g jar, about $0.64 a teaspoon. 2 teaspoons a week.',
  'Olive oil: California Olive Ranch 100% California, $19.99 for 500 ml, about $0.20 a teaspoon. 2 teaspoons a week.',
  'Pickles: Bubbies Kosher Dill, $9.99 for a 33 oz jar of whole dills, cut into spears at home, about $0.30 a spear. 4 spears a week.',
  'Ground flaxseed: Bob\'s Red Mill Organic Golden Flaxseed Meal, $7.06 for 16 oz at Vitacost, about $0.44 an ounce. 2 oz a week. Psyllium husk: Yerba Prima powder, $22 for 12 oz at Swanson, about $0.32 a tablespoon, 4 tablespoons a week.',
  'Beef bone broth: homemade from Seven Sons Farms beef soup bones, $25.50 for about 3 lb; one pack simmers into roughly 160 oz of broth, about $0.16 an ounce. 32 oz a week.',
  'Potato chips (only when the snack is on): Boulder Canyon Thin & Crispy Classic Sea Salt, $2.99 for the 6 oz bag at Woodman\'s, about $0.50 an ounce. 1 oz per snack.',
  'Einkorn sourdough: homemade from Jovial organic einkorn flour, $10.59 for 32 oz at Vitacost. A finished loaf is about 68% flour by weight after the water and the bake, so the bread runs about $0.23 an ounce. 4 oz a week, 2 oz at each sub.',
  'Cassava wraps: Siete cassava flour tortillas, about $9.17 for the 7 oz pack of 8 (the Siete store sells a 6-pack for $55). 2 tortillas (1.76 oz) a week.',
  'Snack juice packs (only when a juice pack is the picked snack): Pitaya Foods frozen packs at about $5.99 per 4-pack at retail, about $1.50 a pack; Amafruits packs at about $49.98 for 20 (about $2.50 a pack), acai at about $2.00 a pack across the two passing brands. Nutrition is USDA reference for the whole fruit, because a pack is the fruit and nothing else.',
  'Snack organic frozen fruit (only when one is the picked snack): everything produce is organic, per Carter\'s Nov 7, 2026 rule; the conventional Goya pulps and Oregon Fruit purees that used to sit here are banned and gone. Pitaya Foods pieces at Thrive Market prices: mango $8.99 per 12 oz bag (a 4 oz serving $3.00), passion fruit seedless cubes $5.89 per 12 oz (3.5 oz serving $1.72), immunity blend $7.79 per 12 oz (4 oz serving $2.60). Woodstock Farms organic berries and pineapple at typical retail, about $4.49 per 10 oz bag (a 4 oz serving about $1.80, estimated). Earthbound Farm organic strawberries $11.49 per 2 lb at Woodman\'s (4 oz serving $1.44).',
  'Snack pops and applesauce (only when one is the picked snack): Pitaya smoothie pops are sold by the case at FoodServiceDirect, estimated at about $1.50 a pop. North Coast organic applesauce, about $4.50 a jar, a 4 oz serving runs about $0.75.',
];

const TALLOW_UNITS = { yes: 1, double: 2, light: 0.5, no: 0 };
export const TALLOW_TOTAL_UNITS = MEALS.reduce((s, m) => s + TALLOW_UNITS[m.tallow], 0);

// Nutrition per ounce, rebuilt Nov 5, 2026 from the exact products' own
// labels wherever a label exists, converted to per-ounce values:
// - Beef organ blend: US Wellness published values, 287 kcal, 17.3g protein,
//   23.54g fat, 1.49g carbs per 3.5 oz. (The source lists 1.5g fiber, which
//   ground meat cannot have; fiber is 0.)
// - Eggs: OrgaNICK Pastures carton label, 70 kcal, 6g protein, 5g fat,
//   0g carbs per egg (50g; the pool counts an egg as 1.75 oz).
// - Sardines: King Oscar label (1 can drained 84g: 120 kcal, 21g protein,
//   3.5g fat), matching its USDA branded entry per 100g.
// - Salmon: Wild Planet label, 100 kcal, 17g protein, 3.5g fat per 3 oz.
// - Blueberries: Wyman's label, 80 kcal, 19g carbs, 6g fiber per cup (140g).
// - Bone broth: Kettle & Fire Classic Beef label, 40 kcal, 10g protein per
//   cup; the homemade batch is bones, water, and salt, simmered the same way.
// - Cheese: Dutch Meadows publishes no nutrition panel, so this is USDA
//   aged cheddar (115 kcal, 7g protein, 9.5g fat per oz).
// - Flax: Bob's Red Mill label, 60 kcal, 3g protein, 3.5g fat, 5g carbs,
//   4g fiber per 2 Tbsp (13g) serving, converted to per-ounce.
// - Chips: Boulder Canyon Thin & Crispy label, 170 kcal, 3g protein, 10g
//   fat, 16g carbs, 1g fiber per ounce.
// - Sourdough: Jovial einkorn flour label (100 kcal, 4g protein, 20g carbs,
//   0.5g fat per 30 g) carried through the loaf math: a 100/65/2
//   flour/water/salt dough with about 12% bake loss is about 68% flour by
//   finished weight, so the bread runs about 64 kcal an ounce.
// - Wraps: Siete cassava tortilla label, 120 kcal, 3g fat, 24g carbs, 4g
//   fiber, 1g protein per 2 tortillas (50 g), converted to per-ounce.
// - Tallow, produce, and broccoli: USDA reference values per 100g.
export const NUTRITION_PER_OZ = {
  beef: { kcal: 82, protein: 4.94, fat: 6.73, carbs: 0.43, fiber: 0 },
  egg: { kcal: 40, protein: 3.43, fat: 2.86, carbs: 0, fiber: 0 },
  sardines: { kcal: 40.5, protein: 7.09, fat: 1.18, carbs: 0, fiber: 0 },
  salmon: { kcal: 33.3, protein: 5.67, fat: 1.17, carbs: 0, fiber: 0 },
  blueberries: { kcal: 16.2, protein: 0.2, fat: 0, carbs: 3.85, fiber: 1.21 },
  flax: { kcal: 130.8, protein: 6.54, fat: 7.63, carbs: 10.9, fiber: 8.72 },
  broth: { kcal: 5, protein: 1.25, fat: 0, carbs: 0, fiber: 0 },
  broccoli: { kcal: 9.9, protein: 0.67, fat: 0.12, carbs: 2.04, fiber: 0.94 },
  cheese: { kcal: 115, protein: 7.0, fat: 9.5, carbs: 0.4, fiber: 0 },
  chips: { kcal: 170, protein: 3, fat: 10, carbs: 16, fiber: 1 },
  bread: { kcal: 64, protein: 2.6, fat: 0.3, carbs: 12.9, fiber: 0.6 },
  wrap: { kcal: 68, protein: 0.6, fat: 1.7, carbs: 13.6, fiber: 2.3 },
  tallow: { kcal: 255, protein: 0, fat: 28.35, carbs: 0, fiber: 0 },
  fruit: {
    Banana: { kcal: 25.2, protein: 0.31, fat: 0.09, carbs: 6.47, fiber: 0.74 },
    Kiwi: { kcal: 17.3, protein: 0.32, fat: 0.15, carbs: 4.16, fiber: 0.85 },
    Avocado: { kcal: 45.4, protein: 0.57, fat: 4.16, carbs: 2.42, fiber: 1.9 },
  },
};

// Condiments sit outside the weekly pool: small set amounts on the meals
// that call for them. Ketchup is Primal Kitchen Organic Unsweetened (the
// bottle that passes in the checked database). Mayo is homemade only:
// every bottled mayo fails, because no bottled brand's eggs are certified
// organic AND pasture-raised (Primal Kitchen mayo was removed Oct 27, 2026
// for exactly that). Mustard is plain prepared mustard per the rulebook
// ruling of Oct 27, 2026 (mustard seed, vinegar, water, salt, nothing else).
// Condiment nutrition per dosed unit, from the products' own labels:
// ketchup is the Primal Kitchen label (10 kcal, 2g carbs per tablespoon);
// honey is the Wedderspoon label (70 kcal, 17g carbs per tablespoon);
// coconut water is the Harmless Harvest label (60 kcal, 15g carbs per
// 8 oz); olive oil is the California Olive Ranch label (120 kcal, 14g fat
// per tablespoon); pickles are the Bubbies label, which reads 0 across the
// board; psyllium is the Yerba Prima label (15 kcal, 4.5g carbs, 4.5g fiber
// per tablespoon); mustard is USDA prepared yellow. Mayo is homemade, so
// its numbers are computed from its ingredients' labels: 1 cup avocado oil
// (120 kcal and 14g fat per tablespoon) plus one egg yolk, about 17
// tablespoons a batch.
export const CONDIMENT_NUTRITION = {
  ketchup: { kcal: 10, protein: 0, fat: 0, carbs: 2, fiber: 0 }, // per tablespoon
  mayo: { kcal: 116, protein: 0.2, fat: 13.4, carbs: 0, fiber: 0 }, // per tablespoon, homemade
  mustard: { kcal: 3, protein: 0.2, fat: 0.2, carbs: 0.3, fiber: 0.2 }, // per teaspoon
  honey: { kcal: 23.3, protein: 0, fat: 0, carbs: 5.67, fiber: 0 }, // per teaspoon, Wedderspoon label
  oliveOil: { kcal: 40, protein: 0, fat: 4.67, carbs: 0, fiber: 0 }, // per teaspoon, extra virgin olive oil
  coconutWater: { kcal: 7.5, protein: 0, fat: 0, carbs: 1.88, fiber: 0 }, // per ounce, Harmless Harvest label
  pickles: { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 }, // per spear, Bubbies label reads 0
  psyllium: { kcal: 15, protein: 0, fat: 0, carbs: 4.5, fiber: 4.5 }, // per tablespoon, Yerba Prima label
};
export const CONDIMENT_PRICE = {
  ketchup: 6.99 / 22, // 11.3 oz glass bottle $6.99 at the Primal Kitchen store, about 22 tbsp
  mayo: 0.65,         // homemade: about $11 a batch (1 cup Chosen Foods avocado oil, 1 yolk, lemon), about 17 tbsp
  mustard: 0.13,      // per teaspoon, Lowensenf Extra Hot, $6.99 per 9.3 oz jar
  honey: 0.64,        // per teaspoon, Wedderspoon USDA organic raw manuka, $22.99 per 250 g jar
  oliveOil: 0.20,     // per teaspoon, California Olive Ranch 100% California, $19.99 per 500 ml
  coconutWater: 0.31, // per ounce, Harmless Harvest plain
  pickles: 0.30,      // per spear, Bubbies Kosher Dill, $9.99 per 33 oz jar, whole dills cut into spears
  psyllium: 0.32,     // per tablespoon, Yerba Prima powder, $22 per 12 oz at Swanson
};
export const CONDIMENT_KEYS = ['ketchup', 'mayo', 'mustard', 'honey', 'oliveOil', 'coconutWater', 'pickles', 'psyllium'];
export function condimentNutrition(m) {
  const out = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 };
  for (const k of CONDIMENT_KEYS) {
    const n = CONDIMENT_NUTRITION[k], amt = m[k] || 0;
    out.kcal += n.kcal * amt; out.protein += n.protein * amt; out.fat += n.fat * amt; out.carbs += n.carbs * amt; out.fiber += (n.fiber || 0) * amt;
  }
  return out;
}
export function condimentCost(m) {
  return CONDIMENT_KEYS.reduce((s, k) => s + (m[k] || 0) * CONDIMENT_PRICE[k], 0);
}

export function mealNutrition(m) {
  if (m.fixedNutrition) return { ...m.fixedNutrition };
  const tallowOz = m.tallowOz ?? (TALLOW_UNITS[m.tallow] / TALLOW_TOTAL_UNITS) * 4;
  const parts = [
    [NUTRITION_PER_OZ.beef, m.beef],
    [NUTRITION_PER_OZ.egg, m.egg],
    [NUTRITION_PER_OZ.sardines, m.sardines],
    [NUTRITION_PER_OZ.salmon, m.salmon || 0],
    [NUTRITION_PER_OZ.blueberries, m.blueberries || 0],
    [NUTRITION_PER_OZ.flax, m.flax || 0],
    [NUTRITION_PER_OZ.broth, m.broth || 0],
    [NUTRITION_PER_OZ.broccoli, m.broccoli || 0],
    [NUTRITION_PER_OZ.cheese, m.cheese],
    [NUTRITION_PER_OZ.chips, m.chips || 0],
    [NUTRITION_PER_OZ.bread, m.bread || 0],
    [NUTRITION_PER_OZ.wrap, m.wrap || 0],
    [NUTRITION_PER_OZ.fruit[m.fruit], m.fruitOz],
    [NUTRITION_PER_OZ.tallow, tallowOz],
  ];
  const out = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 };
  for (const [n, oz] of parts) {
    out.kcal += n.kcal * oz;
    out.protein += n.protein * oz;
    out.fat += n.fat * oz;
    out.carbs += n.carbs * oz;
    out.fiber += n.fiber * oz;
  }
  const c = condimentNutrition(m);
  out.kcal += c.kcal; out.protein += c.protein; out.fat += c.fat; out.carbs += c.carbs; out.fiber += c.fiber;
  out.kcal = Math.round(out.kcal);
  out.protein = Math.round(out.protein);
  out.fat = Math.round(out.fat);
  out.carbs = Math.round(out.carbs);
  out.fiber = Math.round(out.fiber * 10) / 10;
  return out;
}

export const WEEK_NUTRITION = MEALS.reduce((acc, m) => {
  const n = mealNutrition(m);
  acc.kcal += n.kcal; acc.protein += n.protein; acc.fat += n.fat; acc.carbs += n.carbs; acc.fiber += n.fiber;
  return acc;
}, { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 });
export const DAY_NUTRITION = {
  kcal: Math.round(WEEK_NUTRITION.kcal / 7),
  protein: Math.round(WEEK_NUTRITION.protein / 7),
  fat: Math.round(WEEK_NUTRITION.fat / 7),
  carbs: Math.round(WEEK_NUTRITION.carbs / 7),
  fiber: Math.round((WEEK_NUTRITION.fiber / 7) * 10) / 10,
};

export function mealCost(m) {
  if (typeof m.fixedCost === 'number') return m.fixedCost;
  const tallowOz = m.tallowOz ?? (TALLOW_UNITS[m.tallow] / TALLOW_TOTAL_UNITS) * 4;
  return m.beef * PRICE.beefPerOz
    + m.egg * PRICE.eggPerOz
    + m.sardines * PRICE.sardinesPerOz
    + (m.salmon || 0) * PRICE.salmonPerOz
    + (m.blueberries || 0) * PRICE.blueberriesPerOz
    + (m.flax || 0) * PRICE.flaxPerOz
    + (m.broth || 0) * PRICE.brothPerOz
    + (m.broccoli || 0) * PRICE.broccoliPerOz
    + m.cheese * PRICE.cheesePerOz
    + (m.chips || 0) * PRICE.chipsPerOz
    + (m.bread || 0) * PRICE.breadPerOz
    + (m.wrap || 0) * PRICE.wrapPerOz
    + m.fruitOz * PRICE.fruitPerOz[m.fruit]
    + tallowOz * PRICE.tallowPerOz
    + condimentCost(m);
}
export function ingredientWeekCost(key, meals = mealsForTier(2500)) {
  const sum = (f) => meals.reduce((s, m) => s + (f(m) || 0), 0);
  const t = {
    'Beef organ blend': sum((m) => m.beef) * PRICE.beefPerOz,
    'Eggs': sum((m) => m.egg) * PRICE.eggPerOz,
    'Sardines': sum((m) => m.sardines) * PRICE.sardinesPerOz,
    'Wild sockeye salmon': sum((m) => m.salmon) * PRICE.salmonPerOz,
    'Wild blueberries': sum((m) => m.blueberries) * PRICE.blueberriesPerOz,
    'Broccoli (cooked)': sum((m) => m.broccoli) * PRICE.broccoliPerOz,
    'Coconut water': sum((m) => m.coconutWater) * CONDIMENT_PRICE.coconutWater,
    'Ground flaxseed': sum((m) => m.flax) * PRICE.flaxPerOz,
    'Beef bone broth': sum((m) => m.broth) * PRICE.brothPerOz,
    'Psyllium husk': sum((m) => m.psyllium) * CONDIMENT_PRICE.psyllium,
    'Cheese': sum((m) => m.cheese) * PRICE.cheesePerOz,
    'Beef tallow': sum((m) => m.tallowOz) * PRICE.tallowPerOz,
    'Banana': sum((m) => (m.fruit === 'Banana' ? m.fruitOz : 0)) * PRICE.fruitPerOz.Banana,
    'Kiwi': sum((m) => (m.fruit === 'Kiwi' ? m.fruitOz : 0)) * PRICE.fruitPerOz.Kiwi,
    'Avocado': sum((m) => (m.fruit === 'Avocado' ? m.fruitOz : 0)) * PRICE.fruitPerOz.Avocado,
    'Potato chips': sum((m) => m.chips) * PRICE.chipsPerOz,
    'Einkorn sourdough': sum((m) => m.bread) * PRICE.breadPerOz,
    'Cassava wraps': sum((m) => m.wrap) * PRICE.wrapPerOz,
    'Celtic sea salt': 0,
    'Water': 0,
    'Ketchup': sum((m) => m.ketchup) * CONDIMENT_PRICE.ketchup,
    'Homemade mayo': sum((m) => m.mayo) * CONDIMENT_PRICE.mayo,
    'Mustard': sum((m) => m.mustard) * CONDIMENT_PRICE.mustard,
    'Raw honey': sum((m) => m.honey) * CONDIMENT_PRICE.honey,
    'Extra virgin olive oil': sum((m) => m.oliveOil) * CONDIMENT_PRICE.oliveOil,
    'Fermented pickles': sum((m) => m.pickles) * CONDIMENT_PRICE.pickles,
  };
  return t[key] ?? null;
}
export const WEEK_COST = MEALS.reduce((s, m) => s + mealCost(m), 0);
export function weekCost(meals) {
  return meals.reduce((s, m) => s + mealCost(m), 0);
}
export function weekNutrition(meals) {
  return meals.reduce((acc, m) => {
    const n = mealNutrition(m);
    acc.kcal += n.kcal; acc.protein += n.protein; acc.fat += n.fat; acc.carbs += n.carbs; acc.fiber += n.fiber;
    return acc;
  }, { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0 });
}
export function dayNutrition(meals) {
  const w = weekNutrition(meals);
  return {
    kcal: Math.round(w.kcal / 7),
    protein: Math.round(w.protein / 7),
    fat: Math.round(w.fat / 7),
    carbs: Math.round(w.carbs / 7),
    fiber: Math.round((w.fiber / 7) * 10) / 10,
  };
}
export const money = (n) => `$${n.toFixed(2)}`;

// The condiment shelf: outside the weekly pool, in set whole-spoon amounts.
export const CONDIMENTS = [
  {
    name: 'Ketchup',
    amount: '1 tablespoon on 5 meals a week',
    source: 'Primal Kitchen Organic Unsweetened, 11.3 oz glass bottle at the Primal Kitchen store ($6.99)',
    detail: 'The ketchup that passes in the checked database and the one already in the cart history: organic tomato concentrate, balsamic vinegar, salt, onion and garlic powder, spices, 0g added sugar. It goes on the burger-style meals: smash patties, the guac burger, meatballs, the meatloaf glaze, and the diner plate.',
  },
  {
    name: 'Mayo (homemade)',
    amount: '1 tablespoon on 3 meals a week',
    source: 'Made at home: 1 egg yolk, 1 cup avocado oil, lemon, mustard, salt',
    detail: 'No bottled mayo passes. Every bottled brand fails the egg rule, which has no exceptions (eggs in any product must be certified organic AND pasture-raised); Primal Kitchen mayo was removed from the approved list on Oct 27, 2026 because its eggs are cage-free only. So the mayo is homemade from one of the diet\'s own eggs, whisked with avocado oil (ruled fine Oct 25, 2026), lemon, mustard and salt. One batch is about 17 tablespoons, roughly five to six weeks of mayo at 3 tablespoons a week. It goes in the deviled eggs, the salmon pate, and the egg salad. Every mayo ingredient is covered: the yolk comes from the egg cartons, and the avocado oil and lemons are counted per batch in the order plan below.',
  },
  {
    name: 'Mustard',
    amount: '1 teaspoon in 2 meals a week',
    source: 'Lowensenf Extra Hot German mustard: mustard seed, vinegar, water, salt, and nothing else',
    detail: 'Plain prepared mustard is on the list under the rulebook ruling Carter reviewed Oct 27, 2026: seed, vinegar, water and salt, with no sugar, honey, or flavorings added. No American yellow mustard can meet that list, because the yellow color is turmeric, so the mustard here is Lowensenf Extra Hot, a German mustard whose label reads exactly mustard seed, vinegar, water, salt. It is hot, not mild yellow, and a teaspoon is all a meal uses. It goes in the deviled eggs and the egg salad, a teaspoon each.',
  },
  {
    name: 'Raw honey',
    amount: '2 teaspoons on 1 meal a week',
    source: 'Wedderspoon USDA Organic Raw Multifloral Manuka Honey, MGO 50+, the plain jar',
    detail: 'Raw honey is one of only two approved sweeteners in the rulebook (whole fruit is the other), and manuka is the one the videos praise. It is drizzled over the banana pancakes. The Manuka Honey Drops from the same brand fail on cane sugar, so it is the plain jar only.',
  },
  {
    name: 'Extra virgin olive oil',
    amount: '1 teaspoon on 2 meals a week',
    source: 'California Olive Ranch, ONLY the 100% California bottle',
    detail: 'Extra virgin olive oil is an approved fat in the rulebook. The 100% California bottle is the verified one; the same brand\'s Global Blend and avocado-blend bottles are different products and were not verified. A teaspoon is whisked into the guacamole and a teaspoon is drizzled over the diner plate avocado.',
  },
  {
    name: 'Fermented pickles',
    amount: '2 spears on 2 meals a week',
    source: 'Bubbies Kosher Dill Pickles',
    detail: 'Naturally fermented, no vinegar, no preservatives, no dyes: cucumbers, water, salt, garlic, dill, spices, mustard seed, calcium chloride. They sit next to the two burger plates, the smash patties and the diner plate.',
  },
  {
    name: 'Psyllium husk',
    amount: '1 tablespoon on 4 meals a week',
    source: 'Yerba Prima Psyllium Husks Powder',
    detail: 'An evidence add under Carter\'s Nov 5, 2026 rule. Psyllium was literature-checked on Oct 25, 2026 in Carter\'s own database: one of the best-studied fibers in existence, with a meta-analysis of 28 trials showing LDL down about 7% at around 10 g a day, an FDA-authorized heart-health claim, and systematic reviews behind it for regularity and gut bacteria. One tablespoon is whisked into the pancake batter and one is stirred into the coconut water at each of the 3 midday meals that carry it. It gels hard, so it is always taken with its drink, never dry.',
  },
  {
    name: 'Seasonings',
    amount: 'To taste, no set amount',
    source: 'Simply Organic single spices: paprika, cinnamon, turmeric, ginger, garlic powder, onion powder, black pepper',
    detail: 'Seasonings are to taste and are not counted in the calories or macros. Paprika dusts the deviled eggs, cinnamon goes in the banana pancake batter, and garlic powder, onion powder and black pepper are there for the beef when a meal wants them. Turmeric seasons the egg drop soup and the omelet, and ginger the meatball soup: both are evidence adds at food amounts, turmeric for its curcumin and ginger as the classic stomach settler.',
  },
];

// Bulk ordering is built in whole weeks and whole packs only. There are no
// calendar-month quantities anywhere: a week is always 7 days, so every
// source repeats on a whole-week rhythm, packages are never fractional, and
// whatever a pack leaves over rolls into the next block instead of changing
// the diet. Egg cartons drive their own rhythm: 7 cartons of 12 cover
// exactly 2 weeks (84 eggs), and 7 cartons of 18 cover exactly 3 weeks
// (126 eggs). Either way it is a whole number of cartons and a whole
// number of weeks.
export const ORDER_WEEK_OPTIONS = [10, 20, 30, 40];
export const BEEF_BUNDLE_PRICE = 285.25;
export const BEEF_SINGLE_PACK_PRICE = 13.42;
export const BEEF_BUNDLE_SAVINGS_PER_WEEK = 5 * (BEEF_SINGLE_PACK_PRICE - BEEF_BUNDLE_PRICE / 25);
export function beefSavingsPerWeek(tier = 2500) {
  return (planRates(tier).beefOz / 16) * (BEEF_SINGLE_PACK_PRICE - BEEF_BUNDLE_PRICE / 25);
}

const roll = (bought, used, unit) => bought === used
  ? `exactly ${used} ${unit} used, nothing left over`
  : `${bought} ${unit} bought for ${used} ${unit} used, ${Math.round((bought - used) * 10) / 10} ${unit} rolls into the next block`;

export function bulkOrder(weeks, eggPackSize = 12, tier = 2500, snack = 'off', mealsOverride) {
  const r = planRates(tier, snack, mealsOverride);
  const weeksPerBundle = 400 / r.beefOz; // one bundle is 25 lb = 400 oz of beef
  const beefBundles = Math.ceil((weeks * r.beefOz) / 400);
  const beefUsedLb = (weeks * r.beefOz) / 16;
  const tallowUsedOz = weeks * r.tallowOz;
  const tallowPails = Math.ceil(tallowUsedOz / 27.2);
  const cheeseUsedOz = weeks * r.cheeseOz;
  const cheeseOrders = Math.ceil(cheeseUsedOz / 64); // one order = eight 8 oz blocks = 64 oz
  const cheeseInterval = Math.round(64 / r.cheeseOz);
  const bonesOrders = Math.ceil(weeks / 5); // one 3 lb pack of soup bones covers about 5 weeks of broth
  const fruitShipments = weeks / 2;
  const shipBananas = Math.ceil((2 * r.bananaOz) / 4);
  const shipKiwis = Math.ceil((2 * r.kiwiOz) / 2.5);
  const shipAvocados = Math.ceil((2 * r.avocadoOz) / 4);
  const shipBroccoliOz = 2 * r.broccoliOz;
  const shipCoconutBottles = (2 * r.coconutOz) / 16;
  const eggInterval = eggPackSize === 18 ? 3 : 2;
  const eggShipments = Math.ceil(weeks / eggInterval);
  const eggCartonsPer = Math.ceil((eggInterval * r.eggs) / eggPackSize);
  const eggPacks = eggShipments * eggCartonsPer;
  const eggsUsed = weeks * r.eggs;
  const eggsBought = eggPacks * eggPackSize;
  const sardineOzUsed = weeks * r.sardineOz;
  const sardineTins = Math.ceil(sardineOzUsed / 3);
  const sardineCases = Math.ceil(sardineTins / 12);
  const salmonOzUsed = weeks * r.salmonOz;
  const salmonCans = Math.ceil(salmonOzUsed / 6);
  const blueberryOzUsed = weeks * r.blueberriesOz;
  const blueberryBags = Math.ceil(blueberryOzUsed / 48);
  const broccoliOzUsed = weeks * r.broccoliOz;
  const honeyUsed = weeks * r.honey;
  const honeyJars = Math.ceil(honeyUsed / 50);
  const pickleSpearsUsed = weeks * r.pickles;
  const pickleJars = Math.ceil(pickleSpearsUsed / 32);
  const flaxOzUsed = weeks * r.flaxOz;
  const flaxBags = Math.ceil(flaxOzUsed / 16);
  const psylliumUsed = weeks * r.psyllium;
  const ketchupUsed = weeks * r.ketchup;
  const ketchupBottles = Math.ceil(ketchupUsed / 22);
  const mayoUsed = weeks * r.mayo;
  const mayoBatches = Math.ceil(mayoUsed / 17);
  const mustardUsed = weeks * r.mustard;
  const oliveOilUsed = weeks * r.oliveOil;
  const totals = [
    `${weeks} weeks = ${weeks * 21} meals`,
    `Beef organ blend: ${fmtOz(beefUsedLb)} lb`,
    `Eggs: ${eggsUsed}`,
    `Sardines: ${sardineTins} tins (${fmtOz(r.sardineOz)} oz a week; salmon covers 2 meals)`,
    `Wild sockeye salmon: ${fmtOz(salmonOzUsed)} oz`,
    `Wild blueberries: ${fmtOz(blueberryOzUsed)} oz`,
    `Broccoli: ${fmtOz(broccoliOzUsed)} oz (cooked)`,
    `Coconut water: ${fmtOz(weeks * r.coconutOz)} oz`,
    `Ground flaxseed: ${fmtOz(flaxOzUsed)} oz`,
    `Psyllium husk: ${psylliumUsed} tbsp`,
    `Cheese: ${fmtOz(cheeseUsedOz)} oz`,
    `Beef tallow: ${fmtOz(tallowUsedOz)} oz`,
    `Einkorn sourdough: ${fmtOz(weeks * r.breadOz)} oz of bread (from ${fmtOz(weeks * r.breadOz * 0.68)} oz of einkorn flour)`,
    `Cassava wraps: ${fmtOz(weeks * r.wrapOz)} oz (2 tortillas a week)`,
    `Fruit: about ${Math.round((weeks * r.bananaOz) / 4)} bananas, ${Math.round((weeks * r.kiwiOz) / 2.5)} kiwis, ${Math.round((weeks * r.avocadoOz) / 4)} avocados`,
    `Condiments: ${ketchupUsed} tbsp ketchup, ${mayoUsed} tbsp homemade mayo, ${mustardUsed} tsp mustard, ${honeyUsed} tsp raw honey, ${oliveOilUsed} tsp olive oil, ${pickleSpearsUsed} pickle spears`,
  ];
  const sources = [
    {
      shipper: 'US Wellness Meats',
      cadence: `1 bundle covers about ${fmtOz(weeksPerBundle)} weeks at this size · ${beefBundles} order${beefBundles === 1 ? "" : "s"} in this block`,
      url: 'https://grasslandbeef.com/collections/sample-farm-bundles',
      items: [
        `Organ Blend bundle: ${beefBundles} x 25 lb = ${beefBundles * 25} lb for ${fmtOz(beefUsedLb)} lb used at ${fmtOz(r.beefOz / 16)} lb a week, the rest rolls forward in the freezer. ${money(beefBundles * BEEF_BUNDLE_PRICE)} at the $285.25 sale price, and free shipping at this size.`,
        `Beef tallow: ${tallowPails} small pails (1.7 lb each) across the block, riding with the bundle orders: ${roll(tallowPails * 27.2, tallowUsedOz, 'oz')}.`,
      ],
    },
    {
      shipper: 'Seven Sons Farms',
      cadence: `1 pack of soup bones (about 3 lb) about every 5 weeks · ${bonesOrders} order${bonesOrders === 1 ? "" : "s"} in this block`,
      url: 'https://sevensons.net/store/product/beef-soup-bones',
      items: [
        `Beef soup bones: ${bonesOrders} packs (about 3 lb each, 100% grass-fed and finished) for the bone broth. One pack simmers into roughly 5 quarts (160 oz) of broth, about 5 weeks of soup at 32 oz a week at every plan size; jar the broth and freeze it in 16 oz portions.`,
      ],
    },
    {
      shipper: 'Dutch Meadows',
      cadence: `1 cheese order (8 blocks) about every ${cheeseInterval} weeks · ${cheeseOrders} order${cheeseOrders === 1 ? "" : "s"} in this block`,
      url: 'https://dutchmeadowsfarm.com/store/product/8-oz-raw-dutch-reserve-cheddar',
      items: [
        `Dutch Reserve raw cheddar, 8 oz blocks, ordered 8 at a time (64 oz per order): ${cheeseOrders} orders, ${roll(cheeseOrders * 64, cheeseUsedOz, 'oz')}. Raw aged cheddar keeps about a year sealed in the fridge, so blocks wait fine; freeze any block that has to wait longer. The price shows after a free signup on the farm store; the cost estimates on this site use the other approved raw cheddar's retail price (Organic Valley, $9.99 per 8 oz).`,
      ],
    },
    {
      shipper: 'Fresh shipments (shipped grocery, e.g. Misfits Market)',
      cadence: `Fruit every 2 weeks · eggs every ${eggInterval} weeks`,
      url: 'https://www.misfitsmarket.com/egg-delivery',
      items: [
        `Bananas ride as their own small Amazon Fresh order (Misfits only tests banana delivery in a few areas); everything else fresh comes in these shipments. Fruit: ${fruitShipments} shipments, each with ${shipBananas} bananas, ${shipKiwis} kiwis, ${shipAvocados} avocados, ${fmtOz(shipBroccoliOz)} oz of broccoli, and ${shipCoconutBottles} bottles (16 oz each) of plain coconut water (2 weeks at a time, because bananas and avocados cannot sit longer). Order by count and check the weight at the door: about 4 oz of banana, 2.5 oz per kiwi and 4 oz of avocado per piece is the planning average, and any extra weight rolls into the next week.`,
        `Eggs: ${eggShipments} shipments of ${eggCartonsPer} cartons x ${eggPackSize} eggs = ${eggPacks} cartons (${eggsBought} eggs) for ${eggsUsed} used${eggsBought === eggsUsed ? ', an exact fit' : `, ${eggsBought - eggsUsed} eggs roll into the next block`}. Cartons are sized to cover whole weeks at this plan size. The cartons must say certified organic AND pasture-raised; OrgaNICK Pastures is the reference egg.`,
      ],
    },
    {
      shipper: 'Pantry bulk shipment (cases and bottles)',
      cadence: '1 bulk order per block · shelf-stable',
      url: 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html',
      items: [
        `King Oscar sardines in water: ${sardineCases} cases of 12 = ${sardineCases * 12} tins for ${sardineTins} tins needed (${sardineOzUsed} oz across the block)${sardineCases * 12 === sardineTins ? ', an exact fit' : `, ${sardineCases * 12 - sardineTins} tins roll into the next block`}`,
        `Wild sockeye salmon: ${salmonCans} cans (6 oz each, Wild Planet) = ${salmonCans * 6} oz for ${salmonOzUsed} oz used${salmonCans * 6 === salmonOzUsed ? ', an exact fit' : `, ${salmonCans * 6 - salmonOzUsed} oz rolls forward in the fridge`}`,
        `Wild blueberries: ${blueberryBags} frozen 3 lb bags (48 oz, Wyman's) = ${blueberryBags * 48} oz for ${blueberryOzUsed} oz used, the rest stays frozen for the next block`,
        `Ground flaxseed: ${flaxBags} bags (1 lb, Bob's Red Mill organic golden) = ${flaxBags * 16} oz for ${flaxOzUsed} oz used, the rest stays sealed for the next block. Psyllium husk: 1 canister covers the block at ${psylliumUsed} tablespoons. Raw manuka honey: ${honeyJars} plain jar${honeyJars === 1 ? '' : 's'} (Wedderspoon USDA organic, MGO 50+) for ${honeyUsed} tsp across the block. Extra virgin olive oil: 1 bottle of California Olive Ranch 100% California covers the block at 2 tsp a week. Fermented pickles: ${pickleJars} jars of Bubbies Kosher Dill (whole dills, cut into spears at home, about 32 spears a jar) for ${pickleSpearsUsed} spears used`,
        `Primal Kitchen Organic Unsweetened Ketchup: ${ketchupBottles} glass bottles (11.3 oz, about 22 tbsp each): ${roll(ketchupBottles * 22, ketchupUsed, 'tbsp')}.`,
        `Homemade mayo supplies: ${mayoBatches} batches across the block, so ${mayoBatches} cups of 100% avocado oil (1 cup per batch, about 17 tbsp of mayo per batch): ${roll(mayoBatches * 17, mayoUsed, 'tbsp')}. The yolks come from the egg cartons above, and the whites get folded into that week's eggs so no egg is wasted.`,
        `Mustard: ${mustardUsed} tsp used in the block, so one jar of Lowensenf Extra Hot (mustard seed, vinegar, water, salt, nothing else) covers many blocks. Celtic sea salt and the plain Simply Organic spices (paprika, cinnamon, turmeric, ginger, garlic powder, onion powder, black pepper) ride along as they run low.`,
        `Lemons for the mayo: ${mayoBatches} across the block (1 per batch, for the juice), riding along with the fresh fruit shipments. Mustard and Celtic sea salt for the mayo come from the pantry bottles above, and each batch's yolk comes out of the egg cartons, so every mayo ingredient is accounted for in this plan and in the meal costs.`,
        'Drinks: spring water in glass bottles only, by the case as needed (no set weekly amount): Mountain Valley still, Saratoga still or sparkling in the 28 oz glass bottle, S.Pellegrino, or Lauretana. Plastic bottles and aluminum bottles do not pass.',
      ],
    },
  ];
  const flourBags = Math.ceil((weeks * r.breadOz * 0.68) / 32);
  const wrapPacks = Math.ceil((weeks * r.wrapOz) / 7);
  {
    const pantry = sources.find((x) => x.shipper.startsWith('Pantry'));
    pantry.items.push(`Einkorn flour for the sourdough: ${flourBags} bag${flourBags === 1 ? '' : 's'} of Jovial organic einkorn (32 oz each) = ${flourBags * 32} oz for ${fmtOz(weeks * r.breadOz * 0.68)} oz of flour across the block; the bread is baked at home, one small loaf a week. Siete cassava flour tortillas: ${wrapPacks} packs (7 oz, 8 ct) = ${wrapPacks * 7} oz for ${fmtOz(weeks * r.wrapOz)} oz of wraps; they freeze well between blocks.`);
  }
  if (snack !== 'off' && r.chipsOz > 0) {
    const chipBags = Math.ceil((weeks * r.chipsOz) / SNACK.bagOz);
    const pantry = sources.find((x) => x.shipper.startsWith('Pantry'));
    pantry.items.push(`Potato chips for the snack: ${chipBags} bags of Boulder Canyon Thin & Crispy (6 oz each) = ${chipBags * SNACK.bagOz} oz for ${weeks * r.chipsOz} oz of snacks across the block; the rest of the last bag rolls into the next block. The guacamole needs no order of its own: its avocado is already in the fresh shipments.`);
  }
  if (snack !== 'off') {
    const pantry = sources.find((x) => x.shipper.startsWith('Pantry'));
    const homemadeNames = [];
    for (const pid of r.snackPicks) {
      if (pid === 'guac') continue;
      const entry = SNACK_BY_ID[pid];
      if (!entry) continue;
      const servingsPerWeek = r.snackServingsByPick[pid] || 0;
      if (entry.homemade) { homemadeNames.push(entry.name); continue; }
      if (entry.unitLabel) {
        const total = weeks * servingsPerWeek;
        const units = Math.ceil(total / entry.servingsPerUnit);
        pantry.items.push(`${entry.name} for the snack: ${units} x ${entry.unitLabel} = ${units * entry.servingsPerUnit} servings for ${total} snacks across the block; the rest rolls into the next block. ${entry.poolText || ''}`);
      } else {
        pantry.items.push(`${entry.name} for the snack: sold by the case; one case covers this block's ${weeks * servingsPerWeek} snacks with plenty left over. ${entry.poolText || ''}`);
      }
    }
    if (homemadeNames.length) {
      pantry.items.push(`${homemadeNames.join(' and ')} for the snack: homemade from pool ingredients, so their fruit, honey and coconut water are already counted in the amounts above and there is nothing extra to order.`);
    }
  }
  return { totals, sources };
}

// The order calendar: every order event for a year, with the exact contents
// of that single order. Cycles: fresh every 2 weeks, eggs every 2 weeks
// (12-count cartons) or 3 weeks (18-count), US Wellness and Dutch Meadows
// timed by the stock on hand (so their weeks shift with the plan size),
// Seven Sons soup bones every 5 weeks, pantry once per block. Events on the same day
// from the same shipper merge into one order.
export const SHIPPER_ORDER = ['US Wellness Meats', 'Dutch Meadows', 'Seven Sons Farms', 'Fresh shipments', 'Pantry bulk shipment'];
export const SHIPPER_URL = {
  'US Wellness Meats': 'https://grasslandbeef.com/products/organ-blend-burger-bundle-25-lbs',
  'Dutch Meadows': 'https://dutchmeadowsfarm.com/store/product/8-oz-raw-dutch-reserve-cheddar',
  'Seven Sons Farms': 'https://sevensons.net/store/product/beef-soup-bones',
  'Fresh shipments': 'https://www.misfitsmarket.com/imperfect-foods-organic-large-pasture-raised-eggs-1-dz/p',
  'Pantry bulk shipment': 'https://restaurantandmore.com/king-oscar-skinless-boneless-sardines-in-water-4-23-ounce-12-per-case.html',
};

export function orderSchedule(blockWeeks = 10, eggPackSize = 12, tier = 2500, snack = 'off', horizonWeeks = 52, mealsOverride) {
  const r = planRates(tier, snack, mealsOverride);
  const byKey = new Map();
  const add = (week, shipper, cadence, items) => {
    const key = `${week}|${shipper}`;
    if (!byKey.has(key)) byKey.set(key, { id: key, weekOffset: week, shipper, cadence, url: SHIPPER_URL[shipper], items: [] });
    byKey.get(key).items.push(...items);
  };
  // Mayo batches start about every 17/3 weeks; the lemon for a batch rides
  // with the fresh shipment whose 2-week window contains the batch start.
  const batchRate = r.mayo / 17; // batches per week (mayo use is the same at every size)
  const batchStarts = [];
  for (let t = 0; t < horizonWeeks; t += 1 / batchRate) batchStarts.push(t);
  const lemonsInWindow = (w) => batchStarts.filter((t) => t >= w && t < w + 2).length;

  const shipBananas = Math.ceil((2 * r.bananaOz) / 4);
  const shipKiwis = Math.ceil((2 * r.kiwiOz) / 2.5);
  const shipAvocados = Math.ceil((2 * r.avocadoOz) / 4);
  for (let w = 0; w < horizonWeeks; w += 2) {
    const items = [
      `${shipBananas} bananas (about ${shipBananas * 4} oz)`,
      `${shipKiwis} kiwis (about ${Math.round(shipKiwis * 2.5)} oz)`,
      `${shipAvocados} avocados (about ${shipAvocados * 4} oz)`,
      `Broccoli: ${fmtOz(2 * r.broccoliOz)} oz (for 2 weeks of cooked sides)`,
      `Coconut water, plain (Harmless Harvest): ${(2 * r.coconutOz) / 16} bottles, 16 oz each`,
    ];
    const lemons = lemonsInWindow(w);
    if (lemons) items.push(lemons === 1 ? '1 lemon (for the next batch of homemade mayo)' : `${lemons} lemons (for the homemade mayo batches)`);
    add(w, 'Fresh shipments', 'Every 2 weeks', items);
  }
  const eggInterval = eggPackSize === 18 ? 3 : 2;
  const eggCartons = Math.ceil((eggInterval * r.eggs) / eggPackSize);
  const eggExact = eggCartons * eggPackSize === eggInterval * r.eggs;
  for (let w = 0; w < horizonWeeks; w += eggInterval) {
    add(w, 'Fresh shipments', `Eggs every ${eggInterval} weeks`, [
      `Eggs: ${eggCartons} cartons of ${eggPackSize} (${eggCartons * eggPackSize} eggs, ${eggExact ? `exactly ${eggInterval} weeks` : `covers ${eggInterval} weeks, ${eggCartons * eggPackSize - eggInterval * r.eggs} roll forward`}). Cartons must say certified organic AND pasture-raised`,
    ]);
  }
  // Beef and tallow are timed by the freezer, not a fixed interval: a new
  // bundle is ordered in the first week the beef on hand would not cover
  // that week's meals, so the exact order weeks shift with the plan size.
  // A bundle lasts about 4.8 weeks at the 2,500 and 2,000 sizes (orders
  // land every 4 to 5 weeks) and exactly 10 weeks at the 1,500 size.
  // Tallow rides with the bundle orders, topped up to ten weeks of supply
  // each time so it never runs out between them.
  let beefStock = 0;
  let tallowStock = 0;
  for (let w = 0; w < horizonWeeks; w++) {
    if (beefStock < r.beefOz) {
      const items = ['Organ Blend bundle: 1 x 25 lb'];
      const tallowTarget = 10 * r.tallowOz;
      const pails = Math.max(0, Math.ceil((tallowTarget - tallowStock) / 27.2));
      if (pails) {
        items.push(`Beef tallow: ${pails} small pail${pails === 1 ? '' : 's'} (1.7 lb each)`);
        tallowStock += pails * 27.2;
      }
      beefStock += 400;
      add(w, 'US Wellness Meats', 'Timed to the freezer: ordered when the beef on hand would not cover the week', items);
    }
    beefStock -= r.beefOz;
    tallowStock -= r.tallowOz;
  }
  // Cheese is timed the same way: 8 blocks (64 oz) are ordered in the
  // first week the cheese on hand would not cover the week. The cheese is
  // 10 oz a week at every plan size, so this lands every 6 to 7 weeks.
  let cheeseStock = 0;
  for (let w = 0; w < horizonWeeks; w++) {
    if (cheeseStock < r.cheeseOz) {
      cheeseStock += 64;
      add(w, 'Dutch Meadows', 'Timed to stock: ordered when the cheese on hand would not cover the week', [
        'Dutch Reserve raw cheddar: 8 x 8 oz blocks (64 oz)',
      ]);
    }
    cheeseStock -= r.cheeseOz;
  }
  for (let w = 0; w < horizonWeeks; w += 5) {
    add(w, 'Seven Sons Farms', 'Every 5 weeks', [
      'Beef soup bones: 1 pack (about 3 lb, simmers into about 5 quarts of broth, roughly 5 weeks of soup)',
    ]);
  }
  for (let w = 0; w < horizonWeeks; w += blockWeeks) {
    const sardineTins = Math.ceil((blockWeeks * r.sardineOz) / 3);
    const sardineCases = Math.ceil(sardineTins / 12);
    const salmonCans = Math.ceil((blockWeeks * r.salmonOz) / 6);
    const blueberryBags = Math.ceil((blockWeeks * r.blueberriesOz) / 48);
    const flaxBags = Math.ceil((blockWeeks * r.flaxOz) / 16);
    const ketchupBottles = Math.ceil((blockWeeks * r.ketchup) / 22);
    const mayoBatches = Math.ceil((blockWeeks * r.mayo) / 17);
    const pickleJars = Math.ceil((blockWeeks * r.pickles) / 32);
    const honeyJars = Math.ceil((blockWeeks * r.honey) / 50);
    const flourBags = Math.ceil((blockWeeks * r.breadOz * 0.68) / 32);
    const wrapPacks = Math.ceil((blockWeeks * r.wrapOz) / 7);
    add(w, 'Pantry bulk shipment', `Once per ${blockWeeks}-week block`, [
      `King Oscar sardines in water: ${sardineCases} cases of 12 (${sardineCases * 12} tins)`,
      `Wild Planet wild sockeye salmon: ${salmonCans} cans (6 oz)`,
      `Wyman's frozen wild blueberries: ${blueberryBags} bags (3 lb)`,
      `Organic ground flaxseed: ${flaxBags} bags (1 lb)`,
      'Psyllium husk powder: 1 canister',
      `Primal Kitchen Organic Unsweetened Ketchup: ${ketchupBottles} glass bottles (11.3 oz)`,
      `100% avocado oil: ${mayoBatches} cups (1 per batch of homemade mayo)`,
      `Wedderspoon USDA organic raw manuka honey (MGO 50+): ${honeyJars} plain jar${honeyJars === 1 ? '' : 's'}`,
      'California Olive Ranch extra virgin olive oil: 1 bottle (ONLY the 100% California bottle)',
      `Bubbies Kosher Dill pickles: ${pickleJars} jars`,
      'Lowensenf Extra Hot mustard, Celtic sea salt, Simply Organic spices (paprika, cinnamon, turmeric, ginger, garlic powder, onion powder, black pepper): 1 each, they cover many blocks',
      'Glass-bottle spring water (Mountain Valley / Saratoga / S.Pellegrino / Lauretana): cases as needed',
      `Jovial organic einkorn flour: ${flourBags} bag${flourBags === 1 ? '' : 's'} (32 oz) for the homemade sourdough`,
      `Siete cassava flour tortillas: ${wrapPacks} packs (7 oz, 8 ct)`,
    ]);
    if (snack !== 'off' && r.chipsOz > 0) {
      const chipBags = Math.ceil((blockWeeks * r.chipsOz) / SNACK.bagOz);
      byKey.get(`${w}|Pantry bulk shipment`).items.push(`Boulder Canyon Thin & Crispy chips: ${chipBags} bags (6 oz) for the snack`);
    }
    if (snack !== 'off') {
      for (const pid of r.snackPicks) {
        if (pid === 'guac') continue;
        const entry = SNACK_BY_ID[pid];
        if (!entry) continue;
        const servingsPerWeek = r.snackServingsByPick[pid] || 0;
        if (entry.homemade) {
          byKey.get(`${w}|Pantry bulk shipment`).items.push(`${entry.name} for the snack: homemade, its ingredients ride the fresh and pantry orders above`);
        } else if (entry.unitLabel) {
          const units = Math.ceil((blockWeeks * servingsPerWeek) / entry.servingsPerUnit);
          byKey.get(`${w}|Pantry bulk shipment`).items.push(`${entry.name} for the snack: ${units} x ${entry.unitLabel}`);
        } else {
          byKey.get(`${w}|Pantry bulk shipment`).items.push(`${entry.name} for the snack: 1 case`);
        }
      }
    }
  }
  return [...byKey.values()].sort((a, b) => a.weekOffset - b.weekOffset || SHIPPER_ORDER.indexOf(a.shipper) - SHIPPER_ORDER.indexOf(b.shipper));
}
