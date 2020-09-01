export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.5;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 60;
export const NIGHT_LENGTH = 5;

export const getNextHungerTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 3) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 8 + clock;
