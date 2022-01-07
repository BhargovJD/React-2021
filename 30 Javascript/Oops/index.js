class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName = ()=>{
        return this.name;
    };

    getAge = ()=>{
        return this.age;
    };
}

let person1 = new Person("Bhargov", 25);
console.log(person1.getName());
console.log(person1.getAge());

let person2 = new Person("Das", 20);
console.log(person2.getName());
console.log(person2.getAge());


class House{
    constructor(address, price, residents){
        this.address = address;
        this.price = price;
        this.residents = residents;
    }

    getAddress = ()=>{
        return this.address;
    }

    getPrice = ()=>{
        return this.price;
    }

    getResidents = ()=>{
        return this.residents;
    }

    addResidents = (residents)=>{
        this.residents.push(residents)
    }

}


let Bhargov = new Person("bhargov",25);
let Das = new Person("das",20);

let House1 = new House("Number:01",25000,[Bhargov,Das]);
console.log(House1.getResidents());

let Paulo = new Person("Paulo",19)
House1.addResidents(Paulo);
console.log(House1.getResidents())

// Inheritance:
    class Programmer extends Person{
        constructor(name,age,company){
            super(name,age);

            this.company=company;
        }

        sayHi=()=>{
            console.log(`My name is ${this.name} and age is ${this.age}. I work for ${this.company}`);

        }
    }

    let programmer1 = new Programmer("Bhagrov",19,"Facebook")
    programmer1.sayHi();