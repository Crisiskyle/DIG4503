import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = [{"error": "Could not find name of that Pokémon."}];

    let pokemon = getPokemon.getPokemonByName(req.query.name);

    if(pokemon !== null) {
        result = pokemon;
    }



    res.json(result);

}