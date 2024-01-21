//este programa es la base para un CRUD mediante un vector

//vector 
let array = [1, 2, 3, 4];

    mostarArray(array);
    console.log("------------");
    //agregarElementos(array);
    //buscarElementoIndexOf(array);
    //eliminarElemento(array);
    editarElemento(array);
    console.log("------------");
    mostarArray(array);
    
//muestra todos los elementos del array
function mostarArray (array) {
    
    let j = 0;
    while(j < array.length){
        //let elemento = array.shift();
        
        console.log(array[j]);
        j++;
    }
    
}

//pide al usario que agrege un numero al final del vector
function agregarElementos(array){

    var numero = prompt("Agregar numero:");
    array.push(numero);    

}

//eliomina el elemento seleccionado
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

//busca un elemento mediante el valor y retorna la posicion del valor
function buscarElementoIndexOf(array){
    
    
    let input = prompt("Buscar elemento:");
    let numero = parseInt(input);
    
    //console.log(numero);
    
    let indice = array.indexOf(numero);
    //console.log("el numero fue encontrado en la pocision: ", indice);
    
    return indice;
}


//edita un elemento seleccionado
function editarElemento(array){
    
    
    let indice = buscarElementoIndexOf(array);
    
    let input = prompt("editar elemento:");
    let numero = parseInt(input);
    
    console.log("valor es: ", array[indice]);
    array[indice] = numero;
    
    
}


//esta funcion no se esta usando, la dejo x si las moscas
/*
function buscarElemento(array){

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
*/