let array = [1, 2, 3, 4];



    mostarArray(array);
    console.log("------------");
    agregarElementos(array);
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

    array.push(5);    


}