function Gen3() {

    async function getGenThreeList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')

        const data = await ress.json()

        console.log(data);
    }

    return(
        <>
            <button
                onClick={getGenThreeList}
            >
                Gen3
            </button>
        </>
    )
}

export default Gen3;