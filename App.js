let array = [1, 2, 3, 4];

mostarArray(array);

function mostarArray (array) {
    
    
    while(array.length > 0){
        let elemento = array.shift();
        
        console.log(elemento);
    }
    
}

