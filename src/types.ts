export const VOTES = {
  NTA: 'Not the asshole',
  YTA: "You're the asshole",
  ESH: 'Everyone sucks here',
  NAH: 'No assholes here',
} as const

export type Vote = keyof typeof VOTES

export type Tally = {
  NTA: number
  YTA: number
  ESH: number
  NAH: number
}

//* Main votes to count
// YTA = You're the Asshole;
// NTA = Not the A-hole (and the other person is);
// ESH = Everyone Sucks here;
// NAH = No A-holes here;

//* Rare votes, not counted
// YWBTA = You Would Be the Asshole;
// YWNBTA = You Would Not be the Asshole (and the other person would);
// INFO = Not Enough Info
