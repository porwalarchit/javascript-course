class Pet{
    constructor(name, age){
        console.log('In Pet Constructor');
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        console.log('In Cat Constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'MEOWWWW!!'
    }
}

class Dog extends Pet{
    bark(){
        return 'WOOOOFF!!';
    }
    eat(){
        return `${this.name} dog is eating.`
    }
}