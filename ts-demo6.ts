class Person{
    readonly firstName:string
    readonly lastName:string
    age:number

    constructor(fname:string,lname:string,age:number){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }

    print():void{
        console.log(`Personal details :
            Name: ${this.firstName} ${this.lastName}
            age: ${this.age}`);
    }
}
class Employee extends Person{
    designation:string
    constructor(fname:string,lname:string,age:number,desg:string){
        super(fname,lname,age);
        this.designation = desg;
    }
}

let p1:Person= new Employee("Vijay","Mallya",68,"Manager");
p1.firstName="Siddharth";
p1.print();