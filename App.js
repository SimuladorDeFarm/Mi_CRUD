//este programa es la base para un CRUD mediante un vector

//vector 
let array = [ ];
let idContador = 0;
const  persona = {

    id: '',
    nombre: '' 
}

const formulario = document.querySelector('#formulario-id')
const nombreImput = document.querySelector('#nombre-id');

formulario.addEventListener('submit', validarImputs);

function validarImputs(e){

    e.preventDefault();

    if(nombreImput.value == ''){
        alert('ingrese algo en el campo');
        return;
    }
    else{

        persona.nombre = nombreImput.value;
        persona.id = createId();

        agregarEmpleado();
    }

}


function createId () {

    idContador++
      return idContador;
  }

function agregarEmpleado(){
    array.push({...persona});

    console.clear();
    mostarArray();
    mostrarLista();
}

function mostrarLista(){
    
    limpiarHTML();
    //en que parte agregar elementos html
    const divEmpleados = document.querySelector('.div-empleados');

array.forEach (empleado => {
    const {id, nombre} = empleado;

    const parrafo = document.createElement('p');
    parrafo.textContent = `${id} - ${nombre}`;
    parrafo.dataset.id = id;

    const btnEliminar = document.createElement('button');
    btnEliminar.onclick = () => eliminarElemento(id);
    btnEliminar.textContent = 'ELiminar';
    //btnEliminar.classList.add('btn', 'btn-eliminar');
    parrafo.append(btnEliminar);

    const btnEditar = document.createElement('button');
    btnEditar.onclick = () => openDialog(id);
    btnEditar.textContent = 'Editar';
    //btnEliminar.classList.add('btn', 'btn-eliminar');
    parrafo.append(btnEditar);

    const hr = document.createElement('hr');

    divEmpleados.appendChild(parrafo);
    divEmpleados.appendChild(hr);

});

}

function openDialog(id) {
    // Crear un elemento dialog
    var dialogElement = document.createElement('dialog');
    
    // Crear un input dinámicamente
    var inputElement = document.createElement('input');
    
    // Agregar el input al contenido del dialog
    dialogElement.appendChild(inputElement);

    // Crear un botón para cerrar el diálogo
    var btnAceptar = document.createElement('button');
    btnAceptar.onclick = () => editarElemento(id, inputElement);
    btnAceptar.textContent = 'Aceptar';

    var btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cerrar';

    
    // Agregar el botón al contenido del dialog
    dialogElement.appendChild(btnAceptar);
    dialogElement.appendChild(btnCancelar);
    
 
    
    // Agregar el dialog al cuerpo del documento
    document.body.appendChild(dialogElement);
    
    // Mostrar el dialog
    dialogElement.showModal();
    
    // Configurar el evento de clic para cerrar el dialog
    btnAceptar.addEventListener('click', function() {
    
      dialogElement.close();
    });

    btnCancelar.addEventListener('click', function() {
    
        dialogElement.close();
      });
  }


function editarElemento(id, inputElement){

    let indice = buscarElementoIndexOf(id);

    
    array[indice].nombre = inputElement.value; 
   
      
    //let indice = buscarElementoIndexOf(id);

    mostrarLista();

}


    
//muestra todos los elementos del array
function mostarArray () {
    
    let j = 0;
    while(j < array.length){
        //let elemento = array.shift();
        
        console.log(array[j]);
        j++;
    }
    
}

function limpiarHTML(){
    const divEmpleados = document.querySelector('.div-empleados');
    
    //mientras el div empleados tenga hijos los eliminara de a uno
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }

}

function buscarElementoIndexOf(id){
    
    

    //console.log(numero);
    let indice = array.findIndex(elemento => elemento.id == id);
    //console.log("el numero fue encontrado en la pocision: ", indice);
    
    
    return indice;
}



//uso esta
function eliminarElemento(id){

    let indice = buscarElementoIndexOf(id);
    
    //console.log("encontrado en indice:",x);

    if (indice !== -1) {
        // Utilizar splice para eliminar el elemento en el índice encontrado
        array.splice(indice, 1);
        //console.log("Elemento eliminado:", elementoAEliminar);
    } else {
        console.log("El elemento no existe en el array.");
    }

    mostrarLista();
}


//no uso esta
function eliminarPersona(id){

    array = array.filter(empleado => empleado.id != id);
    
    limpiarHTML();
    mostrarLista();
}
/*


//-----------------------------------------------------------------
mostrar();
    
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
    listaEmpleados.push({...objetoEmpleado});

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

//---------------------------------------------------------pruebas 


const formulario = document.querySelector('#formulario-id'); 
var nombre = document.getElementById('nombre-id').value;

function mostrar(){

   
    console.log(nombre);
}







//---------------------------------------------------------
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

