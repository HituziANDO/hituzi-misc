/**
 * Returns a random value based on a probability table.
 *
 * @param probabilityTable A probability table.
 */
export function randomWithProbabilityTable<TABLE extends { [key: string]: number }>(
  probabilityTable: TABLE,
): keyof TABLE | null {
  // 確率テーブルを確率の低い順にソート
  const table = Object.entries(probabilityTable)
    .sort(([, a], [, b]) => a - b)
    .reduce((result, [key, val]) => ({ ...result, [key]: val }), {}) as TABLE;

  // [1,100]の区間でランダムな整数を生成
  const rand = Math.floor(Math.random() * 100) + 1;
  let rate = 0;
  for (const key in table) {
    rate += table[key];

    if (rand <= rate) {
      return key;
    }
  }

  return null;
}
