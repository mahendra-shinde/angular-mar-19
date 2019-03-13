class Person{
    firstName:string
    lastName:string
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

let p1:Person= new Person("Vijay","Mallya",68);
p1.print();