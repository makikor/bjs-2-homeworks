function parseCount(a){
    let num = Number.parseFloat(a);
    if(Number.isNaN(num)){
       throw new Error('Невалидное значение');
    }
    return num;
}

function validateCount(item){
    try{
        return parseCount(item)
    } catch(error){
        return error;
    }
}

class Triangle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

}
