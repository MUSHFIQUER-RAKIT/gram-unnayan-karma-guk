export async function getDictionary(lang) {
  const dict = await import(`@/data/dictionaries/${lang}.json`);
  return dict.default;
}
