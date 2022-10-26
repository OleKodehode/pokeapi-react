function Gen4() {
    
    async function getGenFourList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=108&offset=386')

        const data = await ress.json()

        console.log(data);
    }
    
    return(
        <>
            <button
                onClick={getGenFourList}
            >
                Gen4
            </button>
        </>
    )
}

export default Gen4;