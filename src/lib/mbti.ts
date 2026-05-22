export type Answer = 'A' | 'B';

export interface Scores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export function calculateMbti(answers: Record<number, Answer>): string {
  const scores: Scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  const dimensionMap: Record<number, { a: keyof Scores; b: keyof Scores }> = {
    1: { a: 'E', b: 'I' }, 2: { a: 'E', b: 'I' }, 3: { a: 'E', b: 'I' },
    4: { a: 'E', b: 'I' }, 5: { a: 'E', b: 'I' },
    6: { a: 'S', b: 'N' }, 7: { a: 'S', b: 'N' }, 8: { a: 'S', b: 'N' },
    9: { a: 'S', b: 'N' }, 10: { a: 'S', b: 'N' },
    11: { a: 'T', b: 'F' }, 12: { a: 'T', b: 'F' }, 13: { a: 'T', b: 'F' },
    14: { a: 'T', b: 'F' }, 15: { a: 'T', b: 'F' },
    16: { a: 'J', b: 'P' }, 17: { a: 'J', b: 'P' }, 18: { a: 'J', b: 'P' },
    19: { a: 'J', b: 'P' }, 20: { a: 'J', b: 'P' },
  };

  for (const [qId, answer] of Object.entries(answers)) {
    const id = parseInt(qId);
    const map = dimensionMap[id];
    if (!map) continue;
    if (answer === 'A') scores[map.a]++;
    else scores[map.b]++;
  }

  const ei = scores.E >= scores.I ? 'E' : 'I';
  const sn = scores.S >= scores.N ? 'S' : 'N';
  const tf = scores.T >= scores.F ? 'T' : 'F';
  const jp = scores.J >= scores.P ? 'J' : 'P';

  return `${ei}${sn}${tf}${jp}`;
}
