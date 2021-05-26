/*Types of method in class--
    constructor
    prototype(instance method)
    static
*/
class Employee {
    constructor(givenName, givenSalary, givenEno) {
            this.name = givenName;
            this.salary = givenSalary;
            this.eno = givenEno;
        }
        //There should be only one constructor in a class.

    showData() {
        // instance method
        // no need to write function keyword in instance method.
        console.log(`The salary of ${this.name} with employee no ${this.eno} is ${this.salary}`);
    }

    static add(a, b) {
        //we can invoke static method with the help of CLASS only.
        //xccannot inherit static method.
        return a + b;
    }
}

// let Emp1 = new Employee("Ashish Garg", 10000, 1902194768);
// console.log(Emp1.salary);
// Emp1.showData();
// console.log(Employee.add(5, 2));


class Employee1 extends Employee {
    constructor(givenName, givenSalary, givenEno, givenJoiningDate) {
        super(givenName, givenSalary, givenEno);
        this.joiningDate = givenJoiningDate;
    }
    showData2() {
        return (`The salary of ${this.name} with employee no ${this.eno} is ${this.salary} and the joining date is ${this.joiningDate}`);
    }
}
let em = new Employee1('Mukul', 200000, 19021342, `12-08-1999`);
console.log(em.showData2())