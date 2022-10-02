const Acid = {
  a: "a",
  t: "t",
  g: "g",
  c: "c",
} as const;
type Acid = typeof Acid[keyof typeof Acid];

type Position = {
  x: number;
  y: number;
};

const ways = {
  [Acid.a]: { x: 1, y: 1 },
  [Acid.t]: { x: -1, y: 1 },
  [Acid.g]: { x: -1, y: -1 },
  [Acid.c]: { x: 1, y: -1 },
} as const;

/**
 * The composable that return calculated coordinate of amino acid sequence
 *
 * @return function that return calculated coordinate of amino acid sequence
 * @example
 * ```ts
 * const { calculateSequence } = useCalculateSequence()
 * ```
 */
export function useCalculateSequence() {
  return {
    calculateSequence,
  };
}

/**
 * The function that return calculated coordinate of amino acid sequence
 *
 * @param sequence Amino acid sequence
 * @return Calculated coordinates
 * @example
 * ```ts
 * const coordinates = calculateSequence("atgc")
 * ```
 */
const calculateSequence = (sequence: string): Position[] => {
  const coordinates: Position[] = [{ x: 0, y: 0 }];
  for (const acid of sequence.toLowerCase()) {
    const last = coordinates.at(-1);
    if (last === undefined) {
      throw new Error(`Unreachable error: coordinates is ${coordinates}`);
    }
    switch (acid) {
      case Acid.a:
      case Acid.t:
      case Acid.g:
      case Acid.c:
        coordinates.push({
          x: last.x + ways[acid].x,
          y: last.y + ways[acid].y,
        });
        break;
      default:
        // NOTE: unknown acid...
        break;
    }
  }
  return coordinates;
};
