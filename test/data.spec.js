require("../src/data.js");

const bancoPokemons = [{
  "id": 1,      
  "name": "Bulbasaur",     
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 2,     
  "name": "Ivysaur",      
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 3,      
  "name": "Venusaur",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 4,      
  "name": "Charmander",     
  "type": [
    "Fire"
  ]
}, {
  "id": 5,      
  "name": "Charmeleon",      
  "type": [
    "Fire"
  ]}];

describe("filtrarPorTipo", () => {
  it("is a function", () => {
    expect(typeof app.filtrarPorTipo).toBe("function");
  });

  it("returns `pokemons filtrados`", () => {
    const bancoTipos = [{
      "id": 1,      
      "name": "Bulbasaur",     
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 2,     
      "name": "Ivysaur",      
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 3,      
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]}];
    expect(app.filtrarPorTipo(bancoPokemons, ["Fire"])).toEqual([ {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]}]);
  });
});



describe("ordenPokemons", () => {
  it("is a function",  () => {
    expect(typeof app.ordenPokemons).toBe("function");
  it("is a function", () => {
    expect(typeof ordenPokemons).toBe("function");
  });

  it("returns `A-Z`", () => {
    expect(example()).toBe("example");
  it("returns `a-z`", () => {
    const pokeName = [{
      "id": 1,      
      "name": "Bulbasaur",     
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]
    }, {
      "id": 2,     
      "name": "Ivysaur",      
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 3,      
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ]}];

    expect(ordenPokemons("a-z", bancoPokemons)).toEqual(pokeName);
  });
});

describe("porcentagemPokemon", () => {
  it("is a function",  () => {
    expect(typeof app.pokePorcentagem).toBe("function");
  it("is a function", () => {
    expect(typeof pokePorcentagem).toBe("function");
  });

  it("returns `porcentagemPokemons`", () => {
    expect(example()).toBe("example");
  it("returns `porcentagem pokemons`", () => {
    const porcentagemPokemons = [{ 
      "id": 1,      
      "name": "Bulbasaur",     
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 4,      
      "name": "Charmander",     
      "type": [
        "Fire"
      ]
    }, {
      "id": 5,      
      "name": "Charmeleon",      
      "type": [
        "Fire"
      ]
    }, {
      "id": 2,     
      "name": "Ivysaur",      
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 3,      
      "name": "Venusaur",
      "type": [
        "Grass",
        "Poison"
      ]}];    

    expect(pokePorcentagem("data", bancoPokemons)).toEqual(pokePorcentagem);
  });
});
