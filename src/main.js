let personagens = POKEMON.pokemon;

function carregarPokemon(pokemons) {
  personagens = pokemons;

  const showPokemons = document.getElementsByClassName("principal")[0];
  let layout = "";
  showPokemons.innerHTML = "";
  for (pokemon of pokemons) {
    layout += `
          <div id="pokemon" class="poke-card">
            <div class="infos">
              <img src ="${pokemon.img}"/>
              <div id = "name">
                ${pokemon.name}
              </div>
              <p class="subtitle">Tipo:</p>
              ${pokemon.type}
              <p class="subtitle">Fraquezas:</p>
              ${pokemon.weaknesses}
            </div>
          </div>`;
  };
  showPokemons.innerHTML = layout;
}
carregarPokemon(personagens);

document.getElementById("filter").addEventListener("click", function() {
  const types = Array.from(document.querySelectorAll(".type:checked")).map(function (element) {
    return element.value;
  });
  filtrarPorTipo(POKEMON.pokemon, types);
  const pokemonFiltrado = app.filtrarPorTipo(POKEMON.pokemon, types);

  carregarPokemon(pokemonFiltrado);
  
});

document.getElementById("ordenarPokemons").addEventListener("change", function() {
  const ordem = Array.from(document.querySelectorAll("#ordenarPokemons")).map(function (element) {
    return element.value;
  });
  selectOrderPokemon(ordem);
}
);

function selectOrderPokemon() {
  let orderPokemon = document.getElementById("ordenarPokemons").value;
  let orderList = window.ordenPokemons(orderPokemon, personagens);
  carregarPokemon(orderList);
}

function showTypes() {
  let qtTypes = app.pokeCalc(personagens);
  for (tipo in qtTypes) {
    document.getElementById("type"+tipo).innerHTML = qtTypes[tipo];
  }

}

showTypes();

