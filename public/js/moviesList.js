window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    const a = document.querySelector(".botonAgregar")

    a.addEventListener("mouseover", () => {
        a.style.backgroundColor = "red"
    })

    a.addEventListener("mouseout", () => {
        a.style.backgroundColor = "green"
    })

    // let modo = confirm('Desea modo oscuro');

    const logo = document.querySelector("figure")

    logo.addEventListener("click", () => {
        //body.style.backgroundColor = '#7f7f7f'
        body.classList.toggle('fondoMoviesList');
    })

    
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}