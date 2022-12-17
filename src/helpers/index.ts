export function getRandomArbitrary (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function searchMatch (text: string, search: string | string[]) {
  const exp = Array.isArray(search) ? search.join('|') : search.trim().split(' ').join('|')
  const regex = new RegExp(`\\b(${exp})`, 'gmi')
  return regex.test(text)
}

export function shuffle<T> (array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
