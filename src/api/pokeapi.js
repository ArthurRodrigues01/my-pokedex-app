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

export const getSprite = (name) => {
  const nonRegularNames = {
    deoxys: 'deoxys-normal',
    giratina : 'giratina-altered',
    shaymin : 'shaymin-land',
    oricorio : 'oricorio-baile',
    lycanroc : 'lycanroc-midday',
    wishiwashi : 'wishiwashi-solo',
    eiscue : 'eiscue-ice',
    enamorus : 'enamorus-incarnate'
  }

  if (nonRegularNames[name] !== undefined) {
    name = nonRegularNames[name];
  }
  const link = `https://img.pokemondb.net/artwork/large/${name}.jpg`;
  
  return link;
}

export const getID = (link) => {
  let id = '';
  let i;
  for (i = 42; i < link.length - 1; i++) {
    id += link[i];
  }
  
  return Number(id);
}