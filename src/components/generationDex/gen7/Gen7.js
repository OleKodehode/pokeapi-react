function Gen7() {
    
    async function getGenSevenList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

        const data = await ress.json()

        console.log(data);
    }
    
    return(
        <>
            <button
                onClick={getGenSevenList}
            >
                Gen7
            </button>
        </>
    )
}

export default Gen7;