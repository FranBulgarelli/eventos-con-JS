window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    const input = document.querySelector("#titulo")
    let estadoSecreto = 0

    const key = (key) => {
        switch (true) {
            case estadoSecreto === 0 && key.toLoWerCase() === "s" :
                estadoSecreto ++
                break

            case estadoSecreto === 1 && key.toLoWerCase() === "e" :
                estadoSecreto ++
                break

            case estadoSecreto === 2 && key.toLoWerCase() === "c" :
                estadoSecreto ++
                break

            case estadoSecreto === 3 && key.toLoWerCase() === "r" :
                estadoSecreto ++
                break

            case estadoSecreto === 4 && key.toLoWerCase() === "e" :
                estadoSecreto ++
                break

            case estadoSecreto === 5 && key.toLoWerCase() === "t" :
                estadoSecreto ++
                break

            case estadoSecreto === 6 && key.toLoWerCase() === "o" :
                alert("SECRETO MAGICO")
                estadoSecreto = 0
                break

            default:
                estadoSecreto = 0
                break

        }
    }

    input.addEventListener("keypress", (event) => {
        key(event.key)
    })



}