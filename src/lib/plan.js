import { useEffect, useState } from 'react';
import { PLAN_TIERS, SNACK_CATALOG, mealsForTier } from '../data/godDiet';

// The selected plan size (daily calorie target) is shared across every page
// and remembered in localStorage. A window event keeps the header switcher
// and the page in sync without a router change.
const KEY = 'goddiet-tier';
export const TIER_EVENT = 'goddiet-tier-change';

export function getTier() {
  try {
    const v = Number(window.localStorage.getItem(KEY));
    return PLAN_TIERS.includes(v) ? v : 2500;
  } catch { return 2500; }
}

export function setTier(t) {
  try { window.localStorage.setItem(KEY, String(t)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(TIER_EVENT, { detail: t }));
}

export function useTier() {
  const [tier, set] = useState(getTier);
  useEffect(() => {
    const onChange = (e) => set(typeof e.detail === 'number' ? e.detail : getTier());
    window.addEventListener(TIER_EVENT, onChange);
    return () => window.removeEventListener(TIER_EVENT, onChange);
  }, []);
  return tier;
}

export { PLAN_TIERS };

// The snack setting (guac and chips): off, every other day, or daily.
// Same pattern as the plan size: remembered in localStorage, shared across
// every page through a window event.
const SNACK_KEY = 'goddiet-snack';
export const SNACK_EVENT = 'goddiet-snack-change';
export const SNACK_MODES = [
  { id: 'off', label: 'Off' },
  { id: 'eod', label: 'Every other day' },
  { id: 'daily', label: 'Daily' },
];

export function getSnack() {
  try {
    const v = window.localStorage.getItem(SNACK_KEY);
    return SNACK_MODES.some((m) => m.id === v) ? v : 'eod';
  } catch { return 'eod'; }
}

export function setSnack(v) {
  try { window.localStorage.setItem(SNACK_KEY, v); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(SNACK_EVENT, { detail: v }));
}

export function useSnack() {
  const [snack, set] = useState(getSnack);
  useEffect(() => {
    const onChange = (e) => set(typeof e.detail === 'string' ? e.detail : getSnack());
    window.addEventListener(SNACK_EVENT, onChange);
    return () => window.removeEventListener(SNACK_EVENT, onChange);
  }, []);
  return snack;
}

// The snack picks: which snacks from the catalog the snack switcher
// serves. Carter can select as many or as few as he wants (Nov 7, 2026);
// the picked snacks rotate across the snack days in the order they were
// picked. Same pattern again: localStorage plus a window event. Defaults
// to guac and chips alone, the original snack. The earlier single-pick
// key is read once as the starting selection.
const PICKS_KEY = 'goddiet-snackpicks';
const PICK_KEY_OLD = 'goddiet-snackpick';
export const SNACK_PICK_EVENT = 'goddiet-snackpicks-change';
const validPick = (id) => SNACK_CATALOG.some((s) => s.id === id);

export function getSnackPicks() {
  try {
    const raw = window.localStorage.getItem(PICKS_KEY);
    if (raw !== null) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) return arr.filter(validPick);
    }
    const old = window.localStorage.getItem(PICK_KEY_OLD);
    return [validPick(old) ? old : 'guac'];
  } catch { return ['guac']; }
}

export function setSnackPicks(arr) {
  const clean = (Array.isArray(arr) ? arr : []).filter(validPick);
  try { window.localStorage.setItem(PICKS_KEY, JSON.stringify(clean)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(SNACK_PICK_EVENT, { detail: clean }));
}

export function useSnackPicks() {
  const [picks, set] = useState(getSnackPicks);
  useEffect(() => {
    const onChange = (e) => set(Array.isArray(e.detail) ? e.detail : getSnackPicks());
    window.addEventListener(SNACK_PICK_EVENT, onChange);
    return () => window.removeEventListener(SNACK_PICK_EVENT, onChange);
  }, []);
  return picks;
}

// Custom weeks: when the Ask assistant's proposal is applied, the resulting
// week is stored per plan size, snack setting, and snack pick, and every
// page reads it instead of the fixed week until it is reset. Same
// localStorage + window event pattern as the tier and snack settings.
const CUSTOM_KEY = 'goddiet-custom-v1';
export const CUSTOM_EVENT = 'goddiet-custom-change';
const picksKey = (picks) => (Array.isArray(picks) && picks.length ? picks : ['guac']).join(',');
const planKey = (tier, snack, picks) => `${tier}|${snack}|${picksKey(picks)}`;

function loadCustom() {
  try { return JSON.parse(window.localStorage.getItem(CUSTOM_KEY)) || {}; } catch { return {}; }
}
export function getCustomWeek(tier, snack, picks = ['guac']) {
  const c = loadCustom()[planKey(tier, snack, picks)];
  return c && Array.isArray(c.meals) && c.meals.length ? c : null;
}
export function setCustomWeek(tier, snack, meals, picks = ['guac']) {
  const all = loadCustom();
  all[planKey(tier, snack, picks)] = { meals, savedAt: Date.now() };
  try { window.localStorage.setItem(CUSTOM_KEY, JSON.stringify(all)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(CUSTOM_EVENT));
}
export function clearCustomWeek(tier, snack, picks = ['guac']) {
  const all = loadCustom();
  delete all[planKey(tier, snack, picks)];
  try { window.localStorage.setItem(CUSTOM_KEY, JSON.stringify(all)); } catch { /* private mode */ }
  window.dispatchEvent(new CustomEvent(CUSTOM_EVENT));
}
export function useCustomWeek(tier, snack, picks = ['guac']) {
  const key = picksKey(picks);
  const [custom, set] = useState(() => getCustomWeek(tier, snack, picks));
  useEffect(() => {
    const onChange = () => set(getCustomWeek(tier, snack, picks));
    onChange();
    window.addEventListener(CUSTOM_EVENT, onChange);
    return () => window.removeEventListener(CUSTOM_EVENT, onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier, snack, key]);
  return [custom, (meals) => setCustomWeek(tier, snack, meals, picks), () => clearCustomWeek(tier, snack, picks)];
}
export function usePlanMeals(tier, snack, picks = ['guac']) {
  const [custom] = useCustomWeek(tier, snack, picks);
  return { meals: custom ? custom.meals : mealsForTier(tier, snack, picks), isCustom: !!custom, custom };
}
