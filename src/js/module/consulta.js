export const getMovies = async(titulo) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q=${titulo}`)
    let data = await res.json()
    let result = []
    data.description.forEach(val =>{
        result.push(val)
    })
    return result
}
export const getID = async() =>{
    let res2 = await getMovies()
    let data = []
    let result = []
    res2.forEach( val =>{
        result.push(val["#IMDB_ID"])
    })
    return result
}

export const pepe = async() =>{
    let res2 = await getID()
    let result = []
    result.push(res2.forEach(val =>{
        getTypeById(val)
    }))
    return result
}

export const getTypeById = async(id) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`)
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push(val["@type"])
    })
   return result
}