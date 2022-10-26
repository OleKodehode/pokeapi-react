import Gen1 from "../components/generationDex/gen1/Gen1";
import Gen2 from "../components/generationDex/gen2/Gen2";
import Gen3 from "../components/generationDex/gen3/Gen3";
import Gen4 from "../components/generationDex/gen4/Gen4";
import Gen5 from "../components/generationDex/gen5/Gen5";
import Gen6 from "../components/generationDex/gen6/Gen6";
import Gen7 from "../components/generationDex/gen7/Gen7";
import Gen8 from "../components/generationDex/gen8/Gen8";
import WhosThisPokemon from "../components/WhosThisPokemon";

function Pokedex() {

    const test = ""
    
    return (
        <>
            <WhosThisPokemon 
                test={test}
            />
            <button
                onClick={
                    () => console.log(test)
                }
            >
                Test
            </button>
            <div>
                <Gen1 />
                <Gen2 />
                <Gen3 />
                <Gen4 />
                <Gen5 />
                <Gen6 />
                <Gen7 />
                <Gen8 />
            </div>
        </>
    )
}

export default Pokedex;