


const getPokemons = async () => {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
    const resp = await fetch(url);
    const { results } = await resp.json();

    return results;

}

export const getPokemon = async (pokemonId) => {

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const { sprites,
        id,
        name,
        weight,
        abilities,
        types,
        height,
        stats } = await resp.json();


    const tiposPokemon = types.map(tipos => {
        return " [ " + tipos.type.name + " ]"
    })


    const pok = {
        img: sprites.front_default,
        id: id,
        name: name,
        weight: weight,
        height: height,
        habilidad: abilities[0].ability.name,
        tipos: tiposPokemon,
        hp: stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        attack_esp: stats[3].base_stat,
        defense_esp: stats[4].base_stat,
        speed: stats[5].base_stat,
        imgFull: sprites.other.home.front_default 
    }
    return pok;

}

export const getAllPokemon = async () => {
        

    let arrayPokemon = [];

    for (let i = 1; i < 20 + 1; ++i) {

        let data = await getPokemon(i);

        arrayPokemon.push(data)

    }

    

    return arrayPokemon
}