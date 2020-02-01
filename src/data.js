
window.app = {
  filtrarPorTipo,
  ordenPokemons,
  pokeCalc
};



function filtrarPorTipo(pokemon, types) {
  let pokeTipos = []; 
  for (let i = 0; i < types.length; i++) { 
    const type = types[i];
    pokemon.map(function (personagem) { 
      if (personagem.type.includes(type)) {
        pokeTipos.push(personagem); 
      }
    });
  }
  return pokeTipos;

}


function ordenPokemons(orderPokemon, pokemons) {
  let orderList = [];

  switch (orderPokemon) {
  case "a-z":
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    break;
  case "z-a":
    pokemons.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      return -1;
    });
    pokemons.reverse();
    break;
  }
  return pokemons;
};

function pokeCalc(pokeData) {
  let countTypes = pokeData.reduce(function (acumulador, pokemon) {
    for (tipoPokemon of pokemon.type) {
      if (tipoPokemon in acumulador) {
        acumulador[tipoPokemon]++;
      } else {
        acumulador[tipoPokemon]=1;
      }
    }

    return acumulador;
  }, {});
  return countTypes;
};
