const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let pokemons = data.pokemon;
    const ul = document.getElementById('pokemons');

    return pokemons.map(function (pokemon) {
      let li = createNode('li'),
        img = createNode('img'),
        p = createNode('p'),
        nextEvolution;
      img.src = pokemon.img;

      if (pokemon.next_evolution) {
        nextEvolution = `<strong>Evolution: </strong>` + pokemon.next_evolution.map(function (evolution) { return ` <i>${evolution.name}</i>` }
        );
      } else {
        nextEvolution = '';
      }
      p.innerHTML = `<strong>${pokemon.num} ${pokemon.name}</strong><br/>
       <strong>H: </strong>${pokemon.height}<strong>W: </strong>${pokemon.weight}<br/>
       <strong>Type: </strong>${pokemon.type}<br/>
       <strong>Weakness: </strong>${pokemon.weaknesses}<br/>` + nextEvolution;
      append(li, img);
      append(li, p);
      append(ul, li);
    })
  })
  .catch(function (error) {
    console.log(error);
  })


