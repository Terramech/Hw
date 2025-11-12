 //pr5


 // #1


 class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    //
    getFullName() {
        console.log(`${this.lastName} ${this.firstName}`);
    }
    //
    get age() {
       return this._age;
    };
    //
    set age(newAge) {
        if (newAge < 0 || newAge > 120) {
            console.error("Неправильное значение");
            return;
        }
        this._age = newAge;
    }
    //

    }
    let Mark = new Person("Mark", "Heathcliff", 19);
    Mark.getFullName();
    Mark.age = 23;
    let Adam = new Person("Adam", "Murray", 21);
 Adam.getFullName();
    Adam.age = 333;
    console.log(Adam);


    // #2


class Employee extends Person {
    constructor (firstName, lastName, age, position, salary) {
        super(firstName, lastName, age);
        this.position = position;
        this.salary = salary; // $
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    getFullName () {
        console.log(this.lastName, " ", this.firstName, ", position: ", this.position);
    }
}

let Thatcher = new Employee("Davis", "Thatcher", 26, "policeman", 3000);
Thatcher.getFullName();
console.log(Thatcher.getAnnualSalary(), "$");
Thatcher.age = 12;
let Dave = new Employee("Dave", "Lee", 31, "cashier", 2100);
Dave.getFullName();
Dave.age = 333;


    // #3


class Manager extends Employee {
    constructor(firstName, lastName, age, position, salary, teamSize) {
        super(firstName, lastName, age, position, salary);
        this._teamSize = teamSize;
    }
    get teamSize() {
        return this._teamSize;
    }
    set teamsize(newSize) {
        if (newSize <= 0) {
            console.error("can't be negative");
            return;
        }
        this._teamsize = newSize;
    }

}

let Johan = new Manager("johan", "toretto", 31, "manager", 4500, 4);
Johan.getFullName();
console.log(Johan.getAnnualSalary());
Johan.teamsize = 23
Johan.teamsize = -5

