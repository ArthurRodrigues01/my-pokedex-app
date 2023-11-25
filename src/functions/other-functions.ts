function capitalize( word: string): string {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1)

  return capitalized
}
function rmFchars(str: string): string {
  // return str.replace(/-\n/g,'')
  return str.replace(/\f/g, '\n')
}

export { capitalize, rmFchars }