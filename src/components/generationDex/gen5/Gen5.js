function Gen5() {
    
    async function getGenFiveList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

        const data = await ress.json()

        console.log(data);
    }
    
    return(
        <>
            <button
                onClick={getGenFiveList}
            >
                Gen5
            </button>
        </>
    )
}

export default Gen5;