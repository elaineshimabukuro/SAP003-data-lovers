
window.app = {
  filtrarPorTipo,
  pokePorcentagem, 
};

//filtrar pokemon

function filtrarPorTipo(pokemon, types) { 
  let pokeTipos = []; 
  for (let i = 0; i < types.length; i++) { //entra no array que guarda os tipos de pokemon
    const type = types[i]; 
    pokemon.map(function (personagem) { //procura dentro do "for" o tipo de pokemon selecionado no checkbox
      if (personagem.type.includes(type)) { // determinamos se realmente o array contem o tipo de pokemon selecionado
        pokeTipos.push(personagem); //retorna então adcionando o pokemon selecionado ao array    
      }          
    });     
  }
  return pokeTipos;
  //carregarPokemon() 
}

//ordenar pokemon

window.ordenPokemons = ordenPokemons;

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

function pokePorcentagem(data) {
  return ((data.length*100)/151).toFixed(1);
}
 