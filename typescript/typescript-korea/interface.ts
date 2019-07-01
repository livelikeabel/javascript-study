interface IPerson {
    name: string;
    hello(): void;
}

class Person implements IPerson {
    name: string = null;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(this.name)
    }
    public hi(): void {
        console.log('hi')
    }
}

const person: IPerson = new Person('abel');

person.hello()