
export const getDex = (offset, limit) => {
  const baseLink = 'https://pokeapi.co/api/v2/pokemon-species/';
  let apiLink;
  if (offset >= 0 && limit > 0) {
    const conditions = `?offset=${offset}&limit=${limit}`;
    apiLink = `${baseLink}${conditions}`;
  } else {
    apiLink = baseLink;
  }
  const req = fetch(apiLink).then(res => res.json()).then(data => data);
  
  return req;
};