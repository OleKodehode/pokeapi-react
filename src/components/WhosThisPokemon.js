import { useState } from "react";

function WhosThisPokemon( props ) {

    // const test = ress;


    const [pokedexEntry, setPokedexEntry] = useState('')

    const handleChange = event => {
        setPokedexEntry(event.target.value);
    }


    async function getPokemon( props ) {

        console.log('test');
        const test = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexEntry}`)

        const data = await test.json()

        console.log(data);
    }


    return (
        <>
            <h1>
                Pokédex
            </h1>
            <label>
                <input
                    type="text"
                    placeholder="001"
                    onChange={handleChange}
                />
                Who's this Pokémon
            </label>
            <button
                type="submit"
                onClick={getPokemon}
            >
                Look up Pokémon
            </button>
        </>
    )
}

export default WhosThisPokemon;