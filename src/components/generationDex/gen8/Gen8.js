function Gen8() {
    
    async function getGenEightList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

        const data = await ress.json()

        console.log(data);
    }
    
    return(
        <>
            <button
                onClick={getGenEightList}
            >
                Gen8
            </button>
        </>
    )
}

export default Gen8;