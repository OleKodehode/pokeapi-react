function Gen2() {

    async function getGenTwoList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')

        const data = await ress.json()

        console.log(data);
    }
    return(
        <>
            <button
                onClick={getGenTwoList}
            >
                Gen2
            </button>
        </>
    )
}

export default Gen2;