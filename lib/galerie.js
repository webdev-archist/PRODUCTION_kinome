// export const getAllArtworks = async () => (await fetch("http://localhost:3000/datas/oeuvres_datas.json")).json()
export const getAllArtworks = async () => {
    const ok = await fetch("http://localhost:3000/datas/oeuvres_datas.json")
        .then(r => r.json())
        .then(d => d)
        
    console.log("server galerie getAllArtworks")
    console.log(ok)

    return ok

}

export const getOneArtwork = async (id) => ((await getAllArtworks())[id])








export const getAllArtists = async () => (await fetch("http://localhost:3000/datas/artistes_datas.json")).json()

export const getOneArtist = async (id) => ((await getAllArtists())[id])







export const getAllExpos = async () => (await fetch("http://localhost:3000/datas/expos_datas.json")).json()

export const getOneExpo = async (id) => ((await getAllExpos())[id])
