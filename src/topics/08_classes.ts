export class Person{
    public name :string;
    private address : string;

    constructor(){
        this.name = 'Gustavo';
        this.address='Peru';
    }
}

const aironman = new Person();

console.log(aironman);