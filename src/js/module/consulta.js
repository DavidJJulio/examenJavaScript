export const getMovies = async(titulo) =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q=${titulo}`)
    let data = await res.json()
    let result = []
    data.description.forEach(val =>{
        result.push(val)
    })
    return result
}
