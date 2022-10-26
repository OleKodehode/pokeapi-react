function Gen6() {
    
    async function getGenSixList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

        const data = await ress.json()

        console.log(data);
    }
    
    return(
        <>
            <button
                onClick={getGenSixList}
            >
                Gen6
            </button>
        </>
    )
}

export default Gen6;