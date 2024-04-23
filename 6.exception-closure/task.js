function parseCount(a){
    let num = Number.parseFloat(a);
    if(Number.isNaN(num)){
       throw new Error('Невалидное значение');
    }
    return num;
}

function validateCount(item){
    try{
        return parseCount(item);
    } catch(error){
        return error;
    }
}

class Triangle {
    constructor(a, b, c){
        if(a + b < c || b + c <a || c + a <b){
            throw new Error('Треугольник с такими сторонами не существует');
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter(){
        let perimtr = this.a + this.b + this.c;
        return perimtr;
    }
    get area(){
        let p = 0.5*(this.a + this.b + this.c);
        let area = Math.round(1000 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))/1000;
        return area; 
    }
}

function getTriangle(a, b, c){
    try{
        let triangle = new Triangle(a, b, c);
        return triangle;
    } 
    catch(error){
        let result = {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        }
        return result;
    }
}

