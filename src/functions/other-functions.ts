function capitalize( word: string): string {
  const capitalized = [...word].map((letter: string, index: number) => {
    if (index == 0) return letter.toUpperCase()
    return letter
  }).toString().replace(/,/g, '')

  return capitalized
}
function rmF(str: string): string {
  // return str.replace(/-\n/g,'')
  return str.replace(/\f/g, '\n')
}

export { capitalize, rmF }