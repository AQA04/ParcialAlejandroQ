/*Key para poder consumir el api de la nasa de forma ilimitada*/
/*Si no funciona con la key, usar el modo demo, cambiar la key por const key = 'DEMO_KEY'*/

const key = 'NRELx41g3Jx3QlPg0y2yyiEFbp19f7hpFBtbepub'

/*Funcion que me trae la fecha del dia de hoy*/
const fechaActual = () => {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();
    const mesActual = fecha.getMonth();
    const diaActual = fecha.getDate();

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const returnFecha = `${añoActual}-${mesActual}-${diaActual}`
    return returnFecha
};

/*Funcion que consume la api y la organiza en un json*/

let getReady = () => {
    fechaRequest = fechaActual()

    const dominio = 'https://api.nasa.gov/planetary/apod'
    const request = `?api_key=NRELx41g3Jx3QlPg0y2yyiEFbp19f7hpFBtbepub&date=${fechaRequest}`
    const url = dominio + request
    


    fetch(url)
    .then (response => response.json())
    .then(json => infoAPOD(json))
    .catch(error => display(error))


}

/*Funcion que envia los datos del json hacia el html*/
let infoAPOD = (data) => {
    let titulo = document.getElementById("textoAPOD")
    titulo.innerHTML = `
    <p>${data.title}</p>
    <p></p>

    <p>Fecha: ${data.date}</p>
    <p>Autor(a): ${data.autor}</p>

    <p>LINK: ${data.url}</p>
    `

    let imagenAPOD = document.getElementById("imgAPOD")
    imagenAPOD.innerHTML = `
    <img src="${data.hdurl}" width="100%" height="100%">
    `

}


let botonBuscar = (data) => {
    let diaInput = getElementById("diaBusca").value
    console.log(diaInput)
}


/*Se llama las funciones desde que se abre la pagina*/
window.addEventListener('load', getReady);
window.addEventListener('load', fechaActual);