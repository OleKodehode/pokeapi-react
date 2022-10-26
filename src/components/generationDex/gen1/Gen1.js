function Gen1() {

    async function getGenOneList(){
        const ress = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

        const data = await ress.json()

        console.log(data);
    }

    return(
        <>
            <button
                onClick={getGenOneList}
            >
                Gen1
            </button>
        </>
    )
}

export default Gen1;