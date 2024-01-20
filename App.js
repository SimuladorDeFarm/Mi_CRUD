let array = [1, 2, 3, 4];



    mostarArray(array);
    console.log("------------");
    //agregarElementos(array);
    //buscarElementoIndexOf(array);
    eliminarElemento(array);
    mostarArray(array);

function mostarArray (array) {
    
    let j = 0;
    while(j < array.length){
        //let elemento = array.shift();
        
        console.log(array[j]);
        j++;
    }
    
}

function agregarElementos(array){

    var numero = prompt("Agregar numero:");
    array.push(numero);    

}

function eliminarElemento(array){

        let indice = buscarElementoIndexOf(array);

        //console.log("encontrado en indice:",x);

        if (indice !== -1) {
            // Utilizar splice para eliminar el elemento en el índice encontrado
            array.splice(indice, 1);
            //console.log("Elemento eliminado:", elementoAEliminar);
        } else {
            console.log("El elemento no existe en el array.");
        }

}

function buscarElemento(array){8

    var numero = prompt("Buscar elemento:");

    let j = 0;
    while(j < array.length && numero != array[j]){
        
        j++;
    }

    if(j <= array.length){
        console.log("el numero fue encontrado en la pocision: ", j);
    }
    else{
        console.log("el numero no fue encontrado ");
    }
}

function buscarElementoIndexOf(array){


    let input = prompt("Buscar elemento:");
    let numero = parseInt(input);

    //console.log(numero);
    
    let indice = array.indexOf(numero);
    //console.log("el numero fue encontrado en la pocision: ", indice);

    return indice;
}