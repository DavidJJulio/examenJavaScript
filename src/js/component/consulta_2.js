import { getMovies } from "../module/consulta";

export class consultaDos extends HTMLElement{
    constructor(){
        super()
        this.attachShadow = {mode: "open"}
        this.data = []
        this.innerHTML = ""
        this.PrimeraConsulta()
    }
    async PrimeraConsulta(){
        this.data = await getMovies(prompt("Ingresa el nombre de una pelicula"))
        let año = prompt("Ingresa un año")
        this.data.forEach(val =>{
            if(val["#YEAR"] == año){
                this.innerHTML += /*html*/`
                <style>
                    .container {
                        display: flex;
                        flex-direction: column;
                    }
                    .container div {
                        margin: 10px;
                        background-color: #F1F0F6;
                        display: flex;
                        padding: 15px;
                        border-radius: 10px;
                        flex-direction: column;
                        gap: 5px;
                    }
                </style>
                <div class ="container">
                    <div>
                    <p>Titulo: <b>${val["#TITLE"]}</b></p>
                    <p>Año: <b>${val["#YEAR"]}</b></p>
                    <p>Id: <b>${val["#IMDB_ID"]}</b></p>
                    <p>Rank: <b>${val["#RANK"]}</b></p>
                    <p>Actores: <b>${val["#ACTORS"]}</b></p>
                    </div>
                
                </div>
                `
            }
            
        })
    }

}
customElements.define("consulta-dos", consultaDos)